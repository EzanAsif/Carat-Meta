import React from "react";
import {
  SectionsContainer,
  PageContainer,
  DropSubscribe,
} from "../../components";
import { DropsSection } from "../../sections";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./styles.css";
const HomePage = () => {
  return (
    <PageContainer>
      <div style={{ marginTop: "100px", padding: "30px 0px" }}>
        <SectionsContainer>
          <Tabs style={{ border: "none !important" }}>
            <TabList>
              <Tab>Current Drops</Tab>
              <Tab>Upcomming Drops</Tab>
            </TabList>
            <TabPanel>
              <DropsSection />
              <DropSubscribe />
            </TabPanel>
            <TabPanel>
              <p className="noDrops" >No Upcomming Drops</p>
              <DropSubscribe />
            </TabPanel>
          </Tabs>
        </SectionsContainer>
      </div>
    </PageContainer>
  );
};

export default HomePage;
