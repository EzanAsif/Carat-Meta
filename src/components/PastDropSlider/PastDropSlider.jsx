import React from "react";
import "./styles.css";
import Slider from "react-slick";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
const FourthSection = () => {
  const settings = {
    infinite: true,
    // autoplay: true,
    speed: 1000,
    autoplaySpeed: 1000,
    slidesToShow: 3,
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
      <>
        <BsArrowRight
          class="fa fa-angle-right fa-2x"
          onClick={onClick}
          style={{
            ...style,
            // bottom: 50,
            // right: 40,
            cursor: "pointer",
            // zIndex: 1111,
            // position: "absolute",
            // marginRight: 50,
            display: "block",
            background: "white",
            // borderRadius: 100,
            padding: 15,
            width: 30,
            height: 30,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
      </>
    );
  }

  function SamplePrevArrow(props) {
    const { style, onClick } = props;
    return (
      <>
        <BsArrowLeft
          class="fa fa-angle-left fa-2x"
          onClick={onClick}
          style={{
            ...style,
            // bottom: 50,
            // right: 170,
            zIndex: 1111,
            cursor: "pointer",
            // position: "absolute",
            display: "block",
            background: "white",
            borderRadius: 50,
            padding: 15,
            width: 30,
            height: 30,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
      </>
    );
  }

  const images = [
    "https://d3h5uaiactj0we.cloudfront.net/media/Amedeo_drop_banner.jpg",
    "https://d3h5uaiactj0we.cloudfront.net/media/Asprey_Bugatti_DropPage.png",
    "https://d3h5uaiactj0we.cloudfront.net/media/bg_drop_page_louius_moinet.jpg",
    "https://prod-exclusible-com.s3-eu-west-1.amazonaws.com/media/island_landing_thumb.jpeg",
    "https://d3h5uaiactj0we.cloudfront.net/media/LuxuryDistrictVillasHeroImage_V3.jpg",
  ];

  return (
    <div className="">
      <div className="">
        <Slider {...settings}>
          {images.map((obj, index) => {
            return (
              <div key={index}>
                <div className="slide-test">
                  <div className="slide-img-test">
                    <img src={obj} alt="" />
                  </div>
                  <div className="slide-content">
                    <Link
                      to="/"
                      style={{ color: "#30333c", textDecoration: "none" }}
                    >
                      <h4>Crypto Cameos NFT Collection</h4>
                    </Link>
                    <div className="collection-by">
                      <span>
                        <img
                          src="https://exclusible.com/_next/image?url=https%3A%2F%2Fd3h5uaiactj0we.cloudfront.net%2Fmedia%2FAmedeo_profile_pic.png&w=128&q=75"
                          alt=""
                          style={{
                            width: "100%",
                            height: "100%",
                            borderRadius: "100%",
                          }}
                        />
                      </span>
                      <h5>@ Amedo</h5>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default FourthSection;
