import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IMG_CDN_URL } from '../utils/config';
import { clearCart } from '../utils/reduxStore/slices/cartSlice';

const Cart = () => {
	// NOTE: I am subscribing to items only
	const cartItems = useSelector(myStore => myStore.cart.items);
	const dispatch = useDispatch();
	const handleClearCart = () => {
		dispatch(clearCart());
	};
	return (
		<div className="w-4/5 mx-auto my-5">
			<div className="flex justify-center items-center">
				<div className="text-center font-bold text-3xl my-3">
					Cart - {cartItems.length} Items
				</div>{' '}
				<button
					onClick={handleClearCart}
					className="px-2 py-1 bg-red-300 mx-5 rounded-md">
					Clear Cart
				</button>
			</div>
			<div className="flex flex-wrap items-center justify-center">
				{cartItems.map(item => {
					return (
						<div
							key={Math.random()}
							className="w-4/5 mx-auto my-2 grid grid-cols-3 border-orange-200 border-2 shadow-md">
							{item?.cloudinaryImageId ? (
								<img
									className="h-24 w-24"
									src={IMG_CDN_URL + item?.cloudinaryImageId}
									alt={item.name}
								/>
							) : (
								<div className="h-24 w-24 bg-slate-100 flex items-center justify-center">
									No Img
								</div>
							)}
							<div className="h-24 py-4 ml-5 flex flex-col items-start justify-between">
								<div className="font-semibold text-lg">
									{item.name}
								</div>
								<div className="flex items-center">
									<p
										className={
											'text-center px-1 rounded-sm text-white text-sm mr-2' +
											(item?.attributes?.vegClassifier ===
											'VEG'
												? ' bg-green-600 '
												: ' bg-red-600 ')
										}>
										{item?.attributes?.vegClassifier}
									</p>
									|<p className="mx-2">{item?.category}</p>
									{item.isBestSeller && (
										<p
											className={'mx-2 px-2 rounded-sm'}
											style={{
												color: item?.ribbon?.textColor,
												backgroundColor:
													item?.ribbon
														?.bottomBackgroundColor,
											}}>
											{item?.ribbon?.text}
										</p>
									)}
								</div>
							</div>
							<div className="flex items-center justify-end mx-5">
								<button className="h-8 w-8 rounded-full bg-red-400 flex items-center justify-center">
									<i class="fa-solid fa-minus"></i>
								</button>

								<div className="font-semibold mx-5">
									{item.price / 100} ₹
								</div>
								<button className="h-8 w-8 rounded-full bg-green-400 flex items-center justify-center">
									<i class="fa-solid fa-plus"></i>
								</button>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Cart;
