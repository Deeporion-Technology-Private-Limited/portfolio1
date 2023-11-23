import React, { useEffect, useState } from "react";
import { Element, scroller } from "react-scroll";
import slash from "../";
import img6 from "../images/Frame 216.png";
import img7 from "../images/Frame 217.png";
import img8 from "../images/Frame 223.png";
import img9 from "../images/Frame 224.png";
import img10 from "../images/Frame 230.png";
import img1 from "../images/Group 10 (1).png";
import img2 from "../images/Group 10 (2).png";
import img3 from "../images/Group 10 (3).png";
import img4 from "../images/Group 10 (4).png";
import img5 from "../images/Group 10.png";
import "./service.css";

const ServiceContent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSelectorClick = (index) => {
    setCurrentIndex(index);
  };

  // Automatically scroll every 5 seconds

  const handlePrevClick = (num) => {
    setCurrentIndex(num);
  };

  const carouselItems = [
    // Add your carousel items here
    {
      id: 1,
      icon: img10,
      title: "IT Management",
      description:
        "IT management refers to the monitoring and administration of an organization's information technology systems: hardware, software and networks. IT management focuses on how to make information systems operate efficiently. Just as important, it's about helping people work better. The central aim of IT management is to generate value through the use of technology. To achieve this, business strategies and technology must be aligned. IT Management is different from management information systems. The latter refers to management methods tied to the automation or support of human decision making. IT Management refers to IT related management activities in organizations. MIS is focused mainly on the business aspect, with a strong input into the technology phase of the business/organization.",
      img: img5,
      btn: "Read more",
    },
    {
      id: 2,
      icon: img9,
      title: "Network monitoring",
      description:
        "Network monitoring is the use of a system that constantly monitors a computer network for slow or failing components and that notifies the network administrator in case of outages or other trouble. Network monitoring is part of network management. Network monitoring is the use of a system that constantly monitors a computer network for slow or failing components and that notifies the network administrator in case of outages or other trouble. Network monitoring is part of network management. Network monitoring is the use of a system that constantly monitors a computer network for slow or failing components and that notifies the network administrator in case of outages or other trouble. Network monitoring is part of network management.",
      img: img4,
      btn: "Read more",
    },

    {
      id: 3,
      icon: img8,
      title: "Cloud Computing",
      description:
        "Cloud computing is the on-demand availability of computer system resources, especially data storage and computing power, without direct active management by the user. Large clouds often have functions distributed over multiple locations, each of which is a data center. Cloud computing is the on-demand availability of computer system resources, especially data storage and computing power, without direct active management by the user. Large clouds often have functions distributed over multiple locations, each of which is a data center. Cloud computing is the on-demand availability of computer system resources, especially data storage and computing power.",
      img: img3,
      btn: "Read more",
    },

    {
      id: 4,
      icon: img7,
      title: "Ai consulting services",
      description:
        "AI consulting services for cyber security and information technology. We help organizations of all sizes to adopt AI to improve their security posture, reduce risk, and increase efficiency.AI can identify and respond to cyber threats more quickly and effectively than traditional methods. It can also be used to improve the efficiency of your cyber security operations.CyberSecOp can help you to adopt AI to improve your cyber security posture. We have a team of experienced AI experts who can help you assess your current We have a team of experienced AI experts who can help you assess your current ",
      img: img2,
      btn: "Read more",
    },
    {
      id: 5,
      icon: img6,
      title: "Protection from financial damage",
      description:
        "Cyber Security offers financial security against damage caused by cyber incidents. This includes expenses for investigations, credit monitoring services and potential legal responsibilities, among other costs associated with data breaches.offers financial security against damage caused by cyber incidents. This includes expenses for investigations, credit monitoring services and potential legal responsibilities, among other costs associated with data breaches.",
      img: img1,
      btn: "Read more",
    },

    // Add more items as needed
  ];

  const handleScroll = (event) => {
    const scrollDelta =
      event.nativeEvent.wheelDelta || -event.nativeEvent.deltaY;
    const scrollDirection = scrollDelta > 0 ? "up" : "down";

    if (scrollDirection === "up") {
      scroller.scrollTo("prevItem", {
        smooth: true,
      });
    } else {
      scroller.scrollTo("nextItem", {
        smooth: true,
      });
    }
  };

  return (
    <div>
      <h1>Service We Offer</h1>
      <div className="jj">
        <div className="cc">
          {carouselItems.map((item, index) => (
            <>
              {index === currentIndex && (
                <div className={`service_wrapper`}>
                  <div>
                    <img src={item.icon} alt="" />
                    <p>{item.description}</p>
                    <button>{item.btn}</button>
                  </div>
                  <div>
                    <img className="service_image" src={item.img} alt="" />
                  </div>
                </div>
              )}
            </>
          ))}
        </div>
        <div className="selectors">
          {carouselItems.map((ele, index) => (
            <div
              className={`selector ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceContent;
