import React from "react";

import Icon from "../css/Icomoon/icomoon-icons";
import "../css/main.css";

const Header = () => {
  return (
    // {/* Header / Navbar */}
    <header className="header">
      {/* First component of header - logo */}
      <img src={require("../img/logo.png")} alt="" className="logo" />
      {/* First component of header - logo Ends */}

      {/* Second component of header - Search Box */}
      <form action="" className="search">
        <input
          type="text"
          className="search__input"
          placeholder="Search Hotels"
        />
        <button className="search__button">
          <svg className="search__icon">
            <Icon icon="magnifying-glass" />
          </svg>
        </button>
      </form>
      {/* Second component of header - Search Box Ends */}

      {/* Third component of header - Navigation List */}
      <nav className="user-nav">
        <div className="user-nav__icon-box">
          <svg className="user-nav__icon">
            <Icon icon="bookmark" />
          </svg>
          <span className="user-nav__notification">7</span>
        </div>

        <div className="user-nav__icon-box">
          <svg className="user-nav__icon">
            <Icon icon="chat" />
          </svg>
          <span className="user-nav__notification">13</span>
        </div>

        <div className="user-nav__user">
          <img
            src={require("../img/user.jpg")}
            alt=""
            className="user-nav__user-photo"
          />
          <span className="user-nav__user-name">Jonas</span>
        </div>
      </nav>
      {/* Third component of header - Navigation List Ends */}
    </header>
  );
};

export default Header;
