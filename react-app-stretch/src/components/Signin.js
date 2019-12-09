import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

// UI
import { Input } from 'antd';

const Signin = () => {

	const [ credentials, setCredentials ] = useState({
		name: "",
		password: ""
	});

	const handleChange = e => {
		let { name, value } = e.target;
		setCredentials({...credentials, [name]: value })
	}

	const onSubmit = async (e) => {
		e.preventDefault();
		axios.post('http://localhost:3895/api/login', credentials)
			.then(res => console.log(res))
			.catch(err => console.log(err));
	}

	return (
		<form onSubmit={onSubmit}>
			<label>
				Name:
				<Input type="text" name="name" onChange={e => handleChange(e)} />
			</label>
			<label>
				Password:
				<Input type="password" name="password" onChange={e => handleChange(e)} />
			</label>
			<input type="submit" value="Sign-in" />
		</form>
	)
}

export default Signin
