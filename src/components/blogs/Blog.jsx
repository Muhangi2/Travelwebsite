import React from "react";
import "./Blog.css";

import animall from "../../assets/animall.jpeg";
import lion from "../../assets/lion.jpeg";
import yess from "../../assets/yess.jpg";

const Blog = () => {
  return (
    <section className="blogs">
      <h1>Blogs</h1>
      <div className="blogs_grid">
        {/* First Column */}
        <div className="blog_item single_image">
          <p>
            The Ultimate Guide <br /> to Climbing
            <br /> Mount Kilimanjaro
          </p>
          <div className="image_container">
            <img src={animall} alt="" />
          </div>
        </div>

        {/* Second Column */}
        <div className=" double_image">
          <div className="blog_item blog_item_left">
            <p>
              12 Things I’d Tell Any <br /> New Traveler
            </p>
            <div className="image_container">
              <img src={lion} alt="" />
            </div>
          </div>
          <div className="blog_item blog_item_left">
            <p>
              12 TThe Ultimate Packing List for <br />
              Female Travelers
            </p>
            <div className="image_container">
              <img src={yess} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
