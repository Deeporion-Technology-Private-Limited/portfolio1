import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTopOnRefresh from "../components/ScrollToTopOnRefresh";
import AboutBanner from "../about/AboutBanner";

const AboutUs = () => {
  return (
    <div>
      <ScrollToTopOnRefresh />
      <AboutBanner />
    </div>
  );
};

export default AboutUs;
