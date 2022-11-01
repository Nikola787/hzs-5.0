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
  const [appState, changeState] = useState({
    activeObject: null,
    objects: [
      { id: 0, title: "CORE" },
      { id: 1, title: "IT" },
      { id: 2, title: "Dizajn" },
      { id: 3, title: "PR" },
      { id: 4, title: "CR&AR" },
      { id: 5, title: "Logistika" },
      { id: 6, title: "HR" },
    ],
  });

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

      toggleActiveStyles(current)
      toggleActive(current);
      goToSlide(current);

      console.log(current);
      setCurrent(current + 1);

    }, 3000);

    return () => {
      clearInterval(slider);
    };
  }, [current]);

  const nextSlide = () => {
    setCurrent(current === length  ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === -1 ? length - 1 : current - 1);
  };

  const goToSlide = (index) => {
    setCurrent(index);
  };

  const toggleActive = (index) => {
    changeState({ ...appState, activeObject: appState.objects[index] });
  };

  const toggleActiveStyles = (index) => {
    if (appState.objects[index] === appState.activeObject) {
      return "box active";
    } else {
      return "box inactive";
    }
  };
  return (
    <div className="slike-tima-wrapper">
      <div className="navbar-st">
        {appState.objects.map((elements, index) => (
          <h1
            key={index}
            className={toggleActiveStyles(index)}
            onClick={() => {
              toggleActive(index);
              goToSlide(index);
            }}
          >
            {elements.title}
          </h1>
        ))}
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
