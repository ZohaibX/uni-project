import React from "react";

import "../css/main.css";

const Realtors = () => {
  return (
    <div className="realtors">
      <h3 className="heading-3">Top 3 Realtors</h3>

      <div className="realtors__list">
        {/* realtors__list -- 1 */}
        <img
          src={require("../img/realtor-1.jpeg")}
          alt=""
          className="realtors__list-img"
        />

        <div className="realtor__list-details">
          <h4 className="heading-4 heading-4--light">Erik Feinman</h4>
          <p className="realtors__list-details__sold">245 houses sold .</p>
        </div>

        {/* realtors__list -- 2 */}
        <img
          src={require("../img/realtor-2.jpeg")}
          alt=""
          className="realtors__list-img"
        />

        <div className="realtor__list-details">
          <h4 className="heading-4 heading-4--light">Kim Brown</h4>
          <p className="realtors__list-details__sold">200 houses sold .</p>
        </div>

        {/* realtors__list -- 3 */}
        <img
          src={require("../img/realtor-3.jpeg")}
          alt=""
          className="realtors__list-img"
        />

        <div className="realtor__list-details">
          <h4 className="heading-4 heading-4--light">Tobey Ramsey</h4>
          <p className="realtors__list-details__sold">198 houses sold .</p>
        </div>
      </div>
    </div>
  );
};

export default Realtors;
