import React from "react";
import Button from "../../button";
import "../../../assets/css/msgPage/msg.css"
import { useNavigate } from "react-router-dom";
const MsgPage=({msgimg,msg,submsg,buttontext,path})=>{
    const navigate = useNavigate()
    const buttonFunction=()=>{
        navigate(path)
    }
    return(
        <div className="msgpage">
            <div className="msgcontent">
                <h1 className="msgimage">
                    <img src={msgimg} alt="msgimg" />
                </h1>
                <div className="msg">
                    <h1>{msg}</h1>
                    <p>{submsg}</p>
                </div>
                <Button buttontxt={buttontext} btnfun={buttonFunction}/>
            </div>
        </div>
    )
}
export default MsgPage