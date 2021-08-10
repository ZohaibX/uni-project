import React from "react";

import "../css/main.css";

const StoryPictures = () => {
  return (
    <div className="story__pictures">
      <img
        src={require("../img/story-1.jpeg")}
        alt=""
        className="story__img--1"
      />

      <img
        src={require("../img/story-2.jpeg")}
        alt=""
        className="story__img--2"
      />
    </div>
  );
};

export default StoryPictures;
