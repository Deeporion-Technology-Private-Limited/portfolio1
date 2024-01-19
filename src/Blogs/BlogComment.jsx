import React, { useEffect, useRef, useState } from "react";
import "./blogs.css";
import { useTranslation } from "react-i18next";

const BlogComment = () => {
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
    <div
      className={`scroll-animate ${isTriggered ? "animate" : ""}`}
      ref={triggerRef}
    >
      <div className="person_info_box">
        <h4>{t("leave_a_comment")}</h4>
        <div className="blog_form_container">
          <input type="text" placeholder="Full Name" className="full_name" />
          <input type="text" placeholder="Email" className="email" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Your Message"
            className="text_area"
          ></textarea>
        </div>
        <div>
          <button className="submit_btn">{t("submit")}</button>
        </div>
      </div>
    </div>
  );
};

export default BlogComment;
