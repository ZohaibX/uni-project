import React from "react";
import "./css/main.css";

const Header = () => {
  return (
    <div>
      <header className="header">
        <div className="logo-box">
          <img src={require("./img/logo-white.png")} alt="" className="logo" />
          {/* img should have its class name and a separate div with a class */}
        </div>
        <div className="text-box">
          <h1 className="heading-primary">
            <span className="heading-primary-main">Outdoors</span>
            <span className="heading-primary-sub">where life starts</span>
            {/* span -- to have text --- separate */}
            <span href="#" className="btn btn-white margin-top-3 btn-animated">
              Discover the tours
            </span>
          </h1>
        </div>
      </header>
    </div>
  );
};

export default Header;
