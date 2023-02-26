import { API_LINK } from '../utils/config';
import { useState, useEffect } from 'react';

const useRestaurant = () => {
	const [allRestaurants, setAllRestaurants] = useState(null);
	const [filteredRestaurants, setFilteredRestaurants] = useState(null);

	const getRestaurants = async () => {
		const res = await fetch(API_LINK);
		const json = await res.json();
		setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
		setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
	};

	useEffect(() => {
		getRestaurants();
	}, []);
	return [allRestaurants, filteredRestaurants, setFilteredRestaurants];
};

export default useRestaurant;
