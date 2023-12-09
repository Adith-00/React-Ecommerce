import React from "react";
import Heading from "../heading";
import SavingZonecard from "./savingZonecard";
import image1 from "../../../assets/images/savingZonecard1.png"
import image2 from "../../../assets/images/savingzone card2.png"
const SavingZoneholder =()=>{

    return(
        <div className="savingzone wrapper">
            <Heading headingTxt="Big Saving Zone"/>
            <div className="topcard">
                <SavingZonecard image={image1}/>
                <SavingZonecard image={image1}/>
                <SavingZonecard image={image1}/>
            </div>
            <div className="bottomcard">
                <SavingZonecard image={image2}/>
                <SavingZonecard image={image2}/>
            </div>
        </div>
    )
}
export default SavingZoneholder