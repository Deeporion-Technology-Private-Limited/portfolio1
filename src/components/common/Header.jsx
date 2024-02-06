import React, { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import logo from "../../assets/images/LOGO.png";
import "../style.css";
import GoToTop from "./GoToTop";
import { HiMenuAlt3 } from "react-icons/hi";
import Hamburger from "./Hamburger";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const { t } = useTranslation();

  return (
    <div>
      <div className="header_container">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div
          className={isMenuOpen ? "hamburger_menu" : "navlink"}
          onClick={toggleMenu}
        >
          {isMenuOpen ? "" : <HiMenuAlt3 />}
          {isMenuOpen && (
            <Hamburger
              isMenuOpen={isMenuOpen}
              setIsMenuOpen={setIsMenuOpen}
              toggleMenu={toggleMenu}
            />
          )}
        </div>
        <div className={`header_links`}>
          <ul className="header_links_ul">
            <li>
              <NavLink to="/" className="header_links_li">
                {t("home")}
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="header_links_li">
                {t("about_us")}
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className="header_links_li">
                {t("our_service")}
              </NavLink>
            </li>
            <li>
              <NavLink to="/blogs" className="header_links_li">
                {t("blogs")}
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="header_links_li">
                {t("contact_us")}
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <button className="header_btn">{t('join_now')}</button>
        </div>
      </div>
      <Outlet />
      <GoToTop />
    </div>
  );
};

export default Header;
