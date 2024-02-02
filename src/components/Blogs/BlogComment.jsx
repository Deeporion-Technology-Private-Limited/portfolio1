import React, { useEffect, useRef, useState } from "react";
import "./blogs.css";
import { useTranslation } from "react-i18next";

const BlogComment = () => {
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

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
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
    <div
      className={`scroll-animate ${isTriggered ? "animate" : ""}`}
      ref={triggerRef}
    >
      <div className="person_info_box">
        <h4>{t("leave_a_comment")}</h4>
        <form onSubmit={handleSubmit}>
          <div className="blog_form_container">
            <input
              type="text"
              placeholder="Full Name"
              className="full_name"
              name="fullname"
              id="fullname"
              value={formData.fullname}
              onChange={handleInputChange}
            />
            <input
              type="text"
              placeholder="Email"
              className="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Your Message"
              className="text_area"
              value={formData.message}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <div>
            <button className="submit_btn">{t("submit")}</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogComment;
