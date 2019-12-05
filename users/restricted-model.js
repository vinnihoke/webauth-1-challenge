const db = require('../data/db-config.js');

const find = () => {
	return db('users').select('id', 'name');
}

module.exports = { find }

