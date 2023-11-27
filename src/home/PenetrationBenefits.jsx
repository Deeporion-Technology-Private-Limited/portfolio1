import React from "react";
import { HiOutlineDocumentReport } from "react-icons/hi";
import "./home.css";
import { useTranslation } from "react-i18next";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
const PenetrationBenefits = () => {
  const { t } = useTranslation();
  const data = [
    {
      icon: <HiOutlineDocumentReport />,
      heading: t("infrastructure"),
      desp: t("endpoints"),
    },
    {
      icon: <HiOutlineDocumentReport />,
      heading: t("partnership"),
      desp: t("security_breach"),
    },
    {
      icon: <HiOutlineDocumentReport />,
      heading: t("damage"),
      desp: t("single_breach"),
    },
    {
      icon: <HiOutlineDocumentReport />,
      heading: t("reputation"),
      desp: t("build"),
    },
    {
      icon: <HiOutlineDocumentReport />,
      heading: t("compliance"),
      desp: t("penalties"),
    },
  ];
  return (
    <div className="benefits">
      <div className="penetration_desp_info">
        <div className="benefits_penetration_desp_container">
          <div className="benefits_penetration_container">
            <h1> {t("benefits_of_Penetration_testing")} </h1>
            <div className="benefit_supportive_text_container">
              <p className="benefit_supportive_text">{t("lorem_ipsum")}</p>
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
