import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { menuApi } from "../services/menu";
import basketReducer from "./BasketSlice";
import favReducer from "./FavSlice";

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    fav:favReducer,
    [menuApi.reducerPath]: menuApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(menuApi.middleware),
});

setupListeners(store.dispatch);
