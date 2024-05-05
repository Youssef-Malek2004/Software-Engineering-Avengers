// App.js

import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate, Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Settings from "./Settings";
import Organization from "./Organization/Organization";
import location from "./Organization/pages/locationpage";
import Donor from "./Donor/Donor";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/organization" element={<Organization />}>
          <Route path="location" element={<locationpage />} />
        </Route>
        <Route path="/Donor" element={<Donor />}></Route>
      </Routes>
    </div>
  );
}

export default App;
