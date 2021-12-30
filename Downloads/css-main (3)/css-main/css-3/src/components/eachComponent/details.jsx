import React from "react";

import Icon from "../css/Icomoon/icomoon-icons";
import "../css/main.css";

const Details = () => {
  return (
    <div className="details">
      {/* left side field after overview  */}
      <div className="description">
        <p className="description__paragraph">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi
          dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas,
          ut corporis incidunt deserunt quae architecto voluptate.
        </p>

        <p className="description__paragraph">
          Accusantium cumque, quas, ut corporis incidunt deserunt quae
          architecto voluptate delectus, inventore iure aliquid aliquam.
        </p>

        <ul className="description__list">
          <li className="description__list__item">
            <svg className="description__list__item__photo">
              <Icon icon="chevron-thin-right" />
            </svg>{" "}
            Close to the beach
          </li>

          <li className="description__list__item">
            <svg className="description__list__item__photo">
              <Icon icon="chevron-thin-right" />
            </svg>{" "}
            Breakfast included
          </li>
          <li className="description__list__item">
            <svg className="description__list__item__photo">
              <Icon icon="chevron-thin-right" />
            </svg>{" "}
            Free airport shuttle
          </li>

          <li className="description__list__item">
            <svg className="description__list__item__photo">
              <Icon icon="chevron-thin-right" />
            </svg>{" "}
            Free wifi in all rooms
          </li>

          <li className="description__list__item">
            <svg className="description__list__item__photo">
              <Icon icon="chevron-thin-right" />
            </svg>{" "}
            Air conditioning and heating
          </li>

          <li className="description__list__item">
            <svg className="description__list__item__photo">
              <Icon icon="chevron-thin-right" />
            </svg>{" "}
            Pets allowed
          </li>

          <li className="description__list__item">
            <svg className="description__list__item__photo">
              <Icon icon="chevron-thin-right" />
            </svg>{" "}
            We speak all languages
          </li>

          <li className="description__list__item">
            <svg className="description__list__item__photo">
              <Icon icon="chevron-thin-right" />
            </svg>{" "}
            Perfect for families
          </li>
        </ul>

        <div className="description__recommendation">
          <p className="description__recommendation__count">
            Lucy and three other friends recommend this hotel
          </p>
          <div className="description__recommendation__friends">
            <img
              src={require("../img/user-3.jpg")}
              alt=""
              className="description__recommendation__friends__photo"
            />
            <img
              src={require("../img/user-4.jpg")}
              alt=""
              className="description__recommendation__friends__photo"
            />
            <img
              src={require("../img/user-5.jpg")}
              alt=""
              className="description__recommendation__friends__photo"
            />
            <img
              src={require("../img/user-6.jpg")}
              alt=""
              className="description__recommendation__friends__photo"
            />
          </div>
        </div>
      </div>

      {/* Right side field after overview  */}
      <div className="user-reviews">
        <figure className="review">
          <blockquote className="review__text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
            doloremque architecto dicta animi, totam, itaque officia ex.
          </blockquote>

          <figcaption className="review__user">
            <img
              src={require("../img/user-1.jpg")}
              alt=""
              className="review__user__photo"
            />

            <div className="review__user__user-box">
              <p className="review__user__user-box__username">Nick Smith</p>
              <p className="review__user__user-box__date">Feb 23rd , 2020</p>
            </div>

            <div className="review__user__rating">7.8</div>
          </figcaption>
        </figure>

        <figure className="review">
          <blockquote className="review__text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
            doloremque architecto dicta animi.
          </blockquote>

          <figcaption className="review__user">
            <img
              src={require("../img/user-2.jpg")}
              alt=""
              className="review__user__photo"
            />

            <div className="review__user__user-box">
              <p className="review__user__user-box__username">Mary Jones</p>
              <p className="review__user__user-box__date">Sept 17th , 2020</p>
            </div>

            <div className="review__user__rating">9.2</div>
          </figcaption>
        </figure>

        {/* this button-inline is styled in overview.scss */}
        <button className="button-inline">
          Show All <span>&rarr;</span>
        </button>
      </div>
    </div>
  );
};

export default Details;
