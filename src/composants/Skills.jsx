import React, { useEffect } from "react";
import "../styles/skills.css";
import Canva from "../assets/logo&icon/canva.png";
import Figma from "../assets/logo&icon/figma.png";
import Capcut from "../assets/logo&icon/capcut.jpg";
import Lighthouse from "../assets/logo&icon/lighthouse.png";
import Wave from "../assets/logo&icon/wave.png";

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

  const programmingSkills = [
    { name: "HTML", icon: "fa-html5", level: "Intermédiaire" },
    { name: "CSS", icon: "fa-css3-alt", level: "Intermédiaire" },
    { name: "JavaScript", icon: "fa-js", level: "Débutant" },
    { name: "React", icon: "fa-react", level: "Débutant" },
  ];

  const designTools = [
    { name: "Canva", icon: Canva, level: "Intermédiaire" },
    { name: "Figma", icon: Figma, level: "Débutant" },
    {
      name: "PowerPoint",
      icon: "fa-file-powerpoint",
      level: "Intermédiaire",
    },
    { name: "Capcut", icon: Capcut, level: "Débutant" },
  ];

  const debugTools = [
    {
      name: "Lighthouse",
      icon: Lighthouse,
      level: "Débutant",
    },
    { name: "Wave", icon: Wave, level: "Débutant" },
    {
      name: "React Developer Tools",
      icon: "fa-react",
      level: "Débutant",
    },
  ];

  return (
    <section id="Competences">
      <div>
        <h1>Compétences</h1>
        <div className="line"></div>

        <h2>Langages de programmation</h2>
        <div className="skills-grid">
          {programmingSkills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <i className={`fa-brands ${skill.icon} skill-icon`}></i>
              <h3>{skill.name}</h3>
              <p>Niveau: {skill.level}</p>
            </div>
          ))}
        </div>

        <h2>Outils de conception graphique</h2>
        <div className="skills-grid">
          {designTools.map((tool, index) => (
            <div className="skill-card" key={index}>
              {tool.icon.startsWith("fa-") ? (
                <i className={`fa-solid ${tool.icon} skill-icon`}></i>
              ) : (
                <img src={tool.icon} alt={tool.name} className="skill-icon" />
              )}
              <h3>{tool.name}</h3>
              <p>Niveau: {tool.level}</p>
            </div>
          ))}
        </div>

        <h2>Outils de test et débogage</h2>
        <div className="skills-grid">
          {debugTools.map((tool, index) => (
            <div className="skill-card" key={index}>
              {tool.icon.startsWith("fa-") ? (
                <i className={`fa-brands ${tool.icon} skill-icon`}></i>
              ) : (
                <img src={tool.icon} alt={tool.name} className="skill-icon" />
              )}
              <h3>{tool.name}</h3>
              <p>Niveau: {tool.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
