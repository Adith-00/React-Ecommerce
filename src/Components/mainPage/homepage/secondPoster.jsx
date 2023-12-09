import React from "react";
import logo1 from "../../../assets/images/Group 43.png"
import logo2 from "../../../assets/images/Group 44.png"
import logo3 from "../../../assets/images/Group 45.png"
import logo4 from "../../../assets/images/Group 46.png"
import logo5 from "../../../assets/images/Group 47.png"



const SecondPoster=()=>{

        return(
            <div className="second-poster wrapper">
                <div className="text">
                    <h2 className="title">Top Brands Deal</h2>
                    <p className="description">up to <span>60%</span> off on brands</p>
                </div>
                <div className="logos">
                    <h1 className="logoimage"><img src={logo1} alt="" /></h1>
                    <h1 className="logoimage"><img src={logo2} alt="" /></h1>
                    <h1 className="logoimage"><img src={logo3} alt="" /></h1>
                    <h1 className="logoimage"><img src={logo4} alt="" /></h1>
                    <h1 className="logoimage"><img src={logo5} alt="" /></h1>
                </div>
            </div>
        )

}
 export default SecondPoster