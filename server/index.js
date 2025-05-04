const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Importing files.
const dbConnect = require('./config/db.js');

// DB connection.
dotenv.config();
dbConnect();


const app = express();

// Middleware.
app.use(express.json());
app.use(cors());

// Routes 
app.use('/api/tasks', require('./routes/taskRoutes.js'));


// Start the server.
const PORT = process.env.PORT || 7001;
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
})