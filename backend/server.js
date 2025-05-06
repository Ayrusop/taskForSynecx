const express = require('express');
const app = express();
const cors = require('cors');
const salesRoutes = require('./routes/salesRoutes');
const inventoryRoutes = require('./routes/inventoryRoutes');
const customerRoutes = require('./routes/customerRoutes');
const orderRoutes = require('./routes/orderRoutes');
const productRoutes = require('./routes/productRoutes');
const expenseRoutes = require('./routes/expenseRoutes');
// Middleware
app.use(express.json());
app.use(cors());
// app.use(cors({
//     origin: 'http://localhost:3000'
//   }));
// Routes
app.use('/api/sales', salesRoutes);
app.use('/api/inventory', inventoryRoutes);
app.use('/api/customers', customerRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/product', productRoutes);
app.use('/api/expense', expenseRoutes);
// Server
app.listen(5000, () => console.log('Server running on port 5000'));
