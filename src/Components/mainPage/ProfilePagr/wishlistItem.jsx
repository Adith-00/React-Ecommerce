import React from "react";
import { cartimg, closeCross } from "../../../assets/images/images";
import Button from "../../button";
import { useDispatch } from "react-redux";
import { addItem } from "../../../redux/cartSlice";
import { removeWishlit } from "../../../redux/wishlistSlice";

const WishListitem=({itemName,itemPrice,item,id})=>{
    const dispatch= useDispatch()

    return(
        <div className="wishlistitem">
            <Button style={"cross"} image={closeCross} btnfun={()=>{dispatch(removeWishlit(id))}}/>
            <h2 className="image"><img src={cartimg} alt="product" /></h2>
            <div className="info">
                <div className="about">
                    <p className="name">{itemName}</p>
                    <p className="color">Color : <span>yellow</span></p>
                    <p className="size">Size : <span>M</span></p>
                </div>
                        <p className="price">{itemPrice}</p>
                <Button style={"cartbutton"} buttontxt={"Add to Cart"} btnfun={()=>{dispatch(addItem(item))}}/>
            </div>
        </div>
    )
}

export default WishListitem