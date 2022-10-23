import React from "react";
import Animacija from "./components/animacija/animacija.js";
import Radionice from "./components/radionice/radionice.jsx";
import Navbar from "./components/navbar/navbar";
import Tajmer from "./components/tajmer/tajmer.jsx";
import SlikeTima from "./components/slike_tima/slike_tima.jsx";
import Gradijent from "./components/gradijent/gradijent.js";
import Agenda from "./components/agenda/agenda.jsx";
import Footer from "./components/footer/footer";
import Faq from "./components/faq/faq.js";
import O_projektu from "./components/o_projektu/o_projektu.js";
import Iskustva from "./components/iskustva/iskustva.js";
import Partneri from "./components/partneri/partneri.js";
import PrijavaT from "./components/prijava_tekst/PrijavaT.js";

const Home = () => {
  return (
    <div>
      {/* <Animacija /> */}
      <Navbar />
      <Gradijent />
      <Tajmer />
      {/* <O_projektu /> */}
      {/* <Iskustva /> */}
      {/* <Radionice /> */}
      {/* <Agenda /> */}
      {/* <Faq /> */}
      {/* <SlikeTima /> */}
      <Partneri />
      <PrijavaT />
      <Footer />
    </div>
  );
};

export default Home;
