import { FaBox, FaLaptop, FaUsers, FaKey, FaHome } from "react-icons/fa";

export const items = [
  
  {
    key: "0",
    icon: <FaHome />,
    label: "Home",
    to: "", // Assuming you're using react-router-dom for routing
  },
  {
    key: "1",
    icon: <FaBox/>,
    label: "Donation",
    to: "donations",
  },
  {
    key: "2",
    icon: <FaUsers />,
    label: "Donors",
    to: "donors",
  },
  {
    key: "3",
    icon: <FaUsers />,
    label: "Delivery Schedule",
    to: "delivery",
  },
  
    
];

export default items;
