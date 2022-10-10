import React from "react";
import Animacija from "./components/animacija/animacija.js";
import Radionice from "./components/radionice/radionice.jsx";
import Navbar from "./components/navbar/navbar";
import Tajmer from "./components/tajmer/tajmer.jsx";
import Agenda from "./components/agenda/agenda.jsx";
import Footer from "./components/footer/footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Tajmer />
      <Radionice />
      <Agenda />
      <Footer />
    </div>
  );
};

export default Home;
