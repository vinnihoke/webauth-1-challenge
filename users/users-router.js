const express = require('express');

const Users = require('./users-model.js');

const router = express.Router();

const bcrypt = require('bcryptjs');

// Operational
router.get('/users', async (req, res) => {
	try {
		const item = await Users.find();
		if(item){
			res.status(200).json(item)
		} else {
			res.status(404).json({ message: "No users" })
		}
	} catch (e) {
		res.status(500).json({ error: e.message });
	}
});

// Operational
router.post('/register', async (req, res) => {

	// Grab user from req.body
	let user = req.body;

	// Hash the user password
	const hash = bcrypt.hashSync(user.password, 14);

	// Add hashed password as user.password
	user.password = hash;

	try {
		const item = await Users.add(user);
		if(item){
			res.status(200).json(item)
		} else {
			res.status(404).json({ message: "Provide credentials" })
		}
	} catch (e) {
		res.status(500).json({ error: e.message });
	}
});

// Operationa
router.post('/login', async (req, res) => {
	let { name, password } = req.body 
	try {
		const currentUser = await Users.findBy({ name }).first()
		if(currentUser && bcrypt.compareSync(password, currentUser.password)){
			res.status(200).json({ message: `Logged in`, uid: currentUser.id })
		} else {
			res.status(404).json({ message: "You shall not pass!" })
		}
	} catch (e) {
		res.status(500).json({ error: e.message });
	}
});

module.exports = router;