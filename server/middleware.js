const restricted = async (req, res, next) => {

	// ! MAKE SURE YOU HAVE ASYNC/AWAIT IF REQUIRED
	if(req.session && req.session.user){
		// try {
		// 	const currentUser = await Users.findBy({ name })
		// 	if(currentUser && bcrypt.compareSync(password, currentUser.password)){
		// 		next()
		// 	} else {
		// 		res.status(401).json({ message: 'Invalid Credentials' });
		// 	}
		// } catch (e) {
		// 	res.status(500).json({ error: e.message });
		// }
		next()
	} else {
		res.status(401).json({ message: "Please provide valid credentials" });
	}
}

module.exports = restricted