import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SignUpImage from "../../shared/assets/volunteerSignUp.jpg";

const DonationRequests = () => {
  const [cards] = useState([
    { title: "Clothes", icon: "👕" },
    { title: "School-Supplies", icon: "📚" },
    { title: "Stationary-Items", icon: "🖊️" },
    { title: "Book Details", icon: "📖" },
    { title: "Toys", icon: "🎮" },
    { title: "Food", icon: "🍔" },
    { title: "Medical", icon: "⚕️" },
    { title: "Blood", icon: "💉" },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  const handleNavigateToDonors = () => {
    navigate("/Donors");
  };

  const handleCardClick = (card) => {
    // Navigate to UserDetailsPage with card title as parameter
    navigate(`${card.title}`);
  };

  return (
    // <div
    //   className="flex flex-col items-center justify-center h-screen bg-cover bg-center bg-fixed"
    //   // style={{ backgroundImage: `url(${SignUpImage})` }}
    // >
    <div className="p-8 relative">
      <div className="flex justify-center items-center mb-4">
        <p className="font-bold text-xl">Donation Categories</p>
      </div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-40 px-3 py-2 rounded-md border-gray-300 shadow-sm focus:outline-none focus:border-indigo-500 absolute top-0 right-0 mt-4 mr-4"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
        {cards.map((card) => (
          <div
            key={card.title}
            onClick={() => handleCardClick(card)} // Call handleCardClick on click
            className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer text-center"
            style={{ backgroundColor: "#6D38A9" }}
          >
            <span className="text-5xl">{card.icon}</span>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{card.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
    // </div>
  );
};

export default DonationRequests;
