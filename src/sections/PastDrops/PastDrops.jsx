import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { SlideComponent } from "../../components";

const images = [
  "https://d3h5uaiactj0we.cloudfront.net/media/Amedeo_drop_banner.jpg",
  "https://d3h5uaiactj0we.cloudfront.net/media/Asprey_Bugatti_DropPage.png",
  "https://d3h5uaiactj0we.cloudfront.net/media/bg_drop_page_louius_moinet.jpg",
  "https://prod-exclusible-com.s3-eu-west-1.amazonaws.com/media/island_landing_thumb.jpeg",
  "https://d3h5uaiactj0we.cloudfront.net/media/LuxuryDistrictVillasHeroImage_V3.jpg",
];
const PastDropSlider = ({ obj }) => {
  return (
    <div style={{ marginBottom: 20 }}>
      <div className="slide-img">
        <img src={obj} alt="" />
      </div>
      <div className="slide-content">
        <Link to="/" style={{ color: "#30333c", textDecoration: "none" }}>
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
  );
};

const PastDrops = () => {
  return (
    <div style={{ margin: "50px 0px 50px" }}>
      <div className="PastDropsHeader">
        <div className="PastDropHeading">Past Drops</div>
        <Link className="PastDropsHeaderLink" to="/">
          See Drop Calendar{" "}
          <span
            style={{ display: "flex", width: "max-content", marginLeft: 10 }}
          >
            <BsArrowRight />
          </span>
        </Link>
      </div>
      <div style={{ width: "100%" }} className="SlideComponent">
        <SlideComponent images={images} SliderComponent={PastDropSlider} />
      </div>
    </div>
  );
};

export default PastDrops;
