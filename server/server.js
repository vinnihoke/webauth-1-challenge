const express = require('express');
const morgan = require('helmet');
const helmet = require('helmet');

const UserRouter = require('../users/users-router.js');
const RestrictedRouter = require('../users/restricted-router.js');

const server = express();

server.use(helmet());
server.use(morgan('dev'));
server.use(express.json());
server.use('/api', UserRouter)
server.use('/api/restricted', RestrictedRouter)



module.exports = server;