import React from "react";
import SiteNav from "../../components/SiteNav/SiteNav";
import HomePageHeroSection from "../../sections/HomePageHeroSection/HomePageHeroSection";
import PastDrops from "../../sections/PastDrops/PastDrops";
import SectionsContainer from "../../components/SectionsContainer/SectionsContainer";
import LatestInsights from "../../sections/LatestInsights/LatestInsights";
import FeaturedIn from "../../sections/FeaturedIn/FeaturedIn";
import SiteFooter from "../../sections/SiteFooter/SiteFooter";
const HomePage = () => {
  return (
    <div>
      <SiteNav />
      <div style={{ marginTop: "80px" }}>
        <HomePageHeroSection />
      </div>
      <SectionsContainer>
        <PastDrops />
        <LatestInsights />
      </SectionsContainer>
      <FeaturedIn />
      <SiteFooter />
    </div>
  );
};

export default HomePage;
