import React from "react";
import EducationImage from "../assets/education.jpg";
import "../styles.css";

const Education = () => {
  return (
    <section id="education" className="education">
      <div className="heading-container" id="heading-container">
        <h2>Education</h2>
      </div>
      <br />
      <div className="education-container">
      <div className="education-image">
              <img src={EducationImage} alt="Experience" />
          <div className="row align-items-start">
            <div
              className="col"
              style={{ paddingLeft: "20px", fontSize: "25px", marginBottom:'10px' }}
            >
              Here is the list of my institutes:
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
              <div className="col" style={{ paddingLeft: "40px" }}>Education</div>
              <div className="col" style={{ paddingRight: "30px" }}>Institution</div>
              <div className="col" style={{ paddingRight: "40px" }}>Graduation Year</div>
            </div>
          </div>
          <br/>
          <div className="row align-items-end">
              <div className="col">
                <i className="bi bi-arrow-right-square"></i> Bachelor's in
                Computer Science(Technology)
              </div>
              <div className="col">University of Waikato</div>
              <div className="col">2022</div>
            </div>
            <br/>
            <div className="row align-items-end">
              <div className="col">
                <i className="bi bi-arrow-right-square"></i> NZIM Diploma In
                Management Level 5
              </div>
              <div className="col">ATC Vision Colleges</div>
              <div className="col">2012</div>
            </div>
            <br/>
            <div className="row align-items-end">
              <div className="col">
                <i className="bi bi-arrow-right-square"></i> Diploma In Business
                Level 6
              </div>
              <div className="col">New Zealand National College</div>
              <div className="col">2015-16</div>
            </div>
            <br/>
            <div className="row align-items-end">
              <div className="col">
                <i className="bi bi-arrow-right-square"></i> Diploma In Business
                Level 7
              </div>
              <div className="col">Edenz Colleges</div>
              <div className="col">2017</div>
            </div>
            <br/>
          </div>
        </div>
    </section>
  );
};

export default Education;
