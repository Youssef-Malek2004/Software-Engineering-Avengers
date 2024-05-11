import { items } from "./sidebarItems";
import Outline from "../shared/Outline";
import { useState } from "react";
import navBarItems from "./navBarItems"; // Correct import
import { outlineNavBarItem } from "./Pages/outlineNavBarItems";

const TeacherBase = ({ donationCategory, setDonationCategory }) => {
  // const [navBarItems, setNavBarItemsFunc] = useState([]);

  return (
    <>
      {/* <NavBar setNavBarItems={setNavBarItemsFunc} /> */}
      <Outline
        items={items}
        navBarItems={outlineNavBarItem}
        donationCategory={donationCategory}
        setDonationCategory={setDonationCategory}
      />
    </>
  );
};

export default TeacherBase;
