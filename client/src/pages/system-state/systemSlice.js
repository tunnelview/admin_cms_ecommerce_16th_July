import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showSideMenu: false,
};

const systemSlice = createSlice({
  name: "system",
  initialState,
  reducers: {
    toggleShowSideMenu: (state) => {
      state.showSideMenu = !state.showSideMenu;
    },
  },
});

const { reducer, actions } = systemSlice;

export const { toggleShowSideMenu } = actions;

export default reducer;
