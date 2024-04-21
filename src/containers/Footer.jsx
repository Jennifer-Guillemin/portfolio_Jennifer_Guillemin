import React from "react";

function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        <h1>Entrer en contact</h1>
        <p>
          Je suis actuellement à la recherche d'opportunités en développement
          web. Si vous connaissez des postes disponibles, si vous avez des
          questions ou si vous voulez simplement me dire bonjour, n'hésitez pas
          à m'envoyer un e-mail en cliquant sur l'enveloppe ci-dessous.
        </p>
        <ul className="social_links">
          <li>
            <a
              href="mailto:jennifer.1707@hotmail.fr"
              className="no-style"
              aria-label="mon adresse mail"
            >
              <i className="fas fa-envelope icon"></i>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Jennifer-Guillemin"
              target="_blank"
              rel="noreferrer"
              aria-label="lien de mon profil Github"
              className="no-style"
            >
              <i className="fab fa-github icon"></i>
            </a>
          </li>
          <li>
            <a
              href="http://www.linkedin.com/in/jennifer-guillemin"
              target="_blank"
              rel="noreferrer"
              aria-label="lien de mon profil Linkedin"
              className="no-style"
            >
              <i className="fab fa-linkedin-in icon"></i>
            </a>
          </li>
        </ul>
        <p>© 2024 Jennifer GUILLEMIN, Tous droits réservés.</p>
      </div>
    </footer>
  );
}

export default Footer;
