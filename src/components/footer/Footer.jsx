import React from "react";
import "./Footer.css";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const facebookURL = "https://www.facebook.com";
  const instagramURL = "https://www.instagram.com";
  const linkedinURL = "https://www.linkedin.com";
  const iconSize = 25;
  return (
    <footer>
      <div>
        <span>Copyright © 2023 Proto Web Site Test.</span>
        <span>All rights reserved </span>
      </div>
      <div>
        <ul>
          <li>Home </li>
          <li>About</li>
          <li>Places</li>
          <li>Careers</li>
          <li>Blogs</li>
        </ul>
      </div>
      <div>
        <a href={facebookURL} target="_blank" rel="noopener noreferrer">
          <FaFacebook size={iconSize} />
        </a>

        <a href={instagramURL} target="_blank" rel="noopener noreferrer">
          <FaInstagram size={iconSize} />
        </a>

        <a href={linkedinURL} target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={iconSize} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
