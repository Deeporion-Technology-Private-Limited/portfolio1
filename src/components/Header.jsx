import React from "react";
import { Outlet, Link } from "react-router-dom";
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
              <Link to="/" className="header_links_li">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="header_links_li">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/blogs" className="header_links_li">
                Blogs
              </Link>
            </li>
            <li>
              <Link to="/services" className="header_links_li">
                Our Service
              </Link>
              s
            </li>
            <li>
              <Link to="/contact" className="header_links_li">
                Contact Us
              </Link>
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
