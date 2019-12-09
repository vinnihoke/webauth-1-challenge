import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { axiosWithAuth } from '../auth/AxiosWithAuth.js';

// UI
import { Input } from 'antd';

const Signin = (props) => {

	const [ credentials, setCredentials ] = useState({
		name: "",
		password: ""
	});

	const handleChange = e => {
		let { name, value } = e.target;
		setCredentials({...credentials, [name]: value })
	}

	const onSubmit = (e) => {
		e.preventDefault();
		axiosWithAuth().post('http://localhost:3895/api/login', credentials)
			.then(res => {
				localStorage.setItem('token', res.data.token);
				props.history.push('/dashboard')
			})
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
