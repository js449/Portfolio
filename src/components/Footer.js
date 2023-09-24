import React from "react";
import "../styles.css";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <p>&copy; {new Date().getFullYear()} Jagdeep Singh. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
