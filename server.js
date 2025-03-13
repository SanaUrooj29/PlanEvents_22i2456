const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const eventRoutes = require('./routes/eventRoutes');
const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/store')

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/events', eventRoutes);

app.listen(3000, () => console.log('Server running on port 3000'));