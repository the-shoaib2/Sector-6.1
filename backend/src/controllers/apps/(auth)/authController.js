import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import asyncHandler from '../../../../utils/asyncHandler.js';
import apiError from '../../../../utils/apiError.js';
import apiResponse from '../../../../utils/apiResponse.js';
import { prisma } from '../../../../config/database.js';
import { generateTokens, refreshAccessToken, setAuthCookies } from './tokenController.js';
import { sendWelcomeEmail } from '../../../helpers/(auth)/(verification)/emailEventHandler/welcomeEmailHelpers.js';
import { handleEmailEvent } from '../../../helpers/(auth)/(verification)/emailEventHandler/emailEventHandler.js';
import { ACCOUNT_EXPIRY_DAYS, BCRYPT_SALT_ROUNDS } from '../../../../constants.js';



/**
 * @description Handles user signup
 * @param {Object} req - The request object containing user details
 * @param {Object} res - The response object to send the response
 * @returns {Promise<void>}
 */
export const signup = asyncHandler(async (req, res) => {
    const { firstName, lastName, email, phone, password, dob, gender } = req.body;

    try {
        // Check if user with the provided email already exists
        const existingUserByEmail = await prisma.user.findUnique({ where: { email } });
        if (existingUserByEmail) {
            return res.status(400).json({ message: 'User with this email already exists, you can login' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, BCRYPT_SALT_ROUNDS);

        // Create new user using Prisma
        const newUser = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                accountExpiryDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), 
            }
        });

        // Create UserProfile after user creation
        await prisma.userProfile.create({
            data: {
                userId: newUser.id, 
                firstName,
                lastName,
                phone,
                dob: new Date(`${dob.year}-${dob.month}-${dob.day}`),
                gender,
            }
        });

        // Send welcome email asynchronously
        sendWelcomeEmail(newUser.email).catch(err => console.error('Failed to send welcome email:', err));

        // Generate tokens
        const tokens = await generateTokens(newUser);

        // Respond with success
        res.status(201).json({
            message: "Signup successful! Please verify your email.",
            success: true,
            name: `${firstName} ${lastName}`,
            email: newUser.email,
            ...tokens,
            accountExpiryDate: newUser.accountExpiryDate,
        });
    } catch (err) {
        console.error(err);
        throw new apiError(500, err.message || "Internal server error");
    }
});

/**
 * @description Handles user login
 * @param {Object} req - The request object containing login credentials
 * @param {Object} res - The response object to send the response
 * @returns {Promise<void>}
 */
export const login = asyncHandler(async (req, res) => {
    try {
        const { emailOrUsername, password } = req.body;
        const trimmedInput = emailOrUsername.trim();

        const user = await prisma.user.findUnique({
            where: { email: trimmedInput },
            include: { userProfile: true }  
        });

        if (!user || !user.userProfile) {  
            throw apiError.unauthorized('Invalid email or username');
        }

        const isPassEqual = await bcrypt.compare(password, user.password);
        if (!isPassEqual) {
            throw apiError.unauthorized('Incorrect password');
        }

        // Update the last login time
        await prisma.user.update({
            where: { id: user.id },
            data: { lastLogin: new Date() }
        });

        // Generate tokens
        const tokens = await generateTokens(user);
        const { accessToken, refreshToken } = tokens;

        // Save refresh token in the user document
        await prisma.user.update({
            where: { id: user.id },
            data: { refreshToken }
        });

        // console.log("Token:", tokens);

        // Set cookies using the helper function
        setAuthCookies(res, accessToken, refreshToken);

        // Send login email
        handleEmailEvent('login', user.email).catch(err => console.error('Failed to send login email:', err));

        res
            .status(200)
            .json({
                message: "Login successful! Welcome back.",
                success: true,
                name: `${user.userProfile.firstName} ${user.userProfile.lastName}`,
                isActive: user.isActive,
                ...tokens,
                accountExpiryDate: user.accountExpiryDate,
                isEmailVerified: user.isEmailVerified,
                is2FAEnabled: user.is2FAEnabled,
            });
    } catch (err) {
        throw new apiError(500, err.message || "Internal server error");
    }
});

/**
 * @description Handles user logout
 * @param {Object} req - The request object containing user session data
 * @param {Object} res - The response object to send the response
 * @returns {Promise<void>}
 */
export const logout = asyncHandler(async (req, res) => {
    try {
        const refreshToken = req.cookies?.refreshToken || req.body.refreshToken;

        if (!refreshToken) {
            throw apiError.badRequest('No refresh token provided');
        }

        const decodedToken = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
        
        const user = await prisma.user.findFirst({
            where: {
                OR: [
                    { id: decodedToken.id },
                    { email: decodedToken.email }
                ]
            }
        });

        if (!user) {
            throw apiError.unauthorized('User not found');
        }

        // Remove the refresh token from the user document
        await prisma.user.update({
            where: { 
                id: user.id
            },
            data: {
                refreshToken: null
            }
        }); 

        const options = {
            httpOnly: true,
            secure: true,
            sameSite: 'Strict',
            path: '/',
        };

        // Send logout email
        handleEmailEvent('logout', user.email).catch(err => console.error('Failed to send logout email:', err));

        return res
            .status(200)
            .clearCookie("accessToken", options)
            .clearCookie("refreshToken", options)
            .json(new apiResponse(200, {}, "Logout successfully."));
    } catch (err) {
        throw new apiError(500, err.message || "Internal server error");
    }
});

/**
 * @description Deletes a user account
 * @param {Object} req - The request object containing user ID
 * @param {Object} res - The response object to send the response
 * @returns {Promise<void>}
 */
export const deleteUser = asyncHandler(async (req, res) => {
    try {
        const { id } = req.params;
        const user = await prisma.user.findUnique({ where: { id } });


        if (!user) {
            return res.status(404).json({ message: 'User not found', success: false });
        }

        const deletedUser = await prisma.user.delete({
            where: { id }
        });

        // Send delete user email
        handleEmailEvent('deleteUser', user.email).catch(err => console.error('Failed to send delete user email:', err));

        res.status(200).json({
            message: 'User deleted successfully',
            success: true,
            deletedUser: {
                originalUserId: deletedUser.id,
                user_id: deletedUser.id,
                deletionCount: deletedUser.deletionCount
            }
        });
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ message: 'Internal server error', success: false });
    }
});

/**
 * @description Searches for deleted accounts based on a search term
 * @param {Object} req - The request object containing the search term
 * @param {Object} res - The response object to send the response
 * @returns {Promise<void>}
 */
export const searchDeletedAccounts = asyncHandler(async (req, res) => {
    try {
        const { searchTerm } = req.body;

        const deletedUsers = await prisma.user.findMany({ where: { deletedAt: { not: null } } });

        const searchResults = fuzzySearch(searchTerm, deletedUsers, ['firstName', 'lastName', 'email', 'username', 'phone']);

        if (searchResults.length === 0) {
            return res.status(404).json({ message: 'No matching deleted accounts found', success: false });
        }

        const matchedAccounts = searchResults.map(result => ({
            id: result.id,
            name: `${result.firstName} ${result.lastName}`,
            email: result.email,
            username: result.username,
            phone: result.phone
        }));

        res.status(200).json({
            message: 'Matching deleted accounts found',
            success: true,
            accounts: matchedAccounts
        });
    } catch (error) {
        console.error('Error searching deleted accounts:', error);
        res.status(500).json({ message: 'Internal server error', success: false });
    }
});

/**
 * @description Recovers a deleted user account
 * @param {Object} req - The request object containing the ID of the deleted user
 * @param {Object} res - The response object to send the response
 * @returns {Promise<void>}
 */
export const recoverAccount = asyncHandler(async (req, res) => {
    try {
        const { id } = req.body;

        const deletedUser = await prisma.user.findUnique({ where: { id } });

        if (!deletedUser) {
            return res.status(404).json({ message: 'No deleted account found with this ID', success: false });
        }

        const recoveredUser = new UserModel({
            firstName: deletedUser.firstName,
            lastName: deletedUser.lastName,
            email: deletedUser.email,
            phone: deletedUser.phone,
            password: deletedUser.password,
            dob: deletedUser.dob,
            gender: deletedUser.gender,
            username: deletedUser.username,
            accountExpiryDate: new Date(Date.now() + ACCOUNT_EXPIRY_DAYS * 24 * 60 * 60 * 1000) // 15 days from now
        });

        await prisma.user.create({ data: recoveredUser });

        await prisma.user.delete({ where: { id } });

        const tokens = await generateTokens(recoveredUser);

        // Send recover account email
        handleEmailEvent('recoverAccount', recoveredUser.email).catch(err => console.error('Failed to send recover account email:', err));

        return res.status(200).json(
            new apiResponse(200, {
                name: `${recoveredUser.firstName} ${recoveredUser.lastName}`,
                email: recoveredUser.email,
                username: recoveredUser.username,
                ...tokens
            }, 'Account recovered successfully')
        );
    } catch (error) {
        console.error('Error recovering account:', error);
        res.status(500).json({ message: 'Internal server error', success: false });
    }
});

export default {
    signup,
    login,
    logout,
    refreshAccessToken,
    deleteUser,
    searchDeletedAccounts,
    recoverAccount,
};
