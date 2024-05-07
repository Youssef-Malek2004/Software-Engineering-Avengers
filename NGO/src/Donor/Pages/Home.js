import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SignUpImage from "../../shared/assets/volunteerSignUp.jpg";

const Home = () => {
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
    <div className="flex flex-col items-center justify-center h-screen overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full">
        <div
          className="bg-cover bg-center w-full h-full opacity-90"
          style={{ backgroundImage: `url(${SignUpImage})` }}
        ></div>
      </div>
      <h1 className="absolute z-10 text-2xl font-bold text-white">
        Dark Heading
      </h1>
    </div>
  );
};

export default Home;
