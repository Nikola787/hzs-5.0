import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Prijava from "./components/prijava/prijava.js";

import { useState, useEffect } from "react";
import FadeLoader from "react-spinners/FadeLoader";

import Loader from "./components/loader/Loader.js";

function App() {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 1000);
  // }, []);

  return (
    <div className="App">
      {/* {loading ? (
        <Loader />
      ) : ( */}
      <Routes>
        {/* <Route path="/prijava" exact element={<Prijava />} /> */}
        <Route path="/" exact element={<Home />} />
      </Routes>
      {/* )} */}
    </div>
  );
}

export default App;
