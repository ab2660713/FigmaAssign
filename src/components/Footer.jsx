import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="blog">
      <div className="container">
        {/* Divider line */}
        <div className="footer__divider"></div>

        <div className="footer__grid">
          <div className="footer__col">
            <h4 className="footer__heading">Company</h4>
            <ul className="footer__list">
              <li><a href="#" className="footer__link">Home</a></li>
              <li><a href="#" className="footer__link">Studio</a></li>
              <li><a href="#" className="footer__link">Service</a></li>
              <li><a href="#" className="footer__link">Blog</a></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__heading">Terms & Policies</h4>
            <ul className="footer__list">
              <li><a href="#" className="footer__link">Privacy Policy</a></li>
              <li><a href="#" className="footer__link">Terms & Conditions</a></li>
              <li><a href="#" className="footer__link">Explore</a></li>
              <li><a href="#" className="footer__link">Accessibility</a></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__heading">Follow Us</h4>
            <ul className="footer__list">
              <li><a href="#" className="footer__link">Instagram</a></li>
              <li><a href="#" className="footer__link">LinkedIn</a></li>
              <li><a href="#" className="footer__link">Youtube</a></li>
              <li><a href="#" className="footer__link">Twitter</a></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__heading">Terms & Policies</h4>
            <div className="footer__contact">
              <p className="footer__contact-item">
                1498w Fluton ste, STE<br />
                2D Chicago, IL 63867.
              </p>
              <p className="footer__contact-item">
                (123) 456789000
              </p>
              <p className="footer__contact-item">
                info@elementum.com
              </p>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy;2023 Elementum. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
