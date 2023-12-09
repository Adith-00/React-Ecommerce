import React from "react";
import slider from "../../../assets/images/One.png"
import arrow from "../../../assets/images/uparrow.svg"
import InputBox from "../../input";
const PriceSection=()=>{
    return(
        <div className="pricesection">
            <div className="title">
                <h2>Price</h2>
                <i><img src={arrow} alt="" /></i>
            </div>
            <div className="pricefilter">
                <i className="slider">slider</i>
                <div className="priceindicator">
                    <InputBox/>
                    <InputBox/>
                </div>
            </div>
        </div>
    )
}
export default PriceSection