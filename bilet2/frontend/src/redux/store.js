import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { productApi } from '../services/products'
import menuReducer from "./AdminSlice"
import AtoZReducer from "./AdminSlice"

export const store = configureStore({
  reducer: {
    menu:menuReducer,
    AtoZ: AtoZReducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
})

setupListeners(store.dispatch)