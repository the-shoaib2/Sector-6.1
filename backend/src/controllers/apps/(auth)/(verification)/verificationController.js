
import bcrypt from "bcrypt";
//utils
import asyncHandler from '../../../../../utils/asyncHandler.js';
import apiError from '../../../../../utils/apiError.js';
import apiResponse from '../../../../../utils/apiResponse.js';
//helpers
import VerificationService from '../../../../helpers/(auth)/(verification)/verificationHelpers.js';
import { sendVerificationEmail } from '../../../../helpers/(auth)/(verification)/emailEventHandler/verificationCodeEmailHelpers.js';
import { sendConfirmedAccountEmail } from '../../../../helpers/(auth)/(verification)/emailEventHandler/welcomeEmailHelpers.js'; 


// Import the constants
import {
    VERIFICATION_CODE_LENGTH,
    VERIFICATION_CODE_EXPIRY,
    MAX_VERIFICATION_ATTEMPTS,
    VERIFICATION_COOLDOWN_PERIOD,
    ACCOUNT_LOCK_DURATION,
    BCRYPT_SALT_ROUNDS
} from '../../../../../constants.js'; 

// Wrap each controller function with asyncHandler
export const findUserForgotPassword = asyncHandler(async (req, res) => {
    try {
        const { emailOrUsername } = req.body;

        // Search by email or username
        const user = await User.findOne({
            $or: [
                { email: emailOrUsername },
                { username: emailOrUsername }
            ]
        });

        if (!user) {
            throw apiError.notFound('User not found');
        }

        // Concatenate first and last name
        const fullName = `${user.first_name} ${user.last_name}`;

        return res.status(200).json(
            new apiResponse(200, {
                user: {
                    name: fullName,
                    email: user.email,
                    username: user.username,
                    avatar: user.profilePicture
                }
            }, 'User found')
        );
    } catch (err) {
        console.error('Find User Error:', err);
        res.status(500).json(apiError.internalError());
    }
});

// Send OTP to user
export const sendOtp = asyncHandler(async (req, res) => {
    try {
        const { email } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json(apiError.notFound('User not found.'));
        }

        const isLocked = await VerificationService.checkLockStatus(user._id);
        if (isLocked) {
            return res.status(403).json(apiError.forbidden('Account is temporarily locked. Please try again later.'));
        }

        const cooldownPeriod = await VerificationService.getCooldownPeriod(user._id);

        if (cooldownPeriod > 0) {
            return res.status(429).json(apiError.tooManyRequests('Too many attempts. Please try again later.'));
        }

        const code = await VerificationService.generateVerificationCode(user._id, VERIFICATION_CODE_LENGTH, VERIFICATION_CODE_EXPIRY);
        await VerificationService.incrementAttempts(user._id);

        // Send the code to the user's email
        await sendVerificationEmail(email, code); // Call the email sending function

        console.log(`Verification code for ${email}: ${code}`);
        res.status(200).json(new apiResponse(200, { code }, 'Verification code sent successfully'));
    } catch (err) {
        res.status(500).json(apiError.internalError());
    }
});

// Verify OTP provided by user
export  const verifyOtp = asyncHandler(async (req, res) => {
    try {
        const { email, otp } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json(apiError.notFound('User not found.'));
        }

        // In the verifyOtp function, you might want to pass MAX_VERIFICATION_ATTEMPTS to the VerificationService:
        await VerificationService.validateVerificationCode(user._id, otp, MAX_VERIFICATION_ATTEMPTS);

        // Reset attempts after successful verification
        await VerificationService.resetAttempts(user._id);

        // Update user's isActive status
        user.isActive = true;
        await user.save();

        // Send confirmation email
        await sendConfirmedAccountEmail(email); // Call the function here
         
        res.status(200).json(new apiResponse(200, { isActive: true }, 'Your account is now activated successfully.'));
    } catch (err) {
        console.error('Verify Verification code Error:', err);
        res.status(400).json(apiError.badRequest(err.message));
    }
});

// Reset user password
export  const resetPassword = asyncHandler(async (req, res) => {
    try {
        const { email, newPassword } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json(apiError.notFound('User not found.'));
        }

        // Hash the new password before saving
        const hashedPassword = await bcrypt.hash(newPassword, BCRYPT_SALT_ROUNDS);
        user.password = hashedPassword;
        await user.save();

        res.status(200).json(new apiResponse(200, null, 'Password reset successfully'));
    } catch (err) {
        console.error('Reset Password Error:', err);
        res.status(500).json(apiError.internalError());
    }
});

// Verify user's email
export const verifyEmail = asyncHandler(async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        if (!user || user.isActive) return res.status(400).json(apiError.badRequest('User not found or already active.'));

        // Update user's isActive status
        user.isActive = true;
        await user.save();

        // Send confirmation email
        await sendConfirmedAccountEmail(user.email); 

        res.status(200).json(new apiResponse(200, null, 'Email verified successfully'));
    } catch (err) {
        res.status(500).json(apiError.internalError());
    }
});


export default {
    findUserForgotPassword,
    sendOtp,
    verifyOtp,
    resetPassword,
    verifyEmail
};
