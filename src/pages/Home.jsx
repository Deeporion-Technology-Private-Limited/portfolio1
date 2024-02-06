import React from "react";
import Homebanner from "../components/home/Homebanner";
import LatestBlogs from "../components/home/LatestBlogs";
import WhyPenetration from "../components/home/WhyPenetration";
import PenetrationBenefits from "../components/home/PenetrationBenefits";
import PenetrationTesting from "../components/home/PenetrationTesting";

const Home = () => {
  return (
    <div>
      <Homebanner />
      <PenetrationTesting />
      <PenetrationBenefits />
      <WhyPenetration />
      <LatestBlogs />
    </div>
  );
};

export default Home;
