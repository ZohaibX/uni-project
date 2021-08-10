import React, { useState, useContext } from "react";
import "./css/main.css";
import { POPUP } from "./../context/popupContext";

const PopUp = () => {
  const { changePopup } = useContext(POPUP);

  //   I implemented opening and closing of popup with context and jsx
  // bcoz tutor was using a tag

  return (
    <div className="popup">
      <div className="popup__content">
        <div className="popup__left">
          <img src={require("./img/nat-8.jpg")} alt="" className="popup__img" />
          <img src={require("./img/nat-9.jpg")} alt="" className="popup__img" />
        </div>
        <div className="popup__right">
          <span className="popup__close" onClick={() => changePopup(false)}>
            &times;
          </span>
          <div className="heading-secondary centered-text margin-top-2">
            Start Booking Now
          </div>
          <div className="heading-tertiary margin-top-2">
            Important &ndash; Please read all the terms before booking
          </div>
          <p className="popup__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quam
            error recusandae, ex voluptatum repudiandae distinctio? Rerum eaque
            numquam necessitatibus ex, ab distinctio magnam ipsa corrupti! Vitae
            fugit commodi assumenda. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ducimus corrupti suscipit, necessitatibus
            mollitia, neque esse ab facere dolor maiores odio officia a officiis
            ipsa. Rerum sit illo veniam harum ipsum? . Lorem ipsum dolor sit,
            amet consectetur adipisicing elit. Fuga obcaecati ab amet. Soluta
            placeat iure natus distinctio mollitia eum dicta quaerat quam
            tempora sed ipsa, ab nobis magnam sit optio!
          </p>
          <span className="btn btn-green">Book Now</span>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
