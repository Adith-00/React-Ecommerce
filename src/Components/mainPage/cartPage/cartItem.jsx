import React from "react";
import Button from "../../button";
import { cartimg, deleteIcon } from "../../../assets/images/images";
const CartItem = ({itemName,price}) => {
  return (
    <div className="item ">
      <div className="product">
        <h2>
          <img src={cartimg} alt="product" />
        </h2>
        <div className="details">
          <p className="name">{itemName}</p>
          <p className="color">Color : Yellow</p>
          <p className="size">Size : M</p>
        </div>
      </div>
      <p className="price">{price}</p>
      <div className="quantity">
        <Button buttontxt="-" />
        <p>1</p>
        <Button buttontxt="+" />
      </div>
      <p className="shipping">Free</p>
      <p className="total">{price}</p>
      <span className="delete">
        <i>
          <img src={deleteIcon} alt="delete" />
        </i>
      </span>
    </div>
  );
};
export default CartItem;
