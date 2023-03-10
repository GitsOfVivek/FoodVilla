// one way data binding in React
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';
import Search from './Search';
import { Link } from 'react-router-dom';
import useRestaurant from '../hooks/useRestaurant';

const Main = () => {
	const [allRestaurants, filteredRestaurants, setFilteredRestaurants] =
		useRestaurant();

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
			<div className="flex items-center justify-center flex-wrap w-4/5 mx-auto">
				{!filteredRestaurants ? (
					<h1>No Restaurant Found</h1>
				) : (
					filteredRestaurants.map(card => {
						return (
							<Link
								key={card?.data?.id}
								to={'/restaurant/' + card.data.id}>
								<RestaurantCard {...card.data} />
							</Link>
						);
					})
				)}
			</div>
		</>
	);
};

export default Main;
