import "./tajmer.css";
import React, { useState, useEffect } from "react";

function getTime(countDownDate) {
  let now = new Date().getTime();

  let distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  return `${days}d | ${hours}h ${minutes}m ${seconds}s`;
}

const Tajmer = () => {
  const [tajm, setTajm] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setTajm(() => getTime(new Date("Jan 5, 2024 15:37:25").getTime()));
    }, 1000);
  });

  return (
    <div>
      <div class="wrapper">
        <label id="dani" for="html">
          dani
        </label>
        <p id="demo">{tajm}</p>
        <label id="sati" for="html">
          sati
        </label>
      </div>
    </div>
  );
};

export default Tajmer;
