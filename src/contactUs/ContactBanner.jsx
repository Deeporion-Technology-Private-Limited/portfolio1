import React from "react";
import "./contactUs.css";
import ContactContent from "./ContactContent";
import { useTranslation } from "react-i18next";
const ContactBanner = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="about_banner">
        <div className="about_backdrop">
          <div className="home_container">
            <div className="home_content">
              <div className="front_content">
                <p className="bold_heading_blog">
                  {t("we_are_here_to_support")}
                </p>
                <h4 className="sub_heading_home">{t("lorem_ipsum")}</h4>
                <div className="blog_get_started_btn">
                  <button className="get_started_btn">
                    {t("get_started")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <ContactContent />
      </div>
    </div>
  );
};

export default ContactBanner;
