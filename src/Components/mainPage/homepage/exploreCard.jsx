import React from "react";
const ExploreCard =({cardimg})=>{
    
    return(
        <div className="explorecard">
            <h1 className="cardimage">
                <img src={cardimg} alt="explore" />
            </h1>
            <div className="info">
                <p className="top">Low Price</p>
                <div className="mid">
                    <h1 className="midtop">High Coziness</h1>
                    <p className="midbottom">up to 50% Off</p>
                </div>
                <p className="bottom"> Explore items</p>
            </div>
        </div>
    )
}
export default ExploreCard