import { configureStore } from '@reduxjs/toolkit'
import authreducer from './authSlice'
import cartreducer from "./cartSlice"
import totalpricereducer from "./totalPriceSlice"
import appdatareducer from "./appDataSlice"
import wishListreducer from "./wishlistSlice"
import filterreducer from "./filterSlice"


export const store = configureStore({
  reducer: {
    Auth:authreducer,
    Cart:cartreducer,
    Totalprice:totalpricereducer,
    AppData:appdatareducer,
    Wishlist: wishListreducer,
    Filter:filterreducer,
  },
})