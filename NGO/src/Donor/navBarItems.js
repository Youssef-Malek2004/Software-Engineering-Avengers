import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const NavBar = ({ setNavBarItems }) => {
  const location = useLocation();

  useEffect(() => {
    // Define the navigation items based on the current location
    let navBarItems = [];

    // If the user is on the "Donor/Requests" page, modify the navigation items
    if (location.pathname === "/Donor/RegularRequests") {
      navBarItems = [
        {
          name: "Donation Summary",
          to: "showdetailed",
        },
        {
          name: "All Requests",
          to: "all",
        },
        {
          name: "Clothes Requests",
          to: "clothes",
        },
        {
          name: "School Supplies",
          to: "schoolsupplies",
        },
        {
          name: "Toys Requests",
          to: "toys",
        },
        {
          name: "Food Requests",
          to: "food",
        },
        {
          name: "Medical Requests",
          to: "medical",
        },
        {
          name: "Blood Donations",
          to: "blood",
        },
      ];
    }

    setNavBarItems(navBarItems);
  }, [location.pathname, setNavBarItems]);

  return null; // Assuming NavBar doesn't render anything itself
};

export default NavBar;
