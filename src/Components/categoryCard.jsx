import React from "react"
import { Heart,nextArrow, } from "../assets/images/images";
import { useNavigate } from "react-router-dom";
const CategoryCard=({image,itemname,price,path})=>{

    const navigate = useNavigate()
    const navigateFun =()=>{
        navigate(path)
    }
    return(
        <div className="categorycard "onClick={navigateFun}>
            <h1 className="cardimage" >
                <img src={image} alt="cardimage" />
            </h1>
            <div className="info">
                <div className="text">
                    <h2 className="title">{itemname}</h2>
                    <p className="sub">ExploreNow!</p>
                </div>
                <i className="arrow"><img src={nextArrow} alt="arrow" /></i>
                <p className="price">{price}</p>
            </div>
            <i className="heart"><img src={Heart} alt="like" /></i>
        </div>
    )
}
export default CategoryCard