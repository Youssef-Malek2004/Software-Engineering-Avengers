import React from 'react';

const DonorDetailsModal = ({ visible, onCancel, donor }) => {
  // Check if donor exists before accessing its properties
  if (!visible || !donor) return null;

  // Dummy contact details for the donor

  console.log( `Donor ${donor} `)
  const contactDetails = {
    email: donor.email,
    contactNumber: donor.contactNumber,
    address: donor.address,
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg w-full max-w-md p-8">
        <div className="flex justify-end">
          <button onClick={onCancel} className="text-gray-600 hover:text-gray-800">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Donor Details</h2>
        <div>
          <p><strong>First Name:</strong> {donor.firstName}</p>
          <p><strong>Last Name:</strong> {donor.lastName}</p>
          {/* Render email, contactNumber, and address if available */}
          {donor.email && <p><strong>Email:</strong> {contactDetails.email}</p>}
          {donor.contactNumber && <p><strong>Contact Number:</strong> {contactDetails.contactNumber}</p>}
          {donor.address && <p><strong>Address:</strong> {contactDetails.address}</p>}
          <p><strong>Area:</strong> {donor.area}</p>
          <p><strong>Password:</strong> {donor.password}</p>
          <p><strong>Governote:</strong> {donor.governote}</p>
        </div>
      </div>
    </div>
  );
};

export default DonorDetailsModal;






