import React from "react";
import SiteNav from "../../components/SiteNav/SiteNav";
import HomePageHeroSection from "../../sections/HomePageHeroSection/HomePageHeroSection";
import PastDrops from "../../sections/PastDrops/PastDrops";
import SectionsContainer from "../../components/SectionsContainer/SectionsContainer";
const HomePage = () => {
  return (
    <div>
      <SiteNav />
      <div style={{ marginTop: "80px" }}>
        <HomePageHeroSection />
      </div>
      <SectionsContainer>
        <PastDrops />
        <PastDrops />
        <PastDrops />
        <PastDrops />
        <PastDrops />
        <PastDrops />
        <PastDrops />
      </SectionsContainer>
    </div>
  );
};

export default HomePage;
