import React from "react";
import "./gradijent.css";

const gradijent = () => {
  
  function changeCss() {
    var navElement = document.querySelector(".hzs-tekst");
    this.scrollY > 2300
      ? (navElement.style.opacity = 0.0)
      : (navElement.style.opacity = 1);
  }
  window.addEventListener("scroll", changeCss, false);

  return (
    <div className="pozadina">
      <div className="hzs-tekst">
        <h1>HAKATON ZA SREDNJOSKOLCE</h1>
      </div>
    </div>
  );
};

export default gradijent;
