import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface ProductData {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const fetchProducts = createAsyncThunk('reducer1/fetchTitles', async () => {
  const response = await fetch('https://fakestoreapi.com/products');
  const products: ProductData[] = await response.json();
  let all: ProductData[] = [];

  products.forEach((product) => {
    all.push(product);
  });

  return {all };
});

const productStore = createSlice({
  name: 'products',
  initialState: {
    fetchStatus: '',
    all: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.fetchStatus = 'loading';
      console.log(fetchProducts)
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.fetchStatus = 'fetched';
      state.all = action.payload.all as any;
      console.log(fetchProducts)

    });
    builder.addCase(fetchProducts.rejected, (state) => {
      state.fetchStatus = 'failed';
      console.log(fetchProducts)

    });
  },
});

export default productStore;
export { fetchProducts };