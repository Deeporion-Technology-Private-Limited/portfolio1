import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const ServiceBanner = () => {
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
  return (
    <div>
      <div className="service_banner">
        <div className="about_backdrop">
          <div className="home_container">
            <div className="home_content">
              <div
                className={`front_content heading scroll-trigger ${
                  isTriggered ? "animate" : ""
                }`}
                ref={triggerRef}
              >
                <p className="bold_heading_blog">{t("lorem")}</p>
                <h4 className="sub_heading_home">{t("lorem_ipsum")}</h4>
                <div className="blog_get_started_btn">
                  <button className="get_started_btn">Get started</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceBanner;
