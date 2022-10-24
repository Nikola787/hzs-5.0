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
            Hakaton za srednjoškolce je jedinstvena prilika da se susretneš sa
            IT-jem i programiranjem na drugačiji način nego na časovima u školi.
            Bićeš iznenađen šta sve možeš da postigneš za samo 24 sata i koliki
            napredak možeš da ostvariš zajedno sa svojim timom. Zato ne čekaj,
            već popuni formu na sajtu i postani deo Hakatona za srednjoškolce
            4.0!
          </p>
        </div>
      </div>
      <button className="dugme-prijava">PRIJAVI SE</button>
    </div>
  );
};

export default PrijavaT;
