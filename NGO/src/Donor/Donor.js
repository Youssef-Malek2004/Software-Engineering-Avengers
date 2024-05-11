import { items } from "./sidebarItems";
import Outline from "../shared/Outline";
import { useState } from "react";
import navBarItems from "./navBarItems"; // Correct import
import { outlineNavBarItem } from "./Pages/outlineNavBarItems";

const DonorBase = ({ donationCategory, setDonationCategory }) => {
  // const [navBarItems, setNavBarItemsFunc] = useState([]);

  const dummyNotifications = [
    {
      id: 1,
      sender: "Driver",
      content:
        "The driver has arrived to pick up Clothing. 5 items ready for pickup.",
    },
    {
      id: 2,
      sender: "Driver",
      content:
        "The driver has arrived to pick up Toys. 8 items ready for pickup.",
    },
    {
      id: 3,
      sender: "Driver",
      content:
        "The driver has arrived to pick up Books. 5 items ready for pickup.",
    },
  ];

  return (
    <>
      {/* <NavBar setNavBarItems={setNavBarItemsFunc} /> */}
      <Outline
        items={items}
        navBarItems={outlineNavBarItem}
        donationCategory={donationCategory}
        setDonationCategory={setDonationCategory}
        notifications={dummyNotifications}
      />
    </>
  );
};

export default DonorBase;
