import React from "react";
import "./styles.css";
import Slider from "react-slick";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { SlideComponent } from "../../components";
import FeaturedIn1 from "../../assets/featuredIn1.png";
import FeaturedIn2 from "../../assets/featuredIn2.png";
import FeaturedIn3 from "../../assets/featuredIn3.png";
import FeaturedIn4 from "../../assets/featuredIn4.png";
import FeaturedIn5 from "../../assets/featuredIn5.png";
import FeaturedIn6 from "../../assets/featuredIn6.png";
import FeaturedIn7 from "../../assets/featuredIn7.png";

const FeaturedIn = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 800,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const images = [
    FeaturedIn1,
    FeaturedIn2,
    FeaturedIn3,
    FeaturedIn4,
    FeaturedIn5,
    FeaturedIn6,
    FeaturedIn7,
    FeaturedIn1,
    FeaturedIn2,
    FeaturedIn3,
    FeaturedIn4,
  ];

  return (
    //   <div style={{ width: "100%" }} className="SlideComponent">
    //     <div className="infinite-test">
    //       {images.map((obj, index) => {
    //         return <img src={obj} key={index} />;
    //       })}
    //     </div>
    //   </div>
    // </div>

    <div style={{ margin: "50px 0px" }}>
      <div className="LatestInsightsHeader">
        <div className="LatestInsightsHeading">Featured In</div>
      </div>
      <div class="LatestInsightSlider">
        <div class="LatestInsightSlide-track">
          {images.map((obj, index) => {
            return (
              <div key={index} class="LatestInsightSlide">
                <img src={obj} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FeaturedIn;
