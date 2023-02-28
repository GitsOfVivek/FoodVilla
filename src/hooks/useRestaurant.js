import { API_LINK, restaurantList } from '../utils/config';
import { useState, useEffect, useContext } from 'react';
import AlertContext from '../utils/AlertContext';

const useRestaurant = () => {
	const [allRestaurants, setAllRestaurants] = useState(null);
	const [filteredRestaurants, setFilteredRestaurants] = useState(null);
	const AlertContextObj = useContext(AlertContext);

	const showAlert = () => {
		if (!AlertContextObj.isAlertShown) {
			window.alert(
				`There restaurants are static. Please install "Allow CORS" Chrome extention to call Dynamic Swiggy API.`
			);
		}
		AlertContextObj.isAlertShown = true;
	};

	const getRestaurants = async () => {
		try {
			const res = await fetch(API_LINK);
			const json = await res.json();
			setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
			setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
		} catch (e) {
			setFilteredRestaurants(
				restaurantList?.data?.cards[2]?.data?.data?.cards
			);
			setAllRestaurants(
				restaurantList?.data?.cards[2]?.data?.data?.cards
			);
			showAlert();
		}
	};

	useEffect(() => {
		getRestaurants();
	}, []);
	return [allRestaurants, filteredRestaurants, setFilteredRestaurants];
};

export default useRestaurant;
