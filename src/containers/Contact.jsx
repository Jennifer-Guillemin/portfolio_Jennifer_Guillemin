import React, { useState } from "react";

function Contact() {
  const [submitMessage, setSubmitMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    // Empêcher les soumissions multiples
    if (isSubmitting) return;
    setIsSubmitting(true);

    const data = {
      ...formData,
      access_key: "4e8e0916-389f-486f-92ba-8265294ff568",
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      const responseData = await res.json();

      if (responseData.success) {
        setSubmitMessage("Votre message a été envoyé avec succès !");
        setFormData({ nom: "", email: "", message: "" }); // Réinitialiser le formulaire
      } else {
        throw new Error(
          "API returned an error: " + JSON.stringify(responseData)
        );
      }
    } catch (error) {
      console.error(
        "There was a problem with your fetch operation:",
        error.message
      );
      setSubmitMessage(
        "Une erreur s'est produite lors de l'envoi de votre message. Veuillez réessayer."
      );
    } finally {
      setIsSubmitting(false); // Réactiver le bouton après la soumission ou en cas d'erreur
    }
  };

  return (
    <section id="Contact">
      <div>
        <h1>Contact</h1>
        <div className="line"></div>
        <p>
          N’hésitez pas à m’écrire ! Je vous répondrais en moins de 24 heures !
        </p>
        <form onSubmit={onSubmit} autoComplete="on">
          <label htmlFor="nom">Nom :</label>
          <input
            type="text"
            name="nom"
            id="nom"
            value={formData.nom}
            onChange={handleChange}
            required
          />
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="message">Message :</label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            cols="30"
            rows="10"
            required
          />
          <input
            type="submit"
            value={isSubmitting ? "Envoi en cours..." : "Envoyer"}
            disabled={isSubmitting}
          />
        </form>
        {submitMessage && <p>{submitMessage}</p>}
      </div>
    </section>
  );
}

export default Contact;
