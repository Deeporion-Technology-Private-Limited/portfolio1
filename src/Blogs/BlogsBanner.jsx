import React from "react";
import "./blogs.css";
import BlogContent from "./BlogContent";

const BlogsBanner = () => {
  return (
    <div>
      <div className="about_banner">
        <div className="about_backdrop">
          <div className="home_container">
            <div className="home_content">
              <div className="front_content">
                <p className="bold_heading">Our Latest Blogs</p>
                <h4 className="sub_heading_home">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Sint, consequatur sequi. Blanditiis nostrum deserunt vero.
                </h4>
                <div>
                  <button className="get_started_btn">Get started</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <BlogContent />
      </div>
    </div>
  );
};

export default BlogsBanner;
