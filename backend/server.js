const express = require('express');
const app = express();
const salesRoutes = require('./routes/salesRoutes');

// Middleware
app.use(express.json());

// Routes
app.use('/api/sales', salesRoutes);

// Server
app.listen(5000, () => console.log('Server running on port 5000'));
