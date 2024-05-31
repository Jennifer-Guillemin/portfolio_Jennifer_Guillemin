import React from "react";
import RidingCities from "../assets/ridingcities.PNG";
import Booki from "../assets/booki.PNG";
import Ohmyfood from "../assets/ohmyfood.webp";
import Printit from "../assets/printit.webp";
import NinaCarducci from "../assets/ninacarducci.PNG";
import "../styles/projets.css";

function Projets() {
  return (
    <section id="Projets">
      <div>
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
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
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
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
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
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
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
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
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
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Projets;
