import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	const [isLogedIn, setIsLogedIn] = useState(false);
	return (
		<div className="header">
			<div className="nav">
				<Link to={'/'} className="logo">
					FoodVilla
				</Link>

				<div className="nav-item">
					<Link className="nav-link" to={'/'}>
						Home
					</Link>
					<Link className="nav-link" to={'/services'}>
						Services
					</Link>
					<Link className="nav-link" to={'/about'}>
						About
					</Link>
					<Link className="nav-link" to={'/cart'}>
						Cart
					</Link>
					{isLogedIn ? (
						<Link
							to={'/signup'}
							onClick={() => setIsLogedIn(false)}
							className="btn-signup">
							SignUp
						</Link>
					) : (
						<Link
							to={'/login'}
							onClick={() => {
								setIsLogedIn(true);
							}}
							className="btn-login">
							LogIn
						</Link>
					)}
				</div>
			</div>
		</div>
	);
};

export default Header;
