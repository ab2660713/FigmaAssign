import React from 'react';
import './Offerings.css';
import r1 from "../assets/20.png"
import r2 from "../assets/21.png"
const offerings = [
  {
    label: 'Office of multiple interest content',
    value: 'Collaborative & partnership',
  },
  {
    label: 'The hanger US Air force digital experimental',
    value: 'We talk about our weight',
  },
  {
    label: 'Delta faucet content, social, digital',
    value: 'Piloting digital confidence',
    hasCircle: true, // Colored circle ke liye
  },
];

const Offerings = () => {
  return (
    <section className="offerings section-padding">
      <div className="container">
        {/* CURVED LINE - top right */}
        <div className="offerings__curve">
          <img src={r2} alt="decoration" />
        </div>

        <h2 className="offerings__title">
          What we <span className="offerings__title--highlight">can</span>
          <br />
          offer you!
        </h2>

        <div className="offerings__list">
          {offerings.map((item, index) => (
            <div className="offerings__item" key={index}>
              <div className="offerings__item-inner">
                <span className="offerings__label">{item.label}</span>
                
                <div className="offerings__value-wrapper">
                  <span className="offerings__value">
                    {item.value}
                    
                    {/* COLORED CIRCLE - third item */}
                    {item.hasCircle && (
                      <span className="offerings__circle">
                        <img src={r1} alt="badge" />
                      </span>
                    )}
                  </span>
                  
                  {/* ARROW - har item ke aage */}
                  <span className="offerings__arrow">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offerings;