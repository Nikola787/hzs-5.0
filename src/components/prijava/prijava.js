import React from "react";
import "./prijava.css";

import Clan from "./Clan.js";

import { useState } from "react";
import { useEffect } from "react";

import Pravilnik from "../PravilnikHZS.pdf";

import Loader from "../../components/loader/Loader.js";

import { useNavigate } from "react-router";

const Prijava = () => {
  const [clan1, setClan1] = useState({});
  const [clan2, setClan2] = useState({});
  const [clan3, setClan3] = useState({});
  const [clan4, setClan4] = useState({});

  const [pitanje1, setPitanje1] = useState("");
  const [pitanje2, setPitanje2] = useState("");
  const [pitanje3, setPitanje3] = useState("");
  const [pitanje4, setPitanje4] = useState("");
  const [pitanje5, setPitanje5] = useState("");
  const [pitanje6, setPitanje6] = useState("");
  const [pitanje7, setPitanje7] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [error, setIsError] = useState(false);
  const [error4, setIsError4] = useState(false);

  const navigate = useNavigate();

  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

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
    // console.log("Post zahtev za prijava");
    // console.log(prijava);

    try {
      setIsLoading(true);

      const response = await fetch("https://hzs5.herokuapp.com/prijave/api", {
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
    } finally {
      setIsLoading(false);
    }
  };

  const posaljiPrijavu = async () => {
    return;
    if (
      clan1.imePrezime === "" ||
      clan2.imePrezime === "" ||
      clan3.imePrezime === "" ||
      clan1.grad === "" ||
      clan2.grad === "" ||
      clan3.grad === "" ||
      clan1.srednjaSkola === "" ||
      clan2.srednjaSkola === "" ||
      clan3.srednjaSkola === "" ||
      clan1.razred === "" ||
      clan2.razred === "" ||
      clan3.razred === "" ||
      clan1.brojTelefona === "" ||
      clan2.brojTelefona === "" ||
      clan3.brojTelefona === "" ||
      clan1.email === "" ||
      clan2.email === "" ||
      clan3.email === "" ||
      pitanje1 === "" ||
      pitanje2 === "" ||
      pitanje3 === "" ||
      pitanje4 === "" ||
      pitanje5 === "" ||
      pitanje6 === "" ||
      pitanje7 === false
    ) {
      // if (
      //   clan4.imePrezime !== "" &&
      //   clan4.grad === "" &&
      //   clan4.srednjaSkola === "" &&
      //   clan4.razred === "" &&
      //   clan4.brojTelefona === "" &&
      //   clan4.email === ""
      // ) {
      //   // setIsError4(true);
      //   console.log('4true')
      // }
      // if (
      //   clan4.imePrezime === "" &&
      //   clan4.grad !== "" &&
      //   clan4.srednjaSkola === "" &&
      //   clan4.razred === "" &&
      //   clan4.brojTelefona === "" &&
      //   clan4.email === ""
      // ) {
      //   // setIsError4(true);
      //   console.log('4true')

      // }
      // if (
      //   clan4.imePrezime === "" &&
      //   clan4.grad === "" &&
      //   clan4.srednjaSkola !== "" &&
      //   clan4.razred === "" &&
      //   clan4.brojTelefona === "" &&
      //   clan4.email === ""
      // ) {
      //   // setIsError4(true);
      //   console.log('4true')

      // }
      // if (
      //   clan4.imePrezime === "" ||
      //   clan4.grad === "" ||
      //   clan4.srednjaSkola === "" ||
      //   clan4.razred !== "" ||
      //   clan4.brojTelefona === "" ||
      //   clan4.email === ""
      // ) {
      //   // setIsError4(true);
      //   console.log('4true')

      // }
      // if (
      //   clan4.imePrezime === "" ||
      //   clan4.grad === "" ||
      //   clan4.srednjaSkola === "" ||
      //   clan4.razred === "" ||
      //   clan4.brojTelefona !== "" ||
      //   clan4.email === ""
      // ) {
      //   // setIsError4(true);
      //   console.log('4true')

      // }
      // if (
      //   clan4.imePrezime === "" ||
      //   clan4.grad === "" ||
      //   clan4.srednjaSkola === "" ||
      //   clan4.razred === "" ||
      //   clan4.brojTelefona === "" ||
      //   clan4.email !== ""
      // ) {
      //   // setIsError4(true);
      //   console.log('4true')

      // }
      setIsError(true);
      // console.log(clan4);
      // console.log("prvi deo niije dobar");
      return;
    }

    let prijava = {
      pitanje1: pitanje1,
      pitanje2: pitanje2,
      pitanje3: pitanje3,
      pitanje4: pitanje4,
      pitanje5: pitanje5,
      pitanje6: pitanje6,
      pitanje7: pitanje7,
      clanovi: [clan1, clan2, clan3, clan4],
    };

    // console.log(prijava);
    await postPrijava(prijava);
    navigate("/");
  };

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="ceo-fo">
          <div className="naslov">
            <div className="naslov-tekst">
              <h1>FORMA ZA PRIJAVU</h1>
            </div>
          </div>

          <div className="clan">Član 1</div>
          <Clan onChange={onClan1} error={error} />
          <div className="clan">Član 2</div>
          <Clan onChange={onClan2} error={error} />
          <div className="clan">Član 3</div>
          <Clan onChange={onClan3} error={error} />
          <div className="clan">Član 4 (opciono)</div>
          <Clan onChange={onClan4} error={error4} />

          <div className="box-pitanja">
            <div
              className="unos-tekst-it"
              style={{
                color: pitanje1 === "" && error ? "red" : "#FFFFFF",
              }}
            >
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

            <div
              className="pitanje"
              style={{
                color: pitanje2 === "" && error ? "red" : "#FFFFFF",
              }}
            >
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

            <div
              className="pitanje"
              style={{
                color: pitanje3 === "" && error ? "red" : "#FFFFFF",
              }}
            >
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

            <div
              className="pitanje"
              style={{
                color: pitanje4 === "" && error ? "red" : "#FFFFFF",
              }}
            >
              Zašto baš vaš tim? (na koji način se razlikujete od drugih, koje
              su vaše vrline, prednosti itd...)
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

            <div
              className="pitanje"
              style={{
                color: pitanje5 === "" && error ? "red" : "#FFFFFF",
              }}
            >
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

            <div
              className="pitanje"
              style={{
                color: pitanje6 === "" && error ? "red" : "#FFFFFF",
              }}
            >
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

            <label
              className="checkbox-p"
              style={{
                color: pitanje7 === false && error ? "red" : "#FFFFFF",
              }}
            >
              Upoznati smo sa&nbsp;
              <a href={Pravilnik} target="_blank" rel="noopener noreferrer">
                pravilima
              </a>{" "}
              takmičenja i saglasni smo sa istim.
              <input
                type="checkbox"
                required
                onChange={(e) => setPitanje7(e.target.checked)}
              />
              <span className="checkmark-p"></span>
            </label>
          </div>

          <button type="submit" className="dugme" onClick={posaljiPrijavu}>
            Pošalji prijavu
          </button>
        </div>
      )}
    </div>
  );
};

export default Prijava;
