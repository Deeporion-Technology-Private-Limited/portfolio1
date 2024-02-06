import React, { useEffect, useRef, useState, useTransition } from "react";
import { FaPhone } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import "./contactUs.css";
import { useTranslation } from "react-i18next";

const ContactContent = () => {
  const { t } = useTranslation();
  const triggerRef = useRef();
  const [isTriggered, setIsTriggered] = useState(false);
  const handleScroll = () => {
    if (triggerRef.current) {
      const elementTop = triggerRef.current.getBoundingClientRect().top;
      const viewportHeight = window.innerHeight;

      if (elementTop < viewportHeight) {
        setIsTriggered(true);
      }
    }
  };
  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const data = [
    {
      icon: <FaPhone />,
      heading: "Phone No.",
      content: <a href="tel:+918882192787">+91 8882192787</a>,
    },
    {
      icon: <IoMailSharp />,
      heading: "Email",
      content: <a href="mailto:email@example.com">email@gmail.com</a>,
    },
    {
      icon: <IoLocationSharp />,
      heading: "Address",
      content: "121 King Street Melbourne, 3000, Australia",
    },
  ];

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
    message: "",
  });

  // State to manage validation errors
  const [errors, setErrors] = useState({});

  // Validation function
  const validateForm = () => {
    let newErrors = {};

    // Validate username
    if (formData.username.trim() === "") {
      newErrors = { ...newErrors, username: "Username is required" };
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors = { ...newErrors, email: "Invalid email address" };
    }
    // Set errors state
    setErrors(newErrors);
  };

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted successfully!", formData);
  };

  // Event handler for input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Update the form data state
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="contact_wrapper">
      <div
        className={`contact_container heading scroll-trigger ${
          isTriggered ? "animate" : ""
        }`}
        ref={triggerRef}
      >
        <div>
          <h1 className="contact_h1">{t("lets_get_in_touch")}</h1>
        </div>
        <div className="contact_content_wrapper">
          {data.map((item) => (
            <div>
              <div className="contact_content">
                <div className="contact_icon">{item.icon}</div>
                <div className="contact_icon_container">
                  <div className="contact_heading">
                    <h4>{item.heading}</h4>
                  </div>
                  <div className="contactUs_content">{item.content}</div>
                </div>
                <div className="stroke"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <form className="contact_us_form" onSubmit={handleSubmit}>
        <div
          className={`person_info_box  heading scroll-trigger ${
            isTriggered ? "animate" : ""
          }`}
          ref={triggerRef}
        >
          <input
            type="text"
            placeholder="Rupali"
            id="firstname"
            name="firstname"
            value={formData.firstname}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Last Name"
            id="lastname"
            name="lastname"
            value={formData.lastname}
            onChange={handleInputChange}
          />
          <input
            type="email"
            placeholder="Email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Phone Number"
            id="phonenumber"
            name="phonenumber"
            value={formData.phonenumber}
            onChange={handleInputChange}
          />
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleInputChange}
          ></textarea>
          <div>
            <button className="submit_btn">{t("submit")}</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactContent;
