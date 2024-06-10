import React, { useEffect } from "react";
import RidingCities from "../assets/images/ridingcities.PNG";
import Booki from "../assets/images/booki.PNG";
import Ohmyfood from "../assets/images/Ohmyfood.jpg";
import Printit from "../assets/images/printit.webp";
import NinaCarducci from "../assets/images/ninacarducci.PNG";
import "../styles/projets.css";

function Projets() {
  useEffect(() => {
    const aproposElement = document.querySelector(".apparition");

    if (!aproposElement) return;

    const observer = new IntersectionObserver(
      ([entry], observer) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          // Arrêter d'observer l'élément après avoir ajouté la classe
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 } // Déclenche le rappel lorsque 10% de l'élément est visible
    );

    // Commencer à observer l'élément sélectionné
    observer.observe(aproposElement);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="Projets">
      <div className="apparition">
        <h1>Mes projets</h1>
        <div className="line"></div>
        <div className="all_cards">
          <article className="card">
            <h2>Projet 1</h2>
            <img className="RidingCities" src={RidingCities} alt="Un skate" />
            <p>
              Riding Cities est une association passionnée par la culture skate.
              Leur mission est de promouvoir le skate comme un mode de vie sain
              et créatif, et de rassembler la communauté des skateurs de la
              région.
            </p>
            <ul className="langages">
              <li>HTML</li>
              <li>CSS</li>
            </ul>
            <div className="lien_card">
              <a
                href="https://github.com/Jennifer-Guillemin/Riding-Cities"
                target="_blank"
                rel="noreferrer"
                aria-label="lien du repot github Riding Cities"
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href="https://jennifer-guillemin.github.io/Riding-Cities/"
                target="_blank"
                rel="noreferrer"
                aria-label="lien du site en ligne Riding Cities"
              >
                <lord-icon
                  src="https://cdn.lordicon.com/fmjvulyw.json"
                  trigger="hover"
                  colors="primary:#121331,secondary:#ebe6ef,tertiary:#000000,quaternary:#1663c7,quinary:#f9c9c0,senary:#f24c00"
                ></lord-icon>
              </a>
            </div>
          </article>

          <article className="card">
            <h2>Projet 2</h2>
            <img
              className="Booki"
              src={Booki}
              alt="aperçu du haut de la page du site Booki"
            />
            <p>
              Booki est un site permettant aux utilisateurs de trouver
              facilement des hébergements, des activités et des restaurants dans
              la ville de leur choix.
            </p>
            <ul className="langages">
              <li>HTML</li>
              <li>CSS</li>
            </ul>
            <div className="lien_card">
              <a
                href="https://github.com/Jennifer-Guillemin/Booki"
                target="_blank"
                rel="noreferrer"
                aria-label="lien du repot gihub Booki"
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href="https://jennifer-guillemin.github.io/Booki/"
                target="_blank"
                rel="noreferrer"
                aria-label="lien du site en ligne Booki"
              >
                <lord-icon
                  src="https://cdn.lordicon.com/fmjvulyw.json"
                  trigger="hover"
                  colors="primary:#121331,secondary:#ebe6ef,tertiary:#000000,quaternary:#1663c7,quinary:#f9c9c0,senary:#f24c00"
                ></lord-icon>
              </a>
            </div>
          </article>

          <article className="card">
            <h2>Projet 3</h2>
            <img className="Ohmyfood" src={Ohmyfood} alt="Une assiette" />
            <p>
              Ohmyfood est une plateforme mobile-first innovante, permettant aux
              clients de parcourir les menus de restaurants gastronomiques,
              composer leur menu et effectuer une réservation en ligne.
            </p>
            <ul className="langages">
              <li>HTML</li>
              <li>SCSS</li>
            </ul>
            <div className="lien_card">
              <a
                href="https://github.com/Jennifer-Guillemin/Ohmyfood"
                target="_blank"
                rel="noreferrer"
                aria-label="lien du repot github Ohmyfood"
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href="https://jennifer-guillemin.github.io/Ohmyfood/"
                target="_blank"
                rel="noreferrer"
                aria-label="lien du site en ligne Ohmyfood"
              >
                <lord-icon
                  src="https://cdn.lordicon.com/fmjvulyw.json"
                  trigger="hover"
                  colors="primary:#121331,secondary:#ebe6ef,tertiary:#000000,quaternary:#1663c7,quinary:#f9c9c0,senary:#f24c00"
                ></lord-icon>
              </a>
            </div>
          </article>

          <article className="card">
            <h2>Projet 4</h2>
            <img
              className="Print-it"
              src={Printit}
              alt="Une palette de couleurs"
            />
            <p>
              Print it est une entreprise familiale d'impression, proposant une
              large gamme de papiers et de finitions pour des produits variés
              tels que dépliants, plaquettes promotionnelles, brochures, flyers,
              goodies d’entreprises, autocollants, et bien plus encore.
            </p>
            <ul className="langages">
              <li>HTML</li>
              <li>CSS</li>
              <li>JAVASCRIPT</li>
            </ul>
            <div className="lien_card">
              <a
                href="https://github.com/Jennifer-Guillemin/Print_it"
                target="_blank"
                rel="noreferrer"
                aria-label="lien du repot gihub Print it "
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href="https://jennifer-guillemin.github.io/Print_it/"
                target="_blank"
                rel="noreferrer"
                aria-label="lien du site en ligne Print it"
              >
                <lord-icon
                  src="https://cdn.lordicon.com/fmjvulyw.json"
                  trigger="hover"
                  colors="primary:#121331,secondary:#ebe6ef,tertiary:#000000,quaternary:#1663c7,quinary:#f9c9c0,senary:#f24c00"
                ></lord-icon>
              </a>
            </div>
          </article>

          <article className="card">
            <h2>Projet 5</h2>
            <img
              className="NinaCarducci"
              src={NinaCarducci}
              alt="A propos de nina carducci"
            />
            <p>
              Nina Carducci est un site de photographie spécialisé dans les
              portraits, les mariages et les événements. Situé à Bordeaux, elle
              capture vos moments spéciaux avec talent et sensibilité, pour
              créer des souvenirs inoubliables.
            </p>
            <ul className="langages">
              <li>HTML</li>
              <li>CSS</li>
              <li>JAVASCRIPT</li>
            </ul>
            <div className="lien_card">
              <a
                href="https://github.com/Jennifer-Guillemin/nina-carducci"
                target="_blank"
                rel="noreferrer"
                aria-label="lien du repot gihub Nina Carducci"
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href="https://jennifer-guillemin.github.io/nina-carducci/"
                target="_blank"
                rel="noreferrer"
                aria-label="lien du site en ligne Nina Carducci"
              >
                <lord-icon
                  src="https://cdn.lordicon.com/fmjvulyw.json"
                  trigger="hover"
                  colors="primary:#121331,secondary:#ebe6ef,tertiary:#000000,quaternary:#1663c7,quinary:#f9c9c0,senary:#f24c00"
                ></lord-icon>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Projets;
