import React from "react";
import SiteFooter from "../SiteFooter/SiteFooter";
import SiteNav from "../SiteNav/SiteNav";
const PageContainer = ({ children }) => {
  return (
    <>
      <SiteNav />
      {children}
      <SiteFooter />
    </>
  );
};

export default PageContainer;
