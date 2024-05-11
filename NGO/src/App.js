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
import DeliverySchedule from "./Organization/pages/Delivery";

import Loc from "./Organization/pages/locationpage";

import LoginPage from "./Donor/Pages/Login";
import SignUp from "./Donor/Pages/signUp";
import Navbar from "./Admin/Navbar";

import Settings from "./Admin/Settings";
import Donors from "./Admin/Donors";
import Organization1 from "./Admin/Organization";
import OrganizationRequests from "./Admin/OrganizationRequests";
import DonorRequests from "./Admin/DonorRequests";
import Admin from "./Admin/Admin";
import Changepassword from "./Admin/Changepassword";
import LandingPage from "./Admin/LandingPage";
import Home1 from "./Admin/Home";

import TeacherBase from "./Donor/Teacher";
import TeacherRequests from "./Donor/Pages/teacherDonor";
import ChangeInfo from "./Donor/Pages/ChangeInfoDonor";
import DonorPickup from "./Donor/Pages/DonorPickup";
import TeacherPickup from "./Donor/Pages/TeacherPickup";
import DoctorPickup from "./Donor/Pages/DoctorPickup";
import DonorTrack from "./Donor/Pages/DonorTrack";
import TeacherTrack from "./Donor/Pages/TeacherTrack";
import DoctorTrack from "./Donor/Pages/DoctorTrack";
import DonorNotifications from "./Donor/Pages/NotificationsPage";
import OrgTable from "./Donor/Pages/OrganizationTable";

function App() {
  const [donationCategory, setDonationCategory] = useState("showdetailed");

  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/organization" element={<Organization />}>
          <Route path="" element={<OrgHome />} />
          <Route path="donors" element={<DonorInfo />} />
          <Route path="donors/user-details/:idx/" element={<UserDetails />} />
          <Route path="donations" element={<Donation />} />
          <Route path="viewdonationposts" element={<Alldonation />} />
          <Route path="changeinfo" element={<ProfilePage />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="delivery" element={<DeliverySchedule />} />
        </Route>
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/login" element={<LoginPage />} />

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
          <Route path="DonationRequests" element={<DonationRequests />} />\
          <Route path="DonorPickup" element={<DonorPickup />} />
          <Route path="DonorTrack" element={<DonorTrack />} />
          <Route path="notifications" element={<DonorNotifications />} />
          <Route path="OrgTable" element={<OrgTable />} />
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
            <Route path="TeacherPickup" element={<TeacherPickup />} />
            <Route path="TeacherTrack" element={<TeacherTrack />} />
            <Route path="notifications" element={<DonorNotifications />} />
            <Route path="OrgTable" element={<OrgTable />} />
            <Route
              path="TeacherRequests"
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
            <Route path="DoctorPickup" element={<DoctorPickup />} />
            <Route path="DoctorTrack" element={<DoctorTrack />} />
            <Route path="notifications" element={<DonorNotifications />} />
            <Route path="OrgTable" element={<OrgTable />} />
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
          <Route path="Changepassword" element={<Changepassword />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
