import React, { useEffect, useRef, useState } from "react";
import frame from "../../assets/images/Frame.png";
import { AiFillPieChart } from "react-icons/ai";
import { BiChip } from "react-icons/bi";
import { HiPresentationChartBar, HiDocumentReport } from "react-icons/hi";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { useTranslation } from "react-i18next";
const PenetrationTesting = () => {
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
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const data = [
    {
      icon: <AiFillPieChart />,
      heading: t("planning_and_reconnaissance"),
      desp: t("define_the_scope"),
    },
    {
      icon: <BiChip />,
      heading: t("scanning"),
      desp: t("the_next_step"),
    },
    {
      icon: <HiPresentationChartBar />,
      heading: t("gaining_access"),
      desp: t("attack"),
    },
    {
      icon: <HiMiniComputerDesktop />,
      heading: t("maintaining_access"),
      desp: t("the_goal_of_this_stage"),
    },
    {
      icon: <HiDocumentReport />,
      heading: t("analysis"),
      desp: t("security_personnel"),
    },
  ];

  return (
    <div
      className={` heading scroll-trigger ${isTriggered ? "animate" : ""}`}
      ref={triggerRef}
    >
      <div className="penetration_container">
        <h1>{t("penetration_testing_stages")}</h1>
        <div className="supportive_text_container">
          <p className="supportive_text">{t("lorem_ipsum")}</p>
        </div>
      </div>
      <div className="penetration_desp_info">
        <div className="penetration_desp_container">
          <div className="penetration_img">
            <img src={frame} alt="" />
          </div>
          <div className="penetration_flex">
            {data.map((obj) => (
              <div className="penetration_desp_box">
                <div className="penetration_icon">{obj.icon}</div>
                <div className="penetration_desp_content">
                  <h2>{obj.heading}</h2>
                  <p>{obj.desp}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PenetrationTesting;
