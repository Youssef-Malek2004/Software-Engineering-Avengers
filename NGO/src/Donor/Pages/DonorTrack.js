import React, { useState } from "react";

const DonorTrack = () => {
  // Dummy data
  const donations = [
    {
      id: 1,
      itemType: "Clothing",
      detailsButton: "View Details",
      ETA: "12:30 PM",
      vehicleType: "Truck",
      timeSlot: "Morning (8:00 AM - 12:00 PM)",
      type: "Shirt",
      age: "Adult",
      gender: "Male",
      season: "Spring",
      material: "Cotton",
      organization: "Org 1",
    },
    {
      id: 2,
      itemType: "Toys",
      detailsButton: "View Details",
      ETA: "2:00 PM",
      vehicleType: "Car",
      timeSlot: "Afternoon (12:00 PM - 4:00 PM)",
      type: "Board Game",
      age: "5-7",
      gender: "Unisex",
      category: "Board Games",
      picture: "board_game.jpg",
      organizationInNeed: "Children's Shelter",
    },
    {
      id: 3,
      itemType: "Books",
      detailsButton: "View Details",
      ETA: "4:45 PM",
      vehicleType: "Motorcycle",
      timeSlot: "Evening (4:00 PM - 8:00 PM)",
      type: "Book",
      item: "Math Textbooks",
      author: "Karim Waleed",
      language: "English",
      edition: "2nd Edition",
      summary: "The Rules of Differentiation and Integration.",
      picture: "math_textbook.jpg",
      quantityInNeed: 30,
      organization: "School D",
    },
    // Add more dummy data as needed
  ];

  const [detailsItem, setDetailsItem] = useState(null);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-11/12 h-5/6 overflow-auto mt-5">
        <h2 className="text-xl font-bold mb-4 text-center">
          Donation Pickup Status
        </h2>
        <table className="w-full divide-y divide-indigo-600">
          <thead>
            <tr
              style={{
                background: "linear-gradient(to right, #9B1B59, #6b2d98)",
              }}
            >
              <th className="px-6 py-3  text-center text-xs leading-4 font-medium text-gray-100 uppercase tracking-wider">
                Item Type
              </th>
              <th className="px-6 py-3  text-center text-xs leading-4 font-medium text-gray-100 uppercase tracking-wider">
                Details
              </th>
              <th className="px-6 py-3  text-center text-xs leading-4 font-medium text-gray-100 uppercase tracking-wider">
                ETA
              </th>
              <th className="px-6 py-3  text-center text-xs leading-4 font-medium text-gray-100 uppercase tracking-wider">
                Vehicle Type
              </th>
              <th className="px-6 py-3  text-center text-xs leading-4 font-medium text-gray-100 uppercase tracking-wider">
                Time Slot
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y items-center justify-center">
            {donations.map((donation) => (
              <tr key={donation.id}>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900 text-center">
                  {donation.itemType}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900 justify-center">
                  <button
                    className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-indigo-900 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={() => {
                      setShowModal(true);
                      setDetailsItem(donation);
                    }}
                  >
                    {donation.detailsButton}
                  </button>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900 text-center">
                  {donation.ETA}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900 text-center">
                  {donation.vehicleType}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900 text-center">
                  {donation.timeSlot}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showModal && detailsItem.itemType == "Clothing" && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold mb-4 text-center">
                  Clothing Details
                </h2>
                <p className="text-2xl">Clothing: {detailsItem.type}</p>
                <p className="text-2xl">Age: {detailsItem.age}</p>
                <p className="text-2xl">Gender: {detailsItem.gender}</p>
                <p className="text-2xl">Season: {detailsItem.season}</p>
                <p className="text-2xl">Material: {detailsItem.material}</p>
                <p className="mb-4 text-2xl">
                  Organization: {detailsItem.organization}
                </p>
                <button
                  className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500 focus:outline-none ml-2"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {showModal && detailsItem.itemType == "Toys" && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold mb-4 text-center">
                  Toy Details
                </h2>
                <p className="text-2xl">Toy type: {detailsItem.type}</p>
                <p className="text-2xl">Age: {detailsItem.age}</p>
                <p className="text-2xl">Gender: {detailsItem.gender}</p>
                <p className="text-2xl">Category: {detailsItem.category}</p>
                <p className="mb-4 text-2xl">
                  Organization: {detailsItem.organizationInNeed}
                </p>
                <button
                  className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500 focus:outline-none ml-2"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {showModal && detailsItem.itemType == "Books" && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold mb-4 text-center">
                  Book Details
                </h2>
                <p className="text-2xl">Book: {detailsItem.item}</p>
                <p className="text-2xl">Author: {detailsItem.author}</p>
                <p className="text-2xl">Summary: {detailsItem.summary}</p>
                <p className="mb-4 text-2xl">
                  Organization: {detailsItem.organization}
                </p>
                <button
                  className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500 focus:outline-none ml-2"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DonorTrack;
