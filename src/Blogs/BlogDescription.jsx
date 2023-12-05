import React, { useEffect, useRef, useState, useTransition } from "react";
import "./blogs.css";
import { FaArrowLeftLong } from "react-icons/fa6";
import img1 from "../images/img7.png";
import BlogComment from "./BlogComment";
import BlogCarousel from "./BlogCarousel";
import { useTranslation } from "react-i18next";
import { Navigate, useNavigate } from "react-router-dom";

const BlogDescription = () => {
  const nav = useNavigate();
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
    <div className="blog_description_wrapper">
      <div className="blog_description_container">
        <div>
          <div>
            <button className="blog_back_btn" onClick={() => nav("/blogs")}>
              <FaArrowLeftLong />
            </button>
          </div>
          <img src={img1} alt="" className="blog_desp_img" />
        </div>
        <div
          className={`scroll-animate ${isTriggered ? "animate" : ""}`}
          ref={triggerRef}
        >
          <h1 className="blog_desp_heading ">{t("cyber_security")}</h1>
          <p>{t("the_application")}</p>
          <p>{t("the_application")}</p>
          <ul className="blog_bullets">
            <li>{t("rollout")}</li>
            <li>{t("enhanced_capabilities")}</li>
            <li>{t("growth")}</li>
            <li>{t("integration")}</li>
          </ul>
        </div>

        <div>
          <div
            className={`scroll-animate ${isTriggered ? "animate" : ""}`}
            ref={triggerRef}
          >
            <h4>{t("embrace")}</h4>
            <ul>
              <li>{t("cyberSecurity")}</li>
              <li>{t("mfa")}</li>
              <li>{t("simple_example")}</li>
              <li>{t("green")}</li>
            </ul>
          </div>
          <div
            className={`scroll-animate ${isTriggered ? "animate" : ""}`}
            ref={triggerRef}
          >
            <h4>{t("cultivate")}</h4>
            <ul>
              <li>{t("social_media")}</li>
              <li>{t("open_source")}</li>
              <li>{t("rouge")}</li>
            </ul>
          </div>
          <div
            className={`scroll-animate ${isTriggered ? "animate" : ""}`}
            ref={triggerRef}
          >
            <h4>{t("follow")}</h4>
            <ul>
              <li>{t("manage_it")}</li>
              <li>{t("investment")}</li>
              <li>{t("experience")}</li>
              <li>{t("msp")}</li>
              <li>{t("framework")}</li>
            </ul>
          </div>
          <div
            className={`scroll-animate ${isTriggered ? "animate" : ""}`}
            ref={triggerRef}
          >
            <h4>{t("focus")}</h4>
            <ul>
              <li>{t("business")}</li>
              <li>{t("best_thing")}</li>
              <li>{t("breach")}</li>
            </ul>
          </div>
        </div>
        <div>
          <BlogComment />
        </div>
        <div>
          <BlogCarousel />
        </div>
      </div>
    </div>
  );
};

export default BlogDescription;
