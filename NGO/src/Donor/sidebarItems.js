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
    label: "Donation Requests",
    to: "RegularRequests",
  },
];

export default items;
