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
        <div className="first_image">
          <p>The Ultimate Guide to Climbing Mount Kilimanjaro</p>
          <img src={animall} alt="" />
        </div>
        <div>
          <div className="firstrigtimage">
            <p>12 Things I’d Tell Any New Traveler</p>
            <img src={lion} alt="" />
          </div>
          <div className="secondrigtimage">
            <p>The Ultimate Packing List for Female Travelers</p>
            <img src={yess} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
