import React from "react";
import Button from "../../button";
import  arrow from "../../../assets/images/downArrow.svg"
const SavingZonecard =({image,itemName,about,offer})=>{

     return(
        <div className="card">
            <h1 className="cardimage">
                <img src={image} alt="savingZone" />
            </h1>
            <div className="info">
                <h2 className="top">{itemName}</h2>
                <p className="mid">{about} </p>
                <p className="bottom">{offer}</p>
                <i className="arrow"><img src={arrow} alt="arrow" /></i>
                <Button buttontxt="SHOP NOW"/>
            </div>
        </div>
     )

}
export default SavingZonecard