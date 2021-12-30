import React from "react";

import Icon from "../css/Icomoon/icomoon-icons";
import "../css/main.css";

// gallery and ratings section
const Overview = () => {
  return (
    //  {/* Gallery Section */}
    <div>
      <div className="gallery">
        <figure className="gallery__item">
          <img
            src={require("../img/hotel-1.jpg")}
            alt=""
            className="gallery__photo"
          />
        </figure>

        <figure className="gallery__item">
          <img
            src={require("../img/hotel-2.jpg")}
            alt=""
            className="gallery__photo"
          />
        </figure>

        <figure className="gallery__item">
          <img
            src={require("../img/hotel-3.jpg")}
            alt=""
            className="gallery__photo"
          />
        </figure>
      </div>
      <div className="overview">
        {/* overview heading  */}
        <h1 className="overview__heading">Hotel Las Pasmas</h1>

        {/* overview stars  */}
        <div className="overview__stars">
          <svg className="overview__icon-star">
            <Icon icon="star" />
          </svg>
          <svg className="overview__icon-star">
            <Icon icon="star" />
          </svg>
          <svg className="overview__icon-star">
            <Icon icon="star" />
          </svg>
          <svg className="overview__icon-star">
            <Icon icon="star" />
          </svg>
          <svg className="overview__icon-star">
            <Icon icon="star" />
          </svg>
        </div>

        {/* overview Location  */}
        <div className="overview__location">
          <svg className="overview__icon-location">
            <Icon icon="location-pin" />
          </svg>
          <button className="button-inline">Albufiera , Portugal</button>
        </div>

        {/* overview rating  */}
        <div className="overview__rating">
          <div className="overview__rating-average">8.6</div>
          <div className="overview__rating-count">485 votes</div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
