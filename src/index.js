import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Header from "./composants/Header";
import Contact from "./composants/Contact";
import Footer from "./composants/Footer";
import "./styles/app.css";
import reportWebVitals from "./reportWebVitals";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Accueil />
      <Contact />
      <Footer />
    </Router>
  </React.StrictMode>
);

reportWebVitals();
