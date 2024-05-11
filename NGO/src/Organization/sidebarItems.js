import { FaBox, FaLaptop, FaUsers, FaKey, FaHome } from "react-icons/fa";

export const items = [
  {
    key: "0",
    icon: <FaHome />,
    label: "Home",
    to: "/organization", // Assuming you're using react-router-dom for routing
  },
  {
    key: "1",
    icon: <FaBox />,
    label: "Donation",
    to: "/organization/donations",
  },
  {
    key: "2",
    icon: <FaUsers />,
    label: "Donors",
    to: "/organization/donors",
  },
  {
    key: "3",
    icon: <FaUsers />,
    label: "Delivery Schedule",
    to: "/organization/delivery",
  },
];

export default items;
