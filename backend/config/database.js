import { PrismaClient } from '@prisma/client';
import asyncHandler from '../utils/asyncHandler.js';

// Create a single instance of PrismaClient
const prisma = new PrismaClient();

/**
 * @description Connect to the database and log the connection status.
 * @returns {Promise<void>}
 * @throws {Error} If the database connection fails
 */
export const DatabaseInstance = asyncHandler(async () => {
    try {
        await prisma.$connect();
        console.log('Database connected successfully. 💾');
    } catch (error) {
        console.error('Database connection error: 💥', error);
        process.exit(1);
    }
});

DatabaseInstance();

/**
 * @description Check the health of the database connection.
 * @returns {Promise<boolean>} - Returns true if the connection is healthy, false otherwise.
 * @throws {Error} If the database connection health check fails
 */
export const checkDatabaseHealth = asyncHandler(async    () => {
    try {
        await prisma.$queryRaw`SELECT 1`; 
        console.log('Database connection is healthy. ✅');
        return true;
    } catch (error) {
        console.error('Database connection health check failed: 💥', error);
        return false;
    }
});

checkDatabaseHealth();

export { prisma };
