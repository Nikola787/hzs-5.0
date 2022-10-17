import React from "react";
import Ikona1 from "./assets/1.png";
import Ikona2 from "./assets/2.png";
import Ikona3 from "./assets/3.png";
import Ikona4 from "./assets/4.png";
import Ikona5 from "./assets/5.png";
import Ikona6 from "./assets/6.png";
import "./Prijava.css";

import { useState } from "react";
import { useEffect } from "react";

const Clan = (props) => {
  const [imePrezime, setImePrezime] = useState("");
  const [grad, setGrad] = useState("");
  const [srednjaSkola, setSrednjaSkola] = useState("");
  const [razred, setRazred] = useState("");
  const [brojTelefona, setBrojTelefona] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    props.onChange(imePrezime, grad, srednjaSkola, razred, brojTelefona, email);
  }, [imePrezime, grad, srednjaSkola, razred, brojTelefona, email]);


  return (
    <div className="forma">
      <div className="box-clan">
        <div className="input">
          <div className="unos">
            <div className="unos-ikona">
              <img src={Ikona6} alt="Ikona1" height={"50px"} />
            </div>
            <div className="unos-tekst">
              <label className="label-text">
                <input
                  type="text"
                  placeholder="Ime i prezime"
                  onChange={(e) => setImePrezime(e.target.value)}
                  required
                />
              </label>
            </div>
          </div>

          <div className="unos">
            <div className="unos-ikona">
              <img src={Ikona2} alt="Ikona1" height={"50px"} />
            </div>
            <div className="unos-tekst">
              <label className="label-text">
                <input
                  type="text"
                  placeholder="Grad"
                  onChange={(e) => setGrad(e.target.value)}
                  required
                />
              </label>
            </div>
          </div>

          <div className="unos">
            <div className="unos-ikona">
              <img src={Ikona1} alt="Ikona1" height={"50px"} />
            </div>
            <div className="unos-tekst">
              <label className="label-text">
                <input
                  type="text"
                  placeholder="Srednja škola"
                  onChange={(e) => setSrednjaSkola(e.target.value)}
                  required
                />
              </label>
            </div>
          </div>

          <div className="unos">
            <div className="unos-ikona">
              <img src={Ikona5} alt="Ikona1" height={"50px"} />
            </div>
            <div className="unos-tekst">
              <label className="label-text">
                <input
                  type="text"
                  placeholder="Razred"
                  onChange={(e) => setRazred(e.target.value)}
                  required
                />
              </label>
            </div>
          </div>
          <div className="unos">
            <div className="unos-ikona">
              <img src={Ikona4} alt="Ikona1" height={"50px"} />
            </div>
            <div className="unos-tekst">
              <label className="label-text">
                <input
                  type="text"
                  placeholder="Broj telefona"
                  onChange={(e) => setBrojTelefona(e.target.value)}
                  required
                />
              </label>
            </div>
          </div>
          <div className="unos">
            <div className="unos-ikona">
              <img src={Ikona3} alt="Ikona1" height={"50px"} />
            </div>
            <div className="unos-tekst">
              <label className="label-text">
                <input
                  type="text"
                  placeholder="E-mail"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clan;
