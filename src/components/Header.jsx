import React from "react";
import { Outlet, Link, NavLink } from "react-router-dom";
import vigilops from "../images/Vigilops.png";
import "./style.css";

const Header = () => {
  return (
    <div>
      <div className="header_container">
        <div>
          <img src={vigilops} alt="" />
        </div>
        <div>
          <ul className="header_links">
            <li>
              <NavLink
                to="/"
                className="header_links_li "
                activeClassName="active"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="header_links_li "
                activeClassName="active"
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blogs"
                className="header_links_li "
                activeClassName="active"
              >
                Blogs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className="header_links_li "
                activeClassName="active"
              >
                Our Service
              </NavLink>
              s
            </li>
            <li>
              <NavLink
                to="/contact"
                className="header_links_li "
                activeClassName="active"
              >
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
    </div>
  );
};

export default Header;
