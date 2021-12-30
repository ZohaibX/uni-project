import React, { useContext } from "react";
import "./css/main.css";
import { POPUP } from "./../context/popupContext";

const Tours = () => {
  const { popup, changePopup } = useContext(POPUP);
  return (
    <section className="tours margin-bottom-0">
      <div className="centered-text">
        <h2 className="heading-secondary margin-bottom-2">
          Most Popular Tours
        </h2>
      </div>

      <div className="row">
        {/* Card 1 */}
        <div className="col-1-of-3">
          <div className="card">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture--1">&nbsp;</div>
              {/* empty space symbol for bg picture*/}
              <h4 className="card__heading">
                <span className="card__heading-span card__heading-span--1">
                  The Sea Explorer
                </span>
              </h4>
              <div className="card__details">
                <ul>
                  <li>3 days tour</li>
                  <li>Upto 30 people</li>
                  <li>2 tours guide</li>
                  <li>Sleep in crazy hotels</li>
                  <li>difficulty : easy</li>
                </ul>
              </div>
            </div>

            <div className="card__side card__side--back card__side--back--1">
              <div className="card__cta">
                <div className="card__price-box">
                  <p className="card__price-only">Only</p>
                  <p className="card__price-value">$297</p>
                </div>
                <span
                  className="btn btn-white"
                  onClick={() => changePopup(true)}
                >
                  Book Now!
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-1-of-3">
          <div className="card">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture--2">&nbsp;</div>
              {/* empty space symbol */}
              <h4 className="card__heading">
                <span className="card__heading-span card__heading-span--2">
                  Mountain Explorer
                </span>
              </h4>
              <div className="card__details">
                <ul>
                  <li>5 days tour</li>
                  <li>Upto 30 people</li>
                  <li>2 tours guide</li>
                  <li>Sleep in crazy hotels</li>
                  <li>difficulty : normal</li>
                </ul>
              </div>
            </div>

            <div className="card__side card__side--back card__side--back--2">
              <div className="card__cta">
                <div className="card__price-box">
                  <p className="card__price-only">Only</p>
                  <p className="card__price-value">$500</p>
                </div>
                <span
                  className="btn btn-white"
                  onClick={() => changePopup(true)}
                >
                  Book Now!
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-1-of-3">
          <div className="card">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture--3">&nbsp;</div>
              {/* empty space symbol */}
              <h4 className="card__heading">
                <span className="card__heading-span card__heading-span--3">
                  World Explorer
                </span>
              </h4>
              <div className="card__details">
                <ul>
                  <li>10 days tour</li>
                  <li>Upto 30 people</li>
                  <li>2 tours guide</li>
                  <li>Sleep in crazy hotels</li>
                  <li>difficulty : hard</li>
                </ul>
              </div>
            </div>

            <div className="card__side card__side--back card__side--back--3">
              <div className="card__cta">
                <div className="card__price-box">
                  <p className="card__price-only">Only</p>
                  <p className="card__price-value">$999</p>
                </div>
                <span
                  className="btn btn-white"
                  onClick={() => changePopup(true)}
                >
                  Book Now!
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="centered-text">
        <span className="btn btn-green margin-top-4">Discover All Tours !</span>
      </div>
    </section>
  );
};

export default Tours;
