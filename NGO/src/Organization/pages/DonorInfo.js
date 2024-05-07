// DonorCards.js
import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import user1 from "../../shared/assets/userimage2.avif";
import user2 from "../../shared/assets/userimage.avif";
import user3 from "../../shared/assets/userimage3.avif";
import UserDetails from "../components/UserDetails"; // Import UserDetails component
import { useNavigate } from "react-router-dom";
const DonorCards = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Dummy donor data
  const donors = [
    { id: 1, name: "John Doe", gender: "Male", phone: "1234567890", image: user1 },
    { id: 2, name: "Jane Smith", gender: "Female", phone: "0987654321", image: user2 },
    { id: 3, name: "Alex Johnson", gender: "Male", phone: "5556667777", image: user3 }
  ];

  const navigate = useNavigate()
  
  

  // Filter donors based on search term
  const filteredDonors = donors.filter(donor =>
    donor.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-8 relative">
      <div className="flex justify-center items-center mb-4">
        <p className="font-bold text-xl">View Donor Details for Fulfilled Posts</p>
      </div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-40 px-3 py-2 rounded-md border-gray-300 shadow-sm focus:outline-none focus:border-indigo-500 absolute top-0 right-0 mt-4 mr-4"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
        {filteredDonors.map((donor,i) => ( 
          <div
            key={donor.id}
            onClick={(donor) => navigate(`./user-details/${i+1}`) } // Call handleCardClick on click
            className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer text-center"
          >
            <img 
              src={donor.image} 
              alt={donor.name} 
              className="w-full h-auto rounded-full mx-auto" 
              style={{ maxWidth: "150px", height: "150px", borderRadius: "50%" }}
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{donor.name}</div>
              <p className="text-gray-700 text-sm">Gender: {donor.gender}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonorCards;