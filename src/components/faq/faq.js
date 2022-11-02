import React from "react";
import { useState } from "react";
import "./faq.css";

const Faq = () => {
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  return (
    <div className="ceo-f" id="faq">
      {/* <div className="naslov-f">
        <div className="rectangle-f"></div>
        <div className="tekst_naslov-f">ČESTO POSTAVLJANA PITANJA</div>
      </div> */}
      <div className="naslov-f">
        <div className="naslov-tekst-f">
          <h1>ČESTO POSTAVLJANA PITANJA</h1>
        </div>
      </div>
      <div className="wrapper-f">
        <div className="accordion-f">
          {dataF.map((item, i) => (
            <div className="item-f">
              <div className="title-f" onClick={() => toggle(i)}>
                <h2 style={{ color: selected === i ? "#00ffa3" : "#FFFFFF", fontWeight: selected === i ? "bold" : "400" }}>
                  {item.questionF}
                </h2>
                <span className="span-f">{selected === i ? "-" : "+"}</span>
              </div>
              <div className={selected === i ? "content show" : "content"}>
                {item.answerF}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
const dataF = [
  {
    questionF: "Ko sve može da učestvuje na Hakatonu?",
    answerF:
      "Na takmičenju mogu da učestuju svi učenici srednjih škola Republike Srbije. Timovi trebaju da se sastoje od 3 ili 4 člana i učešće je besplatno. Prijava se može poslati putem forme.",
  },
  {
    questionF: "Da li postoje neki kriterijumi za sastavljanje timova?",
    answerF:
      "Pored toga da učesnici treba da budu učenici srednjih škola ne postoje dodatni kriterijumi. Jedan tim može da se sastoji od učenika iz različitih škola, razreda i smerova.",
  },
  {
    questionF: "Kako izgleda proces prijave za učešće na Hakatonu?",
    answerF:
      "Prvo se vrši selekcija na osnovu prijave poslate putem sajta i izabrani rade online test koji proverava znanje iz oblasti Informacionih tehnologija. Na osnovu uspeha u ova 2 kruga selekcije prijavljeni timovi dobijaju priliku da učestvuju na radionicama. Radionice pripremaju učesnike za domaći zadatak, treći krug selekcije, koji će presuditi da li se tim takmiči na hakatonu.",
  },
  {
    questionF: "Da li takmičari dobijaju mentora za rad na takmičenju?",
    answerF:
      "Svakom timu je dodeljen stručan mentor koji će ih usmeravati i pomagati im u toku izrade projekta kako bi iskoristili pun potencijal svoje ideje.",
  },
  {
    questionF: "Da li je zabranjeno korišćenje određene tehnologije za vreme Hakatona?",
    answerF: "Takmičari imaju prava da koriste Internet, tehnologiju po želji, kao i bilo koju dodatnu literaturu za koju smatraju da im može pomoći i olakšati rad na takmičenju."
  },
  {
    questionF: "Kako se određuje pobednik?",
    answerF: "Na kraju takmičenja svaki tim prezentuje 10 minuta svoju ideju, posle čega članove istog očekuju pitanja stručnog žirija. Na osnovu svih prezentacija i odgovora žiri proglašava pobednika."
  }
];

export default Faq;
