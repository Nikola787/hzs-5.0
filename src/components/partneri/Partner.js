import React from "react";
import "./partneri.css";

const Partner = (props) => {
  return (
    <a href={props.link} target="_blank" rel="noreferrer">
      <div
        className="partner"
        style={{
          width: props.width,
          height: props.height,
          backgroundColor: props.pozadina,
        }}
      >
        <img src={props.partnerSlika} alt={props.partnerIme} />
      </div>
    </a>
  );
};

export default Partner;
