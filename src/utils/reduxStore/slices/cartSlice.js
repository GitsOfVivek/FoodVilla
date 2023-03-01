import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
	name: 'cart', // IMP: this is the name of slice
	initialState: {
		items: [],
	},
	reducers: {
		addItem: (state, action) => {
			state.items.push(action.payload);
		},
		removeItem: (state, action) => {
			state.items.pop();
		},
		clearCart: state => {
			state.items = [];
		},
	},
});

// IMP: export actions as named export

export const { addItem, removeItem, clearCart } = cartSlice.actions;

// IMP: here we export 'reducer' not reducers.
export default cartSlice.reducer;
