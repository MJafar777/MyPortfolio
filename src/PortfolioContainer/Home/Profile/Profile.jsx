import "./Profile.css";
import Typical from "react-typical";

import React from "react";

const Profile = () => {
  return (
    <div id="Profile" className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://github.com/MJafar777">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://t.me/UZ7773767">
                <i className="fa-brands fa-telegram"></i>
              </a>
              <a href="https://www.facebook.com/profile.php?id=100069161726055">
                <i className="fa-brands fa-facebook"></i>
              </a>

              <a href="https://www.youtube.com/channel/UCShTBcTTZUSxRmwmAOtQcFg">
                <i className="fa-brands fa-youtube"></i>
              </a>

              <a href="https://www.google.com/">
                <i className="fa-brands fa-google"></i>
              </a>
            </div>
          </div>

          <div className="porfile-details-name">
            <span className="primary-text">
              Hello , I'm{" "}
              <span className="highlighted-text highlighted-text2">Ja'far</span>
            </span>
          </div>

          <div className="profile-details-role">
            <span className="primary-text primary-text2">
              <h1 className="h1text">
                {" "}
                <Typical
                  loop={Infinity}
                  wrapper="b"
                  steps={[
                    "Ethusiastic Dev🔴",
                    3000,
                    "Frontend Dev 💻",
                    3000,
                    "Strong Dev 💪",
                    3000,
                    "React / Vue Dev 📱",
                    3000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Knack of building applications with front operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn"> Here Me </button>
            <a href="Resume.pdf" download="Jafar Resume.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
