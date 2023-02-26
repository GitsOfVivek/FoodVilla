import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [isLogged, setIsLogged] = useState(false);

	return (
		<div className="login-wrapper">
			<h1 className="subheading">Login</h1>
			<div className="contact-form">
				<form action="">
					<div className="form-box">
						<div className="row">
							<div className="input-box">
								<div>
									<label htmlFor="username">Username :</label>
								</div>
								<input
									required
									type="text"
									id="username"
									placeholder="Username..."
									value={username}
									onInput={e => setUsername(e.target.value)}
								/>
							</div>
							<div className="input-box">
								<div>
									<label htmlFor="password">Password :</label>
								</div>
								<input
									required
									type="password"
									id="password"
									placeholder="Password..."
									value={password}
									onInput={e => setPassword(e.target.value)}
								/>
							</div>
						</div>
						<div className="row">
							<div className="input-box btn-wrapper">
								<Link
									to={'/profile'}
									className="btn-login-submit"
									onClick={() => {
										setIsLogged(true);
									}}>
									Login
								</Link>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
