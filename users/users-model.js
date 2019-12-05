const db = require('../data/db-config.js');

// const find = () => {
// 	return db('users').select('id', 'name');
// }

const add = (user) => {
	return db('users')
		.insert(user, 'id')
		.then(ids => {
			const [ id ] = ids;
			return findById(id);
		})
}

const findBy = (filter) => {
	return db('users')
		.where(filter)
		.first()
}

const findById = (id) => {
	return db('users')
		.where({ id })
		.first()
}

module.exports = {
	add,
	findById,
	findBy
}