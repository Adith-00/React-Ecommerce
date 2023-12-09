import React from "react";

const InputBox = ({ type, placeholder, style, onChange, readOnly, value ,min,max}) => {
  return (
    <input
      type={type}
      className={style}
      placeholder={placeholder}
      onChange={onChange}
      readOnly={readOnly}
      value={value}
      min={min}
      max={max}
    />
  );
};
export default InputBox;
