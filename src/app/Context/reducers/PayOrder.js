import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { db } from "../../../firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";

// Async thunk for adding a document
export const addOrder = createAsyncThunk(
  "order/addOrder",
  async (data, thunkAPI) => {
    try {
      const docRef = await addDoc(collection(db, "order"), data);
      return { id: docRef.id, ...data };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Async thunk for fetch a document

export const fetchOrders = createAsyncThunk("orders/getOrders", async () => {
  try {
    const docRef = await getDocs(collection(db, "order"));
    const orders = docRef.docs.map((doc) => ({
      id: doc.id,
      order: doc.data(),
    }));
    return orders;
  } catch (error) {
    console.log(error);
  }
});

// Async thunk for deleteDoc a document

export const deleteOrder = createAsyncThunk("order/deleteOrder", async (id) => {
  try {
    const orders = await getDocs(collection(db, "order"));
    for (let snap of orders.docs) {
      if (snap.id === id) {
        await deleteDoc(doc(db, "order", snap.id));
      }
    }
    return id;
  } catch (error) {
    return error;
  }
});

const orderSlice = createSlice({
  name: "order",
  initialState: {
    orders: [],
    totalPrice: 0,
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addOrder.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(addOrder.fulfilled, (state, action) => {
      state.isLoading = false;
      // state.totalPrice += action.payload;
      // Handle the success case, if needed
    });
    builder.addCase(addOrder.rejected, (state, action) => {
      // Handle the rejection or error case, if needed
      state.isLoading = false;
    });
    builder.addCase(fetchOrders.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchOrders.fulfilled, (state, action) => {
      state.isLoading = false;
      state.orders = action.payload;

      // Handle the success case, if needed
    });
    builder.addCase(fetchOrders.rejected, (state, action) => {
      // Handle the rejection or error case, if needed
      state.isLoading = false;
    });

    builder.addCase(deleteOrder.fulfilled, (state, action) => {
      state.cartArray = state.cartArray.filter(
        (cart) => cart.id !== action.payload
      );
    });
  },
});

export default orderSlice.reducer;
