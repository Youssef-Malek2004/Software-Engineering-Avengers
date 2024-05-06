// App.js

import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate, Outlet } from "react-router-dom";
import Organization from "./Organization/Organization";
import DonationRequests from "./Donor/Pages/donationRequests";
import DonorBase from "./Donor/Donor";
import Home from "./Donor/Pages/Home";
import OrgHome from "./Organization/pages/OrgHome";
import SignUp from "./Donor/Pages/signUp";
import Navbar from "./Admin/Navbar";
import Home1 from './Admin/Home';
import Settings from './Admin/Settings';
import Donors from './Admin/Donors';
import Organization1 from './Admin/Organization';
import PendingRequests from './Admin/PendingRequests';
import Submissions from './Admin/Submissions';
import AccountManagement from './Admin/AccountManagement';
function App() {
  return (
    <div>
      <Routes>
        <Route path="/organization" element={<Organization />}>
          <Route path="location" element={<OrgHome />} />
        </Route>
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/Donor" element={<DonorBase />}>
          <Route path="" element={<Home />} />
          <Route path="DonationRequests" element={<DonationRequests />} />
        </Route>
        <Route path='/Home' element={<Home1/>}>
          <Route path="/Settings" element={<Settings/>}/>
          <Route path="/Donors" element={<Donors />} />
          <Route path="/Organization" element={<Organization1 />} />
          <Route path="/PendingRequests" element={<PendingRequests />} />
          <Route path="/Submissions" element={<Submissions />} />
          <Route path="/AccountManagement" element={<AccountManagement />} />
        </Route>

       </Routes>
    </div>
  );
}

export default App;
