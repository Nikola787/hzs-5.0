import React, { useState, useEffect } from "react";
import "./slike_tima.css";
import SLikaBordera1 from "../../images/Slike tima - okvir za sliku tima.png";
import SlikaGrupna from "../../images/Grupna.png";
import StrelaLevo from "../../images/LeftArrow.png";
import StrelaDesno from "../../images/RightArrow.png";
import SlikaBordera from "../../images/Slike tima - okvir za koordinatora.png";
import { DataSlider } from "./DataSlider";

const Slike_tima = () => {
  const [people] = useState(DataSlider);
  const [current, setCurrent] = useState(0);
  const length = people.length;

  useEffect(() => {
    const lastCurrent = people.length - 1;
    if (current < 0) {
      setCurrent(lastCurrent);
    }
    if (current > lastCurrent) {
      setCurrent(0);
    }
  }, [current, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setCurrent(current + 1);
    }, 3000);
    return () => {
      clearInterval(slider);
    };
  }, [current]);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  if (!Array.isArray(people) || people.length <= 0) {
    return null;
  }
  const goToSLide = (index) => {
    setCurrent(index);
  };
  return (
    <div className="slike-tima-wrapper">
      <div className="navbar-st">
        <ul>
          <li
            onClick={() => {
              goToSLide(0);
            }}
          >
            CORE
          </li>
          <li
            onClick={() => {
              goToSLide(1);
            }}
          >
            IT
          </li>
          <li
            onClick={() => {
              goToSLide(2);
            }}
          >
            Dizajn
          </li>
          <li
            onClick={() => {
              goToSLide(3);
            }}
          >
            PR
          </li>
          <li
            onClick={() => {
              goToSLide(4);
            }}
          >
            CR&AR
          </li>
          <li
            onClick={() => {
              goToSLide(5);
            }}
          >
            Logistika
          </li>
          <li
            onClick={() => {
              goToSLide(6);
            }}
          >
            HR
          </li>
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
          {DataSlider.map((data, index) => {
            return (
              <div
                className={index === current ? "slide-active" : "slide"}
                key={index}
              >
                {index === current && (
                  <div className="opis-slike">
                    <h1 className="ime-koordinatora">{data.name}</h1>
                    <h3 className="funkcija-koordinatora">{data.title}</h3>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <div className="slike-tima-desno">
          <div className="slika-roditelj">
            <img
              className="slika-bordera1"
              src={SLikaBordera1}
              alt="Okvir za sliku tima"
            />
            {DataSlider.map((data, index) => {
              return (
                <div
                  className={index === current ? "slide-active" : "slide"}
                  key={index}
                >
                  {index === current && (
                    <img
                      className="slika-grupna"
                      src={data.imageGroup}
                      alt="Grupna slika tima"
                    />
                  )}
                </div>
              );
            })}
          </div>
          {DataSlider.map((data, index) => {
            return (
              <div
                className={index === current ? "slide-active" : "slide"}
                key={index}
              >
                {index === current && (
                  <p className="opis-tima">{data.description}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Slike_tima;
