import React from "react";
import "../styles.css";

const Projects = () => {
  const links = [
    {
      teamViewer: "https://github.com/js449/Web-development/tree/main/Assin_1_322/course_html", 
      pMAPI: "https://github.com/js449/Web-development/tree/main/Assign_4_322/compx322assn4", 
      pMFront: "https://github.com/js449/Web-development/tree/main/Assign_3_322", 
      weatherWidget: "https://github.com/js449/Web-development/tree/main/Assign_2_322", 
      gym: "https://github.com/js449/Gym-Project", 
      eCommerce: "https://github.com/js449/e-commerce-website/tree/master/public", 
    }
  ]
  return (
    <section id="projects" className="projects">
      <div className="heading-container" id="heading-container">
        <h2>Projects</h2>
      </div>
      <br />
      <div className="project-container">
      {links.map((link, index) => (
          <div key={index} className="link">
            <div className="row align-items-start">
            <div
              className="col"
              style={{ paddingLeft: "20px", fontSize: "25px", marginBottom:'10px' }}
            >
              Here is the list of some of my projects but not limited which i created while studying at university.
            </div>
          </div>
          <br />
        <div className="row">
          <div className="col-md-4">
            <h5>Asynchronous E-Sports Team Viewer</h5>
            <p>
              Implement a web application that displays information about
              e-sports teams using HTML, CSS, JavaScript, DHTML, Server-side PHP
              scripting, MySQL database, AJAX in an asynchronous manner.
            </p>
            <p>
              <a href={link.teamViewer} className="btn btn-secondary" role="button" target="_blank" rel="noopener noreferrer" style={{background: '#53a8b6'}}>
                Source Code »
              </a>
            </p>
          </div>
          <div className="col-md-4">
            <h5> Project Management (REST API)</h5>
            <p>
              Implementation of REST API to allows users to manage their
              projects using HTTP Verbs to make request using CRUD(POST, GET,
              PUT, DELETE), MySQL database, Node.js and Express.js back-end.
            </p>
            <p>
            <a href={link.pMAPI} className="btn btn-secondary" role="button" target="_blank" rel="noopener noreferrer" style={{background: '#53a8b6'}}>
                Source Code »
              </a>
            </p>
          </div>
          <div className="col-md-4">
          <h5> Weather Monitor Widget</h5>
            <p>
            weather forecasts application using HTML, CSS, JavaScript, DHTML,
              Server-side PHP scripting, MySQL database, AJAX and external API
              in an asynchronous manner.
            </p>
            <p>
            <a href={link.weatherWidget} className="btn btn-secondary" role="button" target="_blank" rel="noopener noreferrer" style={{background: '#53a8b6'}}>
                Source Code »
              </a>
            </p>
          </div>
        </div>
        <br />
        <div className="row">
        <div className="col-md-4">
          <h5>Project Management (Front-End)</h5>
            <p>
              Application which allows users to manage their projects using
              ReactJS, Redux Library, Bootstrap, HTML, CSS and JavaScript.
            </p>
            <p>
            <a href={link.pMFront} className="btn btn-secondary" role="button" target="_blank" rel="noopener noreferrer" style={{background: '#53a8b6'}}>
                Source Code »
              </a>
            </p>
          </div>
          <div className="col-md-4">
            <h5>E-Commerce</h5>
            <p>
              A online clothing store application using HTML, CSS and Javascript
              functions.
            </p>
            <br />
            <p>
            <a href={link.eCommerce} className="btn btn-secondary" role="button" target="_blank" rel="noopener noreferrer" style={{background: '#53a8b6'}}>
                Source Code »
              </a>
            </p>
          </div>
          <div className="col-md-4">
            <h5>Gym-Project</h5>
            <p>A basic gym web page application using HTML and CSS.</p>
            <br />
            <br />
            <p>
            <a href={link.gym} className="btn btn-secondary" role="button" target="_blank" rel="noopener noreferrer" style={{background: '#53a8b6'}}>
                Source Code »
              </a>
            </p>
          </div>
        </div>
        </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
