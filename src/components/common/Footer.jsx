import React from "react";
import "../style.css";
import logo from "../../assets/images/LOGO.png";
import { RiFacebookFill, RiTwitterFill, RiDribbbleFill } from "react-icons/ri";
import { AiOutlineGithub } from "react-icons/ai";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="footer_wrapper">
      <div className="footer_container">
        <div>
          <img src={logo} alt="" />
          <div>
            <p className="footer_text">{t("lorem_ipsum_dolor_sit_amet")}</p>
          </div>
          <div className="social_links">
            <a href="facebook">
              <RiFacebookFill className="footer_tags" />
            </a>
            <a href="twitter">
              <RiTwitterFill className="footer_tags" />
            </a>
            <a href="github">
              <AiOutlineGithub className="footer_tags" />
            </a>
            <a href="dribble">
              <RiDribbbleFill className="footer_tags" />
            </a>
          </div>
        </div>
        <div>
          <ul>
            <li className="footer_heading">{t("company")}</li>
            <li className="footer_links">
              <a href="/about">{t("about")}</a>
            </li>
            <li className="footer_links">
              <a href="/premium">{t("premium")}</a>
            </li>
            <li className="footer_links">
              <a href="/blogs">{t("blogs")}</a>
            </li>
            <li className="footer_links">
              <a href="/affiliate">{t("affiliate")}</a>
            </li>
            <li className="footer_links">
              <a href="/get-coupon">{t("get_coupon")}</a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="footer_heading">{t("help")}</li>
            <li className="footer_links">
              <a href="/contact">{t("contact")}</a>
            </li>
            <li className="footer_links">
              <a href="/knowledge">{t("knowledge")}</a>
            </li>
            <li className="footer_links">
              <a href="/premium-support">{t("premium_support")}</a>
            </li>
            <li className="footer_links">
              <a href="/sponsership">{t("sponsership")}</a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="footer_heading">{t("resources")}</li>
            <li className="footer_links">
              <a href="/third-party">{t("third_party")}</a>
            </li>
            <li className="footer_links">
              <a href="/illustrations">{t("illustrations")}</a>
            </li>
            <li className="footer_links">
              <a href="/deeporion">{t("deeporion")}</a>
            </li>
            <li className="footer_links">
              <a href="/bluehost">{t("bluehost")}</a>
            </li>
            <li className="footer_links">
              <a href="/stock">{t("stock")}</a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="footer_heading">{t("legal")}</li>
            <li className="footer_links">
              <a href="/privacy-policy">{t("privacy_policy")}</a>
            </li>
            <li className="footer_links">
              <a href="/terms">{t("terms")}</a>
            </li>
            <li className="footer_links">
              <a href="/eula">{t("eula")}</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer_copyright">
        <p>{t("copyright")}</p>
      </div>
    </div>
  );
};

export default Footer;
