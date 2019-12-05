const express = require('express');
const morgan = require('helmet');
const helmet = require('helmet');

const server = express();

server.use(helmet());
server.use(morgan('dev'));
server.use(express.json());

module.exports = server;