import React from "react";
import "../styles.css";
import CV from "../assets/CV.pdf"; // Adjust the import path
import ExpImage from "../assets/about.jpg";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="heading-container">
        <h2>About Me</h2>
      </div>
      <br />
      <div className="about-container">
        <div className="abt-image">
          <img src={ExpImage} alt="About" />
            <div className="row align-items-start">
              <div className="col" style={{ paddingLeft: "20px", fontSize: "25px", marginBottom:'10px' }}>
                I'm a passionate web developer who enjoying to create
                user-friendly and engaging applications that bring ideas to
                life.
              </div>
            </div>
            <br />
            <div
              className="bg-dark text-white"
              style={{
                fontFamily: "",
                paddingTop: "10px",
                paddingBottom: "10px",
                fontSize: "20px",
              }}
            >
              <div className="row align-items-start">
                <div className="col" style={{ paddingLeft: "150px" }}>
                  Current Skills
                </div>
                <div className="col" style={{ paddingLeft: "150px" }}>
                  Personal Skills
                </div>
              </div>
            </div>
            <br />
            <div className="row align-items-end">
              <div className="col">
                <i className="bi bi-arrow-right-square"> </i>
                <strong>Programming:</strong> HTML, CSS, PHP, JavaScript
              </div>
              <div className="col">
                <strong>Programming:</strong> React, Bootstrap, jQuery, AJAX,
                C#, Python, Java, NodeJs, ExpressJs
              </div>
            </div>
            <div className="row align-items-end">
              <div className="col">
                <i className="bi bi-arrow-right-square"> </i>
                <strong>Database:</strong> Microsoft SQL Server, Azure
                management Studio
              </div>
              <div className="col">
                <strong>Database:</strong> Microsoft SQL Server, Oracle, MySQL
              </div>
            </div>
            <div className="row align-items-end">
              <div className="col">
                <i className="bi bi-arrow-right-square"> </i>
                <strong>Cloud:</strong> Azure
              </div>
              <div className="col">
                <strong>Cloud:</strong> AWS, IBM
              </div>
            </div>
            <div className="row align-items-end">
              <div className="col">
                <i className="bi bi-arrow-right-square"> </i>
                <strong>IDE:</strong> Visual Studio, Vs code
              </div>
              <div className="col">
                <strong>IDE:</strong> Visual Studio, IntelliJ, Eclipse, Vs code,
                PyCharm
              </div>
            </div>
            <br />
            <div className="row align-items-end">
              <div className="col">
                <strong>API:</strong> RESTful Web Services
              </div>
            </div>
            <div className="row align-items-end">
              <div className="col">
                <strong>Source Control:</strong> Git, GitHub, Azure DevOps
              </div>
            </div>
            <br />
            <br />
            <br />
            <p>
              Download my CV{" "}
              <a href={CV} download="Jay_CV.pdf" target="_blank">
                here
              </a>
              .
            </p>
          </div>
          <br/>
        </div>
    </section>
  );
};

export default About;
