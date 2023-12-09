import React from "react";
import Button from "../../button";
import image1 from "../../../assets/images/poster1.png"
import image2 from "../../../assets/images/poster2.png"
const Poster=()=>{

    return(
        <div className="poster wrapper">
            <div className="postercard">
                <h1 className="image1"><img src={image1} alt="poster" /></h1>
                <h1 className="image2"><img src={image2} alt="poster" /></h1>
            </div>
            <div className="info">
                <h1 className="top">WE MADE YOUR EVERYDAY FASHION BETTER!</h1>
                <p className="bottom">In our journey to improve everyday fashion, euphoria presents EVERYDAY wear range - Comfortable & Affordable fashion 24/7</p>
                <Button buttontxt="ShopNow"/>
            </div>
        </div>
    )

}
export default Poster