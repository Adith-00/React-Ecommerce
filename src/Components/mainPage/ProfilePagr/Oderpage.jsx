import React from "react";
import Button from "../../button";
import { cartimg } from "../../../assets/images/images";

const OderPage=()=>{
    return(
        <div className="oderpage">
            <h1 className="heading">
                My Oders
            </h1>
            <div className="OderLists">

                <div className="OderHeading">
                    <h1>Active</h1>
                    <h1>Cancelled</h1>
                    <h1>Completed</h1>
                </div>
                <div className="oders">
                    <div className="oderdetails">
                        <div className="oderInfo">
                            <h2>Oder no: #1234567</h2>
                            <p>Oder Date : <span>2 June 2023 2:40 PM</span></p>
                            <p>Estimated Delivery Time : <span>8 June 2023</span></p>
                        </div>
                        <div className="paymentinfo">
                            <p>Oder Status : <span>In progress</span></p>
                            <p>Payment Menthod : <span>Cash on Delivery</span></p>
                        </div>
                    </div>
                    <div className="productdetails">
                          <div className="product">
                            <h2><img src={cartimg} alt="product" /></h2>
                                <div className="info">
                                    <p>Blue clourPrint top</p>
                                    <p>Color : <span>Yellow</span></p>
                                    <p>Qnty : <span>1</span></p>
                                    <p><span>Total:$256</span></p>
                                </div>
                          </div>
                            
                            <Button buttontxt={"View Detail"}/>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
export default OderPage