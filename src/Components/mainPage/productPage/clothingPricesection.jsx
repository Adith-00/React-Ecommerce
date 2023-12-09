import React from "react";
import Heading from "../heading";

const PricingTable=()=>{

    return(
        <div className="pricingtable">
            <Heading headingTxt="Buy Women's Clothing at Best Price"/>
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
    )
}
export default PricingTable