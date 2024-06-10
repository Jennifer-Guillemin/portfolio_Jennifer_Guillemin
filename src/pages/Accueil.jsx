import React, { useEffect } from "react";
import GifDev from "../assets/Dev.gif";
import Projets from "../composants/Projets";
import Skills from "../composants/Skills";

function Accueil() {
  useEffect(() => {
    const aproposElement = document.querySelector(".Apropos");
    //si aucun élément n'est trouvé, arrêt de l'exécution de la fonction
    if (!aproposElement) return;

    const observer = new IntersectionObserver(
      ([entry], observer) => {
        // Vérifie si l'élément est en intersection avec le viewport
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          // Arrête d'observer l'élément après lui avoir ajouté la classe
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 } // Déclenche le rappel lorsque 10% de l'élément est visible
    );
    observer.observe(aproposElement); // Commence à observer l'élément sélectionné
    // Nettoie la fonction d'effet en arrêtant l'observation de l'élément
    return () => observer.disconnect();
  }, []); // Déclenche l'effet seulement la première fois qu'on affiche le composant

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
      <p className="citation">
        "Les développeurs web créent des mondes numériques où les idées prennent
        vie et les possibilités sont infinies."
        <lord-icon
          src="https://cdn.lordicon.com/ourpesbe.json"
          trigger="hover"
          stroke="bold"
        ></lord-icon>
      </p>
      <Skills />
    </div>
  );
}

export default Accueil;
