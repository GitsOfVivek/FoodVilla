import React from 'react';
import { IMG_CDN_URL } from '../utils/config';
import Shimmer from '../components/Shimmer';
import MenuList from '../components/MenuList';
import useRestaurantMenu from '../hooks/useRestaurantMenu';
import { useParams } from 'react-router-dom';

const RestaurantMenu = () => {
	const { id } = useParams();
	const restaurantInfo = useRestaurantMenu(id);

	return !restaurantInfo ? (
		<Shimmer />
	) : (
		<div className="bg-orange-50">
			<div className="w-4/5 mx-auto py-10 flex justify-start gap-5">
				<img
					className="h-52 w-80 rounded-md"
					src={IMG_CDN_URL + restaurantInfo?.data?.cloudinaryImageId}
					alt="img"
				/>

				<div className="grid grid-cols-1">
					<div className="text-3xl font-bold">
						{restaurantInfo?.data?.name}
					</div>
					<div>
						<span className="px-2 py-1 bg-cyan-900 text-white rounded-md">
							{restaurantInfo?.data?.cuisines?.join(', ')}
						</span>
					</div>

					<div>
						{restaurantInfo?.data?.locality},{' '}
						{restaurantInfo?.data?.area}
					</div>
					<div className="w-auto flex items-center justify-start gap-5">
						<span className="">
							{restaurantInfo?.data?.avgRating} Star
						</span>
						<span
							className={
								restaurantInfo?.data?.availability?.opened &&
								'px-2 py-1 bg-green-400'
							}>
							{restaurantInfo?.data?.availability?.opened
								? 'Open'
								: 'Closed'}
						</span>
						<span className="">
							{' '}
							{restaurantInfo?.data?.costForTwoMsg}
						</span>
					</div>
				</div>
			</div>
			<div className="flex justify-center items-center gap-3 flex-wrap w-4/5 mx-auto">
				{Object.values(restaurantInfo?.data?.menu?.items).map(el => (
					<div
						key={el?.id}
						className="flex flex-col p-1 rounded-t-md">
						<MenuList
							restaurantImg={
								restaurantInfo?.data?.cloudinaryImageId
							}
							{...el}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default RestaurantMenu;
