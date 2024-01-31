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
export const addDocument = createAsyncThunk(
  "carts/addCarts",
  async (data, thunkAPI) => {
    try {
      const docRef = await addDoc(collection(db, "carts"), data);
      return { id: docRef.id, ...data };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Async thunk for fetch a document

export const fetchCarts = createAsyncThunk("carts/getCarts", async () => {
  try {
    const docRef = await getDocs(collection(db, "carts"));
    const carts = docRef.docs.map((doc) => ({
      id: doc.id,
      carts: doc.data(),
    }));
    return carts;
  } catch (error) {
    console.log(error);
  }
});

// Async thunk for deleteDoc a document

export const deleteCarts = createAsyncThunk("carts/deleteCarts", async (id) => {
  try {
    const carts = await getDocs(collection(db, "carts"));
    for (let snap of carts.docs) {
      if (snap.id === id) {
        await deleteDoc(doc(db, "carts", snap.id));
      }
    }
    return id;
  } catch (error) {}
});

const cartStoreSlice = createSlice({
  name: "Shoping-cart",
  initialState: {
    itemCarts: [],
    totalPrice: 0,
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addDocument.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(addDocument.fulfilled, (state, action) => {
      state.isLoading = false;
      // state.totalPrice += action.payload;
      // Handle the success case, if needed
    });
    builder.addCase(addDocument.rejected, (state, action) => {
      // Handle the rejection or error case, if needed
      state.isLoading = false;
    });
    builder.addCase(fetchCarts.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCarts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.itemCarts = action.payload;

      // Handle the success case, if needed
    });
    builder.addCase(fetchCarts.rejected, (state, action) => {
      // Handle the rejection or error case, if needed
      state.isLoading = false;
    });

    builder.addCase(deleteCarts.fulfilled, (state, action) => {
      state.cartArray = state.cartArray.filter(
        (cart) => cart.id !== action.payload
      );
    });
  },
});

export default cartStoreSlice.reducer;
