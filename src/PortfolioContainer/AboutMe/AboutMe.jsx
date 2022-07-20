import React from "react";
import "./AboutMe.css";

import profileImg from "../../img/profileImg.jpg";

const AboutMe = () => {
  return (
    <div id="AboutMe" className="About-continer">
      <div className="about-hero">
        <h1 className="about">About Me</h1>
        <p className="about-text">Why Choose Me?</p>
        <div className="hr">
          <div className="hr-child"></div>
        </div>
      </div>
      <div className="about-main">
        <div className="main-img">
          <img className="img-main" src={profileImg} alt="profileImg" />
        </div>
        <div className="main-info">
          <p className="main-info-p">
            I'm Ja'far, a passionate freelancer bringing you programming and
            design from the future. I am experienced in developing web and
            desktop applications including full front end design. This includes
            brand identity, graphics and illustrations.
          </p>
          <h5 className="txt-here">Here are a Few Highlights:</h5>
          <ul className="information">
            <li className="information-li">
              <div className="sircle"></div> Frontend web development
            </li>
            <li className="information-li">
              <div className="sircle"></div>
              Interactive Front End as per the design
            </li>
            <li className="information-li">
              <div className="sircle"></div> React and Vue
            </li>
            <li className="information-li">
              <div className="sircle"></div> Redux for State Management
            </li>
            <li className="information-li">
              <div className="sircle"></div> UI / UX Designer
            </li>
          </ul>
          <div className="profile-options marginleft">
            <button className="btn primary-btn"> Here Me </button>
            <a href="Resume.pdf" download="Jafar Resume.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>  
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
