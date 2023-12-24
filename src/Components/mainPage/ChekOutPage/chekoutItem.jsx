import React from "react";
import { smallProductImage } from "../../../assets/images/images";


const ChekoutItem =({price,productName})=>{
    return(
        <div className="item">
        <div className="product">
          <h2 className="productimage">
            <img src={smallProductImage} alt="product" />
          </h2>
          <div className="details">
            <p>{productName}</p>
            <p>
              Color : <span> Yellow</span>
            </p>
          </div>
        </div>
        <p className="rate">{price}</p>
      </div>
    )
}
export default ChekoutItem