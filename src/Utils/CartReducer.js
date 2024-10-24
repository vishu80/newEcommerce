import { createSlice } from "@reduxjs/toolkit";

const CartReducer = createSlice({
  name: "cart",
  initialState: {
    items: [],
    total: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
    },
    clearCart: (state, action) => {
      state.items.length(0);
    },
    deleteCard: (state, action) => {
      const id = action.payload;
    // console.log(state.items.filter((item) =>item)
      state.items = state.items.filter((item) => item.info.id !== id);
    },
    deleteItemFromCart: (state, action) => {
        const id = action.payload;
      // console.log(state.items.filter((item) =>item)
        state.items = state.items.filter((item,index) => index!== id);
      },
    
  },
});
export const { addToCart, clearCart, deleteCard,deleteItemFromCart } = CartReducer.actions;
export default CartReducer.reducer;
