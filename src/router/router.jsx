import React,{ useEffect, useState,createContext } from "react";
import { useSelector } from "react-redux";
import "../assets/css/test.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { errimg } from "../assets/images/images";
import SavingcardData from "../assets/apis/savingcardData";
import FeedbackData from "../assets/apis/feedbackapi";
import FetchData from "../assets/apis/data";
import Profile from "../Components/mainPage/ProfilePagr/profilePage";
import Checkout from "../Components/mainPage/ChekOutPage/chekout";
import ProductListPage from "../Components/mainPage/productPage/ProductPage";
import ProductDetailpage from "../Components/mainPage/ProductDetail/productDetail";
import CartPage from "../Components/mainPage/cartPage/cart";
import MsgPage from "../Components/mainPage/MsgPage/msgContainer";
import MainHeader from "../Components/mainPage/header/mainHead";
import SignInpage from "../Components/Login Section/sign_InPage";
import SignUppage from "../Components/Login Section/signUP";
import HomePage from "../Components/mainPage/homepage/homePage";
import Footer from "../Components/mainPage/footer/footer";
import UserInfo from "../Components/mainPage/ProfilePagr/userInfo";
import AddressEdit from "../Components/mainPage/ProfilePagr/addressEditpage";
import Wishlist from "../Components/mainPage/ProfilePagr/whishlist";
import OderPage from "../Components/mainPage/ProfilePagr/Oderpage";
import OrderDetail from "../Components/mainPage/ProfilePagr/oderDetails";
// import { AddressEdit, CartPage, Checkout, Footer, HomePage, MainHeader, MsgPage, OderPage, OrderDetail, ProductDetailpage, Profile, SignInpage, SignUppage,UserInfo,Wishlist,ProductListPage } from "../Components/pages";


export const DataContext = createContext()
const Router = () => {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [feedback, setFeedback] = useState([]);
  const [email,setEmail]=useState('');
  const [pass,setPass]=useState('');
  const [emailerror,setMailerror] =useState('');
  const [passerror ,setPasserror] =useState('');
  const [productId ,setProductId]=useState('')
  
  const auths = useSelector((state) => state.Auth.value)
  useEffect(() => {
    FetchData(data, setData);
    SavingcardData(data2, setData2);
    FeedbackData(feedback, setFeedback);
  }, []);
  return (
    <div className="test">
      <BrowserRouter>
      <DataContext.Provider value={{ data, data2, feedback,email,setEmail,pass,setPass,emailerror,setMailerror,passerror ,setPasserror,productId,setProductId}}>
        <MainHeader />
            <Routes>
            <Route path="/" element={<SignInpage />} />
            <Route path="/signup" element={<SignUppage />} />
             {auths?((<>
              <Route path="/home"element={ <HomePage/>}/>
              <Route path ="/details" element ={<ProductListPage/>}/>
              <Route path ="/productdetail" element={<ProductDetailpage/>}/>
              <Route path="/cart" element={<CartPage/>}/>
              <Route path ="/profile" element={<Profile/>}>
                    <Route path="userinfo" element={<UserInfo/>} />
                    <Route path="addressedit" element={<AddressEdit/>} />
                    <Route path="wishlist" element={<Wishlist/>} />
                    <Route path="oderpage" element={<OderPage/>} />
                    <Route path ="oderdetails" element={<OrderDetail/>}/>
              </Route>
              <Route path ="/checkout" element={<Checkout/>}/>
             </>)):
             (<Route path="*" element={<Navigate to="/404"/>}/>)}
             <Route path="/404" element={<MsgPage msgimg={errimg} msg={"Oops! Page not found"} submsg={"The page you are looking for might have been removed or temporarily unavailable"} buttontext={"Back to Login"}/>}/>
            </Routes>
        <Footer />
      </DataContext.Provider>  
      </BrowserRouter>
    </div>
  );
};
export default Router;
