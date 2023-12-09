import React, { useState } from "react";
import Button from "../../button";
import InputBox from "../../input";

const UserInfo=()=>{
    const [readonlys ,setreadonly]=useState(true)
    return(
        <div className="userinfo">
            <h1 className="heading">
                My Info
            </h1>
            <div className="contactDetails">
                <h2 className="contactheading">ContactDetails</h2>
                  <div className="inputs">
                    <p className="label">Your Name</p>
                    <div className="inputsection">
                        <InputBox type={"readonly"} readOnly={readonlys} value={"sample"} />
                        <Button buttontxt={"change"}/>
                    </div>
                  </div>
            </div>
            <div className="Shippingaddress">
                <h1 className="heading">
                   Address
                </h1>
                <div className="address">
                    <div className="item">
                        <p className="heading">Jhanvi shah</p>
                        <p className="phone">8980252445</p>
                        <p className="address">1/4 Pragatinagar Flats, opp. jain derasar , near Jain derasar, Vijaynagar road </p>
                         <div className="addresstype">
                                <p>Home</p>
                                <p>Default billing address</p>
                         </div>
                    <div className="buttons">
                        <Button buttontxt={"Remove"}/>
                        <Button buttontxt={"Edit"}/>
                    </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
export default UserInfo