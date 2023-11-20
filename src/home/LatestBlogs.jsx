import React, { useRef, useState, useEffect } from "react";
import "./home.css";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";
import img1 from "../images/Frame 161.png";
import img2 from "../images/Frame 162.png";
import img3 from "../images/Frame 163.png";
import img4 from "../images/Frame 160.png";
import img5 from "../images/Frame 159.png";
import Avatar from "../images/Avatar.png";
const LatestBlogs = () => {
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
  const scrollAmount = 100;
  const [isLeftButtonDisabled, setIsLeftButtonDisabled] = useState(true);
  const [isRightButtonDisabled, setIsRightButtonDisabled] = useState(false);

  const images = [
    {
      id: 1,
      url: img1,
      content:
        "Elevate Your Cybersecurity with Imperva Cloud WAF: More Than Just a Checkbox",
      avatar: Avatar,
      name: "Bonnie Green",
      status: "Sept 19, 2023 | 2 min Read",
    },
    {
      id: 2,
      url: img2,
      content:
        "Elevate Your Cybersecurity with Imperva Cloud WAF: More Than Just a Checkbox",
      avatar: Avatar,
      name: "Bonnie Green",
      status: "Sept 19, 2023 | 2 min Read",
    },
    {
      id: 3,
      url: img3,
      content:
        "Elevate Your Cybersecurity with Imperva Cloud WAF: More Than Just a Checkbox",
      avatar: Avatar,
      name: "Bonnie Green",
      status: "Sept 19, 2023 | 2 min Read",
    },
    {
      id: 4,
      url: img4,
      content:
        "Elevate Your Cybersecurity with Imperva Cloud WAF: More Than Just a Checkbox",
      avatar: Avatar,
      name: "Bonnie Green",
      status: "Sept 19, 2023 | 2 min Read",
    },
    {
      id: 5,
      url: img5,
      content:
        "Elevate Your Cybersecurity with Imperva Cloud WAF: More Than Just a Checkbox",
      avatar: Avatar,
      name: "Bonnie Green",
      status: "Sept 19, 2023 | 2 min Read",
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
    <div
      className={`scroll-trigger ${isTriggered ? "animate" : ""}`}
      ref={triggerRef}
    >
      <div className="penetration_container">
        <h1> Latest Blogs</h1>
        <div className="supportive_text_container">
          <p className="supportive_text">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud”
          </p>
        </div>
      </div>
      <div className="latest_App">
        {!isLeftButtonDisabled && (
          <button
            className="nav-btn nav_btn_left"
            onClick={() => {
              const container = sliderRef.current;
              container.scrollLeft -= scrollAmount;
            }}
          >
            <MdOutlineKeyboardArrowLeft />
          </button>
        )}
        <div className="images-container" ref={sliderRef}>
          {images.map((image) => {
            const overlayClass =
              image.id % 2 === 1 ? "overlay" : "overlay_bottom";
            return (
              <div className="latest_container">
                <img
                  className="image"
                  alt="sliderImage"
                  key={image?.id}
                  src={image?.url}
                />
                <div className={overlayClass}>
                  <div className="text">{image.content}</div>
                  <div className="avatar_container">
                    <div className="avatar">
                      <img src={image.avatar} alt="" />
                    </div>
                    <div className="avatar_info">
                      <h2>{image.name}</h2>
                      <p>{image.status}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {!isRightButtonDisabled && (
          <button
            className="nav-btn nav_btn_right"
            onClick={() => {
              const container = sliderRef.current;
              container.scrollLeft += scrollAmount;
            }}
          >
            <MdOutlineKeyboardArrowRight />
          </button>
        )}
      </div>
    </div>
  );
};

export default LatestBlogs;
