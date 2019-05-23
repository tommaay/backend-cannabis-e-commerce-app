const express = require('express');
const serverConfig = require('../middleware/serverConfig');
const server = express();
const errorHandler = require('../middleware/errorHandler');
serverConfig(server);

// importing routes
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const typeRoutes = require('./routes/typeRoutes');
const specRoutes = require('./routes/specRoutes');
const orderRoutes = require('./routes/orderRoutes');
const productOrderRoutes = require('./routes/productOrderRoutes');
const paymentRoutes = require('./routes/paymentRoutes');

// sanity check
server.get('/', (req, res) => {
    res.send('Sanity check passed!');
});

// routers
server.use('/api/users', userRoutes);
server.use('/api/products', productRoutes);
server.use('/api/categories', categoryRoutes);
server.use('/api/types', typeRoutes);
server.use('/api/specs', specRoutes);
server.use('/api/orders', orderRoutes);
server.use('/api/product-orders', productOrderRoutes);
server.use('/api/payments', paymentRoutes);

// default error handler
server.use(errorHandler);

module.exports = server;
