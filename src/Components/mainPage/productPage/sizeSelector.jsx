import React from "react";
import Button from "../../button";
import arrow from "../../../assets/images/uparrow.svg"


const SizeSelector=()=>{
    return(
        <div className="szieselector">
            <div className="title">
                <h2>Size</h2>
                <i><img src={arrow} alt="" /></i>
            </div>
            <div className="sizetile">
                <Button buttontxt="xl"/>
            </div>
        </div>
    )
}
export default SizeSelector