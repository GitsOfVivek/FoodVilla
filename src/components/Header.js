import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import CartContext from '../utils/CartContext';
import useOnline from '../hooks/useOnline';

const Header = () => {
	const [isLogged, setIsLogged] = useState(true);
	const isOnline = useOnline();
	const { cartDetails } = useContext(CartContext);

	return (
		<div className="bg-zinc-100 h-12 flex items-center justify-center">
			<div className="text-black flex items-center w-4/5 m-auto justify-between uppercase">
				<Link to={'/'} className="text-3xl font-bold text-orange-500">
					FoodVilla
				</Link>

				<div className="nav-item flex items-center text-2xl">
					<Link className="mx-3 hover:text-blue-400" to={'/'}>
						Home
					</Link>
					<Link className="mx-3 hover:text-blue-400" to={'/services'}>
						Services
					</Link>
					<Link className="mx-3 hover:text-blue-400" to={'/about'}>
						About
					</Link>
					<Link
						className="mx-3 hover:text-blue-400 relative flex"
						to={'/cart'}>
						Cart
						<div className="absolute -right-3 opacity-80 -top-1 px-2 bg-orange-500 rounded-full text-white text-sm">
							{cartDetails.totalItems}
						</div>
					</Link>
					{isLogged ? (
						<Link className="mx-3 " to={'/profile'}>
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
