import React from "react";
import "./css/main.css";
import Icon from "./css/Icomoon/icomoon-icons";
import Header from "./eachComponent/header";
import Sidebar from "./eachComponent/sidebar";
import Main from "./eachComponent/main";

const Layout = () => {
  return (
    // {/* whole container of the app */}
    <div className="container">
      <Header />

      {/* Container for the content -- below header */}
      <div className="content">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
};

export default Layout;
