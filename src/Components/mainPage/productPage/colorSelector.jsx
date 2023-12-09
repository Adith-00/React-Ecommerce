import React from "react";
import arrow from "../../../assets/images/uparrow.svg"


const ColorSelector=()=>{
    return(
        <div className="colorselector">
            <div className="title">
                <h2>Colors</h2>
                <i><img src={arrow} alt="" /></i>
            </div>
            <div className="colortiles">
                <div className="tile">
                    <i className="color"></i>
                    <p className="colorname">Aqua</p>
                </div>
                
            </div>
        </div>
    )
}
export default ColorSelector