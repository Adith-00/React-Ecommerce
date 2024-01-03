import React from "react";
import FilterSection from "./filterSection";
import CategoryCard from "../../categoryCard";
import MsgPage from "../MsgPage/msgContainer";
import { EmptyCart, filterIcon, womencat1 } from "../../../assets/images/images";

const ProductItems=({toogler,setToogler,filteredData})=>{
    return(
        <div className="product ">
        {toogler&& <FilterSection />}
       
        <div className="productlist">
          <div className="heading">
            <h2 className="title">Women,s Clothing</h2>
            <div className="filter">
              <h2 className="cat1">New</h2>
              <h2 className="cat2">Recommended</h2>
              <i className="filterIcon" onClick={()=>{toogler?setToogler(false):setToogler(true)}}><img src={filterIcon} alt="filter" /></i>
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
    )
}
export default ProductItems