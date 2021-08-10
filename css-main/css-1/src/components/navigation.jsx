import React, { useState } from "react";
import "./css/main.css";

const Navigation = () => {
  const [radio, setRadio] = useState(false);

  const radioSelection = () => {
    const myRadio = radio ? false : true;
    setRadio(myRadio);
    console.log(radio);
  };

  return (
    //   Idea is
    //  we'll have a checkbox -- and with label
    // then we'll create out icon
    // whenever the checkbox is checked -- we will see the navigation
    // actual checkbox will be hidden
    <div className="navigation">
      <input
        type="checkbox"
        className="navigation__checkbox"
        id="navi-toggle"
      />

      <label htmlFor="navi-toggle" className="navigation__button">
        <i
          className={
            radio
              ? "fa fa-times navigation__icon"
              : "fa fa-bars navigation__icon"
          }
          onClick={() => radioSelection()}
        ></i>
      </label>

      <div className="navigation__background">&nbsp;</div>

      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <span className="navigation__link">
              <span>01</span>About Natous
            </span>
          </li>
          <li className="navigation__item">
            <span className="navigation__link">
              <span>02</span>Your benfits
            </span>
          </li>
          <li className="navigation__item">
            <span className="navigation__link">
              <span>03</span>Popular tours
            </span>
          </li>
          <li className="navigation__item">
            <span className="navigation__link">
              <span>04</span>Stories
            </span>
          </li>
          <li className="navigation__item">
            <span className="navigation__link">
              <span>05</span>Book now
            </span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
