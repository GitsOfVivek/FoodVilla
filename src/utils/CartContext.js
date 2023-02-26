import { createContext } from 'react';

// Somne Dummy data

const CartContext = createContext({
	cartDetails: {
		totalItems: 1,
		itemDetails: [
			{
				name: '8" Paneer Chilli Pizza',
				cloudinaryImageId: '',
				category: 'Pizza',
				restaurantImg: 'j96lxqkk5lnzozglztvw',
				price: '20000',
				vegClassifier: 'VEG',
			},
		],
	},
});

CartContext.displayName = 'CartContext';

export default CartContext;
