import React from "react";

import "../css/main.css";

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="nav">
        <li className="nav__item">
          <span className="nav__link">Find Your Dream Home</span>
        </li>
        <li className="nav__item">
          <span className="nav__link">Request Proposal</span>
        </li>
        <li className="nav__item">
          <span className="nav__link">Download Home Planner</span>
        </li>
        <li className="nav__item">
          <span className="nav__link">Contact Us</span>
        </li>
        <li className="nav__item">
          <span className="nav__link">Submit Your Property</span>
        </li>
        <li className="nav__item">
          <span className="nav__link">Come Work With Us</span>
        </li>
      </ul>

      <p className="copyright">
        &copy; Copyright 2020 by Zohaib Shahid . Feel free to use this project
        for your own purposes . This does not apply if you plan to produce your
        own course or tutorials based on this project .
      </p>
    </footer>
  );
};

export default Footer;
