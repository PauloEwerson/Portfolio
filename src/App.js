import React from "react";
import './App.css';
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

import {
  Navbar,
  Home,
  Footer,
  About,
  Projects
} from './pages';

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Projects />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
