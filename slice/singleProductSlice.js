import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getFetchProduct = createAsyncThunk(
  "product/getFetchProduct",
  async (name, ThunkApi) => {
    const response = await axios(
      `https://course-api.com/react-store-single-product?id=${name}`
    ).catch((err) => console.log(err));
    return response.data;
  }
);

const initialState = {
  product: [],
  singleProductLoading: true,
  singleProductError: false,
};

export const singleProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: {
    [getFetchProduct.pending]: (state) => {
      state.singleProductLoading = true;
    },
    [getFetchProduct.fulfilled]: (state, action) => {
      state.singleProductLoading = false;
      state.product = action.payload;
    },
    [getFetchProduct.rejected]: (state) => {
      state.singleProductLoading = false;
      state.singleProductError = true;
    },
  },
});

// Action creators are generated for each case reducer function

// export const {increment} = productsSlice.actions;

export default singleProductSlice.reducer;
