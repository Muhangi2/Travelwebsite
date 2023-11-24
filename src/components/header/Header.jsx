import React from "react";
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
          <li>Home</li>
          <li>About</li>
          <li>Places</li>
          <li>Careers</li>
          <li>Blog</li>
        </ul>
      </div>
      <button className="button">Login</button>
    </header>
  );
};

export default Header;
