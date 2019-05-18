const express = require('express');
const middleware = require('../middleware/mwConfig');
const server = express();

middleware(server);

server.get('/', (req, res) => {
    res.send('Sanity check passed!');
});

module.exports = server;
