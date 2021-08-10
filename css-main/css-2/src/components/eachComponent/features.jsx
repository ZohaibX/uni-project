import React from "react";

import "../css/main.css";
import Icon from "../css/Icomoon/icomoon-icons";

const Features = () => {
  return (
    <section className="features">
      <div className="feature">
        <svg className="feature__icon">
          <Icon icon="globe" />
        </svg>
        <h4 className="heading-4 heading-4--dark">World's Best Luxury Homes</h4>
        <p className="feature__text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          distinctio necessitatibus pariatur voluptatibus.
        </p>
      </div>

      <div className="feature">
        <svg className="feature__icon">
          <Icon icon="trophy" />
        </svg>
        <h4 className="heading-4 heading-4--dark">Only The Best Properties</h4>
        <p className="feature__text">
          Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus
          rerum sed a eligendi aut quia.
        </p>
      </div>

      <div className="feature">
        <svg className="feature__icon">
          <Icon icon="location-pin" />
        </svg>
        <h4 className="heading-4 heading-4--dark">
          All Homes In Top Locations
        </h4>
        <p className="feature__text">
          Tenetur distinctio necessitatibus pariatur voluptatibus quidem
          consequatur harum.
        </p>
      </div>

      <div className="feature">
        <svg className="feature__icon">
          <Icon icon="key" />
        </svg>
        <h4 className="heading-4 heading-4--dark">New Home In One Week</h4>
        <p className="feature__text">
          Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor sit
          amet consectetur adipisicing elit.
        </p>
      </div>

      <div className="feature">
        <svg className="feature__icon">
          <Icon icon="map" />
        </svg>
        <h4 className="heading-4 heading-4--dark">Top 1% Realtors</h4>
        <p className="feature__text">
          Quidem consequatur harum, voluptatum mollitia quae. Tenetur distinctio
          necessitatibus pariatur voluptatibus.
        </p>
      </div>

      <div className="feature">
        <svg className="feature__icon">
          <Icon icon="lock" />
        </svg>
        <h4 className="heading-4 heading-4--dark">
          Secured Payments On Nexter
        </h4>
        <p className="feature__text">
          Pariatur voluptatibus quidem consequatur harum, voluptatum mollitia
          quae..
        </p>
      </div>
    </section>
  );
};

export default Features;
