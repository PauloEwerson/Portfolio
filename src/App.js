import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

import ComingSoon from './pages/ComingSoon';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<ComingSoon />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
