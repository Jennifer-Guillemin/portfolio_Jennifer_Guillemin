import React, { useEffect } from "react";
import RidingCities from "../assets/images/ridingcities.PNG";
import Booki from "../assets/images/booki.PNG";
import Ohmyfood from "../assets/images/Ohmyfood.jpg";
import Printit from "../assets/images/printit.webp";
import NinaCarducci from "../assets/images/ninacarducci.PNG";
import TinyHouses from "../assets/images/Site_TinyHouses.PNG";
import TextHover from "./TextHover";
import "../styles/projets.css";

function Projets() {
  useEffect(() => {
    const apparitionElement = document.querySelector(".apparition");

    if (!apparitionElement) return;

    const observer = new IntersectionObserver(
      ([entry], observer) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(apparitionElement);

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
            <a
              className="container"
              href="https://jennifer-guillemin.github.io/Riding-Cities/"
              target="_blank"
              rel="noreferrer"
              aria-label="lien du site en ligne Riding Cities"
            >
              <img className="RidingCities" src={RidingCities} alt="Un skate" />
              <TextHover />
            </a>
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

            <div className="links_container">
              <a
                className="link_site"
                href="https://jennifer-guillemin.github.io/Riding-Cities/"
                target="_blank"
                rel="noreferrer"
                aria-label="lien du site en ligne Riding Cities"
              >
                <p>
                  Voir le site
                  <lord-icon
                    src="https://cdn.lordicon.com/fmjvulyw.json"
                    trigger="hover"
                    stroke="bold"
                  ></lord-icon>
                </p>
              </a>
              <a
                className="link_repo_github"
                href="https://github.com/Jennifer-Guillemin/Riding-Cities"
                target="_blank"
                rel="noreferrer"
                aria-label="lien du repo github Riding Cities"
              >
                <p>
                  Repo Github
                  <i className="fa-brands fa-github"></i>
                </p>
              </a>
            </div>
          </article>

          <article className="card">
            <h2>Projet 2</h2>
            <a
              className="container"
              href="https://jennifer-guillemin.github.io/Booki/"
              target="_blank"
              rel="noreferrer"
              aria-label="lien du site en ligne Booki"
            >
              <img
                className="Booki"
                src={Booki}
                alt="aperçu du haut de la page du site Booki"
              />
              <TextHover />
            </a>
            <p>
              Booki est un site permettant aux utilisateurs de trouver
              facilement des hébergements, des activités et des restaurants dans
              la ville de leur choix.
            </p>
            <ul className="langages">
              <li>HTML</li>
              <li>CSS</li>
            </ul>

            <div className="links_container">
              <a
                className="link_site"
                href="https://jennifer-guillemin.github.io/Booki/"
                target="_blank"
                rel="noreferrer"
                aria-label="lien du site en ligne Booki"
              >
                <p>
                  Voir le site
                  <lord-icon
                    src="https://cdn.lordicon.com/fmjvulyw.json"
                    trigger="hover"
                    stroke="bold"
                  ></lord-icon>
                </p>
              </a>
              <a
                className="link_repo_github"
                href="https://github.com/Jennifer-Guillemin/Booki"
                target="_blank"
                rel="noreferrer"
                aria-label="lien du repo github Booki"
              >
                <p>
                  Repo Github
                  <i className="fa-brands fa-github"></i>
                </p>
              </a>
            </div>
          </article>

          <article className="card">
            <h2>Projet 3</h2>
            <a
              className="container"
              href="https://jennifer-guillemin.github.io/Ohmyfood/"
              target="_blank"
              rel="noreferrer"
              aria-label="lien du site en ligne Ohmyfood"
            >
              <img className="Ohmyfood" src={Ohmyfood} alt="Une assiette" />
              <TextHover />
            </a>
            <p>
              Ohmyfood est une plateforme mobile-first innovante, permettant aux
              clients de parcourir les menus de restaurants gastronomiques,
              composer leur menu et effectuer une réservation en ligne.
            </p>
            <ul className="langages">
              <li>HTML</li>
              <li>SCSS</li>
            </ul>

            <div className="links_container">
              <a
                className="link_site"
                href="https://jennifer-guillemin.github.io/Ohmyfood/"
                target="_blank"
                rel="noreferrer"
                aria-label="lien du site en ligne Ohmyfood"
              >
                <p>
                  Voir le site
                  <lord-icon
                    src="https://cdn.lordicon.com/fmjvulyw.json"
                    trigger="hover"
                    stroke="bold"
                  ></lord-icon>
                </p>
              </a>
              <a
                className="link_repo_github"
                href="https://github.com/Jennifer-Guillemin/Ohmyfood"
                target="_blank"
                rel="noreferrer"
                aria-label="lien du repot github Ohmyfood"
              >
                <p>
                  Repo Github
                  <i className="fa-brands fa-github"></i>
                </p>
              </a>
            </div>
          </article>

          <article className="card">
            <h2>Projet 4</h2>
            <a
              className="container"
              href="https://jennifer-guillemin.github.io/Print_it/"
              target="_blank"
              rel="noreferrer"
              aria-label="lien du site en ligne Print it"
            >
              <img
                className="Print-it"
                src={Printit}
                alt="Une palette de couleurs"
              />
              <TextHover />
            </a>
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

            <div className="links_container">
              <a
                className="link_site"
                href="https://jennifer-guillemin.github.io/Print_it/"
                target="_blank"
                rel="noreferrer"
                aria-label="lien du site en ligne Print it"
              >
                <p>
                  Voir le site
                  <lord-icon
                    src="https://cdn.lordicon.com/fmjvulyw.json"
                    trigger="hover"
                    stroke="bold"
                  ></lord-icon>
                </p>
              </a>
              <a
                className="link_repo_github"
                href="https://github.com/Jennifer-Guillemin/Print_it"
                target="_blank"
                rel="noreferrer"
                aria-label="lien du repo github Print it"
              >
                <p>
                  Repo Github
                  <i className="fa-brands fa-github"></i>
                </p>
              </a>
            </div>
          </article>

          <article className="card">
            <h2>Projet 5</h2>
            <a
              className="container"
              href="https://jennifer-guillemin.github.io/nina-carducci/"
              target="_blank"
              rel="noreferrer"
              aria-label="lien du site en ligne Nina Carducci"
            >
              <img
                className="NinaCarducci"
                src={NinaCarducci}
                alt="A propos de nina carducci"
              />
              <TextHover />
            </a>
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

            <div className="links_container">
              <a
                className="link_site"
                href="https://jennifer-guillemin.github.io/nina-carducci/"
                target="_blank"
                rel="noreferrer"
                aria-label="lien du site en ligne Nina Carducci"
              >
                <p>
                  Voir le site
                  <lord-icon
                    src="https://cdn.lordicon.com/fmjvulyw.json"
                    trigger="hover"
                    stroke="bold"
                  ></lord-icon>
                </p>
              </a>
              <a
                className="link_repo_github"
                href="https://github.com/Jennifer-Guillemin/nina-carducci"
                target="_blank"
                rel="noreferrer"
                aria-label="lien du repo github Nina Carducci"
              >
                <p>
                  Repo Github
                  <i className="fa-brands fa-github"></i>
                </p>
              </a>
            </div>
          </article>

          <article className="card">
            <h2>Projet 6 en cours</h2>
            <img
              className="TinyHouses"
              src={TinyHouses}
              alt="A propos des Tiny Houses"
            />
            <p>
              Implantée dans le secteur des 1000 étangs, dans les Vosges du Sud,
              notre Tiny JOY vous accueille jusqu'à 5 personnes pour vivre un
              moment de détente insolite. Elle est toute autonome. Nous sommes
              situés à Beulotte-Saint-Laurent à 15 minutes de Faucogney et la
              Mer, Servance, Le Thillot, Rupt-sur-Moselle 30 minutes de
              Remiremont, Luxeuil les Bains, Bussang. Nous vous proposons
              également la tiny des Rêves qui peut accueillir 2 personnes et
              notre caravane vintage prévue pour 2 personnes.
            </p>
            <ul className="langages">
              <li>HTML</li>
              <li>CSS</li>
              <li>JAVASCRIPT</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Projets;
