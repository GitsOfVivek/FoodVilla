import React from 'react';
import './MenuList.css';

const MenuList = props => {
	const { name, attributes, price } = props;
	return (
		<div className="menu-item-list-wrapper">
			<div className="left-info-box">
				<div className="item-name">{name}</div>
				{attributes?.vegClassifier === 'VEG' ? (
					<div className="veg-non-veg green">
						{attributes?.vegClassifier}
					</div>
				) : (
					<div className="veg-non-veg red">
						{attributes?.vegClassifier}
					</div>
				)}
				<div>{price / 100} ₹</div>
			</div>
			<div className="right-img-box">
				{!props.cloudinaryImageId ? (
					''
				) : (
					<img
						src={
							'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/' +
							props?.cloudinaryImageId
						}
					/>
				)}
			</div>
		</div>
	);
};

export default MenuList;
