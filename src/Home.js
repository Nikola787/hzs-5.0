import React from "react";
import Animacija from "./components/animacija/animacija.js";
import Radionice from "./components/radionice/radionice.jsx";
import Navbar from "./components/navbar/navbar";
import Tajmer from "./components/tajmer/tajmer.jsx";
import SlikeTima from "./components/slike_tima/slike_tima.jsx";

const Home = () => {
  return (
    <div>
      {/* <Navbar />
      <Tajmer /> */}
      <Radionice />
      {/* <SlikeTima /> */}
    </div>
  );
};

export default Home;
