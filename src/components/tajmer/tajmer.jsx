import "./tajmer.css";
import React, { useState, useEffect } from "react";

function getTime(countDownDate) {
  let now = new Date().getTime();

  let distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  if (days < 10) {
    days = "0" + days;
  }
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  return `${days} | ${hours}:${minutes}:${seconds}`;
}

const Tajmer = () => {
  const [tajm, setTajm] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setTajm(() => getTime(new Date("Nov 17, 2022 23:59:59").getTime()));
    }, 1000);
  });

  const [state, setState] = useState(false);

  const changevalueonScroll = () => {
    const scrollValue = document.documentElement.scrollTop;

    console.log(scrollValue);
    console.log(document.documentElement.clientWidth)

    if (scrollValue > 170) {
      setState(true);
    } else {
      setState(false);
    }
  };

  window.addEventListener("scroll", changevalueonScroll);

  return (
    <div className="wrapper-t">
      <div className="timer-text">
        <div className={state ? "timer-span timer-span-f" : "timer-span"}>
          DO ZATVARANJA PRIJAVA
        </div>
      </div>
      <div className={state ? "timer timer-f" : "timer"}>
        <div className="dani">dana</div>
        <div className="demo">{tajm}</div>
        <div className="sati">sati</div>
      </div>
    </div>
  );
};

export default Tajmer;
