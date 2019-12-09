const express = require('express');

const Users = require('./users-model.js');

const router = express.Router();

const bcrypt = require('bcryptjs');



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

// Operational
router.post('/login', async (req, res) => {
	let { name, password } = req.body 
	try {
		const user = await Users.findBy({ name }).first()
		if(user && bcrypt.compareSync(password, user.password)){
			req.session.user = user;
			res.status(200).json({ message: `Logged in`, uid: user.id })
		} else {
			res.status(404).json({ message: "You shall not pass!" })
		}
	} catch (e) {
		res.status(500).json({ error: e.message });
	}
});

router.get('/logout', async (req, res) => {
	if(req.session){
		req.session.destroy(err => {
			err ? res.status(400) : res.status(202).end()
		})
	} else {
		res.status(200).json({ message: "Not signed in." })
	}
})

module.exports = router;