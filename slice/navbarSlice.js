import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isOpen: false
}

export const navbrSlice = createSlice({
  name : "navbar",
  initialState, 
  reducers: {
    openNav: (state) => {
      state.isOpen = true
    },
    closeNav: (state) => {
      state.isOpen = false
    },
  }
})

export const { openNav, closeNav} = navbrSlice.actions

export default navbrSlice.reducer

