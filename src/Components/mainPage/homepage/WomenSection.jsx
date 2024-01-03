import React from "react";
import Heading from "../heading";
import CategoryCard from "../../categoryCard";
import { womencat3 } from "../../../assets/images/images";


const WomenSection=({data})=>{
    return(
        <div className="category wrapper">
        <Heading headingTxt="Category For Women" />
        <div className="cardsection">
          {data &&
            data?.map((item, index) => {
              const { id, category } = item;
              return (
                index < 5 && (
                  <CategoryCard
                    key={id}
                    itemname={category}
                    path={"/details"}
                    image={womencat3}
                  />
                )
              );
            })}
        </div>
      </div>
    )
}
export default WomenSection