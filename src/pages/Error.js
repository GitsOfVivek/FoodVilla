import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
	return (
		<div className="wrapper">
			<h1>Oups..!!!</h1>
			<h3>Somthing went wrong...</h3>
			<Link className="go-to-home" to={'/'}>
				Go to Home
			</Link>
		</div>
	);
};

export default Error;
