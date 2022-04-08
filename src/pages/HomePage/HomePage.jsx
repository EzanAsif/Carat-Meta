import React from "react";
import { SectionsContainer, PageContainer } from "../../components";
import {
  HomePageHeroSection,
  PastDrops,
  LatestInsights,
  FeaturedIn,
} from "../../sections";

const HomePage = () => {
  return (
    <PageContainer>
      <div style={{ marginTop: "80px" }}>
        <HomePageHeroSection />
      </div>
      <SectionsContainer>
        <PastDrops />
        <LatestInsights />
      </SectionsContainer>
      <FeaturedIn />
    </PageContainer>
  );
};

export default HomePage;
