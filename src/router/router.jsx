import React from "react";
import { useEffect, useState } from "react";
import "../assets/css/test.css";
import MainHeader from "../Components/mainPage/header/mainHead";
import SignInpage from "../Components/Login Section/sign_InPage";
import SignUppage from "../Components/Login Section/signUP";
import HomePage from "../Components/mainPage/homepage/homePage";
import Footer from "../Components/mainPage/footer/footer";
import SavingcardData from "../assets/apis/savingcardData";
import FeedbackData from "../assets/apis/feedbackapi";
import FetchData from "../assets/apis/data";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext } from "react";
import ProductListPage from "../Components/mainPage/productPage/ProductPage";
import ProductDetailpage from "../Components/mainPage/ProductDetail/productDetail";
import CartPage from "../Components/mainPage/cartPage/cart";
import MsgPage from "../Components/mainPage/MsgPage/msgContainer";
import { errimg } from "../assets/images/images";
import Profile from "../Components/mainPage/ProfilePagr/profilePage";
import Checkout from "../Components/mainPage/ChekOutPage/chekout";

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
  const [cart,setCart]=useState([])
  const [auths ,setAuth]=useState(true)
  useEffect(() => {
    FetchData(data, setData);
    SavingcardData(data2, setData2);
    FeedbackData(feedback, setFeedback);
  }, []);
  console.log("auth>>>>>",auths);
  return (
    <div className="test">
      <BrowserRouter>
      <DataContext.Provider value={{ data, data2, feedback,email,setEmail,pass,setPass,emailerror,setMailerror,passerror ,setPasserror,auths,setAuth,productId,setProductId,cart,setCart}}>
        <MainHeader />
            <Routes>
            <Route path="/" element={<SignInpage />} />
            <Route path="/signup" element={<SignUppage />} />
            {/* {auths ? <Route path="/home"element={<HomePage/>}/>:<Route path ="/error" element={<MsgPage msgimg={errimg} msg={"Oops! Page not found"} submsg={"The page you are looking for might have been removed or temporarily unavailable"} buttontext={"Back to Login"}/>}/>} */}
            <Route path="/home"element={ auths?<HomePage/>:<MsgPage msgimg={errimg} msg={"Oops! Page not found"} submsg={"The page you are looking for might have been removed or temporarily unavailable"} buttontext={"Back to Login"}/>}/>
            <Route path ="/details" element ={auths?<ProductListPage/>:<MsgPage msgimg={errimg} msg={"Oops! Page not found"} submsg={"The page you are looking for might have been removed or temporarily unavailable"} buttontext={"Back to Login"}/>}/>
            <Route path ="/productdetail" element={auths?<ProductDetailpage/>:<MsgPage msgimg={errimg} msg={"Oops! Page not found"} submsg={"The page you are looking for might have been removed or temporarily unavailable"} buttontext={"Back to Login"}/>}/>
            <Route path="/cart" element={auths?<CartPage/>:<MsgPage msgimg={errimg} msg={"Oops! Page not found"} submsg={"The page you are looking for might have been removed or temporarily unavailable"} buttontext={"Back to Login"}/>}/>
            <Route path ="/profile" element={<Profile/>}/>
            <Route path ="/checkout" element={<Checkout/>}/>
            </Routes>
        <Footer />
      </DataContext.Provider>  
      </BrowserRouter>
    </div>
  );
};
export default Router;
