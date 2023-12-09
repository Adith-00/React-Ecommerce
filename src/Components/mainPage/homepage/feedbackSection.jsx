import React from "react";
import FeedbackCard from "./feedbackCard";
import Heading from "../heading";

const Feedback=()=>{

        return(
            <div className="feedback wrapper">
                <Heading headingTxt="Feedback"/>
                <div className="cards">
                    <FeedbackCard/>
                    <FeedbackCard/>
                    <FeedbackCard/>
                </div>
            </div>
        )
}
export default Feedback