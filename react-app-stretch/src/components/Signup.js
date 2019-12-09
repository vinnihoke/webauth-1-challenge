import React, { useState } from 'react'
import axios from 'axios'

import { Input } from 'antd';

const Signup = () => {
	const [ credentials, setCredentials ] = useState({
		name: "",
		password: ""
	});

	const handleChange = e => {
		let { name, value } = e.target;
		setCredentials({...credentials, [name]: value });

		console.log( credentials )
	}

	const onSubmit = (e) => {
		e.preventDefault();
		axios.post('http://localhost:3895/api/register', credentials)
			.then(res => console.log(res))
			.catch(err => console.log(err))
	}

	return (
		<form onSubmit={onSubmit}>
			<label htmlFor="name">
				Name:
				<Input type="text" name="name" onChange={e => handleChange(e)} />
			</label>
			<label htmlFor="name">
				Password:
				<Input type="password" name="password" onChange={e => handleChange(e)} />
			</label>
			<input type="submit" value="Register" />		
		</form>
	)
}

export default Signup
