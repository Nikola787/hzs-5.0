import React from "react";
import "./prijavaT.css";

const PrijavaT = () => {
  return (
    <div className="p-ceo">
      <div className="prijavaT-ceo">
        <div className="prijavaT-box">
          <h1>Čekamo tvoju prijavu!</h1>
          <br />
          <br />
          <p>
            Hakaton za srednjoškolce je savršena prilika da se upustiš u svet
            programiranja i IT-ja, kao i da usavršiš svoje prezentacione
            veštine. Pored toga što ćeš dobiti znanje i bogato iskustvo,
            upoznaćeš ljude sa sličnim interesovanjima i ciljevima. Zato oformi
            tim i upusti se u nezaboravnu, dvadesetčetvoročasovnu pustolovinu.
            Nestrpljivo očekujemo tvoju prijavu!
          </p>
        </div>
      </div>
      <button className="dugme-prijava">PRIJAVI SE</button>
    </div>
  );
};

export default PrijavaT;
