import React from "react";
import "./resume.css";
const Resume = () => {
  return (
    <div id="Resume">
      <div className="resume-container">
        <div className="about-hero">
          <h1 className="about">Resume</h1>
          <p className="about-text">My formal Bio Details</p>
          <div className="hr">
            <div className="hr-child"></div>
          </div>
        </div>
        <div className="resume">
          <div className="leftAbout"></div>
          <div className="rightAbout"></div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
