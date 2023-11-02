import React from "react";
import { HiOutlineDocumentReport } from "react-icons/hi";
import "./home.css";
const PenetrationBenefits = () => {
  const data = [
    {
      icon: <HiOutlineDocumentReport />,
      heading: "Analysis of IT Infrastructure",
      desp: "A pen test allows an in-depth analysis of your IT infrastructure and your ability to defend your applications, systems, networks, endpoints, and users from external and internal attempts to cause disruption and data losses or gain unauthorized access to protected assets.",
    },
    {
      icon: <HiOutlineDocumentReport />,
      heading: "Protects Clients and Partnerships",
      desp: "A security breach can significantly affect your organization, clients, partners, and other third parties. However, if you schedule penetration tests regularly and take the necessary actions and prevention steps needed to ensure data and system security, you build trust and confidence.",
    },
    {
      icon: <HiOutlineDocumentReport />,
      heading: "Protection from Financial Damage",
      desp: "A single breach of your company’s security system can lead to millions of dollars in damages. Security faults and associated disruptions in the performance of your network, applications, and services can cause debilitating financial harm to your organization.",
    },
    {
      icon: <HiOutlineDocumentReport />,
      heading: "Protects Company Image and Reputation",
      desp: "You build an excellent company reputation and public reputation after years of consistency, hard work, and a lot of investment. However, all your hard work can change overnight due to a single security breach. Irrespective of the breach’s cost and whether you resolve it quickly.",
    },
    {
      icon: <HiOutlineDocumentReport />,
      heading: "Compliance with Regulation and Security Certification",
      desp: "The complete records of a pen tests can help you evade substantial penalties for non-compliance. It also allows you to illustrate ongoing due diligence by maintaining the required security controls, also need competent pen testers with the right tools to conduct these tests.",
    },
  ];

  return (
    <div className="benefits">
      <div className="penetration_desp_info">
        <div className="benefits_penetration_desp_container">
          <div className="benefits_penetration_container">
            <h1>Benefits of Penetration testing </h1>
            <div className="benefit_supportive_text_container">
              <p className="benefit_supportive_text">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud”
              </p>
            </div>
          </div>

          <div className="penetration_flex">
            {data.map((obj) => (
              <div className="benefit_penetration_desp_box">
                <div>
                  <div className="benefit_penetration_desp_content"></div>
                </div>
                <div className="benefit_penetration_desp_content">
                  <div className="benefit_desp_icon">
                    <div className="penetration_icon">{obj.icon}</div>

                    <h2>{obj.heading}</h2>
                  </div>
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

export default PenetrationBenefits;
