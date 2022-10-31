import React from "react";
import "./partneri.css";
import Partner from "./Partner.js";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import PartneriSlider from "./PartneriSlider.js";

import Slika from "./assets/slika.png";
import Linija from "./assets/linija.png";

import Slike_tima from "../slike_tima/Slike_tima";

const Partneri = (props) => {
  const partneriSettings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    swipeToSlide: true,
    autoplaySpeed: 1500,
    centerPadding: "60px",
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const partneriLista = [
    {
      partnerSlika: Slika,
      partnerIme: "Slika",
      pozadina: "#C3B0FF",
      link: "http://fonis.rs/",
    },
    {
      partnerSlika: Slika,
      partnerIme: "Slika",
      pozadina: "#C3B0FF",
      link: "http://fonis.rs/",
    },

    {
      partnerSlika: Slika,
      partnerIme: "Slika",
      pozadina: "#C3B0FF",
      link: "http://fonis.rs/",
    },
    {
      partnerSlika: Slika,
      partnerIme: "Slika",
      pozadina: "#C3B0FF",
      link: "http://fonis.rs/",
    },
    {
      partnerSlika: Slika,
      partnerIme: "Slika",
      pozadina: "#C3B0FF",
      link: "http://fonis.rs/",
    },
    {
      partnerSlika: Slika,
      partnerIme: "Slika",
      pozadina: "#C3B0FF",
      link: "http://fonis.rs/",
    },
    {
      partnerSlika: Slika,
      partnerIme: "Slika",
      pozadina: "#C3B0FF",
      link: "http://fonis.rs/",
    },
    {
      partnerSlika: Slika,
      partnerIme: "Slika",
      pozadina: "#C3B0FF",
      link: "http://fonis.rs/",
    },
  ];

  return (
    <div className="ceo-partneri">
      <div className="dveSekcijeP">
        <Slike_tima />

        <div className="pokrovitelj" id="nasi-partneri">
          <h1 className="pokrovitelj-naslov">POKROVITELJ TAKMIČENJA</h1>

          <Partner
            partnerSlika={Slika}
            partnerIme="Partner"
            width="16em"
            height="9em"
            pozadina="#C3B0FF"
            link="http://fonis.rs/"
          ></Partner>
        </div>
      </div>
      <div className="linija">
        <img src={Linija} alt="linija" />
      </div>
      <h1>GODIŠNJI PARTNERI</h1>
      <div className="linija">
        <img src={Linija} alt="linija" />
      </div>

      <div className="partneri-box">
        <PartneriSlider
          partneri={partneriLista}
          settings={partneriSettings}
          width="16em"
          height="9em"
        />
      </div>
      <div className="linija">
        <img src={Linija} alt="linija" />
      </div>
      <h1>NATURALNI PARTNERI</h1>
      <div className="linija">
        <img src={Linija} alt="linija" />
      </div>
      <div className="partneri-box">
        <PartneriSlider
          partneri={partneriLista}
          settings={partneriSettings}
          width="16em"
          height="9em"
        />
      </div>
      <div className="linija">
        <img src={Linija} alt="linija" />
      </div>
      <h1>MEDIJSKI PARTNERI</h1>
      <div className="linija">
        <img src={Linija} alt="linija" />
      </div>
      <div className="partneri-box">
        <PartneriSlider
          partneri={partneriLista}
          settings={partneriSettings}
          width="16em"
          height="9em"
        />
      </div>
    </div>
  );
};

export default Partneri;
