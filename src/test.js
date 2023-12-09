import React from "react";
import "../src/assets/css/test.css"
import MainHeader from "./Components/mainPage/header/mainHead";
import HomePage from "./Components/mainPage/homepage/homePage";
import Footer from "./Components/mainPage/footer/footer";
import FetchData from "./assets/apis/data";
import { useEffect ,useState } from "react";
import MsgPage from "./Components/mainPage/MsgPage/msgContainer";
import SavingcardData from "./assets/apis/savingcardData";
import FeedbackData from "./assets/apis/feedbackapi";
import Sign_In from "./Components/Login Section/sign_InPage";
import SignUppage from "./Components/Login Section/signUP";

const Test=()=>{

const [data , setData]=useState([])
const [data2,setData2]=useState([])
const [feedback,setFeedback] =useState([])
const [email,setEmail]=useState('')
const [pass,setPass]=useState('')
    useEffect(() => {
        FetchData(data,setData)
        SavingcardData(data2,setData2)
        FeedbackData(feedback,setFeedback)
      }, []);
      console.log("data>>>>>>>>>>>>",data)
        return(
           
            <div className="test">
                <MainHeader/>
                {/* <Sign_In email={email} setEmail={setEmail} pass={pass} setPass={setPass}/> */}
                <SignUppage email={email} setEmail={setEmail} pass={pass} setPass={setPass}/>
                {/* <HomePage data={data} data2={data2} feedback={feedback}/> */}
                {/* <MsgPage msgimg={logo2} msg="Your cart is empty and sad :(" submsg="Add something to make it happy!" buttontext="Continue Shoping"/> */}
                {/* <ProductListPage/> */}
                {/* <ProductDetailpage/> */}
                {/* <Footer/> */}
            </div>
                
           
        )
}
export default Test
