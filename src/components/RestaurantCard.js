import React from 'react';
import { IMG_CDN_URL } from '../utils/config';

const RestaurantCard = ({ name, avgRating, cuisines, cloudinaryImageId }) => {
	return (
		<div className="rounded-md w-64 h-96 m-2 bg-zinc-100 shadow-md transition-all hover:shadow-lg hover:-translate-y-1 cursor-pointer">
			<img
				src={IMG_CDN_URL + cloudinaryImageId}
				alt={name}
				className="h-3/5 w-full rounded-t-md"
			/>
			<div className="flex flex-col items-center justify-center">
				<h3 className="font-bold text-xl text-center">{name}</h3>
				<p className="text-center">{cuisines?.join(', ')}</p>
				<p className="text-center">{avgRating} Star</p>
			</div>
		</div>
	);
};

export default RestaurantCard;
