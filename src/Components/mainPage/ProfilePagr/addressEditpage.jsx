import React from "react";
import Button from "../../button";
import InputBox from "../../input";
import { InputSection, feilds } from "../../../assets/const/consts";
import { useDispatch, useSelector } from "react-redux";
import { resetAddress, setAllFields } from "../../../redux/Slice/AddressSlice";
import { addAddresss } from "../../../redux/Slice/AddressHolder";
import { useNavigate } from "react-router-dom";
const AddressEdit = () => {
  const dispatch = useDispatch();
  // const reduxState = useSelector((state) => state.AddressSlice.value);
  const values = useSelector((state) => state.Address.value);
  const navigate = useNavigate()
  console.log("Values>>>>", values);
  return (
    <div className="addressedit">
      <h1 className="heading">My Info</h1>
      <div className="editSection">
        <h2 className="heading">Add Address</h2>
        <div className="inputfeild">
          
          {feilds?.map((item) => {
            const { label, placeholder, type, Style, Options,functions,Inputvalue, } = item;
            console.log("Inputvales>>",Inputvalue)
            switch (type) {
              case "dropdown":
                return (
                  <div className="inputs">
                    <p>{label}</p>
                    <select placeholder={placeholder} className={Style} value={values[item.Contextname]}
                      onChange={(e)=>{dispatch(setAllFields({field:item.Contextname,value:e.target.value}))}} > 
                      <option disabled selected>--Select An Item --</option>
                      {Options.map((item) => (
                        <option key={item}>{item}</option>
                      ))}
                    </select>
                  </div>
                );
              default:
                return (
                  <div className="inputs">
                    <p>{label}</p>
                    <InputBox
                      placeholder={placeholder}
                      type={type}
                      style={Style}
                      value={values[item.Contextname]}
                      onChange={(e)=>{dispatch(setAllFields({field:item.Contextname,value:e.target.value}))}}
                    />
                  </div>
                );
            }
            
          })}
        </div>
      </div>
      <div className="chekBoxes">
        <p>
          <span>
            <InputBox type={"checkbox"} />
          </span>
          Set as default shipping address
        </p>
        <p>
          <span>
            <InputBox type={"checkbox"} />
          </span>
          Set as default billing address
        </p>
      </div>
      <div className="buttons">
        <Button
          buttontxt={"save"}
          style={"save"}
          btnfun={() => {
            navigate("/profile/userinfo")
            dispatch(addAddresss(values));
            dispatch(resetAddress())
          }}
        />
        <Button
          buttontxt={"cancel"}
          style={"cancel"}
          btnfun={() => {
            dispatch(resetAddress());
          }}
        />
      </div>
    </div>
  );
};
export default AddressEdit;
