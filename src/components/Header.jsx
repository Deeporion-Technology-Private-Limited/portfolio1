import React, { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import logo from "../images/LOGO.png";
import "./style.css";
import GoToTop from "./GoToTop";
import { HiMenuAlt3 } from "react-icons/hi";
import Hamburger from "./Hamburger";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="header_links_li">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className="header_links_li">
                Our Service
              </NavLink>
            </li>
            <li>
              <NavLink to="/blogs" className="header_links_li">
                Blogs
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="header_links_li">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <button className="header_btn">Join Now</button>
        </div>
      </div>
      <Outlet />
      <GoToTop />
    </div>
  );
};

export default Header;
