import React from "react";
import "./iskustva.css";
import Slika from "./slika.png";

import OP from "../o_projektu/o_projektu.js";

const iskustva = () => {
  return (
    <div className="dveSekcije">
      {/* <OP /> */}
      <div className="iskustva-d">
        <div className="naslov-i">
          <div className="naslov-tekst-i">
            <h1>ISKUSTVA</h1>
          </div>
        </div>
        <div className="iskustva-deo"></div>
      </div>
    </div>
  );
};

export default iskustva;
