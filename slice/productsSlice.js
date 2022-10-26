import { accessTokenFactory } from "@auth0/nextjs-auth0/dist/session";
import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";
import { products_url } from "../utils/constants";

export const getFetchProducts = createAsyncThunk(
  "products/getFetchProducts",
  async (name, ThunkApi) => {
    const response = await axios(`${products_url}`).catch((err) =>
      console.log(err)
    );
    return response.data;
  }
);

const initialState = {
  loading: true,
  error: false,
  products: [],
  filteredProducts: [],
  gridView: true,
  sort: "price (lowest)",
  filters: {
    query: "",
    category: "all",
    company: "all",
    colors: "all",
    minPrice: 0,
    maxPrice: 0,
    price: "",
    shipping: false,
  },
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setGridView: (state) => {
      state.gridView = true;
    },
    setGridList: (state) => {
      state.gridView = false;
    },
    setSort: (state, action) => {
      let filteredProducts = state.filteredProducts;
      state.sort = action.payload;
      if (action.payload == "price (lowest)") {
        filteredProducts.sort(function (a, b) {
          return a.price - b.price;
        });
      } else if (action.payload == "price (highest)") {
        filteredProducts.sort((a, b) => b.price - a.price);
      } else if (action.payload == "name (A - Z)") {
        filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
      } else if (action.payload == "name (Z - A)") {
        filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
      }
    },
    updateFilter: (state, action) => {
      state.filters[action.payload.name] = action.payload.val;
    },
    filterProducts: (state, action) => {
      const { products: all_products } = state;
      const {
        query: text,
        category,
        company,
        colors: color,
        price,
        shipping,
      } = state.filters;

      let tempProducts = [...all_products];

      // search query
      if (text) {
        tempProducts = tempProducts.filter((product) => {
          return product.name.toLowerCase().startsWith(text);
        });
      }

      // category
      if (category !== "all") {
        tempProducts = tempProducts.filter(
          (product) => product.category === category
        );
      }

      // company
      if (company !== "all") {
        tempProducts = tempProducts.filter(
          (product) => product.company === company
        );
      }

      // colors
      if (color !== "all") {
        tempProducts = tempProducts.filter((product) => {
          return product.colors.find((c) => c === color);
        });
      }

      // price
      tempProducts = tempProducts.filter((product) => product.price <= price);

      // free shipping
      if (shipping) {
        tempProducts = tempProducts.filter(
          (product) => product.shipping == shipping
        );
      }

      //update filterd products
      state.filteredProducts = tempProducts;
    },
    clearfilter: (state) => {
      return {
        ...state,
        filters: {
          ...state.filters,
          query: "",
          company: "all",
          category: "all",
          price: state.filters.price,
          shipping: false,
        },
      };
    },
  },
  extraReducers: {
    [getFetchProducts.pending]: (state) => {
      state.loading = true;
    },
    [getFetchProducts.fulfilled]: (state, action) => {
      state.loading = false;
      state.products = action.payload;
      state.filteredProducts = action.payload;
      state.filters.maxPrice = Math.max(
        ...state.products.map((ele) => ele.price)
      );
      state.filters.price = Math.max(...state.products.map((ele) => ele.price));
    },
    [getFetchProducts.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

// Action creators are generated for each case reducer function

export const {
  setGridList,
  setGridView,
  setSort,
  updateFilter,
  filterProducts,
  clearfilter,
} = productsSlice.actions;

export default productsSlice.reducer;
