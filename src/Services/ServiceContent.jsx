import React, { useEffect, useState } from "react";
import { Element, scroller } from "react-scroll";
import slash from "../";
import img6 from "../images/Frame 216.png";
import img7 from "../images/Frame 217.png";
import img8 from "../images/Frame 223.png";
import img9 from "../images/Frame 224.png";
import img10 from "../images/Frame 230.png";
import img1 from "../images/Group 10 (1).png";
import img2 from "../images/Group 10 (2).png";
import img3 from "../images/Group 10 (3).png";
import img4 from "../images/Group 10 (4).png";
import img5 from "../images/Group 10.png";
import "./service.css";
import { useTranslation } from "react-i18next";

const ServiceContent = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleSelectorClick = (index) => {
    setCurrentIndex(index);
  };

  // Automatically scroll every 5 seconds
  const handlePrevClick = (num) => {
    setCurrentIndex(num);
  };

  const carouselItems = [
    // Add your carousel items here
    {
      id: 1,
      icon: img10,
      title: t("management"),
      description: t("it_management"),
      img: img5,
      btn: "Read more",
    },
    {
      id: 2,
      icon: img9,
      title: t("monitoring"),
      description: t("network_monitoring"),
      img: img4,
      btn: t("read_more"),
    },

    {
      id: 3,
      icon: img8,
      title: t("computing"),
      description: t("cloud_computing"),
      img: img3,
      btn: t("read_more"),
    },

    {
      id: 4,
      icon: img7,
      title: t("ai"),
      description: t("ai_consulting"),
      img: img2,
      btn: t("read_more"),
    },
    {
      id: 5,
      icon: img6,
      title: t("financial"),
      description: t("financial_damage"),
      img: img1,
      btn: "Read more",
    },

    // Add more items as needed
  ];

  const handleScroll = (event) => {
    const scrollDelta =
      event.nativeEvent.wheelDelta || -event.nativeEvent.deltaY;
    const scrollDirection = scrollDelta > 0 ? "up" : "down";

    if (scrollDirection === "up") {
      scroller.scrollTo("prevItem", {
        smooth: true,
      });
    } else {
      scroller.scrollTo("nextItem", {
        smooth: true,
      });
    }
  };

  return (
    <div>
      <h1>{t("service_we_offer")}</h1>
      <div className="service_info">
        <div className="service_info_box">
          {carouselItems.map((item, index) => (
            <>
              {index === currentIndex && (
                <div className={`service_wrapper`}>
                  <div>
                    <img src={item.icon} alt="" />
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <button>{item.btn}</button>
                  </div>
                  <div>
                    <img className="service_image" src={item.img} alt="" />
                  </div>
                </div>
              )}
            </>
          ))}
        </div>
        <div className="selectors">
          {carouselItems.map((ele, index) => (
            <div
              className={`selector ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceContent;
