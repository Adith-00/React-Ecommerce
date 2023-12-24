import React from "react";
import Button from "../../button";
import InputBox from "../../input";
import { feilds } from "../../../assets/const/consts";

const AddressEdit = () => {


  return (
    <div className="addressedit">
      <h1 className="heading">My Info</h1>
      <div className="editSection">
        <h2 className="heading">Add Address</h2>
        <div className="inputfeild">
          {feilds?.map((item) => {
            const { label, placeholder, type, Style, Options,functions } = item;
            switch (type) {
              case "dropdown":
                return (
                  <div className="inputs">
                    <p>{label}</p>
                    <select placeholder={placeholder} className={Style}>
                      <option>--Select An Item --</option>
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
                      onChange={functions}
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
        <Button buttontxt={"save"} style={"save"} />
        <Button buttontxt={"cancel"} style={"cancel"} />
      </div>
    </div>
  );
};
export default AddressEdit;
