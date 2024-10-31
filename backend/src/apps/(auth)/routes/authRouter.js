// backend/Routes/AuthRouter.js

import { signup, login, logout, deleteUser } from "../controllers/authController.js";
import { signupValidation, loginValidation } from "../middlewares/authValidation.js";
import { refreshAccessToken } from "../controllers/tokenController.js";
import ensureAuthenticated from '../middlewares/auth.js';
import rateLimit from 'express-rate-limit';
import { Router } from "express"; 
const router = Router(); 

// Rate limiting middleware
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again later.'
});

// Define routes
router.post('/signup', limiter,  signup);
router.post('/login', limiter,  login);
router.post('/logout', limiter, logout);
router.delete('/delete-user', limiter, ensureAuthenticated, deleteUser);

// Add verification and refresh token routes
router.post('/verify-token', limiter, ensureAuthenticated); 
router.post('/refresh-token', limiter, refreshAccessToken);

export default router; 
