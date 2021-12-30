import React from "react";

import Icon from "../css/Icomoon/icomoon-icons";
import "../css/main.css";
import Details from "./details";
import Overview from "./overview";
import CTA from "./cta";

const Main = () => {
  return (
    <main className="hotel-view">
      {/* //  Overview Section */}
      <Overview />

      {/*-- details -- left and right*/}
      <Details />

      {/* CTA */}
      <CTA />
    </main>
  );
};

export default Main;
