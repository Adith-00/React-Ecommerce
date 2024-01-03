import React from "react";

const  SecondPoster=({logo})=>{
    return(
        <div className="second-poster wrapper">
        <div className="text">
          <h2 className="title">Top Brands Deal</h2>
          <p className="description">
            up to <span>60%</span> off on brands
          </p>
        </div>
        <div className="logos">
          {logo &&
            logo.map((item) => {
              return (
                <h1 className="logoimage">
                  <img src={item} alt="brandlogo" />
                </h1>
              );
            })}
        </div>
      </div>
    )
}
export default SecondPoster