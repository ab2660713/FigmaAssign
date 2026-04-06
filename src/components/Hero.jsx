import React from 'react';
import './Hero.css';
import r1 from "../assets/1.png"
import r2 from "../assets/2.png"
import r3 from "../assets/3.png"
import r4 from "../assets/4.png"
import r5 from "../assets/5.png"
import r6 from "../assets/6.png"
import r7 from "../assets/7.png"
import r8 from "../assets/8.png"
import r9 from "../assets/9.png"
import r10 from "../assets/10.png"
const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero__content">

          {/* Left squiggle */}
          <div className="hero__left-shape">
  <img
    src={r9}
    alt=""
    className="hero__left-shape-img hero__left-shape-img--pink"
  />
  <img
    src={r10}
    alt=""
    className="hero__left-shape-img hero__left-shape-img--black"
  />
</div>

          {/* Right purple semicircle */}
          <div className="hero__semi-circle"></div>

          {/* Yellow underline */}
          <svg
            className="hero__underline"
            viewBox="0 0 220 20"
            fill="none"
          >
            <path
              d="M5 12C45 18 95 5 150 11C180 14 200 11 215 9"
              stroke="#E5B93C"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>

          <div className="hero__text">
            <h1 className="hero__title">
              The thinkers and <br />
              doers were <span className="hero__pink">changing</span> <br />
              the <span className="hero__green">status</span> Quo with
            </h1>

            <p className="hero__subtitle">
              We are a team of strategists, designers communicators, researchers.
              Together, we belive that progress only happens when you refuse to play things safe.
            </p>
          </div>

          {/* Images below text */}
          <div className="hero__images">
            <div className="hero__img hero__img--1">
              <img src={r1} alt="Team member" />
            </div>
            <div className="hero__img hero__img--2">
              <img src={r2} alt="Team member" />
            </div>
            <div className="hero__img hero__img--3">
              <img src={r3} alt="Team member" />
            </div>
            <div className="hero__img hero__img--4">
              <img src={r4} alt="Team member" />
            </div>
            <div className="hero__img hero__img--5">
              <img src={r5} alt="Team member" />
            </div>
            <div className="hero__img hero__img--6">
              <img src={r6} alt="Team member" />
            </div>
            <div className="hero__img hero__img--7">
              <img src={r7} alt="Team member" />
            </div>
            <div className="hero__img hero__img--8">
              <img src={r8} alt="Team member" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;