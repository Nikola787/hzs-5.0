import React from "react";
import "./slike_tima.css";
import SlikaStrelica from "../../images/Slike tima - Strelice oko slike koordinatora.png";
import SlikaBordera from "../../images/Slike tima - okvir za koordinatora.png";

const slike_tima = () => {
  return (
    <div className="slike-tima-wrapper">
      <div className="navbar">
        <ul>
          <li>CORE</li>
          <li>IT</li>
          <li>Dizajn</li>
          <li>PR</li>
          <li>CR&AR</li>
          <li>Logistika</li>
          <li>HR</li>
        </ul>
      </div>
      <div className="slike-tima-container">
        <div className="slike-tima-levo">
          <img
            className="slika-strelica"
            src={SlikaStrelica}
            alt="Strelice oko slike koordinatora"
          />
          <img
            className="slika-bordera"
            src={SlikaBordera}
            alt="Okvir za koordinatora"
          />
        </div>
      </div>
    </div>
  );
};

export default slike_tima;
