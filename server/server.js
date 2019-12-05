const express = require('express');
const morgan = require('helmet');
const helmet = require('helmet');

const UserRouter = require('../users/users-router.js');

const server = express();

server.use(helmet());
server.use(morgan('dev'));
server.use(express.json());
server.use('/api', UserRouter)



module.exports = server;