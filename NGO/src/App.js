// App.js

import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate, Outlet } from "react-router-dom";
import Settings from "./Settings";
import Organization from "./Organization/Organization";
import location from "./Organization/pages/locationpage";
import DonationRequests from "./Donor/Pages/donationRequests";
import DonorBase from "./Donor/Donor";
import Home from "./Donor/Pages/Home";
import OrgHome from "./Organization/pages/OrgHome";
import DonorInfo  from "./Organization/pages/DonorInfo";
import UserDetails from "./Organization/components/UserDetails";
function App() {
  return (
    <div>
      <Routes>
        
        <Route path="/organization" element={<Organization />}>
          <Route path="location" element={<OrgHome />} />
          <Route path="donors" element={<DonorInfo />} />
          <Route path="user-details" element={<UserDetails />} />
          
        </Route>
        <Route path="/Donor" element={<DonorBase />}>
          <Route path="" element={<Home />} />
          <Route path="DonationRequests" element={<DonationRequests />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
