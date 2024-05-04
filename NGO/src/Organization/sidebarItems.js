import { FaBox, FaLaptop, FaUsers, FaKey, FaHome } from "react-icons/fa";

export const items = [
  
  {
    key: "0",
    icon: <FaBox />,
    label: "Add Location",
    to: "location", // Assuming you're using react-router-dom for routing
  },
  {
    key: "1",
    icon: <FaLaptop />,
    label: "Applications",
    to: "applications",
  },
  {
    key: "2",
    icon: <FaUsers />,
    label: "Manage Users",
    to: "manageUsers",
  },
  
    
];

export default items;
