import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { db } from "../../../firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";

// Async thunk for adding a document
export const addCategory = createAsyncThunk(
  "categories/addCategories",
  async (data, thunkAPI) => {
    try {
      const docRef = await addDoc(collection(db, "categories"), data);
      return { id: docRef.id, ...data };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Async thunk for fetch a document

export const fetchCategories = createAsyncThunk(
  "categories/getCategories",
  async () => {
    try {
      const docRef = await getDocs(collection(db, "categories"));
      const categories = docRef.docs.map((doc) => ({
        id: doc.id,
        categories: doc.data(),
      }));
      return categories;
    } catch (error) {
      console.log(error);
    }
  }
);

// Async thunk for deleteDoc a document

export const deleteCategories = createAsyncThunk(
  "categories/deleteCategories",
  async (id) => {
    try {
      const categories = await getDocs(collection(db, "categories"));
      for (let snap of categories.docs) {
        if (snap.id === id) {
          await deleteDoc(doc(db, "categories", snap.id));
        }
      }
      return id;
    } catch (error) {}
  }
);

// Async thunk for UpdateDoc a document

export const UpdateCategories = createAsyncThunk(
  "categories/updateCategories",
  async (category) => {
    const categories = await getDocs(collection(db, "categories"));
    try {
      for (let snap of categories.docs) {
        if (snap.id === category.id) {
          const categoryRef = doc(db, "categories", snap.id);
          await updateDoc(categoryRef, category);
        }
      }
      return category;
    } catch (error) {
      console.log(error);
    }
  }
);

const categorySlice = createSlice({
  name: "categories",
  initialState: {
    categories: [],
    isLoading: false,
  },

  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addCategory.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(addCategory.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(addCategory.rejected, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(fetchCategories.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.isLoading = false;
      state.categories = action.payload;
    });
    builder.addCase(fetchCategories.rejected, (state, action) => {
      state.isLoading = false;
      state.categories = [];
    });
    builder.addCase(deleteCategories.fulfilled, (state, action) => {
      state.categories = state.categories.filter(
        (category) => category.id !== action.payload
      );
    });
    builder.addCase(UpdateCategories.fulfilled, (state, action) => {
      const { id, categories } = action.payload;
      const categoryIndex = state.categories.findIndex(
        (category) => category.id === id
      );
      if (categoryIndex !== -1) {
        state.categories[categoryIndex] = { id: id, categories };
      }
      console.log(action.payload);
    });
  },
});

export default categorySlice.reducer;
