import VerificationAttempt from '../Models/VerificationAttempt.js';
import VerificationCode from '../Models/Verification.js'; 
import ApiError from '../../../utils/ApiError.js';
import { MAX_VERIFICATION_ATTEMPTS, VERIFICATION_COOLDOWN_PERIOD, ACCOUNT_LOCK_DURATION, VERIFICATION_CODE_LENGTH, VERIFICATION_CODE_EXPIRY } from '../../../../constants.js';
import { connectToDatabase } from '../../../config/database.js';
const prisma = connectToDatabase();




export const getVerificationAttempts = async (userId) => {
    let attempt = await prisma.verificationAttempt.findUnique({ where: { userId } });
    if (!attempt) {
        attempt = new VerificationAttempt({ userId });
        await attempt.save();
    }
    return attempt;
};

export const incrementAttempts = async (userId) => {
    const attempt = await getVerificationAttempts(userId);
    await attempt.incrementAttempt();
    
    if (attempt.attempts >= 9) {
        await lockAccount(userId);
    } else if (attempt.attempts >= MAX_VERIFICATION_ATTEMPTS) {
        await setCooldown(userId);
    }
};

export const setCooldown = async (userId) => {
    const attempt = await getVerificationAttempts(userId);
    attempt.cooldownEnd = new Date(Date.now() + VERIFICATION_COOLDOWN_PERIOD);
    await attempt.save();
};

export const lockAccount = async (userId) => {
    const user = await User.findById(userId);
    user.isLocked = true;
    user.lockExpiresAt = new Date(Date.now() + ACCOUNT_LOCK_DURATION);
    await user.save();
};

export const checkLockStatus = async (userId) => {
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (user.isLocked && user.lockExpiresAt > new Date()) {
        return true;
    } else if (user.isLocked) {
        user.isLocked = false;
        user.lockExpiresAt = null;
        await user.save();
    }
    return false;
};

export const resetAttempts = async (userId) => {
    const attempt = await getVerificationAttempts(userId);
    await attempt.resetAttempts();
};

export const getCooldownPeriod = async (userId) => {
    const attempt = await getVerificationAttempts(userId);
    if (attempt.cooldownEnd && attempt.cooldownEnd > new Date()) {
        return Math.ceil((attempt.cooldownEnd - new Date()) / 1000);
    }
    return 0;
};

export const generateVerificationCode = async (userId) => {
    const codeLength = VERIFICATION_CODE_LENGTH;
    const code = Math.floor(10 ** (codeLength - 1) + Math.random() * 9 * 10 ** (codeLength - 1)).toString();
    const expiresAt = new Date(Date.now() + VERIFICATION_CODE_EXPIRY * 60 * 1000); // Default to 10 minutes

    const newVerificationCode = new VerificationCode({
        userId,
        code,
        expiresAt
    });

    await newVerificationCode.save();
    return code;
};

export const validateVerificationCode = async (userId, code) => {
    const verificationCode = await prisma.verificationCode.findUnique({ 
        where: { 
            userId, 
            code, 
            expiresAt: { $gt: new Date() } 
        }
    });

    if (!verificationCode) {
        throw ApiError.badRequest('Invalid or expired verification code');
    }

    verificationCode.verified = true;
    await verificationCode.save();
};

export default {
    getVerificationAttempts,
    incrementAttempts,
    resetAttempts,
    getCooldownPeriod,
    generateVerificationCode,
    setCooldown,
    lockAccount,
    checkLockStatus,
    validateVerificationCode
};
