import React from "react";
import Homebanner from "../home/Homebanner";
import ScrollToTopOnRefresh from "../components/ScrollToTopOnRefresh";

const Home = () => {
  return (
    <div>
      <ScrollToTopOnRefresh />
      <Homebanner />
    </div>
  );
};

export default Home;
