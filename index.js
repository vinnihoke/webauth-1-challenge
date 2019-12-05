require('dotenv').config();

const server = require('./server/server.js');

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
	console.log( `::: Server listening at http://localhost:${PORT} :::` )
})