import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import logo from "../images/LOGO.png";
import "./style.css";
import GoToTop from "./GoToTop";
import { RxCross2 } from "react-icons/rx";

const Hamburger = ({ isMenuOpen, setIsMenuOpen, toggleMenu }) => {
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
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
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="header_links_li"
                onClick={closeMenu}
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className="header_links_li"
                onClick={closeMenu}
              >
                Our Service
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blogs"
                className="header_links_li"
                onClick={closeMenu}
              >
                Blogs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="header_links_li"
                onClick={closeMenu}
              >
                Contact Us
              </NavLink>
            </li>
            <li className="join_now_btn">
              <button className=" hamburger_join_now">Join Now</button>
            </li>
          </ul>
        </div>
        <div></div>
      </div>
      <Outlet />
      <GoToTop />
    </div>
  );
};

export default Hamburger;
