import React, { useState } from "react";
import Button from "../../button";
import InputBox from "../../input";
import { nxtarrow, filterIcon, slider } from "../../../assets/images/images";
import { Items, Styles, colors, size } from "../../../assets/const/consts";
const FilterSection = () => {
  const [min,setMin]=useState('')
  const [max,setMax]=useState('')
  const minValue =(e)=>{
    setMin(e.target.value)
  }
  const maxvalue=(e)=>{
    setMax(e.target.value)
  }
  return (
    <div className="filtersection">
      <div className="head">
        <div className="title">
          <h2>Filter</h2>
          <i>
            <img src={filterIcon} alt="filter" />
          </i>
        </div>
        <div className="itemlist">
          {Items.map((item) => {
            return (
              <div className="item">
                <h2 className="itemName">{item}</h2>
                <i className="itemArrow">
                  <img src={nxtarrow} alt="arrow" />
                </i>
              </div>
            );
          })}
        </div>
      </div>
      <div className="pricesection">
        <div className="title">
          <h2>Price</h2>
          <i>
            <img src={nxtarrow} alt="nxt" />
          </i>
        </div>
        <div className="pricefilter">
          <div className="slider">
              <InputBox type={"range"} min={"0"} max={"100"} style={"minslider"}onChange={minValue}/>
              <InputBox type={"range"} min={"0"} max={"100"} style={"maxslider"} onChange={maxvalue}/>
          </div>
        
          <div className="priceindicator">
            <p className="indicator">${min? min:0}</p>
            <p className="indicator">${max? max:0}</p>
          </div>
        </div>
      </div>
      <div className="colorselector">
        <div className="title">
          <h2>Colors</h2>
          <i>
            <img src={nxtarrow} alt="next" />
          </i>
        </div>
        <div className="colortiles">
          {colors &&
            colors.map((item) => {
              return (
                <div className="tile">
                  <i className="color" style={{ backgroundColor: item }}></i>
                  <p className="colorname">{item}</p>
                </div>
              );
            })}
        </div>
      </div>
      <div className="szieselector">
        <div className="title">
          <h2>Size</h2>
          <i>
            <img src={nxtarrow} alt="next" />
          </i>
        </div>
        <div className="sizetile">
          {size.map((item) => {
            return <Button buttontxt={item} />;
          })}
        </div>
      </div>
      <div className="dressstyle">
        <div className="title">
          <h2>Dress Style</h2>
          <i>
            <img src={nxtarrow} alt="next" />
          </i>
        </div>
        <div className="itemlist">
          {Styles.map((item) => {
            return (
              <div className="item">
                <h2 className="itemName">{item}</h2>
                <i className="itemArrow">
                  <img src={nxtarrow} alt="arrow" />
                </i>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default FilterSection;
