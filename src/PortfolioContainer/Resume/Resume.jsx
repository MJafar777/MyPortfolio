import React from "react";

import "./resume.css";

import education from "../../img/Resume/education.svg";
import history from "../../img/Resume/work-history.svg";
import programming from "../../img/Resume/programming-skills.svg";
import projects from "../../img/Resume/projects.svg";
import interests from "../../img/Resume/interests.svg";

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
          <div className="leftAbout">
            <div className="icon-resume">
              <img className="icons-resume" src={education} alt="education" />
              <img className="icons-resume" src={history} alt="history" />
              <img className="icons-resume" src={programming} alt="program" />
              <img className="icons-resume" src={projects} alt="projects" />
              <img className="icons-resume" src={interests} alt="interests" />
            </div>
            <div className="icon-info-resume">
              <a className="linkResume" href="#education">
                education
              </a>
              <a className="linkResume" href="#work-history">
                work-history
              </a>
              <a className="linkResume" href="#programming-skills">
                programming-skills
              </a>
              <a className="linkResume" href="#projects">
                projects
              </a>
              <a className="linkResume" href="#interests">
                interests
              </a>
            </div>
          </div>
          <div className="rightAbout"></div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
