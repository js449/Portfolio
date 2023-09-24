import React from "react";
import ProfileImage from "../assets/jay.jpeg"; 
import "../styles.css";

const Hero = () => {
  return (
    <section className="hero">
        <div className="hero-container">
          <div class="ribbon">
            <span>Confidential</span>
          </div>
          <div className="hero-content">
            <div className="profile-image">
              <img src={ProfileImage} alt="Profile" />
            </div>
            <div className="profile-details-name">
              <span className="primary-text" >
                {" "}
                <span className="highlighted-text" style={{fontFamily:"", fontSize:'25px'}}>Hello, I'M  Jagdeep (Jay) Singh</span>
              </span>
            </div>
            <br/>
            <div className="typewriter">
              <span className="primary-text"style={{fontSize:'35px'}}>
                {" "}
                <h1> "Graduate Software-Developer 😍"</h1>
                <span className="profile-role-tagline" style={{fontSize:'25px'}}>
                  knack of building application with front and back-end
                  operations
                </span>
              </span>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Hero;
