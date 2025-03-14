import React from 'react';
import { FaChevronDown } from "react-icons/fa6";
import './LanguageSwitcher.css';  // Import the CSS file

const LanguageSwitcher = ({ language, setLanguage }) => {
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  return (
    <button className="language-switcher" onClick={toggleLanguage}>
      <span>{language.toUpperCase()}</span>
      <FaChevronDown size={16} />
    </button>
  );
};

export default LanguageSwitcher;
