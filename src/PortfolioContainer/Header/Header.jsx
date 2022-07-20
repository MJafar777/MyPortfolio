import React from "react";
import logo from "../../img/jafar-logo.png";

import "./Header.css";
const Header = () => {
  return (
    <div id="Home" className="header-container">
      <div className="header-parent">
        <div className="header-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="header-menu">
          <a className="btnLink" href="#Home">
            Home
          </a>
          <a className="btnLink" href="#AboutMe">
            AboutMe
          </a>
          <a className="btnLink" href="#Resume">
            Resume
          </a>
          <a className="btnLink" href="#Testimonial">
            Testimonial
          </a>
          <a className="btnLink" href="#ContactMe">
            ContactMe
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
