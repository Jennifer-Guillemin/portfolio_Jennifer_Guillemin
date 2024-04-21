import React, { useState } from "react";
import JenniferGuilleminCV from "../assets/Jennifer_Guillemin_cv.pdf";
import Logo from "../assets/logo.jpg";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header>
      <nav>
        <img className="logo" src={Logo} alt="mon logo" />
        <input type="checkbox" id="menu-toggle" checked={isMenuOpen} onChange={handleMenuToggle} />
        <label htmlFor="menu-toggle" className="menu-icon">&#9776;</label>
        <ul>
          <li>
            <a href="#Accueil" className="no-style" onClick={handleLinkClick}>
              Accueil
            </a>
          </li>
          <li>
            <a href="#Presentation" className="no-style" onClick={handleLinkClick}>
              Présentation
            </a>
          </li>
          <li>
            <a href="#Projets" className="no-style" onClick={handleLinkClick}>
              Projets
            </a>
          </li>
          <li>
            <a href="#Competences" className="no-style" onClick={handleLinkClick}>
              Compétences
            </a>
          </li>
          <li>
            <a href="#Contact" className="no-style" onClick={handleLinkClick}>
              Contact
            </a>
          </li>
          <li>
            <a href={JenniferGuilleminCV} target="_blank" className="no-style" rel="noreferrer" onClick={handleLinkClick}>
              Mon cv
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
