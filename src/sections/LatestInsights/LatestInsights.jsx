import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { SlideComponent } from "../../components";

const images = [
  "https://exclusible.com/static/assets/images/uni1.jpeg",
  "https://exclusible.com/static/assets/images/uni2.jpeg",
];
const PastDropSlider = ({ obj }) => {
  return (
    <div style={{ width: "100%", margin: "20px 0px" }}>
      <img className="LatestInsightSlideImg" src={obj} />
      <div className="LatestInsightSlideContent">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h5 className="SlideHeading">
            HOW TO ATTRACT MORE WOMEN TO CRYPTO AND NFTS?
          </h5>
        </Link>
        <p className="SlidePara">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          omnis eaque explicabo unde magnam. Voluptates, molestiae sint. Velit
          soluta totam corporis, sapiente consectetur enim quos placeat saepe
          illo tempora molestiae...
        </p>
        <div className="SlideDate">16 November 2021</div>
      </div>
    </div>
  );
};

const LatestInsights = () => {
  return (
    <div style={{ margin: "50px 0px" }}>
      <div className="LatestInsightsHeader">
        <div className="LatestInsightsHeading">Latest Insights</div>
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
