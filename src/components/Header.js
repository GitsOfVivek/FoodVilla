import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const Header = () => {
	// NOTE: I am subscribing to store
	const cartItems = useSelector(myStore => myStore.cart.items);

	return (
		<div className="bg-zinc-100 h-12 flex items-center justify-center">
			<div className="text-black flex items-center w-4/5 m-auto justify-between uppercase">
				<Link to={'/'} className="text-3xl font-bold text-orange-500">
					FoodVilla
				</Link>

				<div className="nav-item flex items-center text-2xl">
					<Link className="mx-3 hover:text-orange-500" to={'/'}>
						Home
					</Link>
					<Link
						className="mx-3 hover:text-orange-500"
						to={'/services'}>
						Services
					</Link>
					<Link className="mx-3 hover:text-orange-500" to={'/about'}>
						About
					</Link>
					<Link
						className="mx-3 hover:text-orange-500 relative flex"
						to={'/cart'}>
						<i className="fa-solid fa-cart-shopping"></i>
						<div className="absolute -right-3 opacity-80 -top-2 px-2 bg-orange-600 rounded-full text-white text-sm">
							{cartItems.length}
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Header;
