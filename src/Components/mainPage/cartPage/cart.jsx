import React, { useContext, useEffect, useState } from "react";
import InputBox from "../../input";
import Button from "../../button";
import { EmptyCart, nxtarrow } from "../../../assets/images/images";
import "../../../assets/css/CartPage/cart.css";
import MsgPage from "../MsgPage/msgContainer";
import { DataContext } from "../../../router/router";
import CartItem from "./cartItem";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const navigate = useNavigate();
  const [setprice, setTotalprice] = useState("");
  const cart = useSelector((state) => state.Cart.value);
  console.log("CartItems", cart);
  useEffect(() => {
    price();
  }, [cart]);
  const price = () => {
    let price = 0;
    {
      cart?.map((item) => {
        let ItemPrice = Number(item.itemPrice.replace("$", ""));
        return (price = ItemPrice + price);
      });
    }
    setTotalprice(price);
  };
  const checkout = () => {
    navigate("/checkout");
  };

  return (
    <div className="cartpage">
      <div className="top ">
        <p className="path">
          Home{" "}
          <span>
            <img src={nxtarrow} alt="path" />
          </span>{" "}
          Cart
        </p>
        <p className="note">
          Please fill in the fields below and click place order to complete your
          purchase! <br />
          Already registered? <span> Please login here </span>{" "}
        </p>
      </div>
      {cart.length? (
        <>
          <div className="mid">
            <div className="heading">
              <p className="product">Product Details</p>
              <p className="others">Price</p>
              <p className="others">Quantity</p>
              <p className="others">Shipping</p>
              <p className="others">Subtotal</p>
              <p className="others">Action</p>
            </div>
            {cart &&
              cart.map((item, index) => {
                const { itemName, itemPrice } = item;
                return (
                  <CartItem
                    itemName={itemName}
                    price={itemPrice}
                    index={index}
                  />
                );
              })}
          </div>
          <div className="bottom ">
            <div className="discountSection ">
              <div className="heading">
                <p className="main">Discount Codes</p>
                <p className="sub">Enter your coupon code if you have one</p>
              </div>
              <div className="couponinput">
                <InputBox />
                <Button buttontxt="Apply Coupon" />
              </div>
              <Button buttontxt="Continue Shopping" />
            </div>
            <div className="billsection  ">
              <div className="bill">
                <p className="total">
                  Sub Total <span>${setprice}</span>
                </p>
                <p className="shipping">
                  Shipping <span>$5.0</span>
                </p>
                <p className="Grandtotal">
                  {" "}
                  Grand Total <span>${setprice + 5}</span>
                </p>
              </div>
              <Button
                style="chekoutbtn"
                buttontxt="Continue Chekout"
                btnfun={checkout}
              />
            </div>
          </div>
        </>
      ) : (
        <MsgPage
          msgimg={EmptyCart}
          msg={"Your cart is empty and sad :("}
          submsg={"Add something to make it happy!"}
          buttontext={"Continue Shopping "}
          path={'/details'}
        />
      )}
    </div>
  );
};
export default CartPage;
