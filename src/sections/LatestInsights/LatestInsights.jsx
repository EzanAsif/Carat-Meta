import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import SlideComponent from "../../components/SlideComponent/SlideComponent";

const images = [
  "https://d3h5uaiactj0we.cloudfront.net/media/Amedeo_drop_banner.jpg",
  "https://d3h5uaiactj0we.cloudfront.net/media/Asprey_Bugatti_DropPage.png",
];
const PastDropSlider = ({ obj }) => {
  return (
    <div style={{ width: "90%" }}>
      <h2>working {obj}</h2>
    </div>
  );
};

const LatestInsights = () => {
  return (
    <div style={{ margin: "50px 0px" }}>
      <div className="PastDropsHeader">
        <div className="PastDropHeading">Latest Insights</div>
      </div>
      <div style={{ width: "100%" }} className="SlideComponent">
        <SlideComponent
          images={images}
          SliderComponent={PastDropSlider}
          slideToShowProp={2}
        />
      </div>
    </div>
  );
};

export default LatestInsights;
