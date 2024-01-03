import React, { useState } from "react"
import { Heart,LikedHeart,nextArrow, } from "../assets/images/images";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../router/router";
import { useContext } from "react";
import { useDispatch } from "react-redux";
import { addWishlist, removeWishlit } from "../redux/Slice/wishlistSlice";

const CategoryCard=({image,itemname,price,path,id,products})=>{
    const{setProductId}=useContext(DataContext);
    const[wishlist,setWishlist]=useState(Heart)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const navigateFun =()=>{
        navigate(path)
        {id&& setProductId(id)}
        console.log(id)
    }
    const Wishlistfunction = () =>
    wishlist === Heart
    ? (setWishlist(LikedHeart), dispatch(addWishlist(products)))
    : (setWishlist(Heart), dispatch(removeWishlit(id)));

    return(
        <div className="categorycard ">
            <h1 className="cardimage"onClick={navigateFun} >
                <img src={image} alt="cardimage" />
            </h1>
            <div className="info">
                <div className="text">
                    <h2 className="title">{itemname}</h2>
                    <p className="sub">ExploreNow!</p>
                </div>
                <i className="arrow"><img src={nextArrow} alt="arrow" /></i>
                <p className="price">{price}</p>
            </div>
            <i className="heart" onClick={Wishlistfunction}><img src={wishlist} alt="like" /></i>
        </div>
    )
}
export default CategoryCard