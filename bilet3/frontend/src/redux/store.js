import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { menuApi } from '../services/menu'
import basketReducer from "./BasketSlice"
import countReducer from "./BasketSlice"

export const store = configureStore({
  reducer: {
    basket:basketReducer,
    count:countReducer,
    [menuApi.reducerPath]: menuApi.reducer,
  },
  
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(menuApi.middleware),
})


setupListeners(store.dispatch)