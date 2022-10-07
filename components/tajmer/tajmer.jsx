import React from "react";
import { motion } from "framer-motion";
import "./tajmer.css";

const tajmer = () => {
  function tajm() {
    var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

    var x = setInterval(function () {
      var now = new Date().getTime();

      var distance = countDownDate - now;

      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById(
        "demo"
      ).innerHTML = `${days}d | ${hours}h ${minutes}m ${seconds}s`;

      if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
      }
    }, 1000);
  }
  return (
    <div>
      <div class="wrapper">
        <label id="dani" for="html">
          dani
        </label>
        <p id="demo"></p>
        <label id="sati" for="html">
          sati
        </label>
      </div>
    </div>
  );
};

export default tajmer;
