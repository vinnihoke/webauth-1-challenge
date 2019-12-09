import React from 'react';
import Signin from '../components/Signin.js';
import Signup from '../components/Signup.js';

const AuthFlow = () => {
	return (
		<section>
			<h3>Auth Flow View</h3>
			<Signin />
			<Signup />
		</section>
	)
}

export default AuthFlow
