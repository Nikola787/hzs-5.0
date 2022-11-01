import React from "react";
import "./animacija.css";
import bgVideo from "./video.mp4";

const animacija = () => {
  return (
    <div className="animacijaD">
      <video id="video" webkit-playsinline autoPlay={true} muted type='video/mp4' >
        <source src={bgVideo} type="video/mp4" />
      </video>
    </div>
  );
};

export default animacija;
