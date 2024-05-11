import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";

const TeacherPickup = () => {
  // Dummy data
  const donations = [
    {
      id: 1,
      itemType: "Clothing",
      quantity: 5,
      detailsButton: "View Details",
      scheduleButton: "Schedule Pickup",
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
      quantity: 8,
      detailsButton: "View Details",
      scheduleButton: "Schedule Pickup",
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
      quantity: 5,
      detailsButton: "View Details",
      scheduleButton: "Schedule Pickup",
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
  ];

  const [detailsItem, setDetailsItem] = useState(null);
  const [showModal2, setShowModal2] = useState(false);

  // Dummy data for time slots
  const timeSlots = [
    { id: 1, time: "Morning (8:00 AM - 12:00 PM)" },
    { id: 2, time: "Afternoon (12:00 PM - 4:00 PM)" },
    { id: 3, time: "Evening (4:00 PM - 8:00 PM)" },
  ];

  // State for modal visibility and selected options
  const [showModal, setShowModal] = useState(false);
  const [transportation, setTransportation] = useState("");
  const [timeSlot, setTimeSlot] = useState("");

  // Function to handle schedule pickup button click
  const handleSchedulePickup = () => {
    setShowModal(true);
  };

  // Function to handle modal close
  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform actions based on selected transportation and time slot
    console.log("Selected transportation:", transportation);
    console.log("Selected time slot:", timeSlot);
    setShowModal(false);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-11/12 h-5/6 overflow-auto mt-5">
        <h2 className="text-xl font-bold mb-4 text-center">Donation Items</h2>
        <table className="w-full divide-y divide-purple-600">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-purple-600 text-center text-xs leading-4 font-medium text-gray-100 uppercase tracking-wider">
                Type
              </th>
              <th className="px-6 py-3 bg-purple-600 text-center text-xs leading-4 font-medium text-gray-100 uppercase tracking-wider">
                Quantity
              </th>
              <th className="px-6 py-3 bg-purple-600 text-center text-xs leading-4 font-medium text-gray-100 uppercase tracking-wider">
                More Details
              </th>
              <th className="px-6 py-3 bg-purple-600 text-center text-xs leading-4 font-medium text-gray-100 uppercase tracking-wider">
                Schedule Pickup
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y items-center justify-center">
            {donations.map((donation) => (
              <tr key={donation.id}>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900 text-center">
                  {donation.type}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900 text-center">
                  {donation.quantity}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900 justify-center">
                  <button
                    className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-indigo-900 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={() => {
                      setShowModal2(true);
                      setDetailsItem(donation);
                    }}
                  >
                    {donation.detailsButton}
                  </button>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900 items-center justify-center">
                  <button
                    className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-indigo-900 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={() => handleSchedulePickup()}
                  >
                    {donation.scheduleButton}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Modal for scheduling pickup */}
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-4 text-center">
              Schedule Pickup
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label
                  htmlFor="transportation"
                  className="block text-lg font-medium text-gray-700"
                >
                  Select Transportation
                </label>
                <select
                  id="transportation"
                  name="transportation"
                  value={transportation}
                  onChange={(e) => setTransportation(e.target.value)}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
                >
                  <option value="">Select</option>
                  <option value="truck">Truck</option>
                  <option value="car">Car</option>
                  <option value="motorcycle">Motorcycle</option>
                </select>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="timeSlot"
                  className="block text-lg font-medium text-gray-700"
                >
                  Select Time Slot
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot.id}
                      type="button"
                      onClick={() => setTimeSlot(slot.time)}
                      className={`${
                        timeSlot === slot.time
                          ? "bg-indigo-500 text-white"
                          : "bg-white text-gray-700"
                      } inline-flex items-center px-6 py-3 border border-gray-300 text-lg leading-6 font-medium rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition ease-in-out duration-150`}
                    >
                      {slot.time}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="mr-2 bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 focus:outline-none"
                >
                  Confirm Pickup
                </button>
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="bg-gray-400 text-white px-6 py-3 rounded-md hover:bg-gray-500 focus:outline-none"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {showModal2 && detailsItem.itemType == "Clothing" && (
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
                  onClick={() => setShowModal2(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {showModal2 && detailsItem.itemType == "Toys" && (
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
                  onClick={() => setShowModal2(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {showModal2 && detailsItem.itemType == "Books" && (
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
                  onClick={() => setShowModal2(false)}
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

export default TeacherPickup;
