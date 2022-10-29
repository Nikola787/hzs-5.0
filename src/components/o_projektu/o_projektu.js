import React from "react";
import "./o_projektu.css";
import img1 from "./Group.png";
import img2 from "./Group(1).png";
import img3 from "./Group(2).png";

import Pravilnik from "../pravila.pdf";

import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';

const o_projektu = () => {
  return (
    <div className="ceo">
      <div className="prostor"></div>
      <div className="o-projektu">
        <div className="levi-deo">
          <div className="naslov-o">
            <div className="naslov-tekst-o">
              <h1>O TAKMIČENJU</h1>
            </div>
          </div>
          <div className="levi-prozor-box">
            <p className="centralni_tekst">
              <b>Hakaton za srednjoškolce</b> je programersko takmičenje koje
              već petu godinu zaredom organizuje Udruženje studenata informatike
              FONIS na Fakultetu organizacionih nauka. Namenjeno je svim
              srednjoškolcima na teritoriji Republike Srbije.
              <br />
              <br />
              <b>Tročlani ili četvoročlani timovi</b> srednjoškolaca imaju{" "}
              <b>24 sata</b> na raspolaganju da kreiraju softversko rešenje na
              zadatu temu, koju saznaju na sam dan takmičenja. Učesnici će tokom
              hakatona imati podršku <b>mentora</b>, koji će biti tu da razreše
              sve njihove nedoumice i usmere timove.
              <br />
              <br />
              Odluku o tome ko su 3 najuspešnija tima, koja ujedno očekuju i 
              <b> vredne nagrade</b>, donosi <b>stručni žiri</b> nakon što svi
              timovi prezentuju svoja rešenja.
              <br />
              <br />
              Pre samog takmičenja, organizuju se i <b>radionice</b> koje
              pokrivaju front-end, back-end, git i veštine prezentovanja i čine
              sastavni deo selekcije takmičara. Cilj ovih radionica je da se
              srednjoškolci bolje pripreme za samo takmičenje i da prošire svoja
              znanja iz ovih oblasti.
              <br /> <br />
              Za više informacija pročitajte &nbsp;
              <a href={Pravilnik} target="_blank" rel="noopener noreferrer">
                pravilnik
              </a>
              .
            </p>
          </div>
          <button className="dugme-prijava-o">PRIJAVI SE</button>
        </div>
        <div className="desni-deo"></div>
        <div className="statistika-box">
          <div className="statistika-jedan-box">
            <img src={img1} alt="" className="slika-stat1" />
            <div className="tekst-stat1">
              <div className="broj1">260+</div>
              <div className="tekstic1">Prijavljenih timova</div>
            </div>
          </div>
          <div className="statistika-dva-box">
            <img src={img2} alt="" className="slika-stat2" />
            <div className="tekst-stat1">
              <div className="broj1">25+</div>
              <div className="tekstic1">Različitih gradova</div>
            </div>
          </div>
          <div className="statistika-tri-box">
            <img src={img3} alt="" className="slika-stat3" />
            <div className="tekst-stat1">
              <div className="broj1">999+</div>
              <div className="tekstic1">Takmičara</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default o_projektu;
