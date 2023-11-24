import React from "react";
import "./Testimonials.css";
import { blog } from "../../data/blogdata.js";
const Testmonials = () => {
  return (
    <main className="testimonial">
      <h1>Clients</h1>
      <div className="testimonialgrid">
        {blog.map((blog, index) => (
          <section key={index} className="testimonial_card">
            <div>
              {blog.quoteIcon}
              <p>{blog.text}</p>
            </div>
            <div>
              <img className="profileimage" src={blog.image} alt="" />
              <div className="profiledetails">
                <span>{blog.name}</span>
                <span>{blog.role}</span>
              </div>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
};

export default Testmonials;
