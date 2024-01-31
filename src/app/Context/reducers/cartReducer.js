import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { db } from "../../../firebase";
import { addDoc, collection } from "firebase/firestore";

const data =
  typeof window !== "undefined"
    ? JSON.parse(localStorage.getItem("cart"))
    : null;

const initialState = {
  cart: data || [],
  quantity: 0,
  isLoading: false,
};

const cartSlice = createSlice({
  name: "Shoping-cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const productInCart = state.cart.find(
        (item) => item.id === action.payload.id
      );

      if (productInCart) {
        const cartProductIndex = state.cart.findIndex(
          (item) => item.id === action.payload.id
        );
        state.cart[cartProductIndex].quantity =
          state.cart[cartProductIndex].quantity + action.payload.quantity;
      } else {
        state.cart = [...state.cart, action.payload];
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    removeCartItem: (state, action) => {
      const deleteItem = state.cart.filter(
        (item) => item.id !== action.payload.id
      );
      state.cart = deleteItem;
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    extraReducers: (builder) => {
      builder.addCase(addDocument.pending, (state, action) => {
        state.loading = true;
      });
      builder.addCase(addDocument.fulfilled, (state, action) => {
        state.isLoading = false;
        // Handle the success case, if needed
      });
      builder.addCase(addDocument.rejected, (state, action) => {
        // Handle the rejection or error case, if needed
        state.isLoading = false;
      });
    },
  },
});

export const { addToCart, removeCartItem } = cartSlice.actions;

export default cartSlice.reducer;
