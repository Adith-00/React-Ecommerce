import React,{useState,useEffect} from "react";
import InputBox from "../../input";
import Button from "../../button";
import Heading from "../heading";
import { gpaylogo, paypal, paypass, smallProductImage, visalogo } from "../../../assets/images/images";
import "../../../assets/css/Chekoutpage/chekout.css";
import { Chek_outfeilds, carddetailInput } from "../../../assets/const/consts";
import { useSelector } from "react-redux";
import ChekoutItem from "./chekoutItem";

const Checkout = () => {
  const[setprice,setTotalprice]=useState('')
  const paymentlogos = [gpaylogo,visalogo,paypal,paypass]
  const products = useSelector((state) => state.Cart.value)
  useEffect(() => {
    price();
  }, [products]);
  const price =()=>{
    let price =0
   {products?.map((item)=>{
       let ItemPrice =Number(item.itemPrice.replace('$',"")) 
       return price = ItemPrice + price
   })}
   setTotalprice(price)
 }
 const paymentFunc = (e)=>{
  e.preventDefault();
  if(setprice === ""){
 alert("please enter amount ");
  }else{
    let options = {
      key: "rzp_test_3q8zMI1AhpfPBL",
      key_secret:"MWtW4zgLnqdaTq3f2QmnU3QA",
      amount: setprice*100,
      currency:"USD",
      name:"Euphoria",
      description:"for testing purpose",
      handler: function(response){
        console.log(response.razorpay_payment_id);
      },
      prefill: {
        name:"Adith",
        email:"kaadith092@gmail.com",
        contact:"7590902245"
      },
      notes:{
        address:"Razorpay Corporate office"
      },
      theme: {
        color:"#7833cc"
      }
    };
    let pay = new window.Razorpay(options);
    pay.open();
  }
}
  return (
    <div className="chekoutPage wrapper">
      <div className="chekoutSession">
        <Heading headingTxt={"Checkout"} />
        <div className="billingdetails">
          <h2 className="heading">Billing Details</h2>
          <div className="inputs">
            {Chek_outfeilds?.map((item) => {
              const { label, placeholder, type, Style ,Options } = item;
              return (
                <div className="inputFeilds">
                  <p>{label}</p>
                  {type !=="dropdown"? 
                   <InputBox
                    placeholder={placeholder}
                    type={type}
                    style={Style}
                  />:  <select placeholder={placeholder} className={Style}>
                  <option>--Select An Item --</option>
                  {Options.map((item) => {
                    return <option>{item}</option>;
                  })}
                </select>}
                 
                  <p className="error"></p>
                </div>
              );
            })}
          </div>
          <Button buttontxt={"Continue to delivery"} />
          <p className="chekbox">
            <span>
              <InputBox type={"checkbox"} />
            </span>
            Save my information for faster checkout
          </p>
        </div>
        <div className="Shippingaddress">
          <div className="heading">
            <h2 className="main">Shipping Address</h2>
            <p className="sub">
              Select the address that matches your card or payment method.
            </p>
          </div>
          <div className="selector">
            <p className="top">
              <span>
                <InputBox type={"radio"} />
              </span>
              Same as billing Address
            </p>
            <p>
              <span>
                <InputBox type={"radio"} />
              </span>
              Use a diffrent shipping address
            </p>
          </div>
        </div>
        <div className="shippingDetails">
          <h2>Shipping Method</h2>
          <div className="details">
            <p className="first">Arrives By Monday June , 7</p>
            <div className="deliverycharge">
              <div className="text">
                <p className="main">Delivery Charges</p>
                <p className="sub">Additional fess may apply</p>
              </div>
              <p className="price">$5.00</p>
            </div>
          </div>
        </div>
        <div className="payment">
          <div className="heading">
            <h1>Payment Method</h1>
            <p>All transactions are secure and encrypted.</p>
          </div>
          <form className="paymentOptions">
            <div className="creditCard">
              <div className="heading">
                <InputBox type={"radio"} />
                <div className="optionHeading">
                  <p className="main">Credit Card</p>
                  <p className="sub">We accept all major credit cards</p>
                </div>
              </div>
              <div className="options">
                {paymentlogos.map((item)=>{
                  return<i>
                          <img src={item} alt="pay options" />
                        </i>
                })}
                
              </div>
              <div className="cardDetails">
                {carddetailInput.map((item)=>{
                  const{placeholder,Style,type}=item
                  return<InputBox placeholder={placeholder}type={type}/>
                })}
              </div>
            </div>
            <div className="option2">
              <InputBox type={"radio"} />
              <div className="optionHeading">
                <p className="main">Cash on Delivery</p>
                <p className="sub">pay with cash up on delivery</p>
              </div>
            </div>
            <div className="option3">
              <InputBox type={"radio"} />
              <p>Paypal</p>
            </div>
          </form>
          <Button style={"paymetButton"} buttontxt={"Pay Now"} btnfun={paymentFunc} />
        </div>
      </div>
      <div className="productSummary">
        <h1>Oder Summary</h1>
        <div className="oderitems">
          {products&&products.map((item)=>{
          const{itemName,itemPrice}=item
          return <ChekoutItem productName={itemName} price={itemPrice}/>
         
          })}
        </div>
        <div className="billsummary">
          <div className="primarybill">
            <p>Sub Totoal <span>${setprice}</span></p>
            <p>Savings</p>
          </div>
          <p className="shipping">Shipping <span>$5</span></p>
          <p className="TotalBill"> Total <span>${setprice+5}</span> </p>
        </div>
      </div>
    </div>
  );
};
export default Checkout;
