import React, { useEffect, useRef, useState } from "react";
import img1 from "../images/Rectangle 39.png";
import img2 from "../images/Rectangle 38.png";
import img3 from "../images/Rectangle 37.png";
import img4 from "../images/Rectangle 36.png";
import img5 from "../images/Rectangle 35.png";
import img6 from "../images/Rectangle 34.png";
import img7 from "../images/Rectangle 33.png";
import img8 from "../images/Rectangle 32.png";
import { IoIosArrowDown } from "react-icons/io";
import { useTranslation } from "react-i18next";

const AboutTeam = () => {
  const { t } = useTranslation();
  const triggerRef = useRef();
  const [isTriggered, setIsTriggered] = useState(false);
  const [activeIndex, setActiveIndex] = useState([]);

  const handleClick = (index) => {
    if (activeIndex.includes(index)) {
      setActiveIndex((prev) => {
        let out = prev.filter((ele) => ele !== index);
        return out;
      });
    } else {
      setActiveIndex([...activeIndex, index]);
    }
  };

  useEffect(() => {
    console.log(activeIndex, "activeIndex");
  }, [activeIndex]);

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
      title: t("perform"),
      content: t("lorem_temper"),
    },
    {
      title: t("test"),
      content: t("lorem_temper"),
    },
    {
      title: t("perform"),
      content: t("lorem_temper"),
    },
    {
      title: t("test"),
      content: t("lorem_temper"),
    },
    {
      title: t("perform"),
      content: t("lorem_temper"),
    },
  ];
  const team = [
    {
      image: img1,
      name: t("Bryan O'conner"),
      post: t("Cloud Expertise"),
    },
    {
      image: img2,
      name: t("Bob martin"),
      post: t("ceo"),
    },
    {
      image: img3,
      name: t("Bob martin"),
      post: t("ceo"),
    },
    {
      image: img4,
      name: t(" Maria Kearo"),
      post: t("Sales Manager"),
    },
    {
      image: img5,
      name: t("Dwayn Joe"),
      post: t("Cyber Expertise"),
    },
    {
      image: img6,
      name: t("Pikoo"),
      post: t("System Manger"),
    },
    {
      image: img7,
      name: t("Ciar Sebastian"),
      post: t("Cyber Expert"),
    },
    {
      image: img8,
      name: t("Eliza Sebastian"),
      post: t("Cyber Expert"),
    },
  ];

  return (
    <div
      className={`scroll-animate ${isTriggered ? "animate" : ""}`}
      ref={triggerRef}
    >
      <div className="penetration_container ">
        <h1>{t("our_team")} </h1>
        <div className="supportive_text_container">
          <p className="supportive_text">{t("lorem_ipsum")}</p>
        </div>
        <div className="text_container">
          {team.map((data) => (
            <div className="container ">
              <img src={data.image} alt="" />
              <div className="team_overlay">
                <div className="team_text">
                  <div>{data.name}</div>
                  <div>{data.post}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="about_questions_box">
          <div
            className={`about_questions_container heading scroll-trigger ${
              isTriggered ? "animate" : ""
            }`}
            ref={triggerRef}
          >
            <h1>{t("frequently")}</h1>
            <p>{t("lorem_temper")}</p>
          </div>
          <div className="about_accordion">
            <div>
              {items.map((item, index) => (
                <div key={index}>
                  <div
                    onClick={() => handleClick(index)}
                    className={`about_title ${
                      !activeIndex.includes(index) ? "with-border" : ""
                    }`}
                  >
                    {item.title}
                    <IoIosArrowDown
                      className={`arrow ${
                        activeIndex.includes(index) ? "up" : "down"
                      }`}
                    />
                  </div>
                  {activeIndex.includes(index) && (
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
