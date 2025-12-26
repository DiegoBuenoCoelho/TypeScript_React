import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type CartItem = {
	id: string;
	title: string;
	price: number;
	qtty: number;
};
type CartState = {
	items: CartItem[];
};

const initialState: CartState = {
	items: [],
};

//------------------------ METHODS
const fnAddToCart = (
	state: CartState,
	action: PayloadAction<{ id: string; title: string; price: number }>
) => {
	//code
	const itemIndex = state.items.findIndex((thisItem) => thisItem.id === action.payload.id);
	if (itemIndex >= 0) {
		state.items[itemIndex].qtty++;
	} else {
		state.items.push({ ...action.payload, qtty: 1 });
	}
};
const fnRemoveFromCart = (state: CartState, action: PayloadAction<string>) => {
	const itemIndex = state.items.findIndex((thisItem) => thisItem.id === action.payload);
	console.log({ itemIndex });
	if (itemIndex >= 0) {
		const thisItem = state.items[itemIndex];
		// console.log({ itemIndex }, "item: ", state.items[itemIndex]);
		if (thisItem.qtty === 1) {
			state.items.splice(itemIndex, 1);
		} else {
			state.items[itemIndex].qtty--;
		}
	}
};
//------------------------ SLICE DECLARATION
export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: fnAddToCart,
		removeFromCart: fnRemoveFromCart,
	},
});

export const { addToCart, removeFromCart } = cartSlice.actions;
