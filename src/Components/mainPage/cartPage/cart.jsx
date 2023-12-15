import React,{useContext} from "react";
import InputBox from "../../input";
import Button from "../../button";
import { EmptyCart, cartimg, deleteIcon, nxtarrow } from "../../../assets/images/images";
import "../../../assets/css/CartPage/cart.css"
import MsgPage from "../MsgPage/msgContainer";
import { DataContext } from "../../../router/router";
const CartPage =()=>{

 const{cart,setCart}=useContext(DataContext)
 return (
    <div className="cartpage">
        <div className="top ">
            <p className="path">Home <span><img src={nxtarrow} alt="path" /></span> Cart</p>
            <p className="note">Please fill in the fields below and click place order to complete your purchase! <br />Already registered? <span> Please login here </span> </p>
        </div>
        <div className="mid">
            <div className="heading">
                <p className="product">Product Details</p>
                <p className="others">Price</p>
                <p className="others">Quantity</p>
                <p className="others">Shipping</p>
                <p className="others">Subtotal</p>
                <p className="others">Action</p>
            </div>
            <div className="item ">
                        <div className="product">
                            <h2><img src={cartimg} alt="product" /></h2>
                            <div className="details">
                                <p className="name">sample name</p>
                                <p className="color">Color : Yellow</p>
                                <p className="size">Size : M</p>
                            </div>
                        </div>
                        <p className="price">344</p>
                        <div className="quantity">
                            <Button buttontxt="-"/>
                            <p>1</p>
                            <Button buttontxt="+"/>
                        </div>
                        <p className="shipping">Free</p>
                        <p className="total">344</p>
                        <span className="delete"><i><img src={deleteIcon} alt="delete" /></i></span> 
                    </div>
            {cart&&cart.map((item)=>{
                const{itemName,itemPrice}=item
                return
            })}
            
        </div>
        <div className="bottom ">
            <div className="discountSection ">
                <div className="heading">
                    <p className="main">Discount Codes</p>
                    <p className="sub">Enter your coupon code if you have one</p>
                </div>
                <div className="couponinput">
                    <InputBox/><Button buttontxt="Apply Coupon"/>
                </div>
                <Button buttontxt="Continue Shopping"/>
            </div>
            <div className="billsection  ">
                    <div className="bill">
                        <p className="total">Sub Total <span>$520.00</span></p>
                        <p className="shipping">Shipping <span>$5.0</span></p>
                        <p className="Grandtotal"> Grand Total <span>$525.00</span></p>
                    </div>
                    <Button style="chekoutbtn" buttontxt="Continue Chekout"/>
            </div>
        </div>
        {/* <MsgPage msgimg={EmptyCart} msg={"Your cart is empty and sad :("} submsg={"Add something to make it happy!"} buttontext={"Continue Shopping "}/> */}
    </div>
 )

}
export default CartPage;




