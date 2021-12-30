import React from "react";
import "./css/main.css";

const Footer = () => {
  return (
    <section className="footer margin-top--2">
      <div className="footer__logo-box margin-top--2">
        {/* we need to test it until we test it in 2 resolution screens */}
        {/* its description is in part 6 video - 8 */}

        <picture className="footer__logo">
          <source
            srcSet={`${require("./img/logo-green-small-2x.png")} 2x , ${require("./img/logo-green-small-1x.png")} 1x`}
            media="(max-width: 37.5em)"
          />
          <img
            srcSet={`${require("./img/logo-green-2x.png")} 2x , ${require("./img/logo-green-1x.png")} 1x`}
            alt=""
            src={require("./img/logo-green-2x.png")}
          />
        </picture>
      </div>

      <div className="row">
        <div className="col-1-of-2">
          <div className="footer__navigation">
            <ul className="footer__list">
              <li className="footer__item">
                <span className="footer__link">Company</span>
              </li>
              <li className="footer__item">
                <span className="footer__link">Contact Us</span>
              </li>
              <li className="footer__item">
                <span className="footer__link">Career</span>
              </li>
              <li className="footer__item">
                <span className="footer__link">Privacy Policy</span>
              </li>
              <li className="footer__item">
                <span className="footer__link">Terms</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-1-of-2">
          <p className="footer__copyright">
            Built my <span className="footer__link">Zohaib Shahid</span> for
            this online course . Advanced CSS and SASS Course .. Copyright
            &copy;
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
