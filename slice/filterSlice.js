import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  gridView: true,
  filteredProduct: [],
}

export const filterSlice = createSlice({
  name : "filter",
  initialState,
  reducers: {
    setGridView : (state) => {
      state.gridView = true
    },
    setGridList : (state) => {
      state.gridView = false
    },
    setFilter: (state, _) => {
      const reduxStore = store.getState();

      const products = reduxStore.productsSlice.products;

      state.filteredProduct = products
    }
  }
})


export const {setGridView, setGridList, setFilter} = filterSlice.actions;

export default filterSlice.reducer;