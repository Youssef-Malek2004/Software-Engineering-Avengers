import React, { useState } from "react";
import { AiOutlineEdit, AiOutlineUser } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const ChangeInfoTeacher = () => {
  const [formData, setFormData] = useState({
    firstName: "Mohammed",
    lastName: "Elshafie",
    gender: "male",
    email: "mohamed.elshafie@example.com",
    password: "********",
    contactNumber: "1234567890",
    organizationName: "NBIS",
    organizationType: "Educational Platform",
    organizationAddress: "123 Main Street",
    area: "Downtown",
    governorate: "Cityville",
    profilePicture: "/dummy-profile-pic.jpg", // Placeholder for profile picture
    verificationFile: null,
    maxClasses: "3",
    maxStudents: "8",
  });
  const navigate = useNavigate();

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
    governorate: false,
    maxClasses: false,
    maxStudents: false,
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [confirmationPopup, setConfirmationPopup] = useState(false);

  const handleChanges = () => {
    setConfirmationPopup(true);
    setEditableFields({
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
      governorate: false,
      maxClasses: false,
      maxStudents: false,
    });
  };

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
          <label className="block mb-1" htmlFor="firstName">
            First Name
          </label>
          <div className="flex items-center">
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="input"
              disabled={!editableFields.firstName}
            />
            {!editableFields.firstName && (
              <AiOutlineEdit
                onClick={() => handleEditField("firstName")}
                className="ml-2 cursor-pointer"
              />
            )}
          </div>
        </div>
        <div>
          <label className="block mb-1" htmlFor="lastName">
            Last Name
          </label>
          <div className="flex items-center">
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="input"
              disabled={!editableFields.lastName}
            />
            {!editableFields.lastName && (
              <AiOutlineEdit
                onClick={() => handleEditField("lastName")}
                className="ml-2 cursor-pointer"
              />
            )}
          </div>
        </div>
        <div>
          <label className="block mb-1" htmlFor="gender">
            Gender
          </label>
          <div className="flex items-center">
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="input"
              disabled={!editableFields.gender}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {!editableFields.gender && (
              <AiOutlineEdit
                onClick={() => handleEditField("gender")}
                className="ml-2 cursor-pointer"
              />
            )}
          </div>
        </div>
        {/* Contact Information */}
        <div>
          <label className="block mb-1" htmlFor="email">
            Email
          </label>
          <div className="flex items-center">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="input"
              disabled={!editableFields.email}
            />
            {!editableFields.email && (
              <AiOutlineEdit
                onClick={() => handleEditField("email")}
                className="ml-2 cursor-pointer"
              />
            )}
          </div>
        </div>

        <div>
          <label className="block mb-1" htmlFor="contactNumber">
            Contact Number
          </label>
          <div className="flex items-center">
            <input
              type="text"
              id="contactNumber"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              className="input"
              disabled={!editableFields.contactNumber}
            />
            {!editableFields.contactNumber && (
              <AiOutlineEdit
                onClick={() => handleEditField("contactNumber")}
                className="ml-2 cursor-pointer"
              />
            )}
          </div>
        </div>
        {/* Organization Information */}
        <div>
          <label className="block mb-1" htmlFor="organizationAddress">
            Address
          </label>
          <div className="flex items-center">
            <input
              type="text"
              id="organizationAddress"
              name="organizationAddress"
              value={formData.organizationAddress}
              onChange={handleChange}
              className="input"
              disabled={!editableFields.organizationAddress}
            />
            {!editableFields.organizationAddress && (
              <AiOutlineEdit
                onClick={() => handleEditField("organizationAddress")}
                className="ml-2 cursor-pointer"
              />
            )}
          </div>
        </div>
        <div>
          <label className="block mb-1" htmlFor="area">
            Area
          </label>
          <div className="flex items-center">
            <input
              type="text"
              id="area"
              name="area"
              value={formData.area}
              onChange={handleChange}
              className="input"
              disabled={!editableFields.area}
            />
            {!editableFields.area && (
              <AiOutlineEdit
                onClick={() => handleEditField("area")}
                className="ml-2 cursor-pointer"
              />
            )}
          </div>
        </div>
        <div>
          <label className="block mb-1" htmlFor="maxClasses">
            Max Pro Bono Classes
          </label>
          <div className="flex items-center">
            <input
              type="text"
              id="maxClasses"
              name="maxClasses"
              value={formData.maxClasses}
              onChange={handleChange}
              className="input"
              disabled={!editableFields.maxClasses}
            />
            {!editableFields.maxClasses && (
              <AiOutlineEdit
                onClick={() => handleEditField("maxClasses")}
                className="ml-2 cursor-pointer"
              />
            )}
          </div>
        </div>
        <div>
          <label className="block mb-1" htmlFor="maxStudents">
            Max Private Students
          </label>
          <div className="flex items-center">
            <input
              type="text"
              id="maxStudents"
              name="maxStudents"
              value={formData.maxStudents}
              onChange={handleChange}
              className="input"
              disabled={!editableFields.maxStudents}
            />
            {!editableFields.maxStudents && (
              <AiOutlineEdit
                onClick={() => handleEditField("maxStudents")}
                className="ml-2 cursor-pointer"
              />
            )}
          </div>
        </div>
        <div>
          <label className="block mb-1" htmlFor="governorate">
            Governorate
          </label>
          <div className="flex items-center">
            <input
              type="text"
              id="governorate"
              name="governorate"
              value={formData.governorate}
              onChange={handleChange}
              className="input"
              disabled={!editableFields.governorate}
            />
            {!editableFields.governorate && (
              <AiOutlineEdit
                onClick={() => handleEditField("governorate")}
                className="ml-2 cursor-pointer"
              />
            )}
          </div>
        </div>
        {/* Verification File */}
        <div className="col-span-2">
          <label className="block mb-1" htmlFor="verificationFile">
            Verification File
          </label>
          <input
            type="file"
            id="verificationFile"
            name="verificationFile"
            onChange={handleFileChange}
            className="input"
          />
        </div>
        {/* Save Changes Button */}
        <button
          type="submit"
          className="col-span-2 btn"
          onClick={handleChanges}
        >
          Save Changes
        </button>
      </form>
      {/* Delete Account Button */}
      <div className="mt-8 text-center">
        <button
          onClick={() => navigate("/")}
          className="btn bg-red-500 hover:bg-red-600"
        >
          Delete Account
        </button>
      </div>
      {/* Success Message */}
      {/* {showSuccessMessage && (
        <div className="mt-4 bg-purple-600 text-white p-2 rounded-md text-center">
          Your account info has been updated successfully.
        </div>
      )} */}
      {confirmationPopup && (
        <div class="fixed inset-0 flex items-center justify-center z-50 backdrop-blur confirm-dialog ">
          <div class="relative px-4 min-h-screen md:flex md:items-center md:justify-center">
            <div class=" opacity-25 w-full h-full absolute z-10 inset-0"></div>
            <div class="bg-white rounded-lg md:max-w-md md:mx-auto p-4 fixed inset-x-0 bottom-0 z-50 mb-4 mx-4 md:relative shadow-lg">
              <div class="md:flex items-center">
                <div class="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
                  <p class="font-bold">Success!</p>
                  <p class="text-sm text-gray-700 mt-1">
                    Account Information has been updated successfully.
                  </p>
                  <div className="flex justify-end items-end mt-3">
                    <button
                      type="submit"
                      className="flex justify-end items-end py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ml-5"
                      onClick={() => setConfirmationPopup(false)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChangeInfoTeacher;
