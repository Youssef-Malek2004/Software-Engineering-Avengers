import { FaBox, FaLaptop, FaUsers, FaKey, FaHome } from "react-icons/fa";

export const items = [
  
  {
    key: "0",
    icon: <FaHome />,
    label: "Home",
    to: "location", // Assuming you're using react-router-dom for routing
  },
  {
    key: "1",
    icon: <FaBox/>,
    label: "Donation",
    to: "applications",
  },
  {
    key: "2",
    icon: <FaUsers />,
    label: "Donors",
    to: "donors",
  },
  
    
];

export default items;
