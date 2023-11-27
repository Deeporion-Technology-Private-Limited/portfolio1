import React from "react";
import ServiceContent from "./ServiceContent";
import { useTranslation } from "react-i18next";

const ServiceBanner = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="about_banner">
        <div className="about_backdrop">
          <div className="home_container">
            <div className="home_content">
              <div className="front_content">
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
      <div>
        <ServiceContent />
      </div>
    </div>
  );
};

export default ServiceBanner;
