import React, { useState } from 'react';
import { IMG_CDN_URL } from '../utils/config';
import { addItem } from '../utils/reduxStore/slices/cartSlice';
import { useDispatch } from 'react-redux';

const MenuList = props => {
	const [isAdding, setIsAdding] = useState(false);
	const dispatch = useDispatch();

	const addItemClickHandler = () => {
		if (isAdding) return;

		dispatch(addItem(props));

		// Animation
		setIsAdding(true);
		const timeout = setTimeout(() => {
			setIsAdding(false);
			clearTimeout(timeout);
		}, 500);
	};

	return (
		<div
			className="relative w-64 rounded-md bg-zinc-100 hover:-translate-y-2 transition-all duration-300 shadow-md  hover:shadow-lg"
			style={{ minHeight: '24rem' }}>
			{props?.isBestSeller && (
				<div
					className="absolute py-1 px-2 rounded-md -right-3 z-10"
					style={{
						background: props?.ribbon?.bottomBackgroundColor,
						color: props?.ribbon?.textColor,
					}}>
					{props?.ribbon?.text}
				</div>
			)}

			<div className="w-full h-full">
				<img
					className="h-52 w-full rounded-t-md"
					src={
						IMG_CDN_URL +
						(props.cloudinaryImageId
							? props.cloudinaryImageId
							: props.restaurantImg)
					}
					alt={props.name}
				/>
				<div className="h-2/5">
					<h3 className="font-bold text-xl text-center">
						{props.name}
					</h3>
					<div className="mt-5 flex justify-center items-center flex-col">
						<p className="flex justify-center items-center mb-2">
							{props.category}
						</p>
						<div className="flex gap-2 justify-center items-center">
							<p
								className={
									'text-center px-2 py-1 rounded-sm text-white' +
									(props?.attributes?.vegClassifier === 'VEG'
										? ' bg-green-600 '
										: ' bg-red-600 ')
								}>
								{props?.attributes?.vegClassifier}
							</p>
							<p className="text-center font-bold px-2 py-1 rounded-sm text-white bg-orange-600">
								{props.price / 100} ₹
							</p>
						</div>
					</div>
					<button
						className={
							'absolute bottom-2 w-full px-3 py-1 text-white font-semibold' +
							(isAdding
								? ' bg-green-600 '
								: ' bg-yellow-600 hover:bg-yellow-500 ')
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
