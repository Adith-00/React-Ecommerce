import React from "react";
import Button from "../../button";
import { cartimg } from "../../../assets/images/images";
import OderItem from "./Oderitem";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const OderPage=()=>{
    const OderedItems = useSelector((state) => state.Oders.value)
    const navigate = useNavigate()
    console.log(OderedItems)

    return(
        <div className="oderpage">
            <h1 className="heading">
                My Oders
            </h1>
            {OderedItems.length>0 ?
             <div className="OderLists">
                <div className="OderHeading">
                    <h1>Active</h1>
                    <h1>Cancelled</h1>
                    <h1>Completed</h1>
                </div>
                {OderedItems?.map((item)=>{
                   const{itemName,itemPrice,id}=item
                    return<OderItem ProductName={itemName} ProductPrice={itemPrice} odNo={id}/>
                })}    
            </div>:<div className="msg">
            <h1> You Havent Odered Anything</h1>
            <Button buttontxt={"Go Shopping"} btnfun={()=>{navigate("/details")}}/>
             </div>}
           
        </div>
    )
}
export default OderPage