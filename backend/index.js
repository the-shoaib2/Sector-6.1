import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
    
import authRouter from './src/(auth)/routes/authRouter.js';

dotenv.config();

const router = express();

router.use(cors());
router.use(express.json());

router.use(authRouter);

export default router;

