import React from "react";
import "./animacija.css";
import bgVideo from "./video.mp4";
import videoAvi from "./videoAvi.avi";

const animacija = () => {
  return (
    <div className="animacijaD">
      {/* <video id="video" autoPlay={true} webkit-playsinline playsinline="true" muted type='video/mp4' >
        <source src={bgVideo} type="video/mp4" />
      </video> */}
      <video id="video" autoPlay={true} muted type='video/mp4' >
        <source src={bgVideo} type="video/mp4" />
      </video>
    </div>
  );
};

export default animacija;
