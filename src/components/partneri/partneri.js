import React from "react";
import "./partneri.css";
import Partner from "./Partner.js";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import PartneriSlider from "./PartneriSlider.js";

import Slika from "./assets/slika.png";

import Linija from "./assets/linija.png";

import Slike_tima from "../slike_tima/Slike_tima";

import medijski1 from "./assets/medijski/1.png";
import medijski2 from "./assets/medijski/2.png";
import medijski3 from "./assets/medijski/3.png";
import medijski4 from "./assets/medijski/4.png";
import medijski5 from "./assets/medijski/5.png";
import medijski6 from "./assets/medijski/6.png";
import medijski7 from "./assets/medijski/7.png";
import medijski8 from "./assets/medijski/8.png";
import medijski9 from "./assets/medijski/9.png";
import medijski10 from "./assets/medijski/10.png";
import medijski11 from "./assets/medijski/11.png";
import medijski12 from "./assets/medijski/12.png";
import medijski13 from "./assets/medijski/13.png";
import medijski14 from "./assets/medijski/14.png";
import medijski15 from "./assets/medijski/15.jpeg";

import robni1 from "./assets/robni/1.png";
import robni2 from "./assets/robni/2.png";

import Pokrovitelj from "./assets/pokrovitelj.png"

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
      partnerIme: "connecting",
      pozadina: "#C3B0FF",
      link: "https://www.instagram.com/connecting.org.rs/",
    },
    {
      partnerSlika: medijski2,
      partnerIme: "case study club",
      pozadina: "#C3B0FF",
      link: "https://casestudyclub.org/en/",
    },
    {
      partnerSlika: medijski3,
      partnerIme: "ehls",
      pozadina: "#C3B0FF",
      link: "https://ehls.rs/",
    },
    {
      partnerSlika: medijski4,
      partnerIme: "ja alumni serbia",
      pozadina: "#000000",
      link: "https://www.ja-serbia.org/alumni-klub/",
    },
    {
      partnerSlika: medijski5,
      partnerIme: "it network",
      pozadina: "#C3B0FF",
      link: "https://www.itnetwork.rs/",
    },
    {
      partnerSlika: medijski6,
      partnerIme: "nova s",
      pozadina: "#C3B0FF",
      link: "https://nova.rs/",
    },
    // {
    //   partnerSlika: medijski7,
    //   partnerIme: "Slika",
    //   pozadina: "#C3B0FF",
    //   link: "",
    // },
    {
      partnerSlika: medijski8,
      partnerIme: "n1",
      pozadina: "#C3B0FF",
      link: "https://rs.n1info.com/",
    },
    {
      partnerSlika: medijski9,
      partnerIme: "pr objave",
      pozadina: "#C3B0FF",
      link: "https://www.probjave.com/",
    },
    {
      partnerSlika: medijski10,
      partnerIme: "softuni",
      pozadina: "#C3B0FF",
      link: "https://www.softuni.rs/",
    },
    {
      partnerSlika: medijski11,
      partnerIme: "youth.rs",
      pozadina: "#C3B0FF",
      link: "https://youth.rs/",
    },
    {
      partnerSlika: medijski12,
      partnerIme: "znanje.rs",
      pozadina: "#C3B0FF",
      link: "http://www.znanje.rs/",
    },
    {
      partnerSlika: medijski13,
      partnerIme: "kzm bajina basta",
      pozadina: "#C3B0FF",
      link: "https://www.instagram.com/kzm_bb/",
    },
    {
      partnerSlika: medijski14,
      partnerIme: "startuj infostud",
      pozadina: "#C3B0FF",
      link: "https://startuj.com/",
    },
    {
      partnerSlika: medijski15,
      partnerIme: "tv brainz",
      pozadina: "#C3B0FF",
      link: "https://brainz.center/",
    },
  ];

  const robniPartneri = [
    {
      partnerSlika: robni1,
      partnerIme: "upisi fon",
      pozadina: "#C3B0FF",
      link: "https://upisifon.rs/",
    },
    {
      partnerSlika: robni2,
      partnerIme: "devhub",
      pozadina: "#000000",
      link: "https://www.instagram.com/dev_hub_/",
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
            partnerSlika={Pokrovitelj}
            partnerIme="Partner"
            width="16em"
            height="9em"
            pozadina="#C3B0FF"
            link="https://www.telesign.com/"
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
      <h1>ROBNI PARTNERI</h1>
      <div className="linija">
        <img src={Linija} alt="linija" />
      </div>
      <div className="partneri-box">
        <PartneriSlider
          partneri={robniPartneri}
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
