import React from "react";
import "./slike_tima.css";
import StrelaLevo from "../../images/LeftArrow.png";
import StrelaDesno from "../../images/RightArrow.png";
import SlikaBordera from "../../images/Slike tima - okvir za koordinatora.png";
import SlikaKoordinatora from "../../images/5-3.jpg";
import SLikaBordera1 from "../../images/Slike tima - okvir za sliku tima.png";
import SlikaGrupna from "../../images/Grupna.png";
import ImageSlider from "./ImageSlider/ImageSlider";
import { DataSlider } from "./ImageSlider/DataSlider";

const slike_tima = () => {
  return (
    <div className="slike-tima-wrapper">
      <div className="navbar-st">
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
          {/* <div className="gornji-deo">
            <img
              className="slika-strela-levo"
              src={StrelaLevo}
              alt="Strelica leva oko slike koordinatora"
            />
            <div className="slika-roditelj">
              <img
                className="slika-bordera"
                src={SlikaBordera}
                alt="Okvir za sliku koordinatora"
              />
              <img
                className="slika-koordinatora"
                src={SlikaKoordinatora}
                alt="Slika koordinatora"
              />
            </div>
            <img
              className="slika-strela-desno"
              src={StrelaDesno}
              alt="Strelica desna oko slike koordinatora"
            />
          </div> */}

          <ImageSlider slides={DataSlider} />
          <div className="opis-slike">
            <h1 className="ime-koordinatora">Vladislav Vidović</h1>
            <h3 className="funkcija-koordinatora">Koordinator projekta</h3>
          </div>
        </div>
        <div className="slike-tima-desno">
          <div className="slika-roditelj">
            <img
              className="slika-bordera1"
              src={SLikaBordera1}
              alt="Okvir za sliku tima"
            />
            <img
              className="slika-grupna"
              src={SlikaGrupna}
              alt="Grupna slika tima"
            />
          </div>
          <p className="opis-tima">
            Tim za dizajn, u saradnji sa timom za odnose sa javnošću, na
            kreativan način osmišljava vizuelni identitet projekta. Svoju
            originalnost i veštine izražava kroz stvaranje objava za društvene
            mreže, koje za cilj imaju da ti na najzanimljiviji način prenesu
            informacije o našem takmičenju, kao i izgleda sajta ovogodišnjeg
            takmičenja.
          </p>
        </div>
      </div>
    </div>
  );
};

export default slike_tima;
