import React from "react";
import Button from "../../button";
import { cartimg, closeCross, emptyWishlist } from "../../../assets/images/images";
import MsgPage from "../MsgPage/msgContainer";

const Wishlist =()=>{
return(
   <div className="wishlist">
    <h1 className="heading">Wishlist</h1>
    <div className="wishlistcontainer">
        <div className="wishlistitem">
            <Button style={"cross"} image={closeCross}/>
            <h2 className="image"><img src={cartimg} alt="product" /></h2>
            <div className="info">
                <div className="about">
                    <p className="name">Blue clourPrint top</p>
                    <p className="color">Color : <span>yellow</span></p>
                    <p className="size">Size : <span>M</span></p>
                </div>
                <p className="price">$250</p>
                <Button style={"cartbutton"} buttontxt={"Add to Cart"}/>
            </div>
        </div>
        
        {/* <MsgPage msgimg={emptyWishlist} msg={"Your wishlist is empty."} submsg={"You don’t have any products in the wishlist yet. You will find a lot of interesting products on our Shop page."} buttontext={"Continue Shoping"}/> */}
    </div>
   </div>

)

}
export default Wishlist