import React from "react";
import "./Progress.css";
import r12 from "../assets/12.png";
import polygonTop from "../assets/13.png";
import polygonBottom from "../assets/13.png";

const Progress = () => {
  return (
    <section className="progress" id="pages">
      <div className="container">
        <div className="progress__grid">
          <div className="progress__left">
            <div className="progress__image-wrapper">
              <img
                src={polygonTop}
                alt=""
                className="progress__polygon progress__polygon--top"
              />

              <img
                src={polygonBottom}
                alt=""
                className="progress__polygon progress__polygon--bottom"
              />

              <div className="progress__image-circle">
                <img
                  src={r12}
                  alt="Team collaboration"
                  className="progress__image"
                />
              </div>
            </div>
          </div>

          <div className="progress__right">
            <h2 className="progress__title">
              <span className="progress__line">
                <span className="progress__pill">See</span> how we can
              </span>
              <br />
              <span className="progress__line">
                help you <span className="progress__underline">progress</span>
              </span>
            </h2>

            <p className="progress__text">
              We add a layer of fearless insights and action that allows change
              makers to accelerate their progress in areas such as brand,
              design, digital, comms and social research.
            </p>

            <a href="#" className="progress__link">
              Read more
              <span className="progress__link-line" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Progress;