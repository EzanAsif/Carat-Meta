import React from "react";
import "./style.css";
import HomeHeroVid from "../../assets/web-homepage-hero-vid.mp4";
const HomePageHeroSection = () => {
  return (
    <div className="homePageHeroSection">
      <div className="homePageHeroSectionContent">
        <h3 className="homePageHeroMainHeading">Home Page Hero Section</h3>
        <div className="homePageHeroClubName">Hogan</div>
        <div className="homePageHeroSecText">
          From Traditional To Untraditional — Hogan is collaborating with five
          digital artists to elevate digital creative expression to the next
          level of luxury with a limited edition of 500 Untraditional NFTs
          destined to reinvent the Italian brand's staple product.
        </div>
        <div className="homePageHeroNftInfo">
          <div className="homePageHeroNftStatus">Sold out</div>
          <div className="borderTest"></div>
          <div className="homePageHeroNftsRemaining">0 NFTs REMAINING</div>
        </div>
        <div className="homePageHeroCta">
          <button className="homePageCta1" style={{ marginBottom: 20 }}>
            See Drop
          </button>
          <a href="#" className="homePageCta2">
            Buy On OpenSea
          </a>
        </div>
      </div>
      <div className="homePageHeroOverlay"></div>
      <video
        className="homePageHeroBgVid"
        controls
        autostart
        autoPlay
        loop
        src={HomeHeroVid}
        type="video/mp4"
        muted
      >
        {/* <source src={HomeHeroVid} /> */}
      </video>
    </div>
  );
};

export default HomePageHeroSection;
