import React from "react";

const NewArrivalCard =({cardimage,itemName})=>{
    return(
        <div className="new-arrival-card">
            <h1 className="cardimage">
                <img src={cardimage} alt="cardimage" />
            </h1>
            <p className="cardinfo">{itemName}</p>
        </div>
    )
}
export default NewArrivalCard