import React from "react";

// img
import a from "../../img/Slider/a.jpg";
import b from "../../img/Slider/b.jpg";
import c from "../../img/Slider/c.jpg";
import d from "../../img/Slider/d.jpg";
import e from "../../img/Slider/e.jpg";
import f from "../../img/Slider/f.jpg";
import j from "../../img/Slider/j.jpg";
import h from "../../img/Slider/h.jpg";
import l from "../../img/Slider/l.jpg";
import m from "../../img/Slider/m.jpg";
import n from "../../img/Slider/n.jpg";
// img

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
            {/* education started */}
            <div id="education" className="education">
              {/* first education level */}
              <div className="edu-card edu-card1">
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
            {/* education finished */}

            {/* work-history started */}
            <div id="work-history" className="work-history">
              {/* first work-history level */}
              <div className="edu-card edu-card1">
                <div className="col-md-1">
                  <div className="edu">
                    <div className="sircle"></div>
                    <h3 className="edu-name">Yosh Texniklar Ixtirosi</h3>
                  </div>
                  <div className="edu">
                    <h3>computer, printer, household appliance adjuster</h3>
                  </div>
                </div>
                <div className="col-md-2">2016-2021</div>
              </div>
              {/* secondary work-history level */}
              <div className="edu-card">
                <div className="col-md-1">
                  <div className="edu">
                    <div className="sircle"></div>
                    <h3 className="edu-name">Air traffic controller 225-ATC</h3>
                  </div>
                  <div className="edu">
                    <h3>internet provayderi, wi-fi konfigurator sozlagichi</h3>
                  </div>
                </div>
                <div className="col-md-2">2018-2019</div>
              </div>
              {/* thirty work-history level */}
              <div className="edu-card">
                <div className="col-md-1">
                  <div className="edu">
                    <div className="sircle"></div>
                    <h3 className="edu-name">
                      MagicSoft Company Information Technologies
                    </h3>
                  </div>
                  <div className="edu">
                    <h3>freelance developer , technical support officer</h3>
                  </div>
                </div>
                <div className="col-md-2">2021-2022</div>
              </div>
            </div>
            {/* work-history finished */}

            {/* programming-skills started */}
            <div id="programming-skills" className="programming-skills">
              {/* left status */}
              <div className="prog">
                {/* 1 */}
                <div className="prog-children prog-children-top">
                  <div className="prog-children1">
                    <div className="sircle"></div>
                    <h3 className="type-language">React / Redux</h3>
                  </div>
                  <div className="prog-children2">
                    <span className="learning"></span>
                  </div>
                </div>
                {/* 1 */}
                {/* 2 */}
                <div className="prog-children">
                  <div className="prog-children1">
                    <div className="sircle"></div>
                    <h3 className="type-language">Vue / Vuex</h3>
                  </div>
                  <div className="prog-children2">
                    <span className="learning" style={{ width: "70%" }}></span>
                  </div>
                </div>
                {/* 2 */}
                {/* 3 */}
                <div className="prog-children">
                  <div className="prog-children1">
                    <div className="sircle"></div>
                    <h3 className="type-language">CSS</h3>
                  </div>
                  <div className="prog-children2">
                    <span className="learning" style={{ width: "90%" }}></span>
                  </div>
                </div>
                {/* 3 */}
                {/* 4 */}
                <div className="prog-children">
                  <div className="prog-children1">
                    <div className="sircle"></div>
                    <h3 className="type-language">HTML</h3>
                  </div>
                  <div className="prog-children2">
                    <span className="learning" style={{ width: "95%" }}></span>{" "}
                  </div>
                </div>
                {/* 4 */}
              </div>
              {/* left status */}

              {/* right status */}
              <div className="prog">
                {/* 1 */}
                <div className="prog-children prog-children-top">
                  <div className="prog-children1">
                    <div className="sircle"></div>
                    <h3 className="type-language">Java Script</h3>
                  </div>
                  <div className="prog-children2">
                    <span className="learning" style={{ width: "83%" }}></span>
                  </div>
                </div>
                {/* 1 */}
                {/* 2 */}
                <div className="prog-children">
                  <div className="prog-children1">
                    <div className="sircle"></div>
                    <h3 className="type-language">Git / Github</h3>
                  </div>
                  <div className="prog-children2">
                    <span className="learning" style={{ width: "87%" }}></span>
                  </div>
                </div>
                {/* 2 */}
                {/* 3 */}
                <div className="prog-children">
                  <div className="prog-children1">
                    <div className="sircle"></div>
                    <h3 className="type-language">SASS / SCSS</h3>
                  </div>
                  <div className="prog-children2">
                    <span className="learning" style={{ width: "60%" }}></span>
                  </div>
                </div>
                {/* 3 */}
                {/* 4 */}
                <div className="prog-children">
                  <div className="prog-children1">
                    <div className="sircle"></div>
                    <h3 className="type-language">Adobe Xd / Photoshop</h3>
                  </div>
                  <div className="prog-children2">
                    <span className="learning" style={{ width: "95%" }}></span>{" "}
                  </div>
                </div>
                {/* 4 */}
              </div>
              {/* right status */}
            </div>
            {/* programming-skills finished */}

            {/* projects Started */}
            <div className="projects" id="projects">
              <div className="projects-title">
                <img className="imgg img1" id="1" src={a} alt="a" />
                <img className="imgg img2" id="2" src={b} alt="b" />
                <img className="imgg img3" id="3" src={c} alt="c" />
                <img className="imgg img4" id="4" src={d} alt="d" />
                <img className="imgg img5" id="5" src={e} alt="e" />
                <img className="imgg img6" id="6" src={f} alt="f" />
                <img className="imgg img7" id="7" src={j} alt="j" />
                <img className="imgg img8" id="8" src={h} alt="h" />
                <img className="imgg img9" id="9" src={l} alt="l" />
                <img className="imgg img10" id="9" src={m} alt="m" />
                <img className="imgg img11" id="10" src={n} alt="n" />
              </div>
              <div className="slider">
                <a href="#1" className="scrol">
                  {""}
                </a>
                <a href="#2" className="scrol">
                  {""}
                </a>
                <a href="#3" className="scrol">
                  {""}
                </a>
                <a href="#4" className="scrol">
                  {""}
                </a>
                <a href="#5" className="scrol">
                  {""}
                </a>
                <a href="#6" className="scrol">
                  {""}
                </a>
                <a href="#7" className="scrol">
                  {""}
                </a>
                <a href="#8" className="scrol">
                  {""}
                </a>
                <a href="#9" className="scrol">
                  {""}
                </a>
                <a href="#10" className="scrol">
                  {""}
                </a>
              </div>
            </div>
            {/* projects Finished */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
