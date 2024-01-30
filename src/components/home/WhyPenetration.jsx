import React, { useEffect, useRef, useState } from "react";
import { AiFillPieChart } from "react-icons/ai";
import { BiChip } from "react-icons/bi";
import { HiPresentationChartBar } from "react-icons/hi";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import "./home.css";
import { useTranslation } from "react-i18next";

const WhyPenetration = () => {
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

  return (
    <div
      className={`scroll-trigger ${isTriggered ? "animate" : ""}`}
      ref={triggerRef}
    >
      <div className="card_cover">
        <div className="scene">
          <div className="card">
            <div className="card__face card__face--front">
              <div className="why_penetration_content">
                <AiFillPieChart className="penetration_icon" />
                <p className="penetration_p">{t("lorem_amet")}</p>
              </div>
            </div>
            <div className="card__face card__face--back">
              <div className="why_penetration_content_back">
                <p>{t("lorem_ipsum")}</p>
              </div>
            </div>
          </div>
          <div>
            <h1 className="why_penetration_content_h1 card__face--front">
              {t("why_Penetration_testing")}
            </h1>
          </div>
          <div className="card">
            <div className="card__face card__face--front">
              <div className="why_penetration_content">
                <HiMiniComputerDesktop className="penetration_icon" />
                <p className="penetration_p">{t("lorem_ipsum_dolor")}</p>
              </div>
            </div>
            <div className="card__face card__face--back">
              <div className="why_penetration_content_back">
                <p>{t("lorem_ipsum")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card_cover2">
        <div className="scene2">
          <div className="card">
            <div className="card__face card__face--front">
              <div className="why_penetration_content">
                <BiChip className="penetration_icon" />
                <p>{t("lorem_ipsum_dolor")}</p>
              </div>
            </div>
            <div className="card__face card__face--back">
              <div className="why_penetration_content_back">
                <p>{t("lorem_ipsum")}</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card__face card__face--front">
              <div className="why_penetration_content">
                <HiPresentationChartBar className="penetration_icon" />
                <p>{t("lorem_ipsum_dolor")}</p>
              </div>
            </div>
            <div className="card__face card__face--back">
              <div className="why_penetration_content_back">
                <p>{t("lorem_ipsum")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyPenetration;
