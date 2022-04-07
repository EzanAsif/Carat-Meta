import React from "react";
import "./styles.css";
import Slider from "react-slick";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
const PasDropSlider = ({ images = [], SliderComponent, slideToShowProp }) => {
  const settings = {
    // infinite: true,
    // autoplay: true,
    speed: 1000,
    autoplaySpeed: 1000,
    slidesToShow: slideToShowProp ? slideToShowProp : 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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
  function SampleNextArrow(props) {
    const { style, onClick } = props;
    return (
      <BsArrowRight
        class="fa fa-angle-right fa-2x"
        onClick={onClick}
        style={{
          ...style,
          cursor: "pointer",
          position: "absolute",
          background: "#ffffffb3",
          padding: 15,
          width: 30,
          height: 50,
          right: 0,
          top: 150,
        }}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { style, onClick } = props;
    return (
      <BsArrowLeft
        class="fa fa-angle-left fa-2x"
        onClick={onClick}
        style={{
          ...style,
          zIndex: 1111,
          cursor: "pointer",
          position: "absolute",
          background: "#ffffffb3",
          padding: 15,
          width: 30,
          height: 50,
          left: 0,
          top: 150,
        }}
      />
    );
  }

  return (
    <div className="SlideComponent">
      <Slider {...settings}>
        {images.map((obj, index) => {
          return (
            <div>
              <div className="slide">
                <SliderComponent obj={obj} key={index} />
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default PasDropSlider;
