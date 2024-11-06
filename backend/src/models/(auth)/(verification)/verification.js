import { prisma } from '../../../../config/database.js'; 

export const VerificationCodeSchema = {
    create: async (data) => {
        return await prisma.verificationCode.create({
            data,
        });
    },
    findByUserId: async (userId) => {
        return await prisma.verificationCode.findMany({
            where: { userId },
        });
    },
    deleteExpired: async () => {
        const now = new Date();
        return await prisma.verificationCode.deleteMany({
            where: {
                expiresAt: {
                    lt: now,
                },
            },
        });
    },
};

export const VerificationAttemptSchema = {
    create: async (data) => {
        return await prisma.verificationAttempt.create({
            data,
        });
    },
    incrementAttempt: async (userId) => {
        return await prisma.verificationAttempt.update({
            where: { userId },
            data: {
                attempts: { increment: 1 },
                lastAttempt: new Date(),
            },
        });
    },
    resetAttempts: async (userId) => {
        return await prisma.verificationAttempt.update({
            where: { userId },
            data: {
                attempts: 0,
                lastAttempt: null,
                cooldownEnd: null,
            },
        });
    },
};


