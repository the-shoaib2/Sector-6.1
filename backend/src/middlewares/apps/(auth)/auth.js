import { prisma } from "../../../../config/database.js";
import apiError from "../../../../utils/apiError.js";
import asyncHandler from "../../../../utils/asyncHandler.js";
import jwt from "jsonwebtoken";



/**
 * @description Middleware to ensure the user is authenticated
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @param {Function} next - The next middleware function
 * @returns {Promise<void>}
 * @throws {apiError} If the user is not authenticated
 */
export const ensureAuthenticated = asyncHandler(async (req, _, next) => {
    try {
        // Extract cookies from the request
        const cookies = req.headers.cookie;
        if (!cookies) {
            throw new apiError(401, "No cookies found");
        }

        // Split cookies and find the access token
        const token = cookies.split('; ').find(cookie => cookie.startsWith('accessToken='));
        if (!token) {
            throw new apiError(401, "Unauthorized request");
        }

        // Extract the token value
        const accessToken = token.split('=')[1];

        // Verify the token
        const decodedToken = jwt.verify(accessToken, process.env.JWT_ACCESS_SECRET);
        console.log("Decoded Token in ensureAuthenticated:", decodedToken);

        const user = await prisma.user.findFirst({
            where: { 
                OR: [
                    { id: decodedToken.id },
                    { email: decodedToken.email }
                ]
            },
            select: {
                id: true, 
                email: true,
                password: false,
                refreshToken: false,
            }
        });

        if (!user) {
            throw new apiError(401, "Invalid Access Token");
        }

        req.user = user;
        next();
    } catch (error) {
        throw new apiError(401, error?.message || "Invalid access token");
    }
});


export default ensureAuthenticated;
