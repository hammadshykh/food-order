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
export const addMenuCard = createAsyncThunk(
  "menu/addMenuCard",
  async (data, thunkAPI) => {
    try {
      const docRef = await addDoc(collection(db, "menu"), data);
      return { id: docRef.id, ...data };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Async thunk for fetch a document

export const fetchMenuCards = createAsyncThunk(
  "menu/getMenuCards",
  async () => {
    try {
      const docRef = await getDocs(collection(db, "menu"));
      const carts = docRef.docs.map((doc) => ({
        id: doc.id,
        menu: doc.data(),
      }));
      return carts;
    } catch (error) {
      console.log(error);
    }
  }
);

// Async thunk for deleteDoc a document

export const deleteMenuCard = createAsyncThunk(
  "menu/deleteMenuCards",
  async (id) => {
    try {
      const carts = await getDocs(collection(db, "menu"));
      for (let snap of carts.docs) {
        if (snap.id === id) {
          await deleteDoc(doc(db, "menu", snap.id));
        }
      }
      return id;
    } catch (error) {}
  }
);

const menuStoreSlice = createSlice({
  name: "menu",
  initialState: {
    imageUrl: null,
    progress: 0,
    error: null,
    menuCards: [],
    isLoading: false,
  },
  reducers: {
    setImageUrl: (state, action) => {
      state.imageUrl = action.payload;
    },
    setProgress: (state, action) => {
      state.progress = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    resetState: (state) => {
      state.imageUrl = null;
      state.progress = 0;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addMenuCard.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(addMenuCard.fulfilled, (state, action) => {
      state.isLoading = false;
      // Handle the success case, if needed
    });
    builder.addCase(addMenuCard.rejected, (state, action) => {
      // Handle the rejection or error case, if needed
      state.isLoading = false;
    });
    builder.addCase(deleteMenuCard.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(deleteMenuCard.fulfilled, (state, action) => {
      state.isLoading = false;
      // Handle the success case, if needed
    });
    builder.addCase(deleteMenuCard.rejected, (state, action) => {
      // Handle the rejection or error case, if needed
      state.isLoading = false;
    });
    builder.addCase(fetchMenuCards.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchMenuCards.fulfilled, (state, action) => {
      state.isLoading = false;
      state.menuCards = action.payload;
      // Handle the success case, if needed
    });
    builder.addCase(fetchMenuCards.rejected, (state, action) => {
      // Handle the rejection or error case, if needed
      state.isLoading = false;
    });
  },
});

export const { resetState, setError, setImageUrl, setProgress } =
  menuStoreSlice.actions;
export default menuStoreSlice.reducer;
