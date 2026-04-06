import React from 'react';
import './Testimonial.css';
import r7 from "../assets/6.png"
import r6 from "../assets/8.png"
import r3 from "../assets/15.png"
import r5 from "../assets/14.png"
import r2 from "../assets/16.png"
import r1 from "../assets/17.png"
import r4 from "../assets/18.png"
import r8 from "../assets/19.png"

const Testimonial = () => {
  return (
    <section className="testimonial">
      <div className="testimonial__wrap">
        <div className="testimonial__content">
          <h2 className="testimonial__title">
            <span className="highlight-green">What</span> our customer <br />
            says <span className="highlight-yellow">About Us</span>
          </h2>

          <div className="testimonial__card">
            <span className="quote quote--left">“</span>
            <p>
              Elementum delivered the site within the timeline as they requested.
              In the end, the client found a 50% increase in traffic within days
              since its launch. They also had an impressive ability to use
              technologies that the company hadn’t used, which have also proved
              to be easy to use and reliable.
            </p>
            <span className="quote quote--right">”</span>
          </div>

          <div className="avatar avatar--1"><img src={r1} alt="" /></div>
          <div className="avatar avatar--2"><img src={r2} alt="" /></div>
          <div className="avatar avatar--3"><img src={r3} alt="" /></div>
          <div className="avatar avatar--4"><img src={r4} alt="" /></div>
          <div className="avatar avatar--5"><img src={r5} alt="" /></div>
          <div className="avatar avatar--6"><img src={r6} alt="" /></div>
          <div className="avatar avatar--7"><img src={r7} alt="" /></div>
          <div className="avatar avatar--8"><img src={r8} alt="" /></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;