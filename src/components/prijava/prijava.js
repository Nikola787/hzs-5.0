import React from "react";
import "./Prijava.css";

import Clan from "./Clan.js"

import { useState } from "react";

const Prijava = () => {

  const[imePrezime1, setImePrezime1] = useState();
  const[grad1, setGrad1] = useState();
  const[srednjaSkola1, setSrednjaSkola1] = useState();
  const[razred1, setRazred1] = useState();
  const[brojTelefona1, setBrojTelefona1] = useState();
  const[email1, setEmail1] = useState();

  const[imePrezime2, setImePrezime22] = useState();
  const[grad2, setGrad2] = useState();
  const[srednjaSkola2, setSrednjaSkola2] = useState();
  const[razred2, setRazred2] = useState();
  const[brojTelefona2, setBrojTelefona2] = useState();
  const[email2, setEmail2] = useState();

  const[imePrezime3, setImePrezime33] = useState();
  const[grad3, setGrad3] = useState();
  const[srednjaSkola3, setSrednjaSkola3] = useState();
  const[razred3, setRazred3] = useState();
  const[brojTelefona3, setBrojTelefona3] = useState();
  const[email3, setEmail3] = useState();

  const[imePrezime4, setImePrezime4] = useState();
  const[grad4, setGrad4] = useState();
  const[srednjaSkola4, setSrednjaSkola4] = useState();
  const[razred4, setRazred4] = useState();
  const[brojTelefona4, setBrojTelefona4] = useState();
  const[email4, setEmail4] = useState();
  
  const [pitanje1, setPitanje1] = useState();
  const [pitanje2, setPitanje2] = useState();
  const [pitanje3, setPitanje3] = useState();
  const [pitanje4, setPitanje4] = useState();
  const [pitanje5, setPitanje5] = useState();
  const [pitanje6, setPitanje6] = useState();
  const [pitanje7, setPitanje7] = useState();

  return (
    <div>
      <div className="ceo">
        <div className="naslov">
          <div className="naslov-tekst">
            <h1>FORMA ZA PRIJAVU</h1>
          </div>
        </div>
        
        <Clan naslov={"Član 1"}/>
        <Clan naslov={"Član 2"}/>
        <Clan naslov={"Član 3"}/>
        <Clan naslov={"Član 4 (opcionalno)"}/>

        <div className="box-pitanja">
          <div className="pitanje">
            Kako ste saznali za Hakaton za srednjoškolce?
          </div>
          <div className="linija"></div>

          <div className="radio-box">
            <label className="radio-btn">
              <input type="radio" name="mreze" />
              <span className="checkmark" />
            </label>
            <div className="odgovor">Preko društvenih mreža</div>
          </div>

          <div className="radio-box">
            <label className="radio-btn">
              <input type="radio" name="mreze" />
              <span className="checkmark" />
            </label>
            <div className="odgovor">Preko društvenih mreža</div>
          </div>

          <div className="radio-box">
            <label className="radio-btn">
              <input type="radio" name="mreze" />
              <span className="checkmark" />
            </label>
            <div className="odgovor">Preko društvenih mreža</div>
          </div>

          <div className="radio-box">
            <label className="radio-btn">
              <input type="radio" name="mreze" />
              <span className="checkmark" />
            </label>
            <div className="odgovor">Preko društvenih mreža</div>
          </div>

          <div className="radio-box">
            <label className="radio-btn">
              <input type="radio" name="mreze" />
              <span className="checkmark" />
            </label>
            <div className="odgovor">Preko društvenih mreža</div>
          </div>

          <div className="pitanje">
            Da li ste nekada učestvovali na takmičenjima u programiranju?
            Ukoliko jeste, opišite vaša iskustva.
          </div>
          <div className="linija"></div>
          <div className="otvoreno-pitanje">
            <label className="otvoreno-text">
              <textarea type="text" placeholder="Primer teksta koji se unosi" />
            </label>
          </div>

          <div className="pitanje">
            Da li ste nekada učestvovali na takmičenjima u programiranju?
            Ukoliko jeste, opišite vaša iskustva.
          </div>
          <div className="linija"></div>
          <div className="otvoreno-pitanje">
            <label className="otvoreno-text">
              <textarea type="text" placeholder="Primer teksta koji se unosi" />
            </label>
          </div>

          <div className="pitanje">Zašto baš vaš tim?</div>
          <div className="linija"></div>
          <div className="otvoreno-pitanje">
            <label className="otvoreno-text">
              <textarea type="text" placeholder="Primer teksta koji se unosi" />
            </label>
          </div>

          <div className="pitanje">
            Šta biste radili da u toku takmičenja jedan član vašeg tima želi da
            odustane?
          </div>
          <div className="linija"></div>
          <div className="otvoreno-pitanje">
            <label className="otvoreno-text">
              <textarea type="text" placeholder="Primer teksta koji se unosi" />
            </label>
          </div>

          <div className="pitanje">
            Šta je najveća slabost vašeg tima i šta činite da je otklonite?
          </div>
          <div className="linija"></div>
          <div className="otvoreno-pitanje">
            <label className="otvoreno-text">
              <textarea type="text" placeholder="Primer teksta koji se unosi" />
            </label>
          </div>

          <div className="pitanje">
            Koji je glavni razlog vašeg prijavljivanja za HZS?
          </div>
          <div className="linija"></div>

          <div className="radio-box">
            <label className="radio-btn">
              <input type="radio" name="mreze" />
              <span className="checkmark" />
            </label>
            <div className="odgovor">Preko društvenih mreža</div>
          </div>

          <div className="radio-box">
            <label className="radio-btn">
              <input type="radio" name="mreze" />
              <span className="checkmark" />
            </label>
            <div className="odgovor">Preko društvenih mreža</div>
          </div>

          <div className="radio-box">
            <label className="radio-btn">
              <input type="radio" name="mreze" />
              <span className="checkmark" />
            </label>
            <div className="odgovor">Preko društvenih mreža</div>
          </div>


        </div>

        <div className="dugme">
          <button>Pošalji prijavu</button>
        </div>
      </div>
    </div>
  );
};

export default Prijava;
