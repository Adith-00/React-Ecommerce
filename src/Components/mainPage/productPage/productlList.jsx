import React from "react";
import CategoryCard from "../../categoryCard";
import image from "../../../assets/images/limelightcard1.png"
const ProductList=()=>{
    return(
        <div className="productlist">
            <div className="heading">
                <h2 className="title">Women,s Clothing</h2>
                <div className="filter">
                    <h2 className="cat1">New</h2>
                    <h2 className="cat2">Recommended</h2>
                </div>
            </div>
            <div className="cards">
                <CategoryCard image={image}/>
                <CategoryCard image={image}/>
                <CategoryCard image={image}/>
                <CategoryCard image={image}/>
                <CategoryCard image={image}/>
                <CategoryCard image={image}/>
                <CategoryCard image={image}/>
                <CategoryCard image={image}/>
                <CategoryCard image={image}/>
                <CategoryCard image={image}/>
                <CategoryCard image={image}/>
                <CategoryCard image={image}/>
            </div>
        </div>
    )
}
export default ProductList