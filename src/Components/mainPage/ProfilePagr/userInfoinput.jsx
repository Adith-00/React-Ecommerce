import React, { useState } from "react";
import InputBox from "../../input";
import Button from "../../button";

const UserInfoInput=({label,value,onChange,type})=>{
    const [readonlys, setreadonly] = useState(true);

    return(
        <div className="inputs">
          <p className="label">{label}</p>
          <div className="inputsection">
            <InputBox type={"readonly"} readOnly={readonlys} value={value} onChange={onChange}  />
            <Button buttontxt={readonlys?"Change":"Save"}btnfun={()=>{readonlys?setreadonly(false):setreadonly(true)}}  />
          </div>
        </div>
    )
}
export default UserInfoInput