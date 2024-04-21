import React from "react";

function Contact() {
  const contact = {
    email: "jennifer.1707@hotmail.fr",
  };

  return (
    <section id="Contact">
      <div>
        <h1>Contact</h1>
        <div className="line"></div>
        <p>
          N’hésitez pas à m’écrire ! Je vous répondrais en moins de 24 heures !
        </p>
        <form action={`mailto:${contact.email}`} method="post">
          <label htmlFor="nom">Nom :</label>
          <input type="text" name="nom" id="nom" required />
          <label htmlFor="email">Email :</label>
          <input type="email" name="email" id="email" required />
          <label htmlFor="message">Message :</label>
          <textarea name="message" id="message" cols="30" rows="10" required />
          <input type="submit" value="Envoyer" />
        </form>
      </div>
    </section>
  );
}

export default Contact;
