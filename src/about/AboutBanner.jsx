import React, { useEffect, useRef, useState } from "react";
import "../home/home.css";
import "./about.css";
import ChooseUs from "./ChooseUs";
import AboutTeam from "./AboutTeam";
import { useTranslation } from "react-i18next";

const Aboutbanner = () => {
  const { t } = useTranslation();
  const triggerRef = useRef();
  const [isTriggered, setIsTriggered] = useState(false);

  const handleScroll = () => {
    if (triggerRef.current) {
      const elementTop = triggerRef.current.getBoundingClientRect().top;
      const viewportHeight = window.innerHeight;

      if (elementTop < viewportHeight) {
        setIsTriggered(true);
      }
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const ideas_data = [
    {
      id: 1,
      heading: "20+",
      description: t("years_of_experience"),
    },
    {
      id: 2,
      heading: "1800+",
      description: t("projects_completed"),
    },
    {
      id: 3,
      heading: "1700+",
      description: t("satisfied_clients"),
    },
  ];

  return (
    <div>
      <div className="about_banner">
        <div className="about_backdrop">
          <div className="home_content">
            <div
              className={`front_content heading scroll-trigger ${
                isTriggered ? "animate" : ""
              }`}
              ref={triggerRef}
            >
              <p className="bold_heading align_center">{t("best_soluction")}</p>
              <h4 className="sub_heading_home align_center">{t("lorem_vero")}</h4>
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
