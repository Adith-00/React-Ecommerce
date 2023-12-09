import React from "react";
import ItemList  from "./itemList";
import arrow from "../../../assets/images/uparrow.svg"


const DressStyle=()=>{
    return(
        <div className="dressstyle">
            <div className="title">
                <h2>Dress Style</h2>
                <i><img src={arrow} alt="" /></i>
            </div>
            <ItemList/>
        </div>
       
    )
}
export default DressStyle