import React from "react";
import { Link } from "react-scroll";
import "./Header.css";
import logo from "../../assets/logooo.png";

const Header = () => {
  return (
    <header>
      <div className="header_left">
        <img src={logo} alt="" />
        <span>Proto</span>
      </div>
      <div className="navitems">
        <ul>
          {/* Use Link from react-scroll for smooth scrolling */}
          <li>
            <Link
              activeClass="active"
              to="home" // Specify the ID of the target section
              spy={true}
              smooth={true}
              offset={-70} // Adjust the offset as needed
              duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="places"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>
              Places
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="testimonials"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>
              Careers
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="blog"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>
              Blog
            </Link>
          </li>
        </ul>
      </div>
      <button className="button">Login</button>
    </header>
  );
};

export default Header;
