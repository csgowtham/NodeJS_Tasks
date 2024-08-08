// index.js
const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const mentorRoutes = require('./routes/mentorRoutes.js');
const studentRoutes = require('./routes/studentRoutes.js');

const app = express();
connectDB();

app.use(bodyParser.json());
app.use('/api', mentorRoutes);
app.use('/api', studentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
