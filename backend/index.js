import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet'; 
import authRouter from './src/routes/apps/(auth)/authRouter.js';
import healthcheckRouter from './src/routes/healthcheck.routes.js'; 
import userRouter from './src/routes/apps/(user)/usersRouter.js'; 
import verificationRouter from './src/routes/apps/(auth)/(verification)/verificationRouter.js';
import { errorHandler } from './src/middlewares/error.middlewares.js';

dotenv.config();

const app = express();

// Middlewares
app.use(helmet());
app.use(express.json());
app.use(cookieParser());
app.use(cors());

// Define routes
const routes = [
    { path: '/auth', router: authRouter },
    { path: '/healthcheck', router: healthcheckRouter },
    { path: '/users', router: userRouter },
    { path: '/verification', router: verificationRouter },
];

// Use routes
routes.forEach(({ path, router }) => {
    if (path && typeof router === 'function') {
        app.use(path, router);
    } else {
        console.warn(`Warning: Route for ${router ? router.name : 'undefined'} is not defined correctly.`);
    }
});

// Use the errorHandler middleware
app.use(errorHandler);

// Export the app and error handler
export { app, errorHandler };
