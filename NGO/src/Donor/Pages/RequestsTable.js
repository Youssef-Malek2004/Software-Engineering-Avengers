import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import {
  clothes,
  SchoolSupplies,
  Toys,
  Food,
  Medical,
  Blood,
} from "./expandedTableItems";
import {
  ClothesTable,
  SchoolSuppliesTable,
  ToysTable,
  FoodTable,
  MedicalTable,
  BloodTable,
} from "./expandedTableItems";

const RequestsTable = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      type: "Clothes",
      quantity: 10,
      selected: false,
    },
    {
      id: 2,
      type: "School Supplies",
      quantity: 5,
      selected: false,
    },
    {
      id: 3,
      type: "Stationary Items",
      quantity: 5,
      selected: false,
    },
    {
      id: 4,
      type: "Book Details",
      quantity: 4,
      selected: false,
    },
    {
      id: 5,
      type: "Toys",
      quantity: 3,
      selected: false,
    },
    {
      id: 6,
      type: "Food",
      quantity: 7,
      selected: false,
    },
    {
      id: 7,
      type: "Medical",
      quantity: 3,
      selected: false,
    },
    {
      id: 8,
      type: "Blood",
      quantity: 3,
      selected: false,
    },
  ]);

  const Table = ({ items }) => {
    return (
      <table className="w-full divide-y divide-purple-600">
        <thead>
          <tr>
            <th className="px-6 py-3 bg-purple-600 text-left text-xs leading-4 font-medium text-gray-100 uppercase tracking-wider text-center">
              Type
            </th>
            <th className="px-6 py-3 bg-purple-600 text-left text-xs leading-4 font-medium text-gray-100 uppercase tracking-wider text-center">
              Quantity In Need
            </th>
            <th className="px-6 py-3 bg-purple-600 text-left text-xs leading-4 font-medium text-gray-100 uppercase tracking-wider text-center">
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
              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900 text-center">
                <button
                  className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-900 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={() => handleDetailsClick(item.id)}
                >
                  Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

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
        return null;
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-11/12 h-5/6 overflow-auto">
        {/* Button to expand table */}
        <div className="flex justify-end p-4">
          <button
            className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 focus:outline-none"
            onClick={() => setExpanded(!expanded)}
          >
            {!expanded ? "Collapse Table" : "Expand Table"}
          </button>
        </div>
        {expanded && (
          <table className="w-full divide-y divide-purple-600">
            <thead>
              <tr>
                <th className="px-6 py-3 bg-purple-600 text-left text-xs leading-4 font-medium text-gray-100 uppercase tracking-wider text-center">
                  Type
                </th>
                <th className="px-6 py-3 bg-purple-600 text-left text-xs leading-4 font-medium text-gray-100 uppercase tracking-wider text-center">
                  Quantity In Need
                </th>
                {/* <th className="px-6 py-3 bg-purple-600 text-left text-xs leading-4 font-medium text-gray-100 uppercase tracking-wider text-center">
                  Organization
                </th> */}
                {/* <th className="px-6 py-3 bg-purple-600 text-left text-xs leading-4 font-medium text-gray-100 uppercase tracking-wider text-center">
                Help
              </th> */}
                <th className="px-6 py-3 bg-purple-600 text-left text-xs leading-4 font-medium text-gray-100 uppercase tracking-wider text-center">
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
                      className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-900 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      onClick={() => handleDetailsClick(item.id)}
                    >
                      Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {!expanded && (
          <div>
            <h2 className="text-xl font-bold mb-4">Clothing Requests</h2>
            <ClothesTable
              items={clothes}
              cartItemsState={cartItems}
              setCartItemsFunc={setCartItems}
            />

            <h2 className="text-xl font-bold mb-4 mt-8">School Supplies</h2>
            <SchoolSuppliesTable items={SchoolSupplies} />

            <h2 className="text-xl font-bold mb-4 mt-8">Toys</h2>
            <ToysTable items={Toys} />

            <h2 className="text-xl font-bold mb-4 mt-8">Food</h2>
            <FoodTable items={Food} />

            <h2 className="text-xl font-bold mb-4 mt-8">Medical Requests</h2>
            <MedicalTable items={Medical} />

            <h2 className="text-xl font-bold mb-4 mt-8">Blood</h2>
            <BloodTable items={Blood} />
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
                  className="mr-2 bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 focus:outline-none"
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
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h1>Cart Items</h1>
              <table className="w-full divide-y divide-purple-600">
                <thead>
                  <tr>
                    <th className="px-6 py-3 bg-purple-600 text-left text-xs leading-4 font-medium text-gray-100 uppercase tracking-wider">
                      Type
                    </th>
                    <th className="px-6 py-3 bg-purple-600 text-left text-xs leading-4 font-medium text-gray-100 uppercase tracking-wider">
                      Quantity
                    </th>
                    <th className="px-6 py-3 bg-purple-600 text-left text-xs leading-4 font-medium text-gray-100 uppercase tracking-wider">
                      Organization
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y">
                  {cartItems.map((cartItem) => (
                    <tr key={cartItem.id}>
                      <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                        {cartItem.type}
                      </td>
                      <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">
                        {cartItem.quantity}
                      </td>
                      <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">
                        {cartItem.organization}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
      <div className="fixed bottom-4 right-4 bg-purple-600 p-4 rounded-full text-white cursor-pointer flex items-center">
        <FaIcons.FaCartPlus className="text-xl mr-2" />
        <button onClick={() => setShowCart(true)} className="text-lg font-bold">
          {cartItems.length}
        </button>
      </div>
    </div>
  );
};

export default RequestsTable;
