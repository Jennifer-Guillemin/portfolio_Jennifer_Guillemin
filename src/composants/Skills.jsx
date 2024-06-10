import React, {useEffect} from "react";
import "../styles/skills.css";

function Skills() {
  useEffect(() => {
    const aproposElement = document.querySelector("#Competences");

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
    <section id="Competences">
      <div>
        <h1>Compétences</h1>
        <div className="line"></div>
        <div className="progress-container">
          <div className="label">
            HTML <i className="fa-brands fa-html5"></i>
          </div>
          <div className="progress-bar">
            <div className="progress" style={{ width: `${95}%` }}>
              95%
            </div>
          </div>
        </div>

        <div className="progress-container">
          <div className="label">
            CSS <i className="fa-brands fa-css3-alt"></i>
          </div>
          <div className="progress-bar">
            <div className="progress" style={{ width: `${95}%` }}>
              95%
            </div>
          </div>
        </div>

        <div className="progress-container">
          <div className="label">
            JavaScript <i className="fa-brands fa-js"></i>
          </div>
          <div className="progress-bar">
            <div className="progress" style={{ width: `${75}%` }}>
              75%
            </div>
          </div>
        </div>

        <div className="progress-container">
          <div className="label">
            React <i className="fa-brands fa-react"></i>
          </div>
          <div className="progress-bar">
            <div className="progress" style={{ width: `${70}%` }}>
              70%
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
