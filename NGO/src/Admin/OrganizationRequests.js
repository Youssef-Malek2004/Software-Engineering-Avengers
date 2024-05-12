import React, { useState } from "react";
import OrganizationDetailsModal from "./OrganizationDetailsModal";

const OrganizationRequests = () => {
  const [organizationRequests, setOrganizationRequests] = useState([
    { id: 1, name: "Organization 1", submissions: "Document 1" },
    { id: 2, name: "Organization 2", submissions: "Document 2" },
    { id: 3, name: "Organization 3", submissions: "Document 3" },
  ]);
  const [selectedOrganization, setSelectedOrganization] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleViewSubmissions = (org) => {
    setSelectedOrganization(org);
    setIsModalVisible(true);
  };

  const handleAcceptOrganization = (id) => {
    setOrganizationRequests((prevOrgs) =>
      prevOrgs.filter((org) => org.id !== id)
    );
  };

  const handleRejectOrganization = (id) => {
    setOrganizationRequests((prevOrgs) =>
      prevOrgs.filter((org) => org.id !== id)
    );
  };

  return (
    <div className="container mx-auto p-4 mt-16">
      <table className="w-full table-auto bg-white text-black-900 -collapse   mt-10 ">
        <thead>
          <tr
            className=" text-white"
            style={{
              background: "linear-gradient(to right, #9B1B59, #6b2d98)",
            }}
          >
            <th className="  px-4 py-2">Organization Name</th>
            <th className="  px-4 py-2">Submissions</th>
            <th className="  px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {organizationRequests.map((org) => (
            <tr key={org.id} className="-t ">
              <td className="  px-4 py-2">{org.name}</td>
              <td className="  px-4 py-2">
                <button
                  onClick={() => handleViewSubmissions(org)}
                  className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-1 px-2 rounded"
                >
                  View Submission
                </button>
                <a
                  href="#"
                  download="dummy-document.pdf"
                  className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-1 px-2 rounded ml-2"
                >
                  Download
                </a>
              </td>
              <td className="  px-4 py-2 flex justify-between">
                <div className="flex space-x-4">
                  <button
                    onClick={() => handleAcceptOrganization(org.id)}
                    className="text-green-600 -none"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </button>
                  <button
                    onClick={() => handleRejectOrganization(org.id)}
                    className="text-red-600 -none"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      ></path>
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <OrganizationDetailsModal
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        organization={selectedOrganization}
      />
    </div>
  );
};

export default OrganizationRequests;
