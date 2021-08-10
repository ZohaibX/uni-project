import React from "react";

import "../css/main.css";
import Icon from "../css/Icomoon/icomoon-icons";

const Homes = () => {
  return (
    <div className="homes">
      {/* First Card */}
      <div className="home">
        <img
          src={require("../img/house-1.jpeg")}
          alt=""
          className="home__img"
        />
        <svg className="home__like">
          <Icon icon="heart" />
        </svg>
        <h5 className="home__name">Beautiful Family House</h5>

        <div className="home__location">
          <svg>
            <Icon icon="map" />
          </svg>
          <p>USA</p>
        </div>

        <div className="home__rooms">
          <svg>
            <Icon icon="bookmark" />
          </svg>
          <p>5 rooms</p>
        </div>

        <div className="home__area">
          <svg>
            <Icon icon="star" />
          </svg>
          <p>
            325 m<sup>2</sup>
          </p>
        </div>

        <div className="home__price">
          <svg>
            <Icon icon="home" />
          </svg>
          <p>$1,200,000</p>
        </div>

        <button className="btn home__btn">Contact Realtors</button>
      </div>

      {/* Second Card */}
      <div className="home">
        <img
          src={require("../img/house-2.jpeg")}
          alt=""
          className="home__img"
        />
        <svg className="home__like">
          <Icon icon="heart" />
        </svg>
        <h5 className="home__name">Modern Glass Villa</h5>

        <div className="home__location">
          <svg>
            <Icon icon="map" />
          </svg>
          <p>Canada</p>
        </div>

        <div className="home__rooms">
          <svg>
            <Icon icon="bookmark" />
          </svg>
          <p>6 rooms</p>
        </div>

        <div className="home__area">
          <svg>
            <Icon icon="star" />
          </svg>
          <p>
            450 m<sup>2</sup>
          </p>
        </div>

        <div className="home__price">
          <svg>
            <Icon icon="home" />
          </svg>
          <p>$2,500,000</p>
        </div>

        <button className="btn home__btn">Contact Realtors</button>
      </div>

      {/* Third Card */}
      <div className="home">
        <img
          src={require("../img/house-3.jpeg")}
          alt=""
          className="home__img"
        />
        <svg className="home__like">
          <Icon icon="heart" />
        </svg>
        <h5 className="home__name">Cozy Country House</h5>

        <div className="home__location">
          <svg>
            <Icon icon="map" />
          </svg>
          <p>UK</p>
        </div>

        <div className="home__rooms">
          <svg>
            <Icon icon="bookmark" />
          </svg>
          <p>6 rooms</p>
        </div>

        <div className="home__area">
          <svg>
            <Icon icon="star" />
          </svg>
          <p>
            300 m<sup>2</sup>
          </p>
        </div>

        <div className="home__price">
          <svg>
            <Icon icon="home" />
          </svg>
          <p>$1,000,000</p>
        </div>

        <button className="btn home__btn">Contact Realtors</button>
      </div>

      {/* Fourth Card */}
      <div className="home">
        <img
          src={require("../img/house-4.jpeg")}
          alt=""
          className="home__img"
        />
        <svg className="home__like">
          <Icon icon="heart" />
        </svg>
        <h5 className="home__name">Large Rustical Villa</h5>

        <div className="home__location">
          <svg>
            <Icon icon="map" />
          </svg>
          <p>Portugal</p>
        </div>

        <div className="home__rooms">
          <svg>
            <Icon icon="bookmark" />
          </svg>
          <p>10 rooms</p>
        </div>

        <div className="home__area">
          <svg>
            <Icon icon="star" />
          </svg>
          <p>
            500 m<sup>2</sup>
          </p>
        </div>

        <div className="home__price">
          <svg>
            <Icon icon="home" />
          </svg>
          <p>$3,900,000</p>
        </div>

        <button className="btn home__btn">Contact Realtors</button>
      </div>

      {/* Fifth Card */}
      <div className="home">
        <img
          src={require("../img/house-5.jpeg")}
          alt=""
          className="home__img"
        />
        <svg className="home__like">
          <Icon icon="heart" />
        </svg>
        <h5 className="home__name">Majestic Palace House</h5>

        <div className="home__location">
          <svg>
            <Icon icon="map" />
          </svg>
          <p>Germany</p>
        </div>

        <div className="home__rooms">
          <svg>
            <Icon icon="bookmark" />
          </svg>
          <p>9 rooms</p>
        </div>

        <div className="home__area">
          <svg>
            <Icon icon="star" />
          </svg>
          <p>
            12 m<sup>2</sup>
          </p>
        </div>

        <div className="home__price">
          <svg>
            <Icon icon="home" />
          </svg>
          <p>$2,700,000</p>
        </div>

        <button className="btn home__btn">Contact Realtors</button>
      </div>

      {/* Sixth Card */}
      <div className="home">
        <img
          src={require("../img/house-6.jpeg")}
          alt=""
          className="home__img"
        />
        <svg className="home__like">
          <Icon icon="heart" />
        </svg>
        <h5 className="home__name">Modern Family Apartment</h5>

        <div className="home__location">
          <svg>
            <Icon icon="map" />
          </svg>
          <p>Pakistan</p>
        </div>

        <div className="home__rooms">
          <svg>
            <Icon icon="bookmark" />
          </svg>
          <p>9 rooms</p>
        </div>

        <div className="home__area">
          <svg>
            <Icon icon="star" />
          </svg>
          <p>
            256 m<sup>2</sup>
          </p>
        </div>

        <div className="home__price">
          <svg>
            <Icon icon="home" />
          </svg>
          <p>$1,000,000</p>
        </div>

        <button className="btn home__btn">Contact Realtors</button>
      </div>
    </div>
  );
};

export default Homes;
