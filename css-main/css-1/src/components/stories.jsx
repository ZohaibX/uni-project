import React from "react";
import "./css/main.css";

const Stories = () => {
  return (
    <section className="stories margin-top-0">
      {/* Special element for video  */}
      <div className="bg-video">
        <video className="bg-video__content" autoPlay muted loop>
          {/* autoPlay must be in camelcase in jsx */}
          <source src={require("./img/video.mp4")} type="video/mp4" />
          <source src="img/video.webm" type="video/webm" />
          Your browser is not supported!
          {/* we have two types of videos so it is supported for all the browsers */}
          {/* if some browser doesn't support the video -- he will get the msg */}
          {/* only one of these will be shown in browser */}
        </video>
      </div>

      {/* H2 */}
      <div className="centered-text margin-bottom-4">
        <h2 className="heading-secondary mb">We make people genuinely happy</h2>
      </div>
      {/* we will place everything inside the video */}
      <div className="row">
        {/* we used row class to have a container -- not for columns */}
        <div className="story">
          {/* we have figure element when we want to give a caption or some text  */}
          <figure className="story__shape">
            <img
              src={require("./img/nat-9.jpg")}
              alt="Person on a tour"
              className="story__img"
            />
            <figcaption className="story__caption">Jack Wilson</figcaption>
          </figure>
          <div className="story__text">
            <h3 className="heading-tertiary u-margin-bottom-small">
              WOW! My life is completely different now
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              ipsum sapiente aspernatur libero repellat quis consequatur ducimus
              quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente
              aspernatur libero repellat quis consequatur ducimus quam nisi
              exercitationem omnis earum qui.
            </p>
          </div>
        </div>

        <div className="story">
          <figure className="story__shape">
            <img
              src={require("./img/nat-8.jpg")}
              alt="Person on a tour"
              className="story__img"
            />
            <figcaption className="story__caption">Mary Smith</figcaption>
          </figure>
          <div className="story__text">
            <h3 className="heading-tertiary u-margin-bottom-small">
              I spent my best week with my family
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              ipsum sapiente aspernatur libero repellat quis consequatur ducimus
              quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente
              aspernatur libero repellat quis consequatur ducimus quam nisi
              exercitationem omnis earum qui.
            </p>
          </div>
        </div>
      </div>
      <div className="centered-text mb">
        <span className="btn btn-green margin-top-4">
          Read all the stories &rarr;
        </span>
      </div>
    </section>
  );
};

export default Stories;
