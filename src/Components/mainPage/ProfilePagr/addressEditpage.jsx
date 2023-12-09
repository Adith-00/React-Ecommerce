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
            const { label, placeholder, type, Style, Options } = item;
            return (
              <div className="inputs">
                <p>{label}</p>
                {type !=="dropdown" ? (
                  <InputBox
                    placeholder={placeholder}
                    type={type}
                    style={Style}
                  />
                ) : (
                  <select placeholder={placeholder} className={Style}>
                    <option>--Select An Item --</option>
                    {Options.map((item) => {
                      return <option>{item}</option>;
                    })}
                  </select>
                )}
              </div>
            );
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
