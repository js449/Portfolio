import React from "react";
import ExpImage from "../assets/experience.jpg";
import "../styles.css";

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="heading-container" id="heading-container">
        <h2>Experience</h2>
      </div>
      <br />
      <div className="experience-container">
      <div className="exp-image">
              <img src={ExpImage} alt="Experience" />
          <div className="row align-items-start">
            <div
              className="col"
              style={{ paddingLeft: "40%", fontFamily: "", fontSize: "25px"}}
            >
              <strong>Software Developer</strong> 
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
              <div className="col" style={{ paddingLeft: "35px" }}>
                Company: CRV
              </div>
              <div
                className="col"
                style={{ alignItems: "end", paddingLeft: "800px" }}
              >
                April 2022 - Present
              </div>
            </div>
          </div>
          <br />
          <div className="row align-items-end">
            <div
              className="col"
              style={{
                fontWeight: "bold",
                textDecoration: "underline",
                fontSize: "20px",
                fontFamily: "",
              }}
            >
              Description
            </div>
          </div>
          <br />
          <div className="row align-items-end">
              <div className="col">
                <i className="bi bi-arrow-right-square"></i> Developed and
                maintained software applications using PHP ensuring scalability
                and security
                <br />
                <i className="bi bi-arrow-right-square"></i> Assisted in
                designing and implementing front-end web interfaces with HTML,
                CSS, and JavaScript
                <br />
                <i className="bi bi-arrow-right-square"></i> Worked with
                Microsoft SQL Server for efficient database management
                <br />
                <i className="bi bi-arrow-right-square"></i> Contributed to the
                development of REST APIs for seamless integration
                <br />
                <i className="bi bi-arrow-right-square"></i> Collaborated with
                cross-functional teams to meet project requirements
                <br />
                <i className="bi bi-arrow-right-square"></i> Conducted testing
                and debugging to ensure high-quality applications
                <br />
                <i className="bi bi-arrow-right-square"></i> Kept updated with
                industry best practices and emerging technologies
                <br />
            </div>
          </div>
          <br />
        </div>
      </div>
    </section>
  );
};

export default Experience;
