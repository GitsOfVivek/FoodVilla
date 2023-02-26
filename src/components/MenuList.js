import React, { useState, useContext } from 'react';
import { IMG_CDN_URL } from '../utils/config';
import CartContext from '../utils/CartContext';

const MenuList = props => {
	const [isAdding, setIsAdding] = useState(false);
	const {
		name,
		cloudinaryImageId,
		category,
		ribbon,
		restaurantImg,
		price,
		attributes,
	} = props;

	const { cartDetails, setCartDetails } = useContext(CartContext);

	// FIXME: Click Handler

	const addItemClickHandler = e => {
		if (isAdding) return;
		const itemDetails = e.target.dataset.itemDetails.split('-');

		const itemObj = {
			name: itemDetails[0],
			price: itemDetails[1],
			cloudinaryImageId: itemDetails[2],
			vegClassifier: itemDetails[3],
			category: itemDetails[4],
			restaurantImg: itemDetails[5],
		};
		const newArr = cartDetails.itemDetails.map(item => item);
		newArr.push(itemObj);

		setIsAdding(true);
		const timeout = setTimeout(() => {
			setIsAdding(false);
			clearTimeout(timeout);
		}, 500);
		setCartDetails({
			...cartDetails,
			itemDetails: newArr,
			totalItems: cartDetails.totalItems + 1,
		});
	};

	return (
		<div className="relative w-64 h-96 rounded-md  m-2 bg-zinc-100 shadow-md transition-all hover:shadow-lg hover:-translate-y-1 cursor-pointer">
			<div
				className="absolute py-1 px-2 rounded-md -right-3 z-10"
				style={{
					background: ribbon?.bottomBackgroundColor,
					color: ribbon?.textColor,
				}}>
				{ribbon?.text}
			</div>

			<div className="w-full h-full">
				<img
					className="h-3/5 w-full rounded-t-md"
					src={
						IMG_CDN_URL +
						(cloudinaryImageId ? cloudinaryImageId : restaurantImg)
					}
					alt={name}
				/>
				<div className="h-2/5">
					<h3 className="font-bold text-xl text-center">{name}</h3>
					<div className="mt-5 flex justify-center items-center flex-col">
						<p className="flex justify-center items-center mb-2">
							{category}
						</p>
						<div className="flex gap-2 justify-center items-center">
							<p
								className={
									'text-center px-2 py-1 rounded-sm' +
									(attributes?.vegClassifier === 'VEG'
										? ' bg-green-500 '
										: ' bg-red-500 ')
								}>
								{attributes?.vegClassifier}
							</p>
							<p className="text-center font-bold">
								{price / 100} ₹
							</p>
						</div>
					</div>
					<button
						data-item-details={`${name}-${price}-${cloudinaryImageId}-${attributes?.vegClassifier}-${category}-${restaurantImg}`}
						className={
							'absolute right-0 px-3 mr-2 py-1 text-white font-semibold rounded-md' +
							(isAdding ? ' bg-green-600 ' : ' bg-yellow-600 ')
						}
						onClick={addItemClickHandler}>
						{isAdding ? 'ADDED' : 'ADD'}
					</button>
				</div>
			</div>
		</div>
	);
};

export default MenuList;
