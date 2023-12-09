import React from "react";
import Button from "../../button";
import "../../../assets/css/msgPage/msg.css"
const MsgPage=({msgimg,msg,submsg,buttontext})=>{
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
                <Button buttontxt={buttontext}/>
            </div>
        </div>
    )
}
export default MsgPage