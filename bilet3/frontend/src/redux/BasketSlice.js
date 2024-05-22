import { createSlice } from "@reduxjs/toolkit";
import { json } from "react-router-dom";

const initialState = {
  basket: JSON.parse(localStorage.getItem("basket")) || [],
  count:0
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      let elem = [...state.basket].find(
        (elem) => elem._id == action.payload._id
      );

      if (elem) {
        state.basket.find((elem) => elem._id == action.payload._id).count += 1
      } else {
        state.basket = [...state.basket, {...action.payload, count:1}];   
      }

      localStorage.setItem("basket", JSON.stringify(state.basket))
    },

    getCount: (state, action) => {
      let sum = 0;
      [...state.basket].forEach((elem) => {
        sum += elem.count;
      });

      state.count = sum;
    },
  },
});

export const { addToBasket,getCount } = basketSlice.actions;
export default basketSlice.reducer;
