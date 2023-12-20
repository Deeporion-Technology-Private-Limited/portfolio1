import React from "react";
import img1 from "../images/Rectangle 42.png";
import img2 from "../images/Rectangle 43.png";
import img3 from "../images/Rectangle41.png";
import { GoArrowDownRight } from "react-icons/go";
import "./blogs.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
const BlogContent = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const data = [
    {
      id: 1,
      img: img1,
      heading: t("4_cyber"),
      btn: <GoArrowDownRight />,
    },
    {
      id: 2,
      img: img2,
      heading: t("4_cyber"),
      btn: <GoArrowDownRight />,
    },
    {
      id: 3,
      img: img3,
      heading: t("4_cyber"),
      btn: <GoArrowDownRight />,
    },
    {
      id: 4,
      img: img1,
      heading: t("4_cyber"),
      btn: <GoArrowDownRight />,
    },
    {
      id: 5,
      img: img2,
      heading: t("4_cyber"),
      btn: <GoArrowDownRight />,
    },
    {
      id: 6,
      img: img3,
      heading: t("4_cyber"),
      btn: <GoArrowDownRight />,
    },
    {
      id: 7,
      img: img1,
      heading: t("4_cyber"),
      btn: <GoArrowDownRight />,
    },
    {
      id: 8,
      img: img2,
      heading: t("4_cyber"),
      btn: <GoArrowDownRight />,
    },
    {
      id: 9,
      img: img3,
      heading: t("4_cyber"),
      btn: <GoArrowDownRight />,
    },
  ];
  return (
    <div>
      <div className="blog_box">
        <div className="blog_wrapper">
          {data.map((item) => (
            <div className=" blog_container" key={item.id}>
              <div className="blog_img">
                <img src={item.img} alt="" />
              </div>
              <div>
                <div className="blog_heading">{item.heading}</div>
              </div>
              <div className="blog_btn_box">
                <div
                  className="blog_btn"
                  onClick={() => navigate("/blogDescription")}
                >
                  {item.btn}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
