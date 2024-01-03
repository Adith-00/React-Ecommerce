import React from "react";
import CategoryCard from "../../categoryCard";
import Heading from "../heading";
import { womencat2 } from "../../../assets/images/images";

const LimeLight=({data})=>{
    return(
        <div className="limelight wrapper">
        <Heading headingTxt="In The Limelight" />
        <div className="cardsection">
          {data &&
            data?.map((item, index) => {
              const { id, category, itemPrice } = item;
              return (
                index < 5 && (
                  <CategoryCard
                    key={id}
                    itemname={category}
                    image={womencat2}
                    price={itemPrice}
                    products={item}
                    indexs={index}
                  />
                )
              );
            })}
        </div>
      </div>
    )
}
export default LimeLight