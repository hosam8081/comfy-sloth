import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  total: 0,
  amount:0,
  fee: 539,
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let { amount, id, color } = action.payload;

      let inCart = state.cart.find(
        (ele) => ele.id === id && ele.color == color
      );

      // if item not in the cart
      if (!inCart) {
        return { ...state, cart: [...state.cart, action.payload] };
      } else {
        let newItem = state.cart.map((item) => {
          if (item.id == id && item.color == color) {
            let newAmount = item.amount + amount;
            if (item.stock <= newAmount) {
              newAmount = item.stock;
            }
            return { ...item, amount: newAmount };
          } else {
            return item;
          }
        });
        return { ...state, cart: newItem };
      }
    },
    removeItem: (state, action) => {
      let id = action.payload;
      let newItem = state.cart.filter((item) => {
        if (`${item.id + item.color}` !== id) {
          return item;
        }
      });
      return { ...state, cart: newItem };
    },
    clearCart: (state) => {
      return { ...state, cart: [] };
    },
    increment: (state, action) => {
      state.cart.filter((item) => {
        if (`${item.id + item.color}` == action.payload) {
          return item.amount >= item.stock ? item.stock : (item.amount += 1);
        } else {
          return "";
        }
      });
    },
    decrement: (state, action) => {
      state.cart.filter((item) => {
        if (`${item.id + item.color}` == action.payload) {
          return item.amount <= 1 ? 1 : (item.amount -= 1);
        } else {
          return "";
        }
      });
    },
    totalAmount: (state, action) => {
      let price = state.cart.map((ele) => ele.price * ele.amount )

      let totalPrice = price.reduce((acc, curr) => acc + curr, 0);
      state.total = totalPrice;
    },
  },
});

export const {
  addToCart,
  removeItem,
  clearCart,
  increment,
  decrement,
  totalAmount,
} = cartSlice.actions;

export default cartSlice.reducer;
