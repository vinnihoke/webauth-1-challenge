const express = require('express');

const Users = require('./users-model.js');

const router = express.Router();

const bcrypt = require('bcryptjs');



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

router.post('/register', async (req, res) => {
	let user = req.body;
	const hash = bcrypt.hashSync(user.password, 14);
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

router.post('/login', async (req, res) => {
	let { name, password } = req.headers 
	try {
		const item = await Users.findBy({ name }).first();
		if(item){
			res.status(200).json(item)
		} else {
			res.status(404).json({ message: "No user match" })
		}
	} catch (e) {
		res.status(500).json({ error: e.message });
	}
});

module.exports = router;