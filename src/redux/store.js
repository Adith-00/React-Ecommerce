import { configureStore } from '@reduxjs/toolkit'
import authreducer from './Slice/authSlice'
import cartreducer from "./Slice/cartSlice"
import totalpricereducer from "./Slice/totalPriceSlice"
import appdatareducer from "./Slice/appDataSlice"
import wishListreducer from "./Slice/wishlistSlice"
import filterreducer from "./Slice/filterSlice"
import Oderreducer from "./Slice/oderProductsSlice"
import Addressreducer from "./Slice/AddressSlice"
import AddressStorereducer from"./Slice/AddressHolder"
import UserInforeducer from './Slice/UserInfoSlice'


export const store = configureStore({
  reducer: {
    Auth:authreducer,
    Cart:cartreducer,
    Totalprice:totalpricereducer,
    AppData:appdatareducer,
    Wishlist: wishListreducer,
    Filter:filterreducer,
    Oders:Oderreducer,
    Address:Addressreducer,
    AddressHolder:AddressStorereducer,
    UserInfo:UserInforeducer,
  },
})
