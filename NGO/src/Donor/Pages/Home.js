import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SignUpImage from "../../shared/assets/background2.png";

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
    <div
      className="min-h-screen bg-cover bg-center justify-center items-start flex flex-col"
      style={{ backgroundImage: `url(${SignUpImage})` }}
    />
  );
};

export default Home;
