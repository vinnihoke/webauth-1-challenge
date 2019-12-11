import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<section>
			<h3>Navbar</h3>
			<nav>
				<ul>
					<li><Link to="/signin">Sign In</Link></li>
					<li><Link to="/signup">Sign Up</Link></li>
					<li>Conditionally render logout button</li>
				</ul>
			</nav>
		</section>
	)
}

export default Navbar
