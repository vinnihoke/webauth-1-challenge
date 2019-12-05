const bcrypt = require('bcryptjs');

const Users = require('../users/users-model.js');

const restricted = async (req, res, next) => {

	// ! MAKE SURE YOU HAVE ASYNC/AWAIT 

	const { name, password } = req.headers;
	if(name && password){
		try {
			const currentUser = await Users.findBy({ name })
			if(currentUser && bcrypt.compareSync(password, currentUser.password)){
				next()
			} else {
				res.status(401).json({ message: 'Invalid Credentials' });
			}
		} catch (e) {
			res.status(500).json({ error: e.message });
		}
		
	} else {
		res.status(401).json({ message: "Please provide valid credentials" });
	}
}

module.exports = restricted