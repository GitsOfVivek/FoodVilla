import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './slices/cartSlice';

// Store created

const myStore = configureStore({
	reducer: {
		cart: cartSlice,
	},
});

export default myStore;
