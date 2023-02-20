// one way data binding in React

import Card from './Card';
import Shimmer from './Shimmer';
import Search from './Search';
import { Link } from 'react-router-dom';
import useRestaurant from '../hooks/useRestaurant';
import useOnline from '../hooks/useOnline';

const Main = () => {
	const [allRestaurants, filteredRestaurants, setFilteredRestaurants] =
		useRestaurant();

	const isOnline = useOnline();
	if (!isOnline) {
		return <h1>🚫 No internet, please check connection!!</h1>;
	}

	return !allRestaurants ? (
		<>
			<Search />
			<Shimmer />
		</>
	) : (
		<>
			<Search
				allRestaurants={allRestaurants}
				setFilteredRestaurants={setFilteredRestaurants}
			/>
			<div className="main-containt">
				{!filteredRestaurants ? (
					<h1>No Restaurant Found</h1>
				) : (
					filteredRestaurants.map(card => {
						return (
							<Link
								key={card?.data?.id}
								to={'/restaurant/' + card.data.id}>
								<Card {...card.data} />
							</Link>
						);
					})
				)}
			</div>
		</>
	);
};

export default Main;
