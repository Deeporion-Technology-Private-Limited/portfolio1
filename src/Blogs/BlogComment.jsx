import React from "react";
import "./blogs.css";
import { useTranslation } from "react-i18next";

const BlogComment = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="person_info_box">
        <h4>{t("leave_a_comment")}</h4>
        <div className="person_name">
          <input type="text" placeholder="Full Name" />
          <input type="text" placeholder="Email" />
        </div>
        <div className="person_text">
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Your Message"
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
