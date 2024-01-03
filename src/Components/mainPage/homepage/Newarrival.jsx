import React from "react";
import Heading from "../heading";
import NewArrivalCard from "./newarrivalCard";
import { men3 } from "../../../assets/images/images";

const NewArrival=({data})=>{
    return(
        <div className="newarrival wrapper">
        <Heading headingTxt="New Arrival" />
        <div className="cardsection">
          <div className="cards">
            {data &&
              data?.map((item, index) => {
                const { id, category } = item;
                return index < 6 && (
                  <NewArrivalCard
                    key={id}
                    itemName={category}
                    cardimage={men3}
                  />
                ) ;
              })}
          </div>
        </div>
      </div>
    )
}
export default NewArrival