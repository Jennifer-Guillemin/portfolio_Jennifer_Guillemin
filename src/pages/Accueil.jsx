import React from "react";
import GifDev from "../assets/Dev.gif";
import Projets from "../composants/Projets";
import Skills from "../composants/Skills";

function Accueil() {
  return (
    <div>
      <section id="Accueil">
        <div className="typed_text">
          <h1>Bonjour 👋</h1>
          <h2>Bienvenue sur mon portfolio !</h2>
          <h3>Je suis Jennifer Guillemin</h3>
        </div>
      </section>
      <section id="Presentation">
        <div className="Apropos">
          <div>
            <img
              className="GifDev"
              src={GifDev}
              alt="Un gif d'ordinateur qui tape du code"
            />
          </div>
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
        </div>
      </section>
      <Projets />
      <Skills />
    </div>
  );
}

export default Accueil;
