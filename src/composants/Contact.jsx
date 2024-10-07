import React, { useRef, useState } from "react";
import "../styles/contact.css";

function Contact() {
  const form = useRef();
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    // Mon endpoint personnalisé de Formspree
    const formspreeEndpoint = "https://formspree.io/f/mjkvbeng";

    fetch(formspreeEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: form.current.user_name.value,
        email: form.current.user_email.value,
        message: form.current.message.value,
      }),
    })
      .then((response) => {
        if (response.ok) {
          setSuccessMessage("Votre message a bien été envoyé.");
          setErrorMessage("");
          e.target.reset(); // Réinitialiser le formulaire après envoi
        } else {
          throw new Error(
            "Une erreur est survenue lors de l'envoi du message."
          );
        }
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage("Une erreur est survenue. Veuillez réessayer.");
      });
  };

  return (
    <section id="Contact">
      <div>
        <h1>Entrer en contact</h1>
        <div className="line"></div>
        <p>
          Je suis actuellement à la recherche d'opportunités en développement
          web. Si vous connaissez des postes disponibles, si vous avez des
          questions ou si vous voulez simplement me dire bonjour, n'hésitez pas
          à m'envoyer un e-mail.
        </p>
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <label>Nom</label>
          <input type="text" name="user_name" required />

          <label>Email</label>
          <input type="email" name="user_email" required />

          <label>Message</label>
          <textarea name="message" required />

          <button type="submit">Envoyer</button>
        </form>
        {successMessage && <p>{successMessage}</p>}{" "}
        {/* Affiche le message de succès */}
        {errorMessage && <p>{errorMessage}</p>}{" "}
        {/* Affiche le message d'erreur */}
        <ul className="social_links">
          <li>
            <p>
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
