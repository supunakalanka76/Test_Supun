import React, { useState } from 'react';
import LanguageSwitcher from '../language-switcher/LanguageSwicher';
import { RiCloseFill, RiMenu3Fill } from "react-icons/ri";
import './Navbar.css';

const Navbar = ({ language, setLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <span>Company Logo</span>
        <LanguageSwitcher language={language} setLanguage={setLanguage} />
      </div>
      
      {/* Desktop menu */}
      <div className="menu-items">
        <a href="#about">About Us</a>
        <a href="#features">Features</a>
        <a href="#contact">Contact</a>
      </div>

      {/* Mobile menu button */}
      <button className="menu-button" onClick={toggleMenu}>
        {isOpen ? <RiCloseFill size={24} /> : <RiMenu3Fill size={24} />}
      </button>

      {/* Mobile menu */}
      {isOpen && (
        <div className="mobile-menu">
          <a href="#about" onClick={toggleMenu}>About Us</a>
          <a href="#features" onClick={toggleMenu}>Features</a>
          <a href="#contact" onClick={toggleMenu}>Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
