import React from "react"
import "../../assets/css/Heading/heading.css"

const Heading=({headingTxt})=>{
    return(
        <div className="titlesection"> 
        <div className="emptydiv"></div> <h1 className="title">{headingTxt}</h1>
        </div>
    )
}
export default Heading



