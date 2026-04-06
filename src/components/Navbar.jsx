import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar" id="navbar">
      <div className="container navbar__inner">
        <a href="#" className="navbar__logo">
          <span className="navbar__logo-icon"></span> Elementum
        </a>
        <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          <li><a href="#home" className="navbar__link active">Home</a></li>
          <li><a href="#pages" className="navbar__link">Pages</a></li>
          <li><a href="#contact" className="navbar__link">Contact</a></li>
          <li><a href="#about" className="navbar__link">About</a></li>
          <li><a href="#blog" className="navbar__link">Blog</a></li>
        </ul>
        <div className="flex flex-col gap-1 cursor-pointer">
          <span className="w-6 h-[2px] bg-black"></span>
          <span className="w-6 h-[2px] bg-black"></span>
        </div>
        <button
          className="navbar__menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="navbar__menu-line"></span>
          <span className="navbar__menu-line"></span>
          <span className="navbar__menu-line"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
