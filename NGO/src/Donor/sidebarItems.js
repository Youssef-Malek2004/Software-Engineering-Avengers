import * as FaIcons from "react-icons/fa";

export const items = [
  {
    key: "0",
    icon: <FaIcons.FaHome />,
    label: "Home",
    to: "/Donor", // This just Goes to the Home Page
  },
  {
    key: "1",
    icon: <FaIcons.FaFileSignature />,
    label: "Check Donation Requests",
    to: "donationRequests", // Assuming you're using react-router-dom for routing
  },
];

export default items;
