import React from "react";

import "../css/main.css";

const CTA = () => {
  return (
    <div className="cta">
      <h2 className="cta__book-now">
        Good news ! we have 4 free rooms left for your dates
      </h2>
      <button className="btn">
        <span className="btn__visible">Book Now !</span>
        <span className="btn__invisible">Only 4 Rooms Left !</span>
      </button>
      #
    </div>
  );
};

export default CTA;
