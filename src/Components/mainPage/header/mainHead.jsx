import React from "react";
import { useLocation,useNavigate } from "react-router-dom";
import Button from "../../button";
import { user,Heart,cart,Logo } from "../../../assets/images/images";
import InputBox from "../../input";
import "../../../assets/css/Mainheader/mainHeader.css"


const MainHeader=()=>{
    const location = useLocation();
    const navigate =useNavigate()
    const logoimage =[{option:"Profile",image:user},{option:"Cart",image:cart},{option:"Wishlist",image:Heart}]
    const  navlist =["Shop","Men","Women","Combos","Joggers"]
    
    return location.pathname !== "/"&&location.pathname !== "/signup"?(
        <head>
            <h1 className="logo"><img src={Logo} alt="logo" /></h1>
            <div className="nav_list">
                <ul>
                {navlist?.map((item)=>{
                    return <li>{item}</li>
                })}
                </ul>
            </div>
            <InputBox style={"searchBox"} placeholder="search"/>
            <div className="logos">
                {logoimage?.map((item)=>{
                    const{image}=item
                    return <i><img src={image} alt="logo" /></i>
                })}
            </div>
            <div className="hamburger">
                {logoimage?.map((item)=>{
                   const {option ,image }=item
                        return   <p><span><img src={image} alt="logo" /> </span>{option}</p>
                    })}
                   
            </div>
        </head>
        
    )
    :(
    <head className="head2">
        <div className="left">
            <h1 className="logo"><img src={Logo} alt="logo" /></h1>
            <InputBox style="search_box" type="text" placeholder="search"/>
        </div>
        <div className="right">
            <p>English</p>
            <Button style="active" buttontxt="Log-in"/>
            <Button style="in_active" buttontxt="Sign-up"/>
        </div>
    </head>
    )
}
export default MainHeader