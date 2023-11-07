import React, { useEffect, useRef, useState } from "react";
import { MdDevices } from "react-icons/md";
import { AiOutlineEye, AiOutlineDollar } from "react-icons/ai";
import { IoCloudDoneOutline } from "react-icons/io5";
import { BsCheckCircle } from "react-icons/bs";
import { RiShieldStarLine } from "react-icons/ri";

const ChooseUs = () => {
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
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const reasons = [
    {
      icon: <MdDevices />,
      heading: "Multi Platform",
      desp: "Lorem ipsum dolor sit amet consectetur. Eget quam dui velit fermentum. Tincidunt est lacus nec vitae turpis amet natoque. Ipsum aliquet gravida phasellus diam in elit suspendisse. Tincidunt est lacus nec vitae turpis amet natoque. Ipsum aliquet gravida phasellus diam in elit dolor sit amet consectetur. ",
    },
    {
      icon: <AiOutlineEye />,
      heading: "Great Visibility",
      desp: "Lorem ipsum dolor sit amet consectetur. Eget quam dui velit fermentum. Tincidunt est lacus nec vitae turpis amet natoque. Ipsum aliquet gravida phasellus diam in elit suspendisse. Tincidunt est lacus nec vitae turpis amet natoque. Ipsum aliquet gravida phasellus diam in elit dolor sit amet consectetur. ",
    },
    {
      icon: <IoCloudDoneOutline />,
      heading: "Cloud System",
      desp: "Lorem ipsum dolor sit amet consectetur. Eget quam dui velit fermentum. Tincidunt est lacus nec vitae turpis amet natoque. Ipsum aliquet gravida phasellus diam in elit suspendisse. Tincidunt est lacus nec vitae turpis amet natoque. Ipsum aliquet gravida phasellus diam in elit dolor sit amet consectetur. ",
    },
    {
      icon: <BsCheckCircle />,
      heading: "A++ Certified",
      desp: "Lorem ipsum dolor sit amet consectetur. Eget quam dui velit fermentum. Tincidunt est lacus nec vitae turpis amet natoque. Ipsum aliquet gravida phasellus diam in elit suspendisse. Tincidunt est lacus nec vitae turpis amet natoque. Ipsum aliquet gravida phasellus diam in elit dolor sit amet consectetur. ",
    },
    {
      icon: <RiShieldStarLine />,
      heading: "High Security",
      desp: "Lorem ipsum dolor sit amet consectetur. Eget quam dui velit fermentum. Tincidunt est lacus nec vitae turpis amet natoque. Ipsum aliquet gravida phasellus diam in elit suspendisse. Tincidunt est lacus nec vitae turpis amet natoque. Ipsum aliquet gravida phasellus diam in elit dolor sit amet consectetur. ",
    },
    {
      icon: <AiOutlineDollar />,
      heading: "Best Budget",
      desp: "Lorem ipsum dolor sit amet consectetur. Eget quam dui velit fermentum. Tincidunt est lacus nec vitae turpis amet natoque. Ipsum aliquet gravida phasellus diam in elit suspendisse. Tincidunt est lacus nec vitae turpis amet natoque. Ipsum aliquet gravida phasellus diam in elit dolor sit amet consectetur. ",
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
        <h1>Why Choose Us</h1>
        <div className="supportive_text_container">
          <p className="supportive_text">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud”
          </p>
        </div>
        <div className="about_choose_box">
          {reasons.map((data) => (
            <div className="about_choose_container">
              <div className="about_choose_icon">
                <div className="choose_icon">{data.icon}</div>
                <h4>{data.heading}</h4>
              </div>
              <div className="about_choose_desp">
                <p>{data.desp}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
