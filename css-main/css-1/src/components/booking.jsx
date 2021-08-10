import React from "react";
import "./css/main.css";

const Booking = () => {
  return (
    <section className="booking">
      <div className="row">
        {/* row -- to have a container only */}
        <div className="book">
          <div className="book__form">
            <form action="" className="form">
              <h2 className="heading-secondary form__heading">
                Start booking now
              </h2>

              <div className="form__group">
                <input
                  type="text"
                  className="form__input"
                  placeholder="Full name"
                  required
                  id="name"
                />
                <label htmlFor="name" className="form__label">
                  Full name
                </label>
              </div>

              <div className="form__group">
                <input
                  type="email"
                  className="form__input"
                  placeholder="Email address"
                  required
                  id="email"
                />
                <label htmlFor="email" className="form__label">
                  Email address
                </label>
              </div>

              <div className="form__group">
                {/* Idea is  */}
                {/* we'll create a radio button right next to the actual radio button */}
                {/* and whenever radio button is checked .. our custom button will also be checked */}
                {/* and we will hide the actual button */}

                {/* same logic for check boxes */}
                <div className="form__radio-group">
                  <input
                    type="radio"
                    className="form__radio-input"
                    id="small"
                    name="size"
                  />
                  <label htmlFor="small" className="form__radio-label">
                    <span className="form__radio-button"></span>
                    {/* this is a space where we will create our own button */}
                    Small tour group
                  </label>
                </div>

                <div className="form__radio-group">
                  <input
                    type="radio"
                    className="form__radio-input"
                    id="large"
                    name="size"
                  />
                  <label htmlFor="large" className="form__radio-label">
                    <span className="form__radio-button"></span>
                    Large tour group
                  </label>
                </div>
                {/* Name is same for both -- so only one can be selected at a time */}
                {/* its all logic is in .. 5th folder and 18th video */}
              </div>

              <div className="form__group">
                {/* Added some properties in a btn class -- for button */}
                <button className="btn btn-green margin-bottom-2">
                  Next step &rarr;
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
