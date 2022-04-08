import React from "react";
import { Routes, Route } from "react-router-dom";
import { DropCalendar, HomePage } from "../pages";

const Index = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/drop" element={<DropCalendar />} />
    </Routes>
  );
};

export default Index;
