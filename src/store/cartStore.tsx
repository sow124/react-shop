import { createSlice } from '@reduxjs/toolkit';

export interface CartInfo {
  id: number;
  count: number;
}

interface CartState {
  totalCount: any;
  items: Record<string, CartInfo>;
}

export interface CartItems {
  id: number;
  title: string;
  price: number;
  count: number;
  image: string;
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: JSON.parse(localStorage.getItem('cartItems')??'{}')||{},
    totalCount: 0,
  },
  reducers: {
    addCart: (state: CartState, action: { payload: { id: number } }) => {
      if (state.items[action.payload.id]) {
        state.items[action.payload.id].count++;
      } else {
        state.items[action.payload.id] = {
          id: action.payload.id,
          count: 1,
        };
      }
      state.totalCount++;
      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },
    removeCart: (state: CartState, action: { payload: { id: number } }) => {
      state.items[action.payload.id].count--;
      state.totalCount--;
      if (state.items[action.payload.id].count === 0)
        delete state.items[action.payload.id];
    },
    buy: (state: any) => {
      state.items = {};
      state.totalCount = 0;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;