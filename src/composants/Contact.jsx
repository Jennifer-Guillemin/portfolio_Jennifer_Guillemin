import React from "react";
import "../styles/contact.css";

function Contact() {
  return (
    <section id="Contact">
      <div>
        <h1>Entrer en contact</h1>
        <div className="line"></div>
        <p>
          Je suis actuellement à la recherche d'opportunités en développement
          web. Si vous connaissez des postes disponibles, si vous avez des
          questions ou si vous voulez simplement me dire bonjour, n'hésitez pas
          à m'envoyer un e-mail en cliquant sur l'enveloppe.
          <a
            href="mailto:jennifer.1707@hotmail.fr"
            className="no-style"
            aria-label="mon adresse mail"
          >
            <lord-icon
              src="https://cdn.lordicon.com/nqisoomz.json"
              trigger="hover"
              stroke="bold"
            ></lord-icon>
          </a>
        </p>
        <ul className="social_links">
          <li>
            <p>
              {" "}
              Mon profil GitHub
              <a
                href="https://github.com/Jennifer-Guillemin"
                target="_blank"
                rel="noreferrer"
                aria-label="lien de mon profil Github"
                className="no-style"
              >
                <i className="fab fa-github icon"></i>
              </a>
            </p>
          </li>
          <li>
            <p>
              Mon profil Linkedin
              <a
                href="http://www.linkedin.com/in/jennifer-guillemin"
                target="_blank"
                rel="noreferrer"
                aria-label="lien de mon profil Linkedin"
                className="no-style"
              >
                <i className="fab fa-linkedin-in icon"></i>
              </a>
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Contact;
