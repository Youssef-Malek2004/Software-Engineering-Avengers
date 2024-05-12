import React from "react";

const OrganizationDetailsModal = ({ visible, onCancel, organization }) => {
  // Generate dummy contact details
  const contactDetails = {
    email: "organization@example.com",
    phone: "123-456-7890",
    address: "123 Main Street, City, Country",
  };

  // Generate dummy Google Maps location
  const googleMapsLocation = {
    latitude: 40.7128,
    longitude: -74.006,
  };

  return (
    <>
      {visible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg w-full max-w-md p-8">
            <div className="flex justify-end">
              <button
                onClick={onCancel}
                className="text-gray-600 hover:text-gray-800"
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
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Organization Details
            </h2>
            <table className="table-auto w-full">
              <tbody>
                <tr>
                  <td className="font-semibold">Name:</td>
                  <td>{organization.name}</td>
                </tr>
                <tr>
                  <td className="font-semibold">Contact Email:</td>
                  <td>{contactDetails.email}</td>
                </tr>
                <tr>
                  <td className="font-semibold">Contact Phone:</td>
                  <td>{contactDetails.phone}</td>
                </tr>
                <tr>
                  <td className="font-semibold">Address:</td>
                  <td>{contactDetails.address}</td>
                </tr>
                <tr>
                  <td className="font-semibold">Google Maps Location:</td>
                  <td>
                    <div className="mt-2">
                      <iframe
                        title="Google Maps Location"
                        width="100%"
                        height="200"
                        src={`https://maps.google.com/maps?q=${googleMapsLocation.latitude},${googleMapsLocation.longitude}&output=embed`}
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default OrganizationDetailsModal;
