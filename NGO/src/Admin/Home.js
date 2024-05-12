import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [cards] = useState([
    { title: "Donors", text: null },
    { title: "Organizations", text: null },
    { title: "Organizations Requests", text: null },
    { title: "Donor Requests", text: null },
  ]);

  const navigate = useNavigate();

  const handleNavigateToDonors = () => {
    // Navigate to the Donors component
    navigate("/Admin/Donors");
  };

  const handleNavigateToOrganization = () => {
    // Navigate to the Organization component
    navigate("/Admin/Organization");
  };

  const handleNavigateToOrganizationRequests = () => {
    // Navigate to the OrganizationRequests component
    navigate("/Admin/OrganizationRequests");
  };

  const handleNavigateToDonorRequests = () => {
    // Navigate to the DonorRequests component
    navigate("/Admin/DonorRequests");
  };

  return (
    <div>
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-center mb-10">
            Admin Dashboard
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cards.map((card, i) => (
              <div
                key={i}
                className="rounded-lg overflow-hidden border border-purple-600"
              >
                <div className="bg-white rounded-t-lg p-6">
                  <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                  <p className="text-gray-600">{card.text}</p>
                </div>
                <div className="bg-white px-6 py-4 flex justify-center rounded-b-lg">
                  {card.title === "Donors" && (
                    <button
                      className="btn"
                      onClick={handleNavigateToDonors}
                      style={{
                        background:
                          "linear-gradient(to right, #9B1B59, #6b2d98)",
                      }}
                    >
                      Navigate
                    </button>
                  )}
                  {card.title === "Organizations" && (
                    <button
                      className="btn"
                      onClick={handleNavigateToOrganization}
                      style={{
                        background:
                          "linear-gradient(to right, #9B1B59, #6b2d98)",
                      }}
                    >
                      Navigate
                    </button>
                  )}
                  {card.title === "Organizations Requests" && (
                    <button
                      className="btn"
                      onClick={handleNavigateToOrganizationRequests}
                      style={{
                        background:
                          "linear-gradient(to right, #9B1B59, #6b2d98)",
                      }}
                    >
                      Navigate
                    </button>
                  )}
                  {card.title === "Donor Requests" && (
                    <button
                      className="btn"
                      onClick={handleNavigateToDonorRequests}
                      style={{
                        background:
                          "linear-gradient(to right, #9B1B59, #6b2d98)",
                      }}
                    >
                      Navigate
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
