import React from "react";
import NewArrivalCard from "./newarrivalCard";
import Button from "../../button";
import previous from "../../../assets/images/previousarrow.svg"
import next from "../../../assets/images/nextarrow.svg"
import Heading from "../heading";

const NewArrivalholder=()=>{

    return(
        <div className="newarrival wrapper">
            <Heading headingTxt="New Arrival"/>
            <div className="cardsection">
                <Button image={previous}/>
                 <div className="cards">
                    <NewArrivalCard/>
                    <NewArrivalCard/>
                    <NewArrivalCard/>
                    <NewArrivalCard/>
                 </div>
                <Button image={next}/>
            </div>

        </div>
    )
}
export default NewArrivalholder