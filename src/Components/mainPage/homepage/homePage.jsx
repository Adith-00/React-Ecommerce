import React from "react";
import "../../../assets/css/HomePage/homepage.css";
import ExploreCard from "./exploreCard";
import * as image from "../../../assets/images/images";
import { useContext } from "react";
import { DataContext } from "../../../router/router";
import HeroSection from "./HeroSection.jsx";
import NewArrival from "./Newarrival.jsx";
import SavingZone from "./SavingZone.jsx";
import TopPoster from "./TopPoster.jsx";
import MenCategory from "./MenCategory.jsx";
import WomenSection from "./WomenSection.jsx";
import SecondPoster from "./BottomPoster.jsx";
import LimeLight from "./Limelighht.jsx";
import FeedBack from "./feedback.jsx";

const HomePage = () => {
  const { data, data2, feedback } = useContext(DataContext);
  const logo = [image.Levies, image.Nike, image.Uspolo, image.Puma, image.HM];

  return (
    <div className="homepage">
      <HeroSection />
      <div className="exploreholder wrapper">
        <ExploreCard cardimg={image?.topPoster1} />
        <ExploreCard cardimg={image?.topPoster2} />
      </div>
      <NewArrival data={data} />
      <SavingZone data2={data2} />
      <TopPoster />
      <MenCategory data={data} />
      <WomenSection data={data} />
      <SecondPoster logo={logo} />
      <LimeLight data={data} />
      <FeedBack feedback={feedback} />
    </div>
  );
};
export default HomePage;
