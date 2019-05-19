const express = require('express');
const middleware = require('../middleware/serverConfig');
const server = express();
const usersModel = require('../data/model/usersModel');
const errorHandler = require('../middleware/errorHandler');

middleware(server);

server.get('/', (req, res) => {
    res.send('Sanity check passed!');
});

server.get('/users', async (req, res, next) => {
    try {
        const users = usersModel.getAll();
        res.status(200).json(users);
    } catch (err) {
        next(err);
    }
});

server.use(errorHandler);

module.exports = server;
