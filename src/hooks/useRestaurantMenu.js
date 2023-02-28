import { useState, useEffect } from 'react';
import { RESAURENT_ID_API_LINK } from '../utils/config';
import dataObj from '../utils/STATIC_MENULIST_DATA';

const useRestaurantMenu = id => {
	const [restaurantInfo, setRestaurantInfo] = useState(null);
	const getMenu = async () => {
		try {
			const response = await fetch(RESAURENT_ID_API_LINK + id);
			const json = await response.json();
			setRestaurantInfo(json);
		} catch (e) {
			const key = 'dataOf' + id;
			setRestaurantInfo(dataObj[key]);
		}
	};

	useEffect(() => {
		getMenu();
	}, []);

	return restaurantInfo;
};

export default useRestaurantMenu;
