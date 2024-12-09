import React from "react";
import Typewriter from "typewriter-effect";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="#">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fa fa-linkedin"></i>
              </a>
              <a href="#">
                <i className="fa fa-github"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="highlighted-text">Prathyusha!</span>
            </span>
          </div>

          <div className="profile-details-role">
            <span className="primary-text">
              <h1>
                <Typewriter
                  options={{
                    strings: [
                      "Software Engineer",
                      "Machine Learning Engineer",
                      "Natural Language Processing Engineer",
                      "Computer Vision Enthusiast",
                      "AI Engineer",
                      "Data Scientist",
                      "Full Stack Web Application Developer",
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 50, // Delay between each character
                    deleteSpeed: 30, // Speed of deleting characters
                  }}
                />
              </h1>
              <span className="profile-role-tagline">
                Blending research expertise with technical prowess to create
                innovative data-driven solutions, <br/>leveraging Machine Learning
                and AI for impactful web and mobile applications.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button
              className="btn primary-btn"
              onClick={() => {
                const contactMeSection = document.getElementById("ContactMe");
                if (contactMeSection) {
                  contactMeSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Hire Me
            </button>
            <a
              href="https://drive.google.com/file/d/1DFZx9famKjQwwlcvohZ86vPV-sqjEZxz/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
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
}
