import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';  // This will be your cart slice file

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
