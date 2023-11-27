import React, { useEffect, useRef, useState } from "react";
import img1 from "../images/Rectangle40.png";
import img2 from "../images/Rectangle44.png";
import img3 from "../images/Rectangle45.png";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";
import "./blogs.css";
import { useTranslation } from "react-i18next";

const BlogCarousel = () => {
  const { t } = useTranslation();
  const triggerRef = useRef();
  const [isTriggered, setIsTriggered] = useState(false);

  const handleScrollElement = () => {
    if (triggerRef.current) {
      const elementTop = triggerRef.current.getBoundingClientRect().top;
      const viewportHeight = window.innerHeight;

      if (elementTop < viewportHeight) {
        setIsTriggered(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollElement);
    return () => {
      window.removeEventListener("scroll", handleScrollElement);
    };
  }, []);

  const sliderRef = useRef(null);
  const scrollAmount = 400;
  const [isLeftButtonDisabled, setIsLeftButtonDisabled] = useState(true);
  const [isRightButtonDisabled, setIsRightButtonDisabled] = useState(false);

  const images = [
    {
      id: 1,
      url: img1,
      content: t("4_cyber"),
    },
    {
      id: 2,
      url: img2,
      content: t("4_cyber"),
    },
    {
      id: 3,
      url: img3,
      content: t("4_cyber"),
    },
    {
      id: 4,
      url: img1,
      content: t("4_cyber"),
    },
    {
      id: 5,
      url: img2,
      content: t("4_cyber"),
    },
  ];

  const handleScroll = () => {
    const container = sliderRef.current;
    const maxScrollPosition = container.scrollWidth - container.clientWidth;
    const scrollThreshold = maxScrollPosition / images.length;

    setIsLeftButtonDisabled(container.scrollLeft < scrollThreshold);
    setIsRightButtonDisabled(
      container.scrollLeft >= maxScrollPosition - scrollThreshold
    );
  };

  useEffect(() => {
    const container = sliderRef.current;
    container.addEventListener("scroll", handleScroll);
    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div
        className={`scroll-trigger ${isTriggered ? "animate" : ""}`}
        ref={triggerRef}
      >
        <div className="penetration_container">
          <h1>{t("latest_posts")}</h1>
        </div>
        <div className="latest_App">
          <button
            className="nav-btn_desp nav_btn_left_desp"
            onClick={() => {
              const container = sliderRef.current;
              container.scrollLeft -= scrollAmount;
            }}
          >
            <MdOutlineKeyboardArrowLeft />
          </button>

          <div className="images-container_desp" ref={sliderRef}>
            {images.map((image) => {
              return (
                <div className="latest_container_desp">
                  <img
                    className="image"
                    alt="sliderImage"
                    key={image?.id}
                    src={image?.url}
                  />
                  <div>
                    <div className="text_desp">{image.content}</div>
                    <div className="avatar_container">
                      <div className="avatar">
                        <img src={image.avatar} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <button
            className="nav-btn_desp nav_btn_right_desp"
            onClick={() => {
              const container = sliderRef.current;
              container.scrollLeft += scrollAmount;
            }}
          >
            <MdOutlineKeyboardArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCarousel;
