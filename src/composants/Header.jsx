import React, { useState, useEffect } from "react";
import JenniferGuilleminCV from "../assets/Jennifer_Guillemin_CV.pdf";
import Logo from "../assets/logo&icon/logo.jpg";
import "../styles/header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  }, [isDarkTheme]);

  return (
    <header>
      <nav>
        <img className="logo" src={Logo} alt="mon logo" />
        <input
          type="checkbox"
          id="menu-toggle"
          checked={isMenuOpen}
          onChange={handleMenuToggle}
        />
        <label htmlFor="menu-toggle" className="menu-icon">
          &#9776;
        </label>
        <ul>
          <li>
            <a href="#Accueil" className="no-style" onClick={handleLinkClick}>
              Accueil
            </a>
          </li>
          <li>
            <a
              href="#Presentation"
              className="no-style"
              onClick={handleLinkClick}
            >
              Présentation
            </a>
          </li>
          <li>
            <a href="#Projets" className="no-style" onClick={handleLinkClick}>
              Projets
            </a>
          </li>
          <li>
            <a
              href="#Competences"
              className="no-style"
              onClick={handleLinkClick}
            >
              Compétences
            </a>
          </li>
          <li>
            <a href="#Contact" className="no-style" onClick={handleLinkClick}>
              Contact
            </a>
          </li>
          <li>
            <a
              href={JenniferGuilleminCV}
              target="_blank"
              className="no-style"
              rel="noreferrer"
              onClick={handleLinkClick}
            >
              Mon cv
            </a>
          </li>
          <li>
            <label className="toggle-switch" onClick={handleLinkClick}>
              <input
                type="checkbox"
                id="toggle"
                className="toggle-switch-checkbox"
                onChange={toggleTheme}
                checked={isDarkTheme}
              />
              <span className="toggle-switch-bar">
                <i className="fa-solid fa-moon moon-icon"></i>
                <span className="circle_white"></span>
                <i className="fa-solid fa-sun sun-icon"></i>
              </span>
            </label>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
