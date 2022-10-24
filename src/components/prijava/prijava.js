import React from "react";
import "./prijava.css";

import Clan from "./Clan.js";

import { useState } from "react";
import { useEffect } from "react";

const Prijava = () => {
  const [clan1, setClan1] = useState({});
  const [clan2, setClan2] = useState({});
  const [clan3, setClan3] = useState({});
  const [clan4, setClan4] = useState({});

  const [pitanje1, setPitanje1] = useState();
  const [pitanje2, setPitanje2] = useState();
  const [pitanje3, setPitanje3] = useState();
  const [pitanje4, setPitanje4] = useState();
  const [pitanje5, setPitanje5] = useState();
  const [pitanje6, setPitanje6] = useState();
  const [pitanje7, setPitanje7] = useState();

  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log(pitanje1);
    console.log(pitanje2);
    console.log(pitanje3);
    console.log(pitanje4);
    console.log(pitanje5);
    console.log(pitanje6);
    console.log(pitanje7);
  }, [clan1, clan2, clan3, clan4]);

  const openModal = (poruka) => {
    setModalMessage(poruka);
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalMessage("");
    setModalOpen(false);
  };

  const simulateWaiting = (duration) => {
    return new Promise((resolve, reject) => {
      if (duration < 4000) {
        setTimeout(() => {
          resolve();
        }, duration);
      } else {
        setTimeout(() => {
          reject(new Error("Preveliko cekanje"));
        }, duration);
      }
    });
  };

  const onClan1 = (
    imePrezime,
    grad,
    srednjaSkola,
    razred,
    brojTelefona,
    email
  ) => {
    const noviClan = {
      imePrezime,
      grad,
      srednjaSkola,
      razred,
      brojTelefona,
      email,
    };
    setClan1(noviClan);
  };

  const onClan2 = (
    imePrezime,
    grad,
    srednjaSkola,
    razred,
    brojTelefona,
    email
  ) => {
    const noviClan = {
      imePrezime,
      grad,
      srednjaSkola,
      razred,
      brojTelefona,
      email,
    };
    setClan2(noviClan);
  };

  const onClan3 = (
    imePrezime,
    grad,
    srednjaSkola,
    razred,
    brojTelefona,
    email
  ) => {
    const noviClan = {
      imePrezime,
      grad,
      srednjaSkola,
      razred,
      brojTelefona,
      email,
    };
    setClan3(noviClan);
  };

  const onClan4 = (
    imePrezime,
    grad,
    srednjaSkola,
    razred,
    brojTelefona,
    email
  ) => {
    const noviClan = {
      imePrezime,
      grad,
      srednjaSkola,
      razred,
      brojTelefona,
      email,
    };
    setClan4(noviClan);
  };

  const postPrijava = async (prijava) => {
    console.log("Post zahtev za prijava");
    console.log(prijava);

    try {
      const response = await fetch("heroku link ...", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(prijava),
      });
      await simulateWaiting(3000);
      const data = await response.json();
      if (data.success) {
        openModal("Uspesno poslata prijava");
      } else {
        openModal(data.msg);
      }
    } catch (e) {
      openModal(e.message);
    }
  };

  const posaljiPrijavu = () => {
    let prijava = {
      pitanje1: pitanje1,
      pitanje2: pitanje2,
      pitanje3: pitanje3,
      pitanje4: pitanje4,
      pitanje5: pitanje5,
      pitanje6: pitanje6,
      clanovi: [clan1, clan2, clan3, clan4],
    };

    console.log(prijava);
    postPrijava(prijava);
  };

  return (
    <div>
      <div className="ceo-f">
        <div className="naslov">
          <div className="naslov-tekst">
            <h1>FORMA ZA PRIJAVU</h1>
          </div>
        </div>

        <div className="clan">Član 1</div>
        <Clan onChange={onClan1} />
        <div className="clan">Član 2</div>
        <Clan onChange={onClan2} />
        <div className="clan">Član 3</div>
        <Clan onChange={onClan3} />
        <div className="clan">Član 4 (opciono)</div>
        <Clan onChange={onClan4} />

        <div className="box-pitanja">
          <div className="unos-tekst-it">
            Ime tima:
            <label className="label-text-it">
              <input
                type="text"
                placeholder="Green day"
                required
                onChange={(e) => setPitanje1(e.target.value)}
              />
            </label>
          </div>
          <hr className="linija-p" />

          <div className="pitanje">
            Kako ste saznali za Hakaton za srednjoškolce?
          </div>
          <hr className="linija-p" />

          <div className="radio-box">
            <label className="radio-btn">
              Preko društvenih mreža
              <input
                type="radio"
                name="mreze"
                onChange={(e) => setPitanje2("Preko društvenih mreža")}
              />
              <span className="checkmark" />
            </label>

            <label className="radio-btn">
              Preko prijatelja
              <input
                type="radio"
                name="mreze"
                onChange={(e) => setPitanje2("Preko prijatelja")}
              />
              <span className="checkmark" />
            </label>

            <label className="radio-btn">
              Preko profesora
              <input
                type="radio"
                name="mreze"
                onChange={(e) => setPitanje2("Preko profesora")}
              />
              <span className="checkmark" />
            </label>

            <label className="radio-btn">
              Preko televizije
              <input
                type="radio"
                name="mreze"
                onChange={(e) => setPitanje2("Preko televizije")}
              />
              <span className="checkmark" />
            </label>

            <label className="radio-btn">
              Preko portala
              <input
                type="radio"
                name="mreze"
                onChange={(e) => setPitanje2("Preko portala")}
              />
              <span className="checkmark" />
            </label>
          </div>

          <div className="pitanje">
            Da li ste nekada učestvovali na takmičenjima u programiranju?
            Ukoliko jeste, opišite vaša iskustva.
          </div>
          <hr className="linija-p"></hr>
          <div className="otvoreno-pitanje">
            <label className="otvoreno-text">
              <textarea
                type="text"
                placeholder="Napišite odgovor ovde"
                onChange={(e) => setPitanje3(e.target.value)}
              />
            </label>
          </div>

          <div className="pitanje">
            Zašto baš vaš tim? (na koji način se razlikujete od drugih, koje su
            vaše vrline, prednosti itd...)
          </div>
          <hr className="linija-p"></hr>
          <div className="otvoreno-pitanje">
            <label className="otvoreno-text">
              <textarea
                type="text"
                placeholder="Napišite odgovor ovde"
                onChange={(e) => setPitanje4(e.target.value)}
              />
            </label>
          </div>

          <div className="pitanje">
            Koja oblast u IT svetu vas najviše interesuje i zbog čega?
          </div>
          <hr className="linija-p"></hr>
          <div className="otvoreno-pitanje">
            <label className="otvoreno-text">
              <textarea
                type="text"
                placeholder="Napišite odgovor ovde"
                onChange={(e) => setPitanje5(e.target.value)}
              />
            </label>
          </div>

          <div className="pitanje">
            Šta je najveća slabost vašeg tima i šta činite da je otklonite?
          </div>
          <hr className="linija-p"></hr>
          <div className="otvoreno-pitanje">
            <label className="otvoreno-text">
              <textarea
                type="text"
                placeholder="Napišite odgovor ovde"
                onChange={(e) => setPitanje6(e.target.value)}
              />
            </label>
          </div>

          <label class="checkbox-p">
            Saglasni smo da smo pročitali i da smo upoznati sa pravilnikom
            takmičenja
            <input
              type="checkbox"
              required
              onChange={(e) => setPitanje7("1")}
            />
            <span className="checkmark-p"></span>
          </label>
        </div>

        <button type="submit" className="dugmee" onClick={posaljiPrijavu}>
          Pošalji prijavu
        </button>
      </div>
    </div>
  );
};

export default Prijava;
