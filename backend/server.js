// backend/index.js

// Importing required modules
import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import http from 'http';
import { Server } from 'socket.io';

// Load environment variables
dotenv.config();

import './config/database.js';

// Set up the server
const app = express();
const PORT = process.env.DEFAULT_PORT || 8080; 
const server = http.createServer(app);
const io = new Server(server); 

import authRouter from './src/(auth)/routes/authRouter.js';






// Ping Route
app.get('/ping', (req, res) => {
    res.send('Server is Running... 🚀');
});

// Middlewares
app.use(express.json());
app.use(cookieParser());

// Middleware to log all operations (requests and responses)
app.use((req, res, next) => {
    console.clear(); 
    const start = Date.now();
    
    // Log the request details
    // console.log(`Request: ${req.method} ${req.url} - Body: ${JSON.stringify(req.body)}`);

    // Capture the original send method
    const originalSend = res.send.bind(res);
    
    // Override the send method to log the response
    res.send = function (body) {
        const duration = Date.now() - start;
        // console.log(`Response: ${res.statusCode} - Duration: ${duration}ms - Body: ${body}`);
        return originalSend(body);
    };

    next();
});

// Global error handler
app.use((err, req, res, next) => {
    console.error(`Error: ${err.message}`);
    res.status(500).send('Internal Server Error');
});

// Define routes
const routes = [
   
    { path: '/auth', router: authRouter },
  
];

// Use routes
routes.forEach(({ path, router }) => {
    if (path) {
        app.use(path, router);
    } else {
        console.warn(`Warning: Route for ${router.name} is not defined in environment variables.`);
    }
});



// Start the server
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}..☘️`);
});
