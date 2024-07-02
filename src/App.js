import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Component/Home";
import Signup from "./Component/Signup";
import Signin from "./Component/Signin";
import Trip from "./Component/Trip";
import Flight from "./Component/Flight";
import Activity from "./Component/Activity";
import Hotel from "./Component/Hotel";
import Travel from "./Component/Travel";
import Organizer from "./Component/Organizer";
import Aboutus from "./Component/Aboutus";
import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/trip" element={<Trip />} />
          <Route path="/flight" element={<Flight />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/hotel" element={<Hotel />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/organizer" element={<Organizer />} />
          <Route path="/aboutus" element={<Aboutus />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
