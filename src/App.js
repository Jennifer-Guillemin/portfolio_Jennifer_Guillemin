import React from "react";
import Header from "./containers/Header";
import Contact from "./containers/Contact";
import Footer from "./containers/Footer";
import Ohmyfood from "./assets/ohmyfood.webp";
import Printit from "./assets/printit.webp";

function ProgressBar({ label, progress }) {
  return (
    <div className="progress-container">
      <div className="label">{label}</div>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}>
          {progress}%
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <section id="Accueil">
        <div className="typed_text">
          <h1>Bonjour 👋</h1>
          <h2>Bienvenue sur mon portfolio !</h2>
          <h3>Je suis Jennifer Guillemin</h3>
        </div>
      </section>

      <section id="Presentation">
        <div>
          <h1>Présentation</h1>
          <div className="line"></div>
          <p>
            Je suis passionnée par le monde du développement web et je suis
            actuellement en formation diplômante dans ce domaine passionnant.
            Ayant déjà acquis des connaissances solides en HTML, CSS et
            JavaScript, ainsi que des compétences en React pour développer des
            applications web modernes et interactives, je suis déterminée à
            continuer à approfondir mes compétences et à élargir mes horizons
            dans le domaine du développement web.
          </p>
        </div>
      </section>

      <section id="Projets">
        <div>
          <h1>Mes projets</h1>
          <div className="line"></div>
          <div className="all_cards">
            <article className="card">
              <h2>Projet 1</h2>
              <img className="Ohmyfood" src={Ohmyfood} alt="Une assiette" />
              <p>
                Ohmyfood est une plateforme mobile-first innovante, permettant
                aux clients de parcourir les menus de restaurants
                gastronomiques, composer leur menu et effectuer une réservation
                en ligne.{" "}
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
              <h2>Projet 2</h2>
              <img
                className="Print-it"
                src={Printit}
                alt="Une palette de couleurs"
              />
              <p>
                Print it est une entreprise familiale d'impression, proposant
                une large gamme de papiers et de finitions pour des produits
                variés tels que dépliants, plaquettes promotionnelles,
                brochures, flyers, goodies d’entreprises, autocollants, et bien
                plus encore.
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
          </div>
        </div>
      </section>

      <section id="Competences">
        <div>
          <h1>Compétences</h1>
          <div className="line"></div>
          <ProgressBar label="HTML" progress={95} />
          <ProgressBar label="CSS" progress={95} />
          <ProgressBar label="JavaScript" progress={70} />
          <ProgressBar label="React" progress={70} />
        </div>
      </section>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
