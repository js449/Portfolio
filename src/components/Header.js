import React from "react";
import "../styles.css";


const Header = ({ onNavItemClick }) => {
  const handleNavClick = (componentName) => {
    onNavItemClick(componentName); // Call the callback function from App.js
  };

  const links = [
    {
      github: "https://github.com/js449", // Update the GitHub link
      LinkedIn: "https://nz.linkedin.com/in/jsingh284"
    }
  ]

  return (
    <header className="header">
      <nav className="navbar">
        <div className="nav-links">
          <a onClick={() => handleNavClick("Hero")} className="nav-link">
            <i className="bi bi-house-heart-fill"></i>
            {" "}
            Home
          </a>
          <a onClick={() => handleNavClick("About")} className="nav-link">
          <i class="bi bi-file-earmark-person-fill"></i>
          {" "}
            About
            
          </a>
          <a onClick={() => handleNavClick("Projects")} className="nav-link">
            <i class="bi bi-journal-text"></i>
          {" "}
            Projects
          </a>
          <a onClick={() => handleNavClick("Experience")} className="nav-link">
            <i class="bi bi-server"></i>
            {" "}
            Experience
          </a>
          <a onClick={() => handleNavClick("Education")} className="nav-link">
            <i class="bi bi-backpack4-fill"></i>
            {" "}
            Education
          </a>
          <a onClick={() => handleNavClick("Contact")} className="nav-link">
            <i class="bi bi-person-lines-fill"></i>
            {" "}
            Contact
          </a>
          {links.map((link, index) => (
          <div key={index} className="link">
            <a href={link.github} target="_blank" rel="noopener noreferrer">
              <i className="bi bi-github"></i>
              </a>
              {" "}
            <a href={link.LinkedIn} target="_blank" rel="noopener noreferrer">
            <i class="bi bi-linkedin"></i>
              </a>
          </div>
        ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
