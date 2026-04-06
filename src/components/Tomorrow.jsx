import React from 'react';
import './Tomorrow.css';
import r11 from "../assets/11.png";

const Tomorrow = () => {
  return (
    <section className="tomorrow section-padding">
      <div className="tomorrow__container">
        <div className="tomorrow__grid">
          <div className="tomorrow__left">
            <h2 className="tomorrow__title">
              Tomorrow <span className="highlight">we can see</span> the result!
            </h2>
            
            <p className="tomorrow__text">
              We add a layer of fearless insights and action that allows teams to
              accelerate their progress in areas such as brand, design, digital,
              comms and social research.
            </p>
            
            <p className="tomorrow__sub-text">
              Read more <span className="tomorrow__link-line"></span>
            </p>
          </div>

          <div className="tomorrow__right">
            <div className="tomorrow__image-wrapper">
              <div className="tomorrow__glow"></div>
              
              <div className="tomorrow__triangle"></div>
              
              <div className="tomorrow__image-circle">
                <img src={r11} alt="team" className="tomorrow__image" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CURVED LINES - bottom right */}
      <div className="tomorrow__curve tomorrow__curve--orange"></div>
      <div className="tomorrow__curve tomorrow__curve--gray"></div>
    </section>
  );
};

export default Tomorrow;