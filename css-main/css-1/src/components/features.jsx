import React from "react";
import "./css/main.css";

const Features = () => {
  return (
    <section className="features">
      <div className="row">
        <div className="col-1-of-4">
          <div className="feature-box">
            <i className="feature-box__icon icon-basic-world"></i>
            {/* i have included the file in index.js and we can use all of its icons that will start with icon- */}
            <h3 className="heading-tertiary">Explore World</h3>
            <p className="feature-box__text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos
              aliquam laborum illum impedit. Quod, animi officia.
            </p>
          </div>
        </div>

        <div className="col-1-of-4">
          <div className="feature-box">
            <i className="feature-box__icon icon-basic-compass"></i>
            {/* i have included the file in index.js and we can use all of its icons that will start with icon- */}
            <h3 className="heading-tertiary">Meet The Nature</h3>
            <p className="feature-box__text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos
              aliquam laborum illum impedit. Quod, animi officia.
            </p>
          </div>
        </div>

        <div className="col-1-of-4">
          <div className="feature-box">
            <i className="feature-box__icon icon-basic-map"></i>
            {/* i have included the file in index.js and we can use all of its icons that will start with icon- */}
            <h3 className="heading-tertiary">Find your way</h3>
            <p className="feature-box__text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos
              aliquam laborum illum impedit. Quod, animi officia.
            </p>
          </div>
        </div>

        <div className="col-1-of-4">
          <div className="feature-box">
            <i className="feature-box__icon icon-basic-heart"></i>
            {/* i have included the file in index.js and we can use all of its icons that will start with icon- */}
            <h3 className="heading-tertiary">Live crazy life</h3>
            <p className="feature-box__text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos
              aliquam laborum illum impedit. Quod, animi officia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
