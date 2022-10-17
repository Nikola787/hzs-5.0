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

// function animate(obj, initVal, lastVal, duration) {
//   let startTime = null;
//   let currentTime = Date.now();
//   const step = (currentTime) => {
//     if (!startTime) {
//       startTime = currentTime;
//     }
//     const progress = Math.min((currentTime - startTime) / duration, 1);
//     obj.innerHTML = Math.floor(progress * (lastVal - initVal) + initVal);
//     if (progress < 1) {
//       window.requestAnimationFrame(step);
//     } else {
//       window.cancelAnimationFrame(window.requestAnimationFrame(step));
//     }
//   };
//   window.requestAnimationFrame(step);
// }
// let text1 = document.getElementById("demo");
// const load = () => {
//   animate(text1, 0, 511, 7000);
// };

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
