import { configureStore } from '@reduxjs/toolkit'
import authreducer from './authSlice'
import cartreducer from "./cartSlice"
import totalpricereducer from "./totalPriceSlice"

export const store = configureStore({
  reducer: {
    Auth:authreducer,
    Cart:cartreducer,
    Totalprice:totalpricereducer
  },
})