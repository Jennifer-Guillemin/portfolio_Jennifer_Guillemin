import React, { useEffect } from "react";
import "../styles/skills.css";

function Skills() {
  useEffect(() => {
    const competencesElement = document.querySelector("#Competences");

    if (!competencesElement) return;

    const observer = new IntersectionObserver(
      ([entry], observer) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(competencesElement);

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
            <div className="progress" style={{ width: `${88}%` }}></div>
          </div>
        </div>

        <div className="progress-container">
          <div className="label">
            CSS <i className="fa-brands fa-css3-alt"></i>
          </div>
          <div className="progress-bar">
            <div className="progress" style={{ width: `${88}%` }}></div>
          </div>
        </div>

        <div className="progress-container">
          <div className="label">
            JavaScript <i className="fa-brands fa-js"></i>
          </div>
          <div className="progress-bar">
            <div className="progress" style={{ width: `${70}%` }}></div>
          </div>
        </div>

        <div className="progress-container">
          <div className="label">
            React <i className="fa-brands fa-react"></i>
          </div>
          <div className="progress-bar">
            <div className="progress" style={{ width: `${50}%` }}></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
