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

export default items;
