import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from "./Component/Homepage/Homepage";
import Navbar from "./Component/Navbar/Navbar";
import Level from "./Component/Level/Level";
import DailyCombo from "./Component/Daily_Combo/DailyCombo";
import Daily_reward from './Component/DailyRewardSection/Daily_reward';





function App() {
  return (
    <div className="App">
      {/* Wrap everything in Router */}
      <Router>
        {/* Define routes for different pages */}
        <Routes>
          <Route path="/home" element={<Homepage />} />
          <Route path="/reward" element={<Daily_reward />} />
          <Route path="/combo" element={<DailyCombo />} />
          <Route path="/level" element={<Level />} />
        </Routes>
        <Navbar />
         {/* Updated component name */}
        
      </Router>
    </div>
  );
}

export default App;
