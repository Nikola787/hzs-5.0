import React, { useState, useEffect } from "react";
import "./Slike_tima.css";
import SLikaBordera1 from "../../images/Slike tima - okvir za sliku tima.png";
import SlikaGrupna from "../../images/Grupna.png";
import StrelaLevo from "../../images/LeftArrow.png";
import StrelaDesno from "../../images/RightArrow.png";
import SlikaBordera from "../../images/Slike tima - okvir za koordinatora.png";
import { DataSlider } from "./DataSlider";

const Slike_tima = () => {
  const [people] = useState(DataSlider);
  const [index, setIndex] = useState(0);
  const [current, setCurrent] = useState(0);
  const length = people.length;

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 1000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  if (!Array.isArray(people) || people.length <= 0) {
    return null;
  }
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
          <section className="slider">
            <img
              className="left-arrow"
              src={StrelaLevo}
              alt="Slika strele"
              onClick={prevSlide}
            />
            <img
              className="right-arrow"
              src={StrelaDesno}
              alt="Slika strele"
              onClick={nextSlide}
            />
            <img
              className="slika-bordera"
              src={SlikaBordera}
              alt="Okvir za sliku koordinatora"
            />
            {DataSlider.map((data, index) => {
              return (
                <div
                  className={index === current ? "slide-active" : "slide"}
                  key={index}
                >
                  {index === current && (
                    <img src={data.image} alt="group" className="image" />
                  )}
                </div>
              );
            })}
          </section>
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

export default Slike_tima;
