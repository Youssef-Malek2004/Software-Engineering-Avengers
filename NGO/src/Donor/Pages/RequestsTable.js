import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";

const RequestsTable = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      type: "Clothes",
      quantity: 10,
      organization: "Org 1",
      selected: false,
    },
    {
      id: 2,
      type: "School Supplies",
      quantity: 20,
      organization: "Org 2",
      selected: false,
    },
    {
      id: 3,
      type: "Stationary Items",
      quantity: 5,
      organization: "Org 3",
      selected: false,
    },
    {
      id: 4,
      type: "Book Details",
      quantity: 15,
      organization: "Org 4",
      selected: false,
    },
    {
      id: 5,
      type: "Toys",
      quantity: 8,
      organization: "Org 5",
      selected: false,
    },
    {
      id: 6,
      type: "Food",
      quantity: 30,
      organization: "Org 6",
      selected: false,
    },
    {
      id: 7,
      type: "Medical",
      quantity: 12,
      organization: "Org 7",
      selected: false,
    },
    {
      id: 8,
      type: "Blood",
      quantity: 3,
      organization: "Org 8",
      selected: false,
    },
  ]);

  const [selectedItems, setSelectedItems] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [donateQuantity, setDonateQuantity] = useState(0);
  const [selectedItemId, setSelectedItemId] = useState(null);

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
    // You can handle the details action here
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
      <div className="w-3/4 h-3/4 overflow-auto">
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
                Organization
              </th>
              <th className="px-6 py-3 bg-purple-600 text-left text-xs leading-4 font-medium text-gray-100 uppercase tracking-wider text-center">
                Help
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
                    <span className="ml-2">{item.type}&nbsp; </span>
                    {getTypeIcon(item.type)}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900 text-center">
                  {item.quantity}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900 text-center">
                  {item.organization}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900 text-center">
                  <button
                    className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-900 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={() => handleDonateButtonClick(item.id)}
                  >
                    Donate
                  </button>
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
              <div className="flex justify-end">
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
      </div>
      <div className="fixed bottom-4 right-4 bg-purple-600 p-4 rounded-full text-white cursor-pointer flex items-center">
        <FaIcons.FaCartPlus className="text-xl mr-2" />
        <span onClick={() => setShowPopup(true)} className="text-lg font-bold">
          {selectedItems.length}
        </span>
      </div>
    </div>
  );
};

export default RequestsTable;
