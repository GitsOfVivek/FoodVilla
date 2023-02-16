import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IMG_CDN_URL, RESAURENT_ID_API_LINK } from '../Config';
import Shimmer from '../components/Shimmer';
import './RestaurantMenu.css';
import MenuList from '../components/MenuList';

const RestaurantMenu = () => {
	const { id } = useParams();
	const getMenu = async () => {
		const response = await fetch(RESAURENT_ID_API_LINK + id);
		const json = await response.json();
		setRestaurantInfo(json);
	};
	useEffect(() => {
		getMenu();
	}, []);
	const [restaurantInfo, setRestaurantInfo] = useState(null);
	return !restaurantInfo ? (
		<Shimmer />
	) : (
		<div className="restaurant-menu--wrapper-main">
			<div className="restaurant-menu--wrapper">
				<div className="restaurant-menu--left">
					<img
						src={
							IMG_CDN_URL +
							restaurantInfo?.data?.cloudinaryImageId
						}
					/>
				</div>
				<div className="restaurant-menu--right">
					<div className="restaurant-menu--name">
						{restaurantInfo?.data?.name}
					</div>
					<div>
						<span className="cus">
							{restaurantInfo?.data?.cuisines?.join(', ')}
						</span>
					</div>

					<div>
						{restaurantInfo?.data?.locality},{' '}
						{restaurantInfo?.data?.area}
					</div>
					<div className="misc">
						<span>{restaurantInfo?.data?.avgRating} Star </span>
						<span>
							{restaurantInfo?.data?.availability?.opened
								? 'Open'
								: 'Closed'}
						</span>
						<span> {restaurantInfo?.data?.costForTwoMsg}</span>
					</div>
				</div>
			</div>
			<div className="menu-list">
				{Object.values(restaurantInfo?.data?.menu?.items).map(el => (
					<MenuList key={el?.id} {...el} />
				))}
			</div>
		</div>
	);
};

export default RestaurantMenu;
