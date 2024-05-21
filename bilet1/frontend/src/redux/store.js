import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productApi } from "../services/product";
import basketReducer from "./BasketSlice"
import countReducer from "./BasketSlice"
import detailReducer from "./DetailSlice"
import favReducer from "./FavSlice"

export const store = configureStore({
  reducer: {
    basket:basketReducer,
    count: countReducer,
    detail:detailReducer,
    fav: favReducer,
    [productApi.reducerPath]: productApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});

setupListeners(store.dispatch);
