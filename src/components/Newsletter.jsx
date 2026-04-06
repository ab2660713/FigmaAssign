import React from 'react';
import './Newsletter.css';
import r1 from "../assets/22.png"
import r2 from "../assets/23.png"

const Newsletter = () => {
  return (
    <section className="newsletter" id="contact">
      <div className="newsletter__wrapper">
        <div className="container">
          <div className="newsletter__inner">
            {/* Decorative squiggle at top */}
           
            <div className="newsletter__arrow arrow--1">
  <img src={r2} alt="arrow" />
</div>

<div className="newsletter__arrow arrow--2">
  <img src={r2} alt="arrow" />
</div>
            {/* Purple blob decoration */}
            <div className="newsletter__ellipse">
  <img src={r1} alt="ellipse" />
</div>
      

            <h2 className="newsletter__title">
              Subscribe to
              <br />
              our newsletter
            </h2>
            <p className="newsletter__text">
              To make your stay special and even more memorable
            </p>
            <button className="newsletter__btn" id="subscribe-btn">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
