import React from "react";
import { useLocation } from "react-router-dom"; // Import useLocation hook
import * as FaIcons from "react-icons/fa";

export const items = [
  {
    key: "0",
    icon: <FaIcons.FaHome />,
    label: "Home",
    to: getHomeRoute(), // This just Goes to the Home Page
  },
  {
    key: "1",
    icon: <FaIcons.FaFileSignature />,
    label: "Donation Requests",
    // Dynamically set the "to" property based on the current URL
    to: getDonationRequestsRoute(),
  },
  {
    key: "2",
    icon: <FaIcons.FaFileSignature />,
    label: "Schedule Pickup",
    // Dynamically set the "to" property based on the current URL
    to: getScheduleSiteRoute(),
  },
  {
    key: "3",
    icon: <FaIcons.FaFileSignature />,
    label: "Track Driver",
    // Dynamically set the "to" property based on the current URL
    to: getTrackerRoute(),
  },
  {
    key: "4",
    icon: <FaIcons.FaFileSignature />,
    label: "Organization Details",
    // Dynamically set the "to" property based on the current URL
    to: getOrgDetails(),
  },
];

// Function to get the appropriate route for Donation Requests
function getDonationRequestsRoute() {
  const pathname = window.location.href; // Get the current URL pathname
  if (pathname.includes("Donor")) {
    return "/Donor/RegularRequests"; // If URL has 'donor', go to RegularRequests
  } else if (pathname.includes("Teacher")) {
    return "/Teacher/TeacherRequests"; // If URL has 'teacher', go to TeacherRequests
  } else {
    return "/Doctor/doctorRequests"; // Default to RegularRequests
  }
}

function getHomeRoute() {
  const pathname = window.location.href; // Get the current URL pathname
  if (pathname.includes("Donor")) {
    return "/Donor"; // If URL has 'donor', go to RegularRequests
  } else if (pathname.includes("Teacher")) {
    return "/Teacher"; // If URL has 'teacher', go to TeacherRequests
  } else {
    return "/Doctor"; // Default to RegularRequests
  }
}

function getScheduleSiteRoute() {
  const pathname = window.location.href; // Get the current URL pathname
  if (pathname.includes("Donor")) {
    return "/Donor/DonorPickup"; // If URL has 'donor', go to RegularRequests
  } else if (pathname.includes("Teacher")) {
    return "/Teacher/TeacherPickup"; // If URL has 'teacher', go to TeacherRequests
  } else {
    return "/Doctor/DoctorPickup"; // Default to RegularRequests
  }
}

function getTrackerRoute() {
  const pathname = window.location.href; // Get the current URL pathname
  if (pathname.includes("Donor")) {
    return "/Donor/DonorTrack"; // If URL has 'donor', go to RegularRequests
  } else if (pathname.includes("Teacher")) {
    return "/Teacher/TeacherTrack"; // If URL has 'teacher', go to TeacherRequests
  } else {
    return "/Doctor/DoctorTrack"; // Default to RegularRequests
  }
}

function getOrgDetails() {
  const pathname = window.location.href; // Get the current URL pathname
  if (pathname.includes("Donor")) {
    return "/Donor/OrgTable"; // If URL has 'donor', go to RegularRequests
  } else if (pathname.includes("Teacher")) {
    return "/Teacher/OrgTable"; // If URL has 'teacher', go to TeacherRequests
  } else {
    return "/Doctor/OrgTable"; // Default to RegularRequests
  }
}

export default items;
