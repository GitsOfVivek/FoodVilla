import { useState, useEffect } from 'react';
import { RESAURENT_ID_API_LINK } from '../config';

const useRestaurantMenu = id => {
	const [restaurantInfo, setRestaurantInfo] = useState(null);
	const getMenu = async () => {
		const response = await fetch(RESAURENT_ID_API_LINK + id);
		const json = await response.json();
		setRestaurantInfo(json);
	};

	useEffect(() => {
		getMenu();
	}, []);

	return restaurantInfo;
};

export default useRestaurantMenu;
