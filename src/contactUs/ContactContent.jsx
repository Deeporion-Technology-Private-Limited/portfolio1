import React from "react";
import { FaPhone } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import "./contactUs.css";

const ContactContent = () => {
  const data = [
    {
      icon: <FaPhone />,
      heading: "Phone No.",
      content: "+91 1234567890",
    },
    {
      icon: <IoMailSharp />,
      heading: "Email",
      content: "abcd@gmail.com",
    },
    {
      icon: <IoLocationSharp />,
      heading: "Address",
      content: "121 King Street Melbourne, 3000, Australia",
    },
  ];
  return (
    <div className="contact_wrapper">
      <div className="contact_container">
        <div>
          <h1>Let’s Get in Touch</h1>
        </div>
        <div className="contact_content_wrapper">
          {data.map((item) => (
            <div className="contact_content">
              <div className="contact_icon">{item.icon}</div>
              <div>
                <div className="contact_heading">
                  <h4>{item.heading}</h4>
                </div>
                <div className="contactUs_content">{item.content}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="person_info_box">
          <div className="person_name">
            <input type="text" placeholder="Rupali" />
            <input type="text" placeholder="Last Name" />
          </div>
          <div className="person_detail">
            <input type="email" placeholder="Email" />
            <input type="number" name="" id="" placeholder="Phone Number" />
          </div>
          <div className="person_text">
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Your Message"
            ></textarea>
          </div>
          <div>
            <button className="submit_btn">submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactContent;
