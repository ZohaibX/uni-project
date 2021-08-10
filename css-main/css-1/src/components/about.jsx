import React from "react";
import "./css/main.css";

const About = () => {
  return (
    <section className="section-about">
      <div className="centered-text">
        <h1 className="heading-secondary margin-bottom-4 ">
          Exciting tours for adventurous people .
        </h1>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <h3 className="heading-tertiary">
            You're going to fall in love with nature
          </h3>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            dolores commodi atque, perspiciatis in doloribus impedit dicta
            voluptas suscipit itaque magni, enim nisi? A nostrum error tempora,
            quo nisi alias!
          </p>

          <h3 className="heading-tertiary">
            Live adventurous like you never had before
          </h3>
          <p className="paragraph">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae
            adipisci nisi magni impedit, eveniet nemo ratione necessitatibus hic
          </p>

          <span className="btn-text">Learn more &rarr;</span>
        </div>
        <div className="col-1-of-2">
          <div className="composition">
            {/* Description of images is in part 6 video 9 */}
            {/* 300w means 300px and same with 1000w -- its something same like 1x and 2x */}
            {/* 20vw means 20% of actual image view width , same like 30vw and 300px is default*/}
            {/* src tag is for old browsers */}
            {/* 37.5em is 600px and 56.25 for 900px */}
            <img
              srcSet={`${require("./img/nat-1.jpg")} 300w , ${require("./img/nat-1-large.jpg")} 1000w`}
              sizes="(max-width:56.25em) 20vw , (max-width:37.5em) 30vw , 300px"
              src={require("./img/nat-1-large.jpg")}
              alt=""
              className="composition__photo composition__photo--p1"
            />

            <img
              srcSet={`${require("./img/nat-2.jpg")} 300w , ${require("./img/nat-2-large.jpg")} 1000w`}
              sizes="(max-width:56.25em) 20vw , (max-width:37.5em) 30vw , 300px"
              alt=""
              className="composition__photo composition__photo--p2"
              src={require("./img/nat-2-large.jpg")}
            />

            <img
              srcSet={`${require("./img/nat-3.jpg")} 300w , ${require("./img/nat-3-large.jpg")} 1000w`}
              sizes="(max-width:56.25em) 20vw , (max-width:37.5em) 30vw , 300px"
              alt=""
              className="composition__photo composition__photo--p3"
              src={require("./img/nat-3-large.jpg")}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
