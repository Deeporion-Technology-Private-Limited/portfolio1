import React from "react";
import "./home.css";
import image from "../images/image.png";
import { FaCirclePlay } from "react-icons/fa6";
import { TbBulbFilled } from "react-icons/tb";
import { HiPresentationChartBar } from "react-icons/hi";
import { AiFillEye } from "react-icons/ai";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import PenetrationTesting from "./PenetrationTesting";
import WhyPenetration from "./WhyPenetration";
import LatestBlogs from "./LatestBlogs";
import PenetrationBenefits from "./PenetrationBenefits";
const Homebanner = () => {
  const ideas_data = [
    {
      id: 1,
      icon: <TbBulbFilled />,
      heading: "Ideas and Concepts",
      description:
        " Methodically hacking into the system and network to identify and expose as many vulnerabilities as you possibly can, from multiplevantage points.",
      btn: " Read more ",
    },
    {
      id: 2,
      icon: <HiPresentationChartBar />,
      heading: "Event Marketing",
      description:
        " You can protect customer data, reduce cyber risk, satisfy stakeholder requirements, and preserve the organization’s image and reputation.",
      btn: " Read more ",
    },
    {
      id: 3,
      icon: <AiFillEye />,
      heading: "Onsite",
      description:
        " Penetration testers use internal and external attacks on your servers, intranets, web applications, wireless networks, mobile devices, and other available points.",
      btn: " Read more ",
    },
  ];

  return (
    <div>
      <div className="home_banner">
        <div className="backdrop">
          <div className="home_container">
            <div className="home_content">
              <div className="front_content">
                <p className="bold_heading">
                  Were here to Secure Your Privacy on Your Hands
                </p>
                <h4 className="sub_heading_home">
                  Friendly & Professional Service"Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud”
                </h4>
                <div className="homebanner_btn">
                  <div>
                    <button className="get_started_btn">Get started</button>
                  </div>
                  <div>
                    <button className="work_btn">
                      See how it works <FaCirclePlay />
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <img src={image} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home_ideas_container">
        <div className="home_ideas">
          {ideas_data.map((data) => (
            <div className="idea_body">
              <div className="ideas_icon">{data.icon}</div>
              <div>
                <p className="ideas_heading">{data.heading}</p>
              </div>
              <div className="ideas_description">{data.description}</div>

              <div>
                <button className="read_more_btn">
                  {data.btn} <BsFillArrowRightCircleFill />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <PenetrationTesting />
      </div>
      <div>
        <PenetrationBenefits />
      </div>
      <div>
        <WhyPenetration />
      </div>
      <LatestBlogs />
    </div>
  );
};

export default Homebanner;
