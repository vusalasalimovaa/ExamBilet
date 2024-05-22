import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menu: "",
  AtoZ: false,
};

export const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    updateSearchMenu: (state, action) => {
      state.menu = action.payload;
    },
    sortAtoZ: (state, action) => {
      state.AtoZ = !state.AtoZ;
    },
  },
});

export const { updateSearchMenu,sortAtoZ } = adminSlice.actions;
export default adminSlice.reducer;
