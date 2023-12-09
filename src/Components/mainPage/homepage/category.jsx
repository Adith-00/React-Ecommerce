import React from "react";
import CategoryCard from "../../categoryCard";
import Heading from "../heading";

const Category=({heading,image})=>{

    return(
        <div className="category wrapper">
            <Heading headingTxt={heading}/>
            <div className="cardsection">
                <CategoryCard image={image} />
                <CategoryCard image={image} />
                <CategoryCard image={image} />
                <CategoryCard image={image} />
                <CategoryCard image={image} />
                <CategoryCard image={image} />
                <CategoryCard image={image} />
                <CategoryCard image={image} />
            </div>
        </div>
    )
}
export default Category