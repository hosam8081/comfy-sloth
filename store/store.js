import { configureStore } from '@reduxjs/toolkit'
import navbarSlice from '../slice/navbarSlice'
import productsSlice from '../slice/productsSlice'
import singleProductSlice from '../slice/singleProductSlice'
import filterSlice from '../slice/filterSlice'
import cartSlice from '../slice/cartSlice'

export const store = configureStore({
  reducer: {
    navbar: navbarSlice,
    products: productsSlice,
    product : singleProductSlice,
    filter : filterSlice,
    cart : cartSlice
  },
})





