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
      sender: "John Doe",
      content: "fulfilled donation post of Clothes",
    },
    {
      id: 2,
      sender: "Jane Smith",
      content: "fulfilled donation post of School Supplies",
    },
    { id: 3, sender: "Pro Bono Teacher", content: "fulfilled a donation post" },
    // Add more dummy notifications here
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
