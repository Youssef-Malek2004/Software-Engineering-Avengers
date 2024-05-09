import React, { useState } from 'react';
import { AiOutlineEdit, AiOutlineUser } from 'react-icons/ai';

const ProfilePage = () => {
  const [formData, setFormData] = useState({
    firstName: 'Mohammed',
    lastName: 'Elshafie',
    gender: 'male',
    email: 'mohamed.elshafie@example.com',
    password: '********',
    contactNumber: '1234567890',
    organizationName: 'NBIS',
    organizationType: 'Educational Platform',
    organizationAddress: '123 Main Street',
    area: 'Downtown',
    governorate: 'Cityville',
    profilePicture: '/dummy-profile-pic.jpg', // Placeholder for profile picture
    verificationFile: null
  });
  const [editableFields, setEditableFields] = useState({
    firstName: false,
    lastName: false,
    gender: false,
    email: false,
    password: false,
    contactNumber: false,
    organizationName: false,
    organizationType: false,
    organizationAddress: false,
    area: false,
    governorate: false
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEditField = (field) => {
    setEditableFields({ ...editableFields, [field]: true });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 2000);
    console.log(formData);
  };

  const handleDeleteAccount = () => {
    // Implement logic to delete account
    console.log("Account deleted!");
  };

  return (
    <div className="max-w-screen-lg mx-auto p-6 bg-white rounded-md shadow-md">
      <h1 className="text-2xl text-center mb-6">Account Information</h1>
      {/* User Icon */}
      <div className="mb-8 flex items-center justify-center">
        <AiOutlineUser className="h-20 w-20 text-gray-400" />
      </div>
      {/* Form for Account Information */}
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
        {/* Basic Information */}
        <div>
          <label className="block mb-1" htmlFor="firstName">First Name</label>
          <div className="flex items-center">
            <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} className="input" disabled={!editableFields.firstName} />
            {!editableFields.firstName && <AiOutlineEdit onClick={() => handleEditField('firstName')} className="ml-2 cursor-pointer" />}
          </div>
        </div>
        <div>
          <label className="block mb-1" htmlFor="lastName">Last Name</label>
          <div className="flex items-center">
            <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} className="input" disabled={!editableFields.lastName} />
            {!editableFields.lastName && <AiOutlineEdit onClick={() => handleEditField('lastName')} className="ml-2 cursor-pointer" />}
          </div>
        </div>
        <div>
          <label className="block mb-1" htmlFor="gender">Gender</label>
          <div className="flex items-center">
            <select id="gender" name="gender" value={formData.gender} onChange={handleChange} className="input" disabled={!editableFields.gender}>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {!editableFields.gender && <AiOutlineEdit onClick={() => handleEditField('gender')} className="ml-2 cursor-pointer" />}
          </div>
        </div>
        {/* Contact Information */}
        <div>
          <label className="block mb-1" htmlFor="email">Email</label>
          <div className="flex items-center">
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="input" disabled={!editableFields.email} />
            {!editableFields.email && <AiOutlineEdit onClick={() => handleEditField('email')} className="ml-2 cursor-pointer" />}
          </div>
        </div>
        <div>
          <label className="block mb-1" htmlFor="password">Password</label>
          <div className="flex items-center">
            <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="input" disabled={!editableFields.password} />
            {!editableFields.password && <AiOutlineEdit onClick={() => handleEditField('password')} className="ml-2 cursor-pointer" />}
          </div>
        </div>
        <div>
          <label className="block mb-1" htmlFor="contactNumber">Contact Number</label>
          <div className="flex items-center">
            <input type="text" id="contactNumber" name="contactNumber" value={formData.contactNumber} onChange={handleChange} className="input" disabled={!editableFields.contactNumber} />
            {!editableFields.contactNumber && <AiOutlineEdit onClick={() => handleEditField('contactNumber')} className="ml-2 cursor-pointer" />}
          </div>
        </div>
        {/* Organization Information */}
        <div>
          <label className="block mb-1" htmlFor="organizationName">Organization Name</label>
          <div className="flex items-center">
            <input type="text" id="organizationName" name="organizationName" value={formData.organizationName} onChange={handleChange} className="input" disabled={!editableFields.organizationName} />
            {!editableFields.organizationName && <AiOutlineEdit onClick={() => handleEditField('organizationName')} className="ml-2 cursor-pointer" />}
          </div>
        </div>
        <div>
          <label className="block mb-1" htmlFor="organizationType">Organization Type</label>
          <div className="flex items-center">
            <input type="text" id="organizationType" name="organizationType" value={formData.organizationType} onChange={handleChange} className="input" disabled={!editableFields.organizationType} />
            {!editableFields.organizationType && <AiOutlineEdit onClick={() => handleEditField('organizationType')} className="ml-2 cursor-pointer" />}
          </div>
        </div>
        <div>
          <label className="block mb-1" htmlFor="organizationAddress">Organization Address</label>
          <div className="flex items-center">
            <input type="text" id="organizationAddress" name="organizationAddress" value={formData.organizationAddress} onChange={handleChange} className="input" disabled={!editableFields.organizationAddress} />
            {!editableFields.organizationAddress && <AiOutlineEdit onClick={() => handleEditField('organizationAddress')} className="ml-2 cursor-pointer" />}
          </div>
        </div>
        <div>
          <label className="block mb-1" htmlFor="area">Area</label>
          <div className="flex items-center">
            <input type="text" id="area" name="area" value={formData.area} onChange={handleChange} className="input" disabled={!editableFields.area} />
            {!editableFields.area && <AiOutlineEdit onClick={() => handleEditField('area')} className="ml-2 cursor-pointer" />}
          </div>
        </div>
        <div>
          <label className="block mb-1" htmlFor="governorate">Governorate</label>
          <div className="flex items-center">
            <input type="text" id="governorate" name="governorate" value={formData.governorate} onChange={handleChange} className="input" disabled={!editableFields.governorate} />
            {!editableFields.governorate && <AiOutlineEdit onClick={() => handleEditField('governorate')} className="ml-2 cursor-pointer" />}
          </div>
        </div>
        {/* Verification File */}
        <div className="col-span-2">
          <label className="block mb-1" htmlFor="verificationFile">Verification File</label>
          <input type="file" id="verificationFile" name="verificationFile" onChange={handleFileChange} className="input" />
        </div>
        {/* Save Changes Button */}
        <button type="submit" className="col-span-2 btn">Save Changes</button>
      </form>
      {/* Delete Account Button */}
      <div className="mt-8 text-center">
        <button onClick={handleDeleteAccount} className="btn bg-red-500 hover:bg-red-600">Delete Account</button>
      </div>
      {/* Success Message */}
      {showSuccessMessage && (
        <div className="mt-4 bg-purple-600 text-white p-2 rounded-md text-center">
          Your account info has been updated successfully.
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
