import React from "react";
import "./radionice.css";
import slikaPredavaca from "../../images/5-3.jpg";

const radionice = () => {
  return (
    <div className="radionice-wrapper">
      <div className="radionica1-wrapper">
        <div className="radionica-text-left">
          <div className="rectangle" />
          <h1>001</h1>
        </div>
        <img
          className="slika_desna"
          src={slikaPredavaca}
          alt="Slika predavaca"
        />
      </div>
      <div className="radionica2-wrapper"></div>
    </div>
  );
};

export default radionice;
