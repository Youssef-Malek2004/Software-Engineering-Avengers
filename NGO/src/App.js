// App.js
import { useHistory } from "react-router-dom";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate, Outlet } from "react-router-dom";
import { useState } from "react";
import Organization from "./Organization/Organization";
import DonationRequests from "./Donor/Pages/donationRequests";
import DonorBase from "./Donor/Donor";
import Home from "./Donor/Pages/Home";
import RequestTable from "./Donor/Pages/RequestsTable";
import TeacherDonor from "./Donor/Pages/teacherDonor";
import DoctorRequests from "./Donor/Pages/doctorDonor";

import OrgHome from "./Organization/pages/OrgHome";
import DonorInfo from "./Organization/pages/DonorInfo";
import UserDetails from "./Organization/components/UserDetails";
import Donation from "./Organization/pages/Donation";
import Alldonation from "./Organization/pages/ViewDonationPosts";
import ProfilePage from "./Organization/pages/ChangeAccinfo";
import Notifications from "./Organization/pages/Notifications";

import Loc from "./Organization/pages/locationpage";

import LoginPage from "./Donor/Pages/Login";
import SignUp from "./Donor/Pages/signUp";
import Navbar from "./Admin/Navbar";
import Home1 from "./Admin/Home";
import Settings from "./Admin/Settings";
import Donors from "./Admin/Donors";
import Organization1 from "./Admin/Organization";
import OrganizationRequests from "./Admin/OrganizationRequests";
import DonorRequests from "./Admin/DonorRequests";
import Admin from "./Admin/Admin";
import TeacherBase from "./Donor/Teacher";
import TeacherRequests from "./Donor/Pages/teacherDonor";
import ChangeInfo from "./Donor/Pages/ChangeInfoDonor";
import DonorBase from "./Donor/Donor";

function App() {
  const [donationCategory, setDonationCategory] = useState("showdetailed");

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
          <Route path="notifications" element={<Notifications />} />
        </Route>
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/Donor" element={<DonorBase />}>
        <Route
          path="/Donor"
          element={
            <DonorBase
              donationCategory={donationCategory}
              setDonationCategory={setDonationCategory}
            />
          }
        >
          <Route path="" element={<Home />} />
          <Route path="DonationRequests" element={<DonationRequests />} />
          <Route
            path="RegularRequests"
            element={
              <RequestTable
                donationCategory={donationCategory}
                setDonationCategory={setDonationCategory}
              />
            }
          />
          <Route
            path="Teacher"
            element={
              <TeacherDonor
                donationCategory={donationCategory}
                setDonationCategory={setDonationCategory}
              />
            }
          />
          <Route path="changeinfo" element={<ChangeInfo />}></Route>
        </Route>
        <Route
          path="/Teacher"
          element={
            <TeacherBase
              donationCategory={donationCategory}
              setDonationCategory={setDonationCategory}
            />
          }
        >
          <Route>
            <Route path="" element={<Home />} />
            <Route path="DonationRequests" element={<DonationRequests />} />
            <Route
              path="teacherRequests"
              element={
                <TeacherRequests
                  donationCategory={donationCategory}
                  setDonationCategory={setDonationCategory}
                />
              }
            />
            <Route path="changeinfo" element={<ChangeInfo />}></Route>
          </Route>
        </Route>

        <Route
          path="/Doctor"
          element={
            <TeacherBase
              donationCategory={donationCategory}
              setDonationCategory={setDonationCategory}
            />
          }
        >
          <Route>
            <Route path="" element={<Home />} />
            <Route path="DonationRequests" element={<DonationRequests />} />
            <Route
              path="doctorRequests"
              element={
                <DoctorRequests
                  donationCategory={donationCategory}
                  setDonationCategory={setDonationCategory}
                />
              }
            />
            <Route path="changeinfo" element={<ChangeInfo />}></Route>
          </Route>
        </Route>

        <Route path="/admin" element={<Admin />}>
          <Route path="Home" element={<Home1 />} />
          <Route path="Settings" element={<Settings />} />
          <Route path="Donors" element={<Donors />} />
          <Route path="Organization" element={<Organization1 />} />
          <Route
            path="OrganizationRequests"
            element={<OrganizationRequests />}
          />
          <Route path="DonorRequests" element={<DonorRequests />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
