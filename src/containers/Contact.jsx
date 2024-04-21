import React from "react";

function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("4e8e0916-389f-486f-92ba-8265294ff568", "YOUR_ACCESS_KEY_HERE");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
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
        <form onSubmit={onSubmit}>
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
