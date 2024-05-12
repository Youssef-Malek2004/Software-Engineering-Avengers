import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SignUpImage from "../../shared/assets/background2.png";
import Footer from "../../shared/components/Footer";
import NGOFooter from "../../shared/components/Footer";

const DoctorHome = () => {
  const [cards] = useState([
    { title: "Card-1", text: "hello" },
    { title: "Card-2", text: "hello" },
    { title: "Card-3", text: "hello" },
    { title: "Card-4", text: "hello" },
    { title: "Card-5", text: "hello" },
    { title: "Card-6", text: "hello" },
  ]);

  const navigate = useNavigate();

  const handleNavigateToDonors = () => {
    // Navigate to the Donors component
    navigate("/Donors");
  };

  const handleNavigateToOrganization = () => {
    // Navigate to the Organization component
    navigate("/Organization");
  };

  const handleNavigateToPendingRequests = () => {
    // Navigate to the PendingRequests component
    navigate("/PendingRequests");
  };
  const handleNavigateToAccountManagement = () => {
    navigate("/AccountManagement");
  };

  const handleNavigateToSubmissions = () => {
    navigate("/Submissions");
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center justify-center items-start flex flex-col"
      style={{ backgroundImage: `url(${SignUpImage})` }}
    >
      <div className="max-w-3xl px-8 my-auto justify-center items-center  ">
        <h1 className="text-4xl font-bold mb-4">Welcome, Doctor!</h1>
        <main className="text-left text-orange">
          <p className="text-lg mb-6">
            Thank you for considering BrightHorizon for your donation. Your
            generosity helps us make a positive impact in the world.
          </p>
          <p className="text-lg mb-6">
            By donating to BrightHorizon, you're contributing to projects that
            promote peace, prosperity, and equality. Together, we can create a
            brighter future for all.
          </p>
          <p className="text-lg mb-6">
            Check out the{" "}
            <Link to="/Doctor/doctorRequests" className="underline">
              Donation Requests including the Medical Cases
            </Link>{" "}
            to see how you can make a difference.
          </p>
          <p className="text-lg">
            Thank you for being a part of our journey towards positive change.
          </p>
        </main>
      </div>
    </div>
  );
};

export default DoctorHome;
