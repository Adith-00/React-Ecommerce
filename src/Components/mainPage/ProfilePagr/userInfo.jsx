import React, { useState } from "react";
import Button from "../../button";
import InputBox from "../../input";
import { useDispatch, useSelector } from "react-redux";
import Addressitem from "./addressItem";
import { useNavigate } from "react-router-dom";
import UserInfoInput from "./userInfoinput";
import { setAllInfo } from "../../../redux/Slice/UserInfoSlice";

const UserInfo = () => {
  const Address = useSelector((state) => state.AddressHolder.value);
  const Userinfo = useSelector((state)=>state. UserInfo.value)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  return (
    <div className="userinfo">
      <h1 className="heading">My Info</h1>
      <div className="contactDetails">
        <h2 className="contactheading">ContactDetails</h2>
        {Object.keys(Userinfo).map((field) => {
          return <UserInfoInput label={field} value={Userinfo[field]} onChange={(e) =>  dispatch(setAllInfo({ field, value: e.target.value }))}/>
        })} 
      </div>
      <div className="Shippingaddress">
        <h1 className="heading">Addresss <span onClick={()=>{navigate("/profile/addressedit")}}>Add Now</span></h1>

        <div className="address">
          
          {Address.length > 0? Address?.map((item,index) => {
            const { FirstName, SecondName, Address, Phone } = item;
            return (
              <Addressitem
                FirstName={FirstName}
                SeconName={SecondName}
                address={Address}
                Phone={Phone}
                items={item}
                index={index}
              />
            );
          }): <div className="msg">
            <h1>Opps! You Havent Added Your Address</h1>
            <Button buttontxt={"Add Address"} btnfun={()=>{navigate("/profile/addressedit")}}/>
             </div>}
         
        </div>
      </div>
    </div>
  );
};
export default UserInfo