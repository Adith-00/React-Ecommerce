import React from "react";
import Heading from "../heading";
import FeedbackCard from "./feedbackCard";
import { reviewer2 } from "../../../assets/images/images";

const FeedBack=({feedback})=>{
    return(
        <div className="feedback wrapper">
        <Heading headingTxt="Feedback" />
        <div className="cards">
          {feedback &&
            feedback?.map((item, index) => {
              const { name, feedback } = item;
              return (
                <FeedbackCard
                  customerName={name}
                  Feedbackmsg={feedback}
                  profile={reviewer2}
                />
              );
            })}
        </div>
      </div>
    )
}
export default FeedBack