import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import {
  clothes,
  SchoolSupplies,
  Toys,
  Food,
  Medical,
  Blood,
  TeachingPosts,
  TeachingData,
  MedicalPosts,
  MedicalData,
} from "./expandedTableItems";
import {
  ClothesTable,
  SchoolSuppliesTable,
  ToysTable,
  FoodTable,
  MedicalTable,
  BloodTable,
} from "./expandedTableItems";
import { navBarItems } from "../navBarItems";
import NGOFooter from "../../shared/components/Footer";

const DoctorRequests = ({ donationCategory, setDonationCategory }) => {
  const handleDonationCategoryToggle = (item) => {
    setDonationCategory(item);
  };

  const [items, setItems] = useState([
    {
      id: "clothes",
      type: "Clothes",
      quantity: 10,
      selected: false,
    },
    {
      id: "schoolsupplies",
      type: "School Supplies",
      quantity: 5,
      selected: false,
    },
    {
      id: "schoolsupplies",
      type: "Stationary Items",
      quantity: 5,
      selected: false,
    },
    {
      id: "schoolsupplies",
      type: "Book Details",
      quantity: 4,
      selected: false,
    },
    {
      id: "toys",
      type: "Toys",
      quantity: 3,
      selected: false,
    },
    {
      id: "food",
      type: "Food",
      quantity: 7,
      selected: false,
    },
    {
      id: "medical",
      type: "Medical",
      quantity: 3,
      selected: false,
    },
    {
      id: "blood",
      type: "Blood",
      quantity: 3,
      selected: false,
    },
    {
      id: "medicalcases",
      type: "Medical Cases",
      quantity: 3,
      selected: false,
    },
  ]);

  const [selectedItems, setSelectedItems] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [donateQuantity, setDonateQuantity] = useState(0);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [expanded, setExpanded] = useState(true); // State for expanding table
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const handleDonateButtonClick = (id) => {
    setSelectedItemId(id);
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
    setSelectedItemId(null);
    setDonateQuantity(0);
  };

  const handleDonateConfirm = () => {
    const updatedItems = items.map((item) =>
      item.id === selectedItemId
        ? { ...item, quantity: item.quantity - donateQuantity }
        : item
    );
    setItems(updatedItems);
    const selected = updatedItems.filter((item) => item.selected);
    setSelectedItems(selected);
    handlePopupClose();
  };

  const handleDetailsClick = (id) => {
    const item = items.find((item) => item.id === id);
    setSelectedItemId(id);
    setShowPopup(true);
    console.log("Details clicked for:", item);
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case "Clothes":
        return <FaIcons.FaTshirt className="text-xl" />;
      case "School Supplies":
        return <FaIcons.FaSchool className="text-xl" />;
      case "Stationary Items":
        return <FaIcons.FaPencilAlt className="text-xl" />;
      case "Book Details":
        return <FaIcons.FaBook className="text-xl" />;
      case "Toys":
        return <FaIcons.FaRobot className="text-xl" />;
      case "Food":
        return <FaIcons.FaUtensils className="text-xl" />;
      case "Medical":
        return <FaIcons.FaHospital className="text-xl" />;
      case "Blood":
        return <FaIcons.FaTint className="text-xl" />;
      default:
        return <FaIcons.FaBriefcaseMedical className="text-xl" />;
    }
  };

  return (
    <div className="flex items-baseline justify-center h-screen bg-gray-100">
      <div className="w-11/12 h-5/6 overflow-auto mt-5">
        <div className="items-center justify-center mb-5 flex flex-row">
          {navBarItems.map((item, index) => (
            <button
              type="text"
              key={index}
              onClick={() => handleDonationCategoryToggle(item.to)}
              className={`mx-2 px-4 py-2 rounded-md focus:outline-none ${
                donationCategory === item.to
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
              style={{
                // Set button height to match the badge height
                height: "3rem",
                display: "inline-block",
              }}
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Button to expand table */}
        {donationCategory == "showdetailed" && (
          <>
            <h2 className="text-xl font-bold mb-4 text-center">
              Donation Requests Summary
            </h2>
            <table className="w-full divide-y divide-purple-600">
              <thead>
                <tr
                  style={{
                    background: "linear-gradient(to right, #9B1B59, #6b2d98)",
                  }}
                >
                  <th className="px-6 py-3  text-left text-xs leading-4 font-medium text-gray-100 uppercase tracking-wider text-center">
                    Type
                  </th>
                  <th className="px-6 py-3  text-left text-xs leading-4 font-medium text-gray-100 uppercase tracking-wider text-center">
                    Quantity In Need
                  </th>
                  {/* <th className="px-6 py-3  text-left text-xs leading-4 font-medium text-gray-100 uppercase tracking-wider text-center">
                  Organization
                </th> */}
                  {/* <th className="px-6 py-3  text-left text-xs leading-4 font-medium text-gray-100 uppercase tracking-wider text-center">
                Help
              </th> */}
                  <th className="px-6 py-3  text-left text-xs leading-4 font-medium text-gray-100 uppercase tracking-wider text-center">
                    Show More
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y">
                {items.map((item) => (
                  <tr key={item.id}>
                    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900 text-center">
                      <div className="flex items-center justify-center">
                        {getTypeIcon(item.type)}
                        <span className="ml-2">{item.type}&nbsp; </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900 text-center">
                      {item.quantity}
                    </td>
                    {/* <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900 text-center">
                    {item.organization}
                  </td> */}
                    {/* <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900 text-center">
                  <button
                    className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-900 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={() => handleDonateButtonClick(item.id)}
                  >
                    Donate
                  </button>
                </td> */}
                    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900 text-center">
                      <button
                        className=" py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-900 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        onClick={() => setDonationCategory(item.id)}
                      >
                        Expand Category
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
        {donationCategory !== "showdetailed" && (
          <div>
            {(donationCategory.includes("clothes") ||
              donationCategory.includes("all")) && (
              <>
                <h2 className="text-xl font-bold mb-4 text-center">
                  Clothing Requests
                </h2>
                <ClothesTable
                  items={clothes}
                  cartItemsState={cartItems}
                  setCartItemsFunc={setCartItems}
                />
              </>
            )}

            {(donationCategory.includes("schoolsupplies") ||
              donationCategory.includes("all")) && (
              <>
                <h2 className="text-xl font-bold mb-4 text-center">
                  School Supplies
                </h2>
                <SchoolSuppliesTable
                  items={SchoolSupplies}
                  cartItemsState={cartItems}
                  setCartItemsFunc={setCartItems}
                />
              </>
            )}

            {(donationCategory.includes("toys") ||
              donationCategory.includes("all")) && (
              <>
                <h2 className="text-xl font-bold mb-4 text-center">Toys</h2>
                <ToysTable
                  items={Toys}
                  cartItemsState={cartItems}
                  setCartItemsFunc={setCartItems}
                />
              </>
            )}

            {(donationCategory.includes("food") ||
              donationCategory.includes("all")) && (
              <>
                <h2 className="text-xl font-bold mb-4 text-center">Food</h2>
                <FoodTable
                  items={Food}
                  cartItemsState={cartItems}
                  setCartItemsFunc={setCartItems}
                />
              </>
            )}

            {(donationCategory == "medical" ||
              donationCategory.includes("all")) && (
              <>
                <h2 className="text-xl font-bold mb-4 text-center">
                  Medical Requests
                </h2>
                <MedicalTable
                  items={Medical}
                  cartItemsState={cartItems}
                  setCartItemsFunc={setCartItems}
                />
              </>
            )}
            {(donationCategory.includes("blood") ||
              donationCategory.includes("all")) && (
              <>
                <h2 className="text-xl font-bold mb-4 text-center">Blood</h2>
                <BloodTable
                  items={Blood}
                  cartItemsState={cartItems}
                  setCartItemsFunc={setCartItems}
                />
              </>
            )}
            {(donationCategory.includes("cases") ||
              donationCategory.includes("all")) && (
              <>
                <h2 className="text-xl font-bold mb-4 text-center">
                  Medical Cases
                </h2>
                <MedicalPosts
                  items={MedicalData}
                  cartItemsState={cartItems}
                  setCartItemsFunc={setCartItems}
                />
              </>
            )}
          </div>
        )}
        {showPopup && (
          <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4">
                Enter Quantity to Donate
              </h2>
              <input
                type="number"
                min="1"
                max={items.find((item) => item.id === selectedItemId).quantity}
                value={donateQuantity}
                onChange={(e) => setDonateQuantity(e.target.value)}
                className="w-full px-3 py-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 mb-4"
              />
              <div className="flex justify-center">
                <button
                  className="mr-2  text-white px-4 py-2 rounded-md hover:bg-purple-700 focus:outline-none"
                  onClick={handleDonateConfirm}
                >
                  Confirm
                </button>
                <button
                  className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500 focus:outline-none"
                  onClick={handlePopupClose}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
        {showCart && (
          <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg items-center justify-center">
              <h1 className="text-3xl text-center mb-4">
                Donated/Fullfilled Items
              </h1>
              <table className="w-full divide-y divide-purple-600">
                <thead>
                  <tr
                    style={{
                      background: "linear-gradient(to right, #9B1B59, #6b2d98)",
                    }}
                  >
                    <th className="px-6 py-3  text-left text-xs leading-4 font-medium text-gray-100 uppercase tracking-wider">
                      Type
                    </th>
                    <th className="px-6 py-3  text-left text-xs leading-4 font-medium text-gray-100 uppercase tracking-wider">
                      Details
                    </th>
                    <th className="px-6 py-3  text-left text-xs leading-4 font-medium text-gray-100 uppercase tracking-wider">
                      Schedule
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y">
                  {cartItems.map((cartItem) => (
                    <tr key={cartItem.id}>
                      <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                        {cartItem[Object.keys(cartItem)[0]]}
                      </td>
                      <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">
                        <button
                          className="bg-indigo-400 text-white px-4 py-2 rounded-md hover:bg-blue-300 focus:outline-none"
                          onClick={() => {
                            cartItem[Object.keys(cartItem)[2]](
                              cartItem[Object.keys(cartItem)[1]]
                            );
                            setShowCart(false);
                          }}
                        >
                          Show Details
                        </button>
                      </td>
                      <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">
                        {cartItem[Object.keys(cartItem)[2]]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="items-center justify-center">
                <button
                  className="bg-indigo-400 text-white px-4 py-2 rounded-md hover:bg-gray-500 focus:outline-none mt-4"
                  onClick={() => {
                    setShowCart(false);
                  }}
                >
                  Close Submitted Donation Requests
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="fixed bottom-4 right-4  p-4 rounded-full bg-purple-600 text-white cursor-pointer flex items-center">
        <FaIcons.FaCartPlus className="text-xl mr-2" />
        <button
          onClick={() => setShowCart(!showCart)}
          className="text-lg font-bold"
        >
          {cartItems.length}
        </button>
      </div>
    </div>
  );
};

export default DoctorRequests;
