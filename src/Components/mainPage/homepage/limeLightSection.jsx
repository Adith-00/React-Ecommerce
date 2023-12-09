import React from "react";
import CategoryCard from "../../categoryCard";
import Heading from "../heading";
import image1 from "../../../assets/images/limelightcard1.png"
const Limelight=()=>{

        return(
            <div className="limelight wrapper" >
                <Heading headingTxt="In The Limelight"/>
                <div className="cardsection">
                    <CategoryCard image={image1}/>
                    <CategoryCard image={image1}/>
                    <CategoryCard image={image1}/>
                    <CategoryCard image={image1}/>
                </div>
            </div>
        )

}
export default Limelight