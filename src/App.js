import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Prijava from './components/prijava/prijava.js'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/prijava" exact element={<Prijava />} />
        <Route path="/" exact element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
