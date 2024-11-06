import { prisma } from '../../../../config/database.js';

const VerificationAttempt = {
    findByUserId: async (userId) => {
        return await prisma.verificationAttempt.findUnique({
            where: { userId },
        });
    },
    create: async (data) => {
        return await prisma.verificationAttempt.create({
            data,
        });
    },
};

export default VerificationAttempt;

