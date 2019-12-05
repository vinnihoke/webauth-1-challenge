const db = require('../data/db-config.js');

const find = () => {
	return db('users').select('id', 'name');
}

const add = () => {
	return db('useres')
		.insert(user, 'id')
		.then(ids => {
			const [ id ] = ids;
			return findById(id);
		})
}

const findBy = (filter) => {
	return db('users')
		.select('id', 'name')
		.where(filter)
}

const findById = (id) => {
	return db('users')
		.select('id', 'name')
		.where({ id })
		.first()
}

module.exports = {
	add,
	find,
	findById,
	findBy
}