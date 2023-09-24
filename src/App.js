import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";


const App = () => {
  const [activeComponent, setActiveComponent] = useState(null);

  const handleNavItemClick = (componentName) => {
    setActiveComponent(componentName);
  };

  return (
    <div className="App">
      <div className="flex-container">
        <Header onNavItemClick={handleNavItemClick} />
        <div className="content">
            {activeComponent === "Hero" && <Hero />}
            {activeComponent === "About" && <About />}
            {activeComponent === "Projects" && <Projects />}
            {activeComponent === "Experience" && <Experience />}
            {activeComponent === "Education" && <Education />}
            {activeComponent === "Contact" && <Contact />}
            {!activeComponent && <Hero />} {/* Display Hero by default */}
          </div>
          <Footer />
        </div>
    </div>
  );
};

export default App;
