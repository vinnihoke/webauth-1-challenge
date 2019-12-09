const express = require('express');
const morgan = require('helmet');
const helmet = require('helmet');
const session = require('express-session');

const UserRouter = require('../users/users-router.js');
const RestrictedRouter = require('../users/restricted-router.js');

// Config
const server = express();
const sessionConfig ={
	name: 'webauth-2',
	secret: 'not a doctor',
	cookie: {
		maxAge: 1000 * 10, // Cookie lasts 10 seconds
		secure: false, // Must be true for production
		httpOnyl: true,
	},
	resave: false,
	saveUninitialized: false, // This is required by GDPR to be false initially.
}

// Middleware
server.use(helmet());
server.use(morgan('dev'));
server.use(express.json());
server.use(session(sessionConfig));



// Routing
server.use('/api', UserRouter)
server.use('/api/restricted', RestrictedRouter)



module.exports = server;