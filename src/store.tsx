import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './store/cartStore';
import { useDispatch } from 'react-redux';
import productStore from './store/productStore';

const store = configureStore({
  reducer: {
    productStore: productStore.reducer,
    cartStore: cartSlice,
  },
});

export default store;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;