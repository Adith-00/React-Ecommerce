import React from "react";
import { Hero, heroNext, heroPrev } from "../../../assets/images/images";
import Button from "../../button";

const HeroSection =() => {
  return (
    <div className="hero">
      <h1 className="heroImage">
        <img src={Hero} alt="hero" />
      </h1>
      <div className="heroinfo">
        <Button image={heroPrev} style="previous" />
        <div className="info">
          <p className="head">T shirts / Tops</p>
          <h1 className="mid">
            Summer <br /> Value Pack
          </h1>
          <p className="foot">cool / colourful / comfy</p>
          <Button style="ShopNow" buttontxt="Shop Now" />
        </div>
        <Button image={heroNext} style="next" />
      </div>
    </div>
  );
};
export default HeroSection;
