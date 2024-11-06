// Importing required modules
import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import http from 'http';
import { Server } from 'socket.io';
// import { connectKafka, disconnectKafka } from './config/kafka.js'; // Import Kafka functions

import { app, errorHandler } from './index.js';

// Load environment variables
dotenv.config();

import './config/database.js';

// Set up the server
const PORT = process.env.DEFAULT_PORT || 8080; 
const server = http.createServer(app);
const io = new Server(server); 

// Middleware setup
app.use(express.json());   
app.use(cookieParser());

// Middleware to log all operations (requests and responses)
app.use((req, res, next) => {
    console.clear(); 
    const start = Date.now();
    
    const originalSend = res.send.bind(res);
    
    res.send = function (body) {
        const duration = Date.now() - start;
        console.log(`Response: ${res.statusCode} - Duration: ${duration}ms - Body: ${JSON.stringify(body).substring(0, 100)}`);
        return originalSend(body);
    };

    next();
});

// Ping Route
app.get('/ping', (req, res) => {
    res.send('<html><body><h1> <div style="color: green; text-align: center; display: flex; justify-content: center; align-items: center; height: 100vh;"> 🚀...Server is Running... 🚀</div></h1></body></html>');
});

// Use the errorHandler middleware
app.use(errorHandler);

// Connect to Kafka
// connectKafka().catch(error => {
//     console.error('Failed to connect to Kafka:', error);
//     process.exit(1); // Exit the process if Kafka connection fails
// });

// Disconnect Kafka on server close
process.on('SIGINT', async () => {
    // await disconnectKafka();
    process.exit(0);
});

// Start the server
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}   ..☘️`);
});
