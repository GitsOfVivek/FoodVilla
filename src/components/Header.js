import { Link } from 'react-router-dom';
import profileImg from '../assets/img/user-profile-avatar.png';
import './Header.css';
import { useState } from 'react';
import useOnline from '../hooks/useOnline';

const Header = () => {
	const [isLogged, setIsLogged] = useState(true);
	const isOnline = useOnline();

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
					{isLogged ? (
						<Link className="nav-link profile-link" to={'/profile'}>
							<i
								style={{
									color: `${isOnline ? 'green' : 'red'}`,
								}}
								className="fa-solid fa-user"></i>
						</Link>
					) : (
						<Link to={'/login'} className="btn-login">
							LogIn
						</Link>
					)}
				</div>
			</div>
		</div>
	);
};

export default Header;
