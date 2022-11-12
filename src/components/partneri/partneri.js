import React from "react";
import "./partneri.css";
import Partner from "./Partner.js";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import PartneriSlider from "./PartneriSlider.js";

import Slika from "./assets/slika.png";

import Linija from "./assets/linija.png";

import Slike_tima from "../slike_tima/Slike_tima";

import medijski1 from "./assets/medijski/1.jpeg"
import medijski2 from "./assets/medijski/2.png"
import medijski3 from "./assets/medijski/3.jpg"
import medijski4 from "./assets/medijski/4.png"
import medijski5 from "./assets/medijski/5.png"
import medijski6 from "./assets/medijski/6.png"
import medijski7 from "./assets/medijski/7.png"
import medijski8 from "./assets/medijski/8.png"
import medijski9 from "./assets/medijski/9.png"
import medijski10 from "./assets/medijski/10.png"


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

  const medijskiPartneri = [
    {
      partnerSlika: medijski1,
      partnerIme: "Slika",
      pozadina: "#C3B0FF",
      link: "https://brainz.center/",
    },
    {
      partnerSlika: medijski2,
      partnerIme: "Slika",
      pozadina: "#C3B0FF",
      link: "https://casestudyclub.org/en/",
    },
    {
      partnerSlika: medijski3,
      partnerIme: "Slika",
      pozadina: "#C3B0FF",
      link: "https://ehls.rs/",
    },
    {
      partnerSlika: medijski4,
      partnerIme: "Slika",
      pozadina: "#C3B0FF",
      link: "https://www.ja-serbia.org/alumni-klub/",
    },
    {
      partnerSlika: medijski5,
      partnerIme: "Slika",
      pozadina: "#C3B0FF",
      link: "https://www.itnetwork.rs/",
    },
    {
      partnerSlika: medijski6,
      partnerIme: "Slika",
      pozadina: "#C3B0FF",
      link: "https://www.probjave.com/",
    },
    {
      partnerSlika: medijski7,
      partnerIme: "Slika",
      pozadina: "#C3B0FF",
      link: "https://startuj.com/",
    },
    {
      partnerSlika: medijski8,
      partnerIme: "Slika",
      pozadina: "#C3B0FF",
      link: "https://www.softuni.rs/",
    },
    {
      partnerSlika: medijski9,
      partnerIme: "Slika",
      pozadina: "#C3B0FF",
      link: "https://youth.rs/",
    },
    {
      partnerSlika: medijski10,
      partnerIme: "Slika",
      pozadina: "#C3B0FF",
      link: "http://www.znanje.rs/",
    },
  ]

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

        <div id="partneri"></div>
        <div className="pokrovitelj">
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
          partneri={medijskiPartneri}
          settings={partneriSettings}
          width="16em"
          height="9em"
        />
      </div>
    </div>
  );
};

export default Partneri;
