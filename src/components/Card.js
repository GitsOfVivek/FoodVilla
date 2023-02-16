import React from 'react';
import { IMG_CDN_URL } from '../Config';

const Card = ({ name, avgRating, cuisines, cloudinaryImageId }) => {
	return (
		<div className="card">
			<img
				src={IMG_CDN_URL + cloudinaryImageId}
				alt={name}
				className="card-img"
			/>
			<div className="card-dec">
				<h3 className="card-name">{name}</h3>
				<p>{cuisines?.join(', ')}</p>
				<p>{avgRating} Star</p>
			</div>
		</div>
	);
};

export default Card;
