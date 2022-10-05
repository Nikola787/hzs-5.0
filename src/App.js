<<<<<<< HEAD
import "./App.css";
=======
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
>>>>>>> 41d79da4d7fb7e029caa7e7815652067f940b905

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
