import React from "react";
import "../../../assets/css/OderDetails/oderdetails.css";
import { cartimg, closeCross, tracker } from "../../../assets/images/images";




const OrderDetail = () => {
    return (
        <div className="order">
            <div className="title">
                <span>#</span>
                <h2>Order Details</h2>
            </div>
            <div className="order-details">
                <div className="left">
                    <h3>Order no: #123456789</h3>
                    <p>Placed On  2 June 2023 2:40 PM </p>
                </div>
                <div className="right">
                    <p>Total : <span>$143.00</span></p>
                </div>
            </div>
            <div className="status">
                <img src={tracker} alt="" />
            </div>
            <div className="date">
                <p>8 June 2023 3:40 PM   </p>
                <p>Your order has been successfully verified.</p>
            </div>
            <div className="order-image">
                <div className="imgContainer">
                    <img src={cartimg} alt="dress" />
                </div>
                <div className="text">
                    <h4>Printed White cote</h4>
                    <p>Color: <span>White</span></p>
                </div>
                <p className="quantity">Qty : 1</p>
                <p className="price">$29.00</p>
                <i><img src={closeCross} alt="close" /></i>
            </div>
        </div>
    )

}
export default  OrderDetail;
