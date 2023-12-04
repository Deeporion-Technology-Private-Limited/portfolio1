import React, { useEffect, useRef, useState } from "react";
import { MdDevices } from "react-icons/md";
import { AiOutlineEye, AiOutlineDollar } from "react-icons/ai";
import { IoCloudDoneOutline } from "react-icons/io5";
import { BsCheckCircle } from "react-icons/bs";
import { RiShieldStarLine } from "react-icons/ri";
import { useTranslation } from "react-i18next";

const ChooseUs = () => {
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

  const reasons = [
    {
      icon: <MdDevices />,
      heading: t("multi_platform"),
      desp: t("lorem_consectetur"),
    },
    {
      icon: <AiOutlineEye />,
      heading: t("great"),
      desp: t("lorem_consectetur"),
    },
    {
      icon: <IoCloudDoneOutline />,
      heading: t("cloud"),
      desp: t("lorem_consectetur"),
    },
    {
      icon: <BsCheckCircle />,
      heading: t('A++'),
      desp: t("lorem_consectetur"),
    },
    {
      icon: <RiShieldStarLine />,
      heading: t("high_security"),
      desp: t("lorem_consectetur"),
    },
    {
      icon: <AiOutlineDollar />,
      heading: t("best_budget"),
      desp: t("lorem_consectetur"),
    },
  ];

  return (
    <div>
      <div
        className={`penetration_container heading scroll-trigger ${
          isTriggered ? "animate" : ""
        }`}
        ref={triggerRef}
      >
        <h1>{t("why_choose_us")}</h1>
        <div className="supportive_text_container">
          <p className="supportive_text">{t("lorem_ipsum")}</p>
        </div>
        <div className="about_choose_box">
          {reasons.map((data) => (
            <div className="about_choose_container">
              <div className="about_choose_icon">
                <div className="choose_icon">{data.icon}</div>
                <h4>{data.heading}</h4>
              </div>
              <div className="about_choose_desp">
                <p>{data.desp}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
