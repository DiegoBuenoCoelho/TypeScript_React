import { configureStore } from "@reduxjs/toolkit";

import { cartSlice } from "./cart-slice";

export const appStore = configureStore({
	reducer: {
		cart: cartSlice.reducer,
	},
});
