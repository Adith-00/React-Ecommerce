import React from "react";
import Button from "../../button";
import { useDispatch } from "react-redux";
import { setAllFields, setFeild } from "../../../redux/Slice/AddressSlice";
import { useNavigate } from "react-router-dom";
import { removeAddress } from "../../../redux/Slice/AddressHolder";

const Addressitem=({FirstName,SeconName,Phone,address,items,index})=>{
    const dispatch = useDispatch()
    const navigate = useNavigate()
    return(
       
        <div className="item">
            <p className="heading">{FirstName}{SeconName}</p>
            <p className="phone">{Phone}</p>
            <p className="address">{address}</p>
             <div className="addresstype">
                    <p>Home</p>
                    <p>Default billing address</p>
             </div>
            <div className="buttons">
                <Button buttontxt={"Remove"} btnfun={()=>{dispatch(removeAddress(index))}} />
                <Button buttontxt={"Edit"} btnfun={()=>{navigate("/profile/addressedit");dispatch(setFeild(items))}}/>
            </div>
        </div> 
    )
}
export default Addressitem