// App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate, Outlet } from "react-router-dom";
import Organization from "./Organization/Organization";
import DonationRequests from "./Donor/Pages/donationRequests";
import DonorBase from "./Donor/Donor";
import Home from "./Donor/Pages/Home";
import RequestTable from "./Donor/Pages/RequestsTable";
import TeacherDonor from "./Donor/Pages/teacherDonor";

import OrgHome from "./Organization/pages/OrgHome";
import DonorInfo from "./Organization/pages/DonorInfo";
import UserDetails from "./Organization/components/UserDetails";
import Donation from "./Organization/pages/Donation";
import Alldonation from "./Organization/pages/ViewDonationPosts";
import ProfilePage from "./Organization/pages/ChangeAccinfo"
import Notifications from "./Organization/pages/Notifications";

import Loc from "./Organization/pages/locationpage";

import LoginPage from "./Donor/Pages/Login";
import SignUp from "./Donor/Pages/signUp";
import Navbar from "./Admin/Navbar";
import Home1 from './Admin/Home';
import Settings from './Admin/Settings';
import Donors from './Admin/Donors';
import Organization1 from './Admin/Organization';
import OrganizationRequests from './Admin/OrganizationRequests';
import DonorRequests from './Admin/DonorRequests';
import Admin from './Admin/Admin'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/organization" element={<Organization />}>
          <Route path="orghome" element={<OrgHome />} />
          <Route path="donors" element={<DonorInfo />} />
          <Route path="donors/user-details/:idx/" element={<UserDetails />} />
          <Route path="donations" element={<Donation />} />
          <Route path="viewdonationposts" element={<Alldonation />} />
          <Route path="changeinfo" element={<ProfilePage />} />
          <Route path="notifications" element={<Notifications />}/>
        </Route>
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/Donor" element={<DonorBase />}>
          <Route path="" element={<Home />} />
          <Route path="DonationRequests" element={<DonationRequests />} />
          <Route path="Requests" element={<RequestTable />} />
          <Route path="Teacher" element={<TeacherDonor />} />
        </Route>

        <Route path="/admin" element={<Admin />}>
          <Route path="Home" element={<Home1 />} />
          <Route path="Settings" element={<Settings />} />
          <Route path="Donors" element={<Donors />} />
          <Route path="Organization" element={<Organization1 />} />
          <Route path="OrganizationRequests" element={<OrganizationRequests />} />
          <Route path="DonorRequests" element={<DonorRequests />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
