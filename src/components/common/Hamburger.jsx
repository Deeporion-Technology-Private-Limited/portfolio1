import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import logo from "../../assets/images/LOGO.png";
import "../style.css";
import GoToTop from "./GoToTop";
import { RxCross2 } from "react-icons/rx";
import { useTranslation } from "react-i18next";

const Hamburger = ({ isMenuOpen, setIsMenuOpen, toggleMenu }) => {
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const { t } = useTranslation();

  return (
    <div>
      <div className="mobile_container">
        <div className={`header_links show`}>
          <ul className="header_links_ul">
            <div className="mobile_logo">
              <div className="logo">
                <img src={logo} alt="" />
              </div>
              {/* Hamburger menu button */}
              <div className="hamburger_menu X_btn" onClick={toggleMenu}>
                <RxCross2 />
              </div>
            </div>
            <li>
              <NavLink to="/" className="header_links_li" onClick={closeMenu}>
                {t("home")}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="header_links_li"
                onClick={closeMenu}
              >
                {t("about_us")}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className="header_links_li"
                onClick={closeMenu}
              >
                {t("our_service")}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blogs"
                className="header_links_li"
                onClick={closeMenu}
              >
                {t("blogs")}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="header_links_li"
                onClick={closeMenu}
              >
                {t("contact_us")}
              </NavLink>
            </li>
            <li className="join_now_btn">
              <button className=" hamburger_join_now">{t("join_now")}</button>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
      <GoToTop />
    </div>
  );
};

export default Hamburger;
