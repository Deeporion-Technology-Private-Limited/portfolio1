import React from "react";
import ServiceContent from "./ServiceContent";

const ServiceBanner = () => {
  return (
    <div>
      <div className="about_banner">
        <div className="about_backdrop">
          <div className="home_container">
            <div className="home_content">
              <div className="front_content">
                <p className="bold_heading_blog">Lorem ipsum dolor</p>
                <h4 className="sub_heading_home">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud” "Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit, sed do eiusmod tempor
                </h4>
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
