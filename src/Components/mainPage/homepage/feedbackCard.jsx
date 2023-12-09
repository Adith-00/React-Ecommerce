import React from "react";
 import { rating } from "../../../assets/images/images";
 
const FeedbackCard=({profile,Feedbackmsg,customerName})=>{
        return(
            <div className="feedbackCard">
                <div className="top">
                    <h1 className="profile"><img src={profile} alt="profile" /></h1>
                    <div className="rating">
                        <h1 className="star"><img src={rating} alt="rating" /></h1>
                    </div>
                </div>
                <div className="name">{customerName}</div>
                <div className="rivew">{Feedbackmsg}</div>
            </div>
        )
}
export default FeedbackCard