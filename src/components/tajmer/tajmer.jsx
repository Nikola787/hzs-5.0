import "./tajmer.css";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: "0",
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
        },
      });
    }
    if (!inView) {
      animation.start({ x: "-60vw" });
    }
  }, [inView]);

  useEffect(() => {
    setTimeout(() => {
      setTajm(() => getTime(new Date("Jan 5, 2024 15:37:25").getTime()));
    }, 1000);
  });

  return (
    <div>
      <motion.div class="wrapper" animate={animation} ref={ref}>
        <p id="timer-text">
          <span className="timer-span">Vreme </span>
          <span className="timer-span">do </span>
          <span className="timer-span">zatvaranja </span>
          <span className="timer-span">prijava </span>
        </p>
        <div className="timer">
          <label id="dani" for="html">
            dani
          </label>
          <p id="demo">{tajm}</p>
          <label id="sati" for="html">
            sati
          </label>
        </div>
      </motion.div>
    </div>
  );
};

export default Tajmer;
