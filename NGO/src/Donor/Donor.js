import { items } from "./sidebarItems";
import Outline from "../shared/OutlineCustom";
import { useState } from "react";
import NavBar from "./navBarItems"; // Correct import

const DonorBase = ({ donationCategory, setDonationCategory }) => {
  const [navBarItems, setNavBarItemsFunc] = useState([]);

  return (
    <>
      <NavBar setNavBarItems={setNavBarItemsFunc} />
      <Outline
        items={items}
        navBarItems={navBarItems}
        donationCategory={donationCategory}
        setDonationCategory={setDonationCategory}
      />
    </>
  );
};

export default DonorBase;
