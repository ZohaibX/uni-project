import React from "react";
import Icon from "../css/Icomoon/icomoon-icons";
import "../css/main.css";

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <ul className="side-nav">
        <li className="side-nav__item side-nav__item--active">
          <span className="side-nav__link">
            <svg className="side-nav__icon">
              <Icon icon="home" />
            </svg>
            <span className="side-nav__text">Hotel</span>
          </span>
        </li>

        <li className="side-nav__item">
          <span className="side-nav__link">
            <svg className="side-nav__icon">
              <Icon icon="aircraft-take-off" />
            </svg>
            <span className="side-nav__text">Flights</span>
          </span>
        </li>

        <li className="side-nav__item">
          <span className="side-nav__link">
            <svg className="side-nav__icon">
              <Icon icon="key" />
            </svg>
            <span className="side-nav__text">Car Rentals</span>
          </span>
        </li>

        <li className="side-nav__item">
          <span className="side-nav__link">
            <svg className="side-nav__icon">
              <Icon icon="map" />
            </svg>
            <span className="side-nav__text">Tours</span>
          </span>
        </li>
      </ul>

      <div className="legal-text">
        &copy; 2019 by trillo . All rights reserved .
      </div>
    </nav>
  );
};

export default Sidebar;
