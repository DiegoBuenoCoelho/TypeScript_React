import { configureStore } from "@reduxjs/toolkit";

import { cartSlice } from "./cart-slice";

export const appStore = configureStore({
	reducer: {
		cart: cartSlice.reducer,
	},
});

export type RootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;
