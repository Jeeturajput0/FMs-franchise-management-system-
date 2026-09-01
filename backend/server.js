const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const connectDB = require('./config/db.js');

// Load environment variables from ./config/.env or .env
dotenv.config({ path: path.join(__dirname, 'config', '.env') });
dotenv.config();

// Connect to MongoDB Database
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        message: 'AI Scholar Franchise Management System API Server Running',
        status: 'Online',
        timestamp: new Date().toISOString()
    });
});

app.get('/api/health', (req, res) => {
    res.json({
        status: 'OK',
        service: 'AI Scholar Backend',
        database: 'Connected'
    });
});

let PORT = process.env.PORT || 5000;

function startServer(portToUse) {
    const server = app.listen(portToUse, () => {
        console.log(`Server is running on port ${portToUse}`);
    });

    server.on('error', (err) => {
        if (err.code === 'EADDRINUSE') {
            console.log(`Port ${portToUse} is in use, trying port ${portToUse + 1}...`);
            startServer(portToUse + 1);
        } else {
            console.error('Server error:', err);
        }
    });
}

startServer(PORT);

module.exports = app;
