import React from "react";
import "./animacija.css";
import bgVideo from "./video.mp4";

const animacija = () => {
  return (
    <div className="animacijaD">
      <video id="video" autoPlay={true} muted playsinline type='video/mp4' controls="true">
        <source src={bgVideo} type="video/mp4" />
      </video>
    </div>
  );
};

export default animacija;
