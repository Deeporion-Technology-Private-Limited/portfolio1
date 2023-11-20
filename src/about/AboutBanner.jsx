import React, { Suspense } from "react";
// import React from "react";
import "../home/home.css";
import "./about.css";
import ChooseUs from "./ChooseUs";
import AboutTeam from "./AboutTeam";
import { useTranslation } from "react-i18next";

const Aboutbanner = () => {
  const { t } = useTranslation();
  const ideas_data = [
    {
      id: 1,
      heading: "20+",
      description: " Years of Experience",
    },
    {
      id: 2,
      heading: "1800+",
      description: " Projects Completed",
    },
    {
      id: 3,
      heading: "1700+",
      description: "Satisfied Clients",
    },
  ];

  return (
    <div>
      <div className="about_banner">
        <div className="about_backdrop">
          <div className="home_container">
            <div className="home_content">
              <div className="front_content">
                <p className="bold_heading">{t("Hello")}</p>
                <h4 className="sub_heading_home">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Sint, consequatur sequi. Blanditiis nostrum deserunt vero.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home_ideas_container">
        <div className="home_ideas">
          {ideas_data.map((data) => (
            <div className="about_detail_body">
              <div>
                <p className="about_detail_heading">{data.heading}</p>
              </div>
              <div className="about_detail_desp">{data.description}</div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <ChooseUs />
      </div>
      <div>
        <AboutTeam />
      </div>
    </div>
  );
};

export default Aboutbanner;
