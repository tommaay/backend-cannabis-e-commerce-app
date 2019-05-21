const express = require('express');
const serverConfig = require('../middleware/serverConfig');
const server = express();
const errorHandler = require('../middleware/errorHandler');
serverConfig(server);

// importing routes
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');

// sanity check
server.get('/', (req, res) => {
    res.send('Sanity check passed!');
});

// routers
server.use('/api/users', userRoutes);
server.use('/api/products', productRoutes);

// default error handler
server.use(errorHandler);

module.exports = server;
