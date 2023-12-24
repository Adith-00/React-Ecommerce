import React, { useContext, useEffect } from "react";
import FilterSection from "./filterSection";
import "../../../assets/css/productPage/productPage.css";
import CategoryCard from "../../categoryCard";
import Heading from "../heading";
import { DataContext } from "../../../router/router";
import { EmptyCart, filterIcon, womencat1 } from "../../../assets/images/images";
import { useDispatch, useSelector } from "react-redux";
import {  setDefaultfilter } from "../../../redux/filterSlice";
import MsgPage from "../MsgPage/msgContainer";

const ProductListPage = () => {
  const { data } = useContext(DataContext);
  const dispatch=useDispatch()
  const filterminPrice = useSelector((state) => state.Filter. minPrice)
  const filtermaxnPrice = useSelector((state) => state.Filter.  maxPrice)
  const filtercolor = useSelector((state) => state.Filter.color)
  const filtersize = useSelector((state) => state.Filter. size)
  const filteredData = data.filter(item=> Number(item.itemPrice.replace("$", ""))>= filterminPrice && Number(item.itemPrice.replace("$", ""))<=filtermaxnPrice &&  (filtersize == "" || item.size.includes(filtersize))&& (filtercolor == "" || item.colors.includes(filtercolor)) )
  console.log("filtered data",filtersize)
  useEffect(()=>{
     dispatch(setDefaultfilter())
  },[])
 
  return (
    <div className="productListpage wrapper">
      <div className="product ">
        <FilterSection />
        <div className="productlist">
          <div className="heading">
            <h2 className="title">Women,s Clothing</h2>
            <div className="filter">
              <h2 className="cat1">New</h2>
              <h2 className="cat2">Recommended</h2>
              <i className="filterIcon"><img src={filterIcon} alt="filter" /></i>
            </div>
          </div>
          <div className="cards">
            {filteredData.length>0 ?
              filteredData.map((item, index) => {
                const {  itemPrice,id,itemName } = item;
                return (index < 20)&& (
                  <CategoryCard itemname={itemName} price={itemPrice} image={womencat1} path={"/productdetail"} id={id} products={item} indexs={index}/>
                ) 
              }): <MsgPage
              msgimg={EmptyCart}
              msg={" No Items Found For Your Match :("}
              buttontext={"Reset Filter ? "}
            />}
          </div>
        </div>
      </div>
      <div className="advertaisment">
        <Heading headingTxt="Clothing for Women Online in India" />
        <div className="adContent">
          <p className="msgHead">
            Reexplore Women's Clothing Collection Online at Euphoria
          </p>
          <p className="msg">
            Women's Clothing – Are you searching for the best website to buy
            Clothing for Women online in India? Well, your search for the
            coolest and most stylish womens clothing ends here. From trendy
            Casual Womens Wear Online shopping to premium quality cotton women's
            apparel, Euphoria has closet of Women Collection covered with the
            latest and best designs of Women's Clothing Online.
          </p>
          <p className="msg">
            Our collection of clothes for women will make you the trendsetter
            with an iconic resemblance of choice in Womens Wear.
          </p>
        </div>
        <div className="adContent">
          <p className="msgHead">
            One-Stop Destination to Shop Every Clothing for Women: Euphoria
          </p>
          <p className="msg">
            Today, Clothing for Women is gaining more popularity above all. This
            is because gone are the days when women were used to carrying
            uncomfortable fashion. Today, a lady looks prettier when she is in
            Casual Womens Wear which is a comfortable outfit. Concerning this,
            Euphoria has a big fat range of Stylish Women's Clothing that would
            make her the winner wherever she goes.
          </p>
          <p className="msg">
            Our collection of clothes for women will make you the trendsetter
            with an iconic resemblance of choice in Womens Wear. It is quite
            evident to say that there are very few Womens Clothing online stores
            where you can buy Western Wear for Women comprising the premium
            material and elegant design that you are always seeking for.
            Basically,
          </p>
        </div>
        <p className="seemore">See More</p>
      </div>
      <div className="pricingtable">
        <Heading headingTxt="Buy Women's Clothing at Best Price" />
        <div className="table">
          <div className="data">
            <div className="head">
              <h2 className="title">Women's Clothing</h2>
              <h2 className="pricetitle">Best Price</h2>
            </div>
            <div className="item">
              <p className="itemname">Pick Any 4- Womens Plain T-shirt Combo</p>
              <p className="price">₹1099</p>
            </div>
            <div className="item">
              <p className="itemname">Pick Any 4- Womens Plain T-shirt Combo</p>
              <p className="price">₹1099</p>
            </div>
            <div className="item">
              <p className="itemname">Pick Any 4- Womens Plain T-shirt Combo</p>
              <p className="price">₹1099</p>
            </div>
            <div className="item">
              <p className="itemname">Pick Any 4- Womens Plain T-shirt Combo</p>
              <p className="price">₹1099</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductListPage;
