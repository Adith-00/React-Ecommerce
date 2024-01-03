import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../button";
import { user, Heart, cart, Logo } from "../../../assets/images/images";
import InputBox from "../../input";
import "../../../assets/css/Mainheader/mainHeader.css";

const MainHeader = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [menu,setMenu]=useState(false)
  const logoimage = [
    { option: "Profile", image: user, path: "/profile/userinfo" },
    { option: "Cart", image: cart, path: "/cart" },
    { option: "Wishlist", image: Heart,path:"/profile/wishlist" },
  ];
  const navlist = ["Shop", "Men", "Women", "Combos", "Joggers"];
  // const Navigatefunction = (path) => {
  //   navigate(path);
  // };
  const logoNavigation = () => {
    navigate("/home");
  };

  return location.pathname !== "/" && location.pathname !== "/signup" ? (
    <head>
      <h1 className="logo" onClick={logoNavigation}>
        <img src={Logo} alt="logo" />
      </h1>
      <div className="nav_list">
        <ul>
          {navlist?.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
      <InputBox style={"searchBox"} placeholder="search" />
      <i className="Menu" onClick={()=>{menu?setMenu(false):setMenu(true)}}><span class="material-symbols-outlined">menu</span></i>
      <div className="logos">
        {logoimage?.map((item) => {
          const { image, path } = item;
          return (
            <i onClick={() => navigate(path)}>
              <img src={image} alt="logo" />
            </i>
          );
        })}
      </div>
      {menu&&<div className="hamburger">
        {logoimage?.map((item) => {
          const { option, image,path } = item;
          return (
            <p onClick={()=>{navigate(path)}}>
              <span>
                <img src={image} alt="logo" />{" "}
              </span>
              {option}
            </p>
          );
        })}
      </div>}
      
    </head>
  ) : (
    <head className="head2">
      <div className="left">
        <h1 className="logo">
          <img src={Logo} alt="logo" />
        </h1>
        <InputBox style="search_box" type="text" placeholder="search" />
      </div>
      <div className="right">
        <p>English</p>
        <Button style="active" buttontxt="Log-in" btnfun={()=>{navigate("/")}}/>
        <Button style="in_active" buttontxt="Sign-up" btnfun={()=>{navigate("/signup")}}/>
      </div>
    </head>
  );
};
export default MainHeader;
