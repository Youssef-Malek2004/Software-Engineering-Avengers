import React, { useState } from "react";
import { Link } from "react-router-dom";
import createDonationImage from "../../shared/assets/donpost.avif";
import viewDonationImage from "../../shared/assets/viewpost.avif";

const Home = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [details, setDetails] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setShowOptions(false);
  };

  const handlePost = () => {
    // Handle posting data
    console.log("Details for", selectedOption + ":", details);
    // Show success message
    setShowSuccessMessage(true);
    // Close the pop-up box
    setSelectedOption("");
    setDetails("");
    // Hide success message after 3 seconds
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);
  };

  const handleClose = () => {
    setShowOptions(false);
    setSelectedOption("");
    setDetails("");
  };

  return (
    <div className="relative">
      {/* Donations text in the middle */}
      <h1 className="text-3xl font-bold text-center mt-10 ">Donations</h1>
      <div className="flex justify-center items-center h-screen">
        <div className="grid grid-cols-2 gap-8">
          {/* Card for creating donation posts */}
          <div className="bg-white rounded-lg overflow-hidden cursor-pointer shadow-md">
            <Link to="#" onClick={() => setShowOptions(true)}>
              <img src={createDonationImage} alt="Create Donation" className="w-full h-64 object-cover rounded-t-lg" />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">Create Donation Post</h2>
                <p>Create a new donation post</p>
              </div>
            </Link>
          </div>
          {/* Card for viewing donation posts */}
          <div className="bg-white rounded-lg overflow-hidden cursor-pointer shadow-md">
            <Link to="/organization/viewdonationposts">
              <img src={viewDonationImage} alt="View Donation" className="w-full h-64 object-cover rounded-t-lg" />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">View Donation Posts</h2>
                <p>View all donation posts</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Semi-transparent overlay for the pop-up */}
      {showOptions && (
        <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50" onClick={handleClose}></div>
      )}
      {/* Pop-up box for choosing options */}
      {showOptions && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center">
          <div className="bg-white p-8 rounded-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Choose Option</h2>
              <button onClick={handleClose}>&times;</button>
            </div>
            <ul>
              <li
                className="cursor-pointer hover:bg-gray-200 transition duration-300"
                onClick={() => handleOptionClick("Clothes")}
              >
                Clothes
              </li>
              <li
                className="cursor-pointer hover:bg-gray-200 transition duration-300"
                onClick={() => handleOptionClick("Toys")}
              >
                Toys
              </li>
              <li
                className="cursor-pointer hover:bg-gray-200 transition duration-300"
                onClick={() => handleOptionClick("School Supplies")}
              >
                School Supplies
              </li>
              <li
                className="cursor-pointer hover:bg-gray-200 transition duration-300"
                onClick={() => handleOptionClick("Food")}
              >
                Food
              </li>
            </ul>
          </div>
        </div>
      )}
      {/* Pop-up box for entering details */}
      {selectedOption && (
        <div className="fixed inset-0 flex justify-center items-center">
          <div className="bg-white p-8 rounded-md backdrop-filter backdrop-blur-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Enter Details for {selectedOption}</h2>
              <button onClick={handleClose}>&times;</button>
            </div>
            {/* Render different input fields based on selected option */}
            {selectedOption === "Clothes" && (
              <>
                <input
                  type="text"
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  className="w-full border rounded-md p-2 mb-4"
                  placeholder="Type"
                />
                <input
                  type="text"
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  className="w-full border rounded-md p-2 mb-4"
                  placeholder="Age"
                />
                <input
                  type="text"
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  className="w-full border rounded-md p-2 mb-4"
                  placeholder="Gender"
                />
                <input
                  type="text"
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  className="w-full border rounded-md p-2 mb-4"
                  placeholder="Season"
                />
              </>
            )}
            {selectedOption === "Toys" && (
              <>
                <input
                  type="text"
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  className="w-full border rounded-md p-2 mb-4"
                  placeholder="Item"
                />
                <input
                  type="text"
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  className="w-full border rounded-md p-2 mb-4"
                  placeholder="Age"
                />
                <input
                  type="text"
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  className="w-full border rounded-md p-2 mb-4"
                  placeholder="Gender"
                />
                <input
                  type="text"
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  className="w-full border rounded-md p-2 mb-4"
                  placeholder="Category"
                />
              </>
            )}
            {selectedOption === "School Supplies" && (
              <>
                <input
                  type="text"
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  className="w-full border rounded-md p-2 mb-4"
                  placeholder="Type"
                />
                <input
                  type="text"
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  className="w-full border rounded-md p-2 mb-4"
                  placeholder="Item"
                />
              </>
            )}
            {selectedOption === "Food" && (
              <>
                <input
                  type="text"
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  className="w-full border rounded-md p-2 mb-4"
                  placeholder="Category"
                />
                <input
                  type="text"
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  className="w-full border rounded-md p-2 mb-4"
                  placeholder="Item"
                />
              </>
            )}
            {/* Close button */}
            <button className="bg-red-500 text-white py-2 px-4 rounded-md mr-2" onClick={handleClose}>Close</button>
            {/* Post button */}
            <button className="bg-blue-500 text-white py-2 px-4 rounded-md" onClick={handlePost}>Post</button>
          </div>
        </div>
      )}
      {/* Success message */}
      {showSuccessMessage && (
        <div className="fixed bottom-0 left-0 w-full bg-green-500 text-white py-3 text-center">
          Donation post added successfully!
        </div>
      )}
    </div>
  );
};

export default Home;
