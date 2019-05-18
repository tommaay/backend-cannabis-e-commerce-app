require('dotenv').config();

const server = require('./api/server');

// if process.env.PORT is undefined, port = 5000
port = process.env.PORT || 5000;

server.listen(port, () => console.log(`Server running on port: ${port}`));
