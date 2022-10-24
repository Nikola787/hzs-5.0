import React from "react";
import Animacija from "./components/animacija/animacija.js";
import Radionice from "./components/radionice/radionice.jsx";
import Prijava from "./components/prijava/prijava.js";
import Gradijent from "./components/gradijent/gradijent.js";
import Navbar from "./components/navbar/navbar";
import Tajmer from "./components/tajmer/tajmer.jsx";
import Agenda from "./components/agenda/agenda.jsx";

const Home = () => {
  return (
    <div>
      {/* <Animacija /> */}
      {/* <Gradijent /> */}
      <Prijava />
    </div>
  );
};

export default Home;
