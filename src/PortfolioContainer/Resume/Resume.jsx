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
          <div className="rightAbout">
            <div id="education" className="education">
              {/* first education level */}
              <div className="edu-card">
                <div className="col-md-1">
                  <div className="edu">
                    <div className="sircle"></div>
                    <h3 className="edu-name">
                      Tashkent College of Information Technologies
                    </h3>
                  </div>
                  <div className="edu">
                    <h3>In the department of telecommunications</h3>
                  </div>
                </div>
                <div className="col-md-2">2017-2020</div>
              </div>
              {/* secondary education level */}
              <div className="edu-card">
                <div className="col-md-1">
                  <div className="edu">
                    <div className="sircle"></div>
                    <h3 className="edu-name">
                      ICT Academy Information Technologies
                    </h3>
                  </div>
                  <div className="edu">
                    <h3>Frontend and Backend web developer</h3>
                  </div>
                </div>
                <div className="col-md-2">2019-2020</div>
              </div>
              {/* thirty education level */}
              <div className="edu-card">
                <div className="col-md-1">
                  <div className="edu">
                    <div className="sircle"></div>
                    <h3 className="edu-name">
                      MagicSoft Company Information Technologies
                    </h3>
                  </div>
                  <div className="edu">
                    <h3>In the department of telecommunications</h3>
                  </div>
                </div>
                <div className="col-md-2">2021-2022</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
