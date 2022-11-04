import React from "react";
import Ikona1 from "./assets/1.png";
import Ikona2 from "./assets/2.png";
import Ikona3 from "./assets/3.png";
import Ikona4 from "./assets/4.png";
import Ikona5 from "./assets/5.png";
import Ikona6 from "./assets/6.png";
import "./prijava.css";

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

  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

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
                  style={{
                    borderBottom:
                      imePrezime === "" && props.error
                        ? "2px solid red"
                        : "2px solid #c3b0ff",
                  }}
                  required
                />
              </label>
            </div>
          </div>

          <div className="unos">
            <div className="unos-ikona">
              <img src={Ikona2} alt="Ikona1" />
            </div>
            <div className="unos-tekst">
              <label className="label-text">
                <input
                  type="text"
                  placeholder="Grad"
                  onChange={(e) => setGrad(e.target.value)}
                  style={{
                    borderBottom:
                      grad === "" && props.error
                        ? "2px solid red"
                        : "2px solid #c3b0ff",
                  }}
                  required
                />
              </label>
            </div>
          </div>

          <div className="unos">
            <div className="unos-ikona">
              <img src={Ikona1} alt="Ikona1" />
            </div>
            <div className="unos-tekst">
              <label className="label-text">
                <input
                  type="text"
                  placeholder="Srednja škola"
                  onChange={(e) => setSrednjaSkola(e.target.value)}
                  style={{
                    borderBottom:
                      srednjaSkola === "" && props.error
                        ? "2px solid red"
                        : "2px solid #c3b0ff",
                  }}
                  required
                />
              </label>
            </div>
          </div>

          <div className="unos">
            <div className="unos-ikona">
              <img src={Ikona5} alt="Ikona1" />
            </div>
            <div className="unos-tekst">
              <label className="label-text">
                <input
                  type="text"
                  placeholder="Razred"
                  onChange={(e) => setRazred(e.target.value)}
                  style={{
                    borderBottom:
                      razred === "" && props.error
                        ? "2px solid red"
                        : "2px solid #c3b0ff",
                  }}
                  required
                />
              </label>
            </div>
          </div>
          <div className="unos">
            <div className="unos-ikona">
              <img src={Ikona4} alt="Ikona1" />
            </div>
            <div className="unos-tekst">
              <label className="label-text">
                <input
                  type="text"
                  placeholder="Broj telefona"
                  onChange={(e) => setBrojTelefona(e.target.value)}
                  style={{
                    borderBottom:
                      brojTelefona === "" && props.error
                        ? "2px solid red"
                        : "2px solid #c3b0ff",
                  }}
                  required
                />
              </label>
            </div>
          </div>
          <div className="unos">
            <div className="unos-ikona">
              <img src={Ikona3} alt="Ikona1" />
            </div>
            <div className="unos-tekst">
              <label className="label-text">
                <input
                  type="text"
                  placeholder="Imejl"
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    borderBottom:
                      props.error && !validateEmail(email)
                        ? "2px solid red"
                        : "2px solid #c3b0ff",
                  }}
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
