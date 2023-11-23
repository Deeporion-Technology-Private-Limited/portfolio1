import React, { useEffect, useRef, useState } from "react";
import img1 from "../images/Rectangle 39.png";
import img2 from "../images/Rectangle 38.png";
import img3 from "../images/Rectangle 37.png";
import img4 from "../images/Rectangle 36.png";
import img5 from "../images/Rectangle 35.png";
import img6 from "../images/Rectangle 34.png";
import img7 from "../images/Rectangle 33.png";
import img8 from "../images/Rectangle 32.png";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const AboutTeam = () => {
  const triggerRef = useRef();
  const [isTriggered, setIsTriggered] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

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
  const items = [
    {
      title: "Why to perform security testing on website?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud” Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod ",
    },
    {
      title: "What should I test in web application?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut eiusmod ",
    },
    {
      title: "Why to perform security testing on website?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Uteiusmod ",
    },
    {
      title: "What should I test in web application?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut eiusmod ",
    },
  ];
  const team = [
    {
      image: img1,
      name: "Martin",
      post: "CEO",
    },
    {
      image: img2,
      name: "Martin",
      post: "CEO",
    },
    {
      image: img3,
      name: "Martin",
      post: "CEO",
    },
    {
      image: img4,
      name: "Martin",
      post: "CEO",
    },
    {
      image: img5,
      name: "Martin",
      post: "CEO",
    },
    {
      image: img6,
      name: "Martin",
      post: "CEO",
    },
    {
      image: img7,
      name: "Martin",
      post: "CEO",
    },
    {
      image: img8,
      name: "Martin",
      post: "CEO",
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
        <h1>Our Team </h1>
        <div className="supportive_text_container">
          <p className="supportive_text">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud”
          </p>
        </div>
        <div className="about_choose_box">
          {team.map((data) => (
            <div className="box">
              <div className="thumbnail ">
                <div>The hovered text!</div>
                <img src={data.image} alt="" />
              </div>
            </div>
          ))}
        </div>
        <div className="about_questions_box">
          <div className="about_questions_container">
            <h1>Frequently Asked Questions</h1>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud” "Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod
            </p>
          </div>
          <div>
            <div>
              {items.map((item, index) => (
                <div key={index}>
                  <div
                    onClick={() => handleClick(index)}
                    className="about_titile"
                  >
                    {item.title}
                    <IoIosArrowDown
                      className={`arrow ${
                        activeIndex === index ? "down" : "up"
                      }`}
                    />
                  </div>
                  {activeIndex === index && (
                    <div>
                      <p className="about_content">{item.content}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTeam;
