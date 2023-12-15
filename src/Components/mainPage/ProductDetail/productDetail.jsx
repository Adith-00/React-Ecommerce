import React ,{useContext, useEffect, useState}from "react";
import CategoryCard from "../../categoryCard";
import Button from "../../button";
import "../../../assets/css/ProductDetail/productdeatil.css";
import Heading from "../heading";
import {
  productimage,
  womencat3,
  nxtarrow,
  nextArrow,
  rating,
  commentIcon,
  shipping,
  cart,
  smallProductImage,
  vedioimage,
  whitecart,
} from "../../../assets/images/images";
import { DataContext } from "../../../router/router";

const ProductDetailpage = () => {
   const [items,setItem]=useState()
   const{productId,data,cart,setCart}=useContext(DataContext);
  const service = [
    "Secure Payment",
    "SizeandPayment",
    "Freeshipping",
    "Free Shipping And Returns",
  ];
  useEffect(()=> {productId&& data?.map((item)=>{
    return  productId===item?.id ? (setItem(item)):null
  })},[productId])
  const AddtoCart =()=>{
      {cart? setCart(...cart,items):
        setCart(items)
      }
  }
  console.log("cart",cart)
  console.log("><><><>>M",items)
   
  return (
    <div className="Productdetailpage">
      <div className="oderingSection wrapper">
        <div className="produtImages">
          <h2>
            <img src={smallProductImage} alt="productimages" />
          </h2>
        </div>
        <h1 className="imageviewer">
          <img src={productimage} alt="productImage" />
        </h1>
        <div className="productDetails">
          <div className="path">
            <p>
              Shop{" "}
              <span>
                <img src={nxtarrow} alt="path" />
              </span>{" "}
              Women{" "}
              <span>
                <img src={nxtarrow} alt="path" />
              </span>{" "}
              Top
            </p>
          </div>
          <h1>{items&& items.itemName}</h1>
          <div className="rating">
            <div className="stars">
              <img src={rating} alt="rating" />
            </div>
            <div className="comments">
              <i>
                <img src={commentIcon} alt="comments" />
              </i>
              <p>264comments</p>
            </div>
          </div>
          <div className="Sizeselector">
            <div className="heading">
              <p className="main">Select size</p>
              <p className="sub">
                Size Guide
                <i>
                  <img src={nextArrow} alt="arrow" />
                </i>
              </p>
            </div>
            <div className="sizetile">
              {items&&items.size.map((item)=>{
                return<Button buttontxt={item} />
              })}
            </div>
          </div>
          <div className="colorSelector">
            <p className="heading">Colours Available</p>
            <div className="colortile">
              {items&&items.colors.map((item)=>{
                return <i style={{ backgroundColor: item }}></i>
              })}
              
            </div>
          </div>
          <div className="cartOptions">
            <Button buttontxt="Add to cart" image={whitecart} btnfun={AddtoCart} />
            <p className="price">{items&&items.itemPrice}</p>
          </div>
          <div className="services">
            {service.map((item, index) => {
              return (
                <div className="item">
                  <i>
                    <img src={shipping} alt="service" />
                  </i>
                  <p>{item}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="ProductDescription wrapper">
        <Heading headingTxt="Product Description" />
        <div className="details">
          <div className="description">
            <div className="heading">
              <p>Description</p> <p> User comments </p> <p>Question & Answer</p>
            </div>
            <div className="info">
              <p>
               {items&&items.description}
              </p>
            </div>
            <div className="grid">
              <div className="itm1">
                <p className="property">Fabric</p>
                <p className="propertytype">BioWasted-cotton</p>
              </div>
              <div className="itm1">
                <p className="property">Fabric</p>
                <p className="propertytype">BioWasted-cotton</p>
              </div>
              <div className="itm1">
                <p className="property">Fabric</p>
                <p className="propertytype">BioWasted-cotton</p>
              </div>
              <div className="itm1">
                <p className="property">Fabric</p>
                <p className="propertytype">BioWasted-cotton</p>
              </div>
              <div className="itm1">
                <p className="property">Fabric</p>
                <p className="propertytype">BioWasted-cotton</p>
              </div>
              <div className="itm1">
                <p className="property">Fabric</p>
                <p className="propertytype">BioWasted-cotton</p>
              </div>
            </div>
          </div>
          <div className="video"><img src={vedioimage} alt="video" /></div>
        </div>
      </div>
      <div className="Products wrapper">
        <Heading headingTxt="Similar products" />
        <div className="cards">
        {data &&
              data.map((item, index) => {
                const {  itemPrice,itemName } = item;
                return index <6 ? (
                  <CategoryCard itemname={itemName} price={itemPrice} image={womencat3} path={"/details"} />
                ) : null;
              })}
        </div>
      </div>
    </div>
  );
};
export default ProductDetailpage;
