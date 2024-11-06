// VerificationRouter.js

import { findUserForgotPassword, sendOtp, verifyOtp, resetPassword } from '../../../../controllers/apps/(auth)/(verification)/verificationController.js';
import {
    searchUserValidation,
    sendOtpValidation,
    verifyOtpValidation,
    resetPasswordValidation,
} from '../../../../middlewares/apps/(auth)/(verification)/verificationMiddleware.js';

import { Router } from 'express'; 
const router = Router();

// Route to find user for password reset
router.post("/find-user", searchUserValidation, findUserForgotPassword);
router.post("/verification-code", sendOtpValidation, sendOtp);
router.post("/verify-code", verifyOtpValidation, verifyOtp);
router.post("/reset-password", resetPasswordValidation, resetPassword);

export default router;



