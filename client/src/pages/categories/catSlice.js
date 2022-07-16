import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
};

const catSlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategories: (state, { payload }) => {
      state.categories = payload;
    },
  },
});

const { reducer, actions } = catSlice;

export const { setCategories } = actions;
export default reducer;
