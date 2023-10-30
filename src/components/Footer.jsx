import React from "react";
import "./style.css";
import vigilops from "../images/Vigilops.png";
import { RiFacebookFill, RiTwitterFill, RiDribbbleFill } from "react-icons/ri";
import { AiOutlineGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer_wrapper">
      <div className="footer_container">
        <div>
          <img src={vigilops} alt="" />
          <div>
            <p className="footer_text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div>
            <RiFacebookFill className="footer_tags" />
            <RiTwitterFill className="footer_tags" />
            <AiOutlineGithub className="footer_tags" />
            <RiDribbbleFill className="footer_tags" />
          </div>
        </div>
        <div>
          <ul>
            <li className="footer_heading">COMPANY</li>
            <li className="footer_links">About</li>
            <li className="footer_links">Premium</li>
            <li className="footer_links">Blog</li>
            <li className="footer_links">Affiliate Program</li>
            <li className="footer_links">Get Coupon</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="footer_heading">Help and support</li>
            <li className="footer_links">Contact Us</li>
            <li className="footer_links">Knowledge Center</li>
            <li className="footer_links">Premium Support</li>
            <li className="footer_links"> Sponsorships</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="footer_heading">RESOURCES</li>
            <li className="footer_links">Third-Party Tools</li>
            <li className="footer_links">Illustrationsr</li>
            <li className="footer_links">Themesberg</li>
            <li className="footer_links"> Bluehost</li>
            <li className="footer_links"> Stock Photos</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="footer_heading">LEGAL</li>
            <li className="footer_links">Privacy Policy</li>
            <li className="footer_links">Terms & Conditions</li>
            <li className="footer_links">EULA</li>
          </ul>
        </div>
      </div>
      <div className="footer_copyright">
        <p>© 2021 Themesberg, Inc. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
