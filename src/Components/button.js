import React from "react";

const Button=({btnfun,buttontxt,style,image})=>{
    return(
        <button className={style} onClick={btnfun} >
            <span>
                {image&&<img src={image} alt="btnimg" />}
            </span>
            {buttontxt}</button>
    )
}
export default Button