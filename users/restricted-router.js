const express = require('express');

const RestrictedModel = require('./restricted-model.js');

const router = express.Router();

const restricted = require('../server/middleware.js');


// Operational
router.get('/users', restricted, async (req, res) => {
	try {
		const users = await RestrictedModel.find();
		if(users){
			res.status(200).json(users)
		} else {
			res.status(404).json({ message: "No users" })
		}
	} catch (e) {
		res.status(500).json({ error: e.message });
	}
});

module.exports = router

