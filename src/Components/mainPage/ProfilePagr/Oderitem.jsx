import React from "react";
import Button from "../../button";
import { cartimg } from "../../../assets/images/images";
import { useNavigate } from "react-router-dom";

const OderItem = ({ProductName,ProductPrice,odNo}) => {
  const navigate =useNavigate()
  return (
    <div className="oders">
      <div className="oderdetails">
        <div className="oderInfo">
          <h2>Oder no: #12345{odNo}</h2>
          <p>
            Oder Date : <span>2 June 2023 2:40 PM</span>
          </p>
          <p>
            Estimated Delivery Time : <span>8 June 2023</span>
          </p>
        </div>
        <div className="paymentinfo">
          <p>
            Oder Status : <span>In progress</span>
          </p>
          <p>
            Payment Menthod : <span>Card</span>
          </p>
        </div>
      </div>
      <div className="productdetails">
        <div className="product">
          <h2>
            <img src={cartimg} alt="product" />
          </h2>
          <div className="info">
            <p>{ProductName}</p>
            <p>
              Color : <span>Yellow</span>
            </p>
            <p>
              Qnty : <span>1</span>
            </p>
            <p>
              <span>Total:{ProductPrice}</span>
            </p>
          </div>
        </div>

        <Button buttontxt={"View Detail"} btnfun={()=>{navigate("/profile/oderdetails")}} />
      </div>
    </div>
  );
};
export default OderItem
