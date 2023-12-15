import React from "react";
import "../../../assets/css/HomePage/homepage.css";
import Button from "../../button";
import ExploreCard from "./exploreCard";
import Heading from "../heading";
import NewArrivalCard from "./newarrivalCard";
import SavingZonecard from "./savingZonecard";
import CategoryCard from "../../categoryCard";
import FeedbackCard from "./feedbackCard";
import * as image from "../../../assets/images/images";
import { useContext } from "react";
import { DataContext } from "../../../router/router";

const HomePage = () => {
   const { data, data2, feedback } = useContext(DataContext)
  const logo = [image.Levies, image.Nike, image.Uspolo, image.Puma, image.HM];

  return (
    <div className="homepage">
      <div className="hero">
        <h1 className="heroImage">
          <img src={image?.Hero} alt="hero" />
        </h1>
        <div className="heroinfo">
          <Button image={image.heroPrev} style="previous" />
          <div className="info">
            <p className="head">T shirts / Tops</p>
            <h1 className="mid">
              Summer <br /> Value Pack
            </h1>
            <p className="foot">cool / colourful / comfy</p>
            <Button style="ShopNow" buttontxt="Shop Now" />
          </div>
          <Button image={image.heroNext} style="next" />
        </div>
      </div>
      <div className="exploreholder wrapper">
        <ExploreCard cardimg={image?.topPoster1} />
        <ExploreCard cardimg={image?.topPoster2} />
      </div>
      <div className="newarrival wrapper">
        <Heading headingTxt="New Arrival" />
        <div className="cardsection">
          <div className="cards">
            {data &&
              data?.map((item, index) => {
                const { id, category } = item;
                return index < 6 ? (
                  <NewArrivalCard
                    key={id}
                    itemName={category}
                    cardimage={image?.men2}
                  />
                ) : null;
              })}
          </div>
        </div>
      </div>
      <div className="savingzone wrapper">
        <Heading headingTxt="Big Saving Zone" />
        <div className="topcard">
          {data2 &&
            data2?.map((datas, index) => {
              const { item, about, offer } = datas;
              return index < 3 ? (
                <SavingZonecard
                  image={image?.savingcard1}
                  itemName={item}
                  about={about}
                  offer={offer}
                />
              ) : null;
            })}
        </div>
        <div className="bottomcard">
          {data2 &&
            data2?.map((datas, index) => {
              const { item, about, offer } = datas;
              return index > 2 ? (
                <SavingZonecard
                  image={image?.savingcard4}
                  itemName={item}
                  about={about}
                  offer={offer}
                />
              ) : null;
            })}
        </div>
      </div>
      <div className="poster wrapper">
        <div className="postercard">
          <h1 className="image1">
            <img src={image?.poster1} alt="poster" />
          </h1>
          <h1 className="image2">
            <img src={image?.poster2} alt="poster" />
          </h1>
        </div>
        <div className="info">
          <h1 className="top">WE MADE YOUR EVERYDAY FASHION BETTER!</h1>
          <p className="bottom">
            In our journey to improve everyday fashion, euphoria presents
            EVERYDAY wear range - Comfortable & Affordable fashion 24/7
          </p>
          <Button buttontxt="ShopNow" />
        </div>
      </div>
      <div className="category wrapper">
        <Heading headingTxt="Category For Men" />
        <div className="cardsection">
          {data &&
            data?.map((item, index) => {
              const { id, category } = item;
              return (
                index < 10 && (
                  <CategoryCard
                    key={id}
                    itemname={category}
                    image={image?.mencat5}
                  />
                )
              );
            })}
        </div>
      </div>
      <div className="category wrapper">
        <Heading headingTxt="Category For Women" />
        <div className="cardsection">
          {data &&
            data?.map((item, index) => {
              const { id, category } = item;
              return (
                index < 5 && (
                  <CategoryCard
                    key={id}
                    itemname={category}
                    image={image?.womencat3}
                    path={"/details"}
                  />
                )
              );
            })}
        </div>
      </div>
      <div className="second-poster wrapper">
        <div className="text">
          <h2 className="title">Top Brands Deal</h2>
          <p className="description">
            up to <span>60%</span> off on brands
          </p>
        </div>
        <div className="logos">
          {logo &&
            logo.map((item) => {
              return (
                <h1 className="logoimage">
                  <img src={item} alt="brandlogo" />
                </h1>
              );
            })}
        </div>
      </div>
      <div className="limelight wrapper">
        <Heading headingTxt="In The Limelight" />
        <div className="cardsection">
          {data &&
            data?.map((item, index) => {
              const { id, category, itemPrice } = item;
              return (
                index < 5 && (
                  <CategoryCard
                    key={id}
                    itemname={category}
                    image={image?.womencat1}
                    price={itemPrice}
                  />
                )
              );
            })}
        </div>
      </div>
      <div className="feedback wrapper">
        <Heading headingTxt="Feedback" />
        <div className="cards">
          {feedback &&
            feedback?.map((item, index) => {
              const { name, feedback } = item;
              return (
                <FeedbackCard
                  customerName={name}
                  Feedbackmsg={feedback}
                  profile={image?.reviewer1}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};
export default HomePage;
