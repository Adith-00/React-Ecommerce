import React from "react";
import Heading from "../heading";
import {  mencat5 } from "../../../assets/images/images";
import CategoryCard from "../../categoryCard";

const MenCategory=({data})=>{
    return(
        <div className="category wrapper">
        <Heading headingTxt="Category For Men" />
        <div className="cardsection">
          {data &&
            data?.map((item, index) => {
              const { id, category } = item;
              return (
                index < 10 && (
                  <CategoryCard
                    key={id}
                    itemname={category}
                    image={mencat5}
                  />
                )
              );
            })}
        </div>
      </div>
    )
}
export default MenCategory