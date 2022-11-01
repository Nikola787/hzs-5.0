import React from "react";
import Animacija from "./components/animacija/animacija.js";
import Radionice from "./components/radionice/radionice.jsx";
import Tajmer from "./components/tajmer/tajmer.jsx";
import SlikeTima from "./components/slike_tima/Slike_tima.jsx";
import Gradijent from "./components/gradijent/gradijent.js";
import Agenda from "./components/agenda/agenda.jsx";
import Faq from "./components/faq/faq.js";
import O_projektu from "./components/o_projektu/O_projektu.js";
import Iskustva from "./components/iskustva/iskustva.js";
import Partneri from "./components/partneri/partneri.js";
import PrijavaT from "./components/prijava_tekst/PrijavaT.js";
import Navbar from "./components/navbar/navbar.jsx";
import Footer from "./components/footer/footer.jsx";

import VideoA from "./components/videoA/videoA.js"

const Home = () => {
  return (
    <div>

      <Animacija />
      <VideoA />
      <Navbar />
      {/* <Gradijent /> */}
      <Tajmer />
      <O_projektu />
      {/* <Iskustva /> */}
      <Radionice />
      <Agenda />
      <Faq />
      <Partneri />
      <PrijavaT />
      <Footer />

      {/* <Prijava /> */}
    </div>
  );
};

export default Home;
