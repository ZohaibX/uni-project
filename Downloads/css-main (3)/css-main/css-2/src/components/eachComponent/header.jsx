import React from "react";

import "../css/main.css";

const Header = () => {
  return (
    <header className="header">
      <img src={require("../img/logo.png")} alt="" className="header__logo" />
      <h3 className="heading-3">Your own home:</h3>
      <h1 className="heading-1">The ultimate personal freedom</h1>
      <button className="btn header__btn">view our properties</button>
      <div className="header__seenOn-text">As seen on</div>
      <div className="header__seenOn-logos">
        <img src={require("../img/logo-bbc.png")} alt="" />
        <img src={require("../img/logo-forbes.png")} alt="" />
        <img src={require("../img/logo-techcrunch.png")} alt="" />
        <img src={require("../img/logo-bi.png")} alt="" />
      </div>
    </header>
  );
};

export default Header;
