import React, { useContext } from 'react';
import CartContext from '../utils/CartContext';
import { IMG_CDN_URL } from '../utils/config';

const Cart = () => {
	const { cartDetails } = useContext(CartContext);
	return (
		<div className="w-4/5 mx-auto my-5">
			<h1 className="text-center font-bold text-3xl">
				Cart - {cartDetails.totalItems} Items
			</h1>
			<div className="flex flex-wrap items-center justify-center">
				{cartDetails.itemDetails?.map(item => {
					return (
						<div
							key={Math.random()}
							className="w-96 border-2 border-orange-500 m-5 p-2 flex items-center justify-between ">
							<img
								className="h-20 w-20"
								src={
									IMG_CDN_URL +
									(item.cloudinaryImageId.trim() ===
										'undefined' ||
									item.cloudinaryImageId.trim() === ''
										? item.restaurantImg
										: item.cloudinaryImageId.trim())
								}
							/>
							<div>
								<div className="text-2xl font-semibold">
									{item.name}
								</div>
								<div className="text-xl">
									{item.price / 100} ₹
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Cart;
