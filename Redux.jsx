import AsyncStorage from '@react-native-async-storage/async-storage';
import { configureStore, createSlice } from '@reduxjs/toolkit';

const Favourite_Slice = createSlice({
  name: 'FAVOURITE',
  initialState: { list: [] },
  reducers: {
    addToFav: (state, action) => {
      const { item } = action.payload;
      state.list = [...state.list, item];
    },
    removeFromFav: (state, action) => {
      const { id } = action.payload;
      const removeItem = state.list.filter(li => li.id !== id);
      state.list = removeItem;
    },
    addFormLocalStore: (state, action) => {
      const { list } = action.payload;
      state.list = list;
    },
  },
});

export const { addToFav, removeFromFav, addFormLocalStore } =
  Favourite_Slice.actions;

const store = configureStore({
  reducer: {
    Favourite: Favourite_Slice.reducer,
  },
});

export default store;
