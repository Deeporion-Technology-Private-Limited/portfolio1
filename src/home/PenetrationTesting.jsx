import React, { useEffect, useRef, useState } from "react";
import frame from "../images/Frame.png";
import { AiFillPieChart } from "react-icons/ai";
import { BiChip } from "react-icons/bi";
import {
  HiPresentationChartBar,
  HiOutlineDocumentReport,
} from "react-icons/hi";
import { HiMiniComputerDesktop } from "react-icons/hi2";
const PenetrationTesting = () => {
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
  const data = [
    {
      icon: <AiFillPieChart />,
      heading: "Planning and reconnaissance",
      desp: "Defining the scope and goals of a test, including the systems to be addressed and the testing methods to be used.",
    },
    {
      icon: <BiChip />,
      heading: "Scanning",
      desp: "The next step is to understand how the target application will respond to various intrusion attempts. This is typically done using static and dynamic analysis.",
    },
    {
      icon: <HiPresentationChartBar />,
      heading: "Gaining Access",
      desp: "This stage uses web application attacks, such as cross-site scripting, SQL injection and backdoors, to uncover a target’s vulnerabilities.",
    },
    {
      icon: <HiMiniComputerDesktop />,
      heading: "Maintaining access",
      desp: "The goal of this stage is to see if the vulnerability can be used to achieve a persistent presence in the exploited system long enough for a bad actor to gain in-depth access.",
    },
    {
      icon: <HiOutlineDocumentReport />,
      heading: "Analysis",
      desp: "This information is analyzed by security personnel to help configure an enterprise’s WAF settings and other application security solutions to patch vulnerabilities and protect against future attacks.",
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
        <h1>Penetration testing stages</h1>
        <div className="supportive_text_container">
          <p className="supportive_text">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud”
          </p>
        </div>
      </div>
      <div className="penetration_desp_info">
        <div className="penetration_desp_container">
          <div className="penetration_img">
            <img src={frame} alt="" />
          </div>
          <div className="penetration_flex">
            {data.map((obj) => (
              <div className="penetration_desp_box">
                <div className="penetration_icon">{obj.icon}</div>
                <div className="penetration_desp_content">
                  <h2>{obj.heading}</h2>
                  <p>{obj.desp}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PenetrationTesting;
