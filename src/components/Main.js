// one way data binding in React

import Card from './Card';
import { useEffect, useState } from 'react';
import { API_LINK } from '../Config';
import Shimmer from './Shimmer';
import Search from './Search';
import { Link } from 'react-router-dom';

const Main = () => {
	const [allRestaurants, setAllRestaurants] = useState([]);
	const [filteredRestaurants, setFilteredRestaurants] = useState([]);

	const getRestaurants = async () => {
		const res = await fetch(API_LINK);
		const json = await res.json();
		setFilteredRestaurants(json?.data?.cards[0]?.data?.data?.cards);
		setAllRestaurants(json?.data?.cards[0]?.data?.data?.cards);
	};

	useEffect(() => {
		getRestaurants();
	}, []);

	return !allRestaurants?.length ? (
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
				{filteredRestaurants.length === 0 ? (
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
