import React from "react";
import img1 from "../images/Rectangle 42.png";
import img2 from "../images/Rectangle 43.png";
import img3 from "../images/Rectangle41.png";
import { GoArrowDownRight } from "react-icons/go";
import "./blogs.css";
import { useNavigate } from "react-router-dom";
const BlogContent = () => {
  const navigate = useNavigate();
  const data = [
    {
      img: img1,
      heading: " 4 Cyber Security take away from China’s largest data breach",
      btn: <GoArrowDownRight />,
    },
    {
      img: img2,
      heading: " 4 Cyber Security take away from China’s largest data breach",
      btn: <GoArrowDownRight />,
    },
    {
      img: img3,
      heading: "4 Cyber Security take away from China’s largest data breach ",
      btn: <GoArrowDownRight />,
    },
    {
      img: img1,
      heading: " 4 Cyber Security take away from China’s largest data breach",
      btn: <GoArrowDownRight />,
    },
    {
      img: img2,
      heading: "4 Cyber Security take away from China’s largest data breach ",
      btn: <GoArrowDownRight />,
    },
    {
      img: img3,
      heading: "4 Cyber Security take away from China’s largest data breach ",
      btn: <GoArrowDownRight />,
    },
    {
      img: img1,
      heading: " 4 Cyber Security take away from China’s largest data breach",
      btn: <GoArrowDownRight />,
    },
    {
      img: img2,
      heading: "4 Cyber Security take away from China’s largest data breach ",
      btn: <GoArrowDownRight />,
    },
    {
      img: img3,
      heading: "4 Cyber Security take away from China’s largest data breach ",
      btn: <GoArrowDownRight />,
    },
  ];
  return (
    <div>
      <div className="blog_box">
        <div className="blog_wrapper">
          {data.map((item) => (
            <div className=" blog_container">
              <img src={item.img} alt="" />
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
