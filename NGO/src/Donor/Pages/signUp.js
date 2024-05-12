import React, { useState } from "react";
import SignUpImage from "../../shared/assets/volunteerSignUp.jpg";
import MapGet from "../Components/MapMarkerGet";
import * as FaIcons from "react-icons/fa";
import { faI } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    contactNumber: "",
    password: "",
    address: "",
    area: "",
    governorate: "",
    confirmPassword: "",
    role: "regular_donor", // New field for storing user's role
    // Additional fields for doctor
    clinicAddress: "",
    clinicArea: "",
    clinicGovernorate: "",
    specialty: "",
    maxCases: "",
  });

  const [showSubjectModal, setShowSubjectModal] = useState(false);
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [confirmationPopup, setConfirmationPopup] = useState(false);

  const handleConfirmLocation = () => {
    setShowPopup(false); // Close the main popup
    setConfirmationPopup(true); // Show the confirmation popup

    // Hide the confirmation popup after 2 seconds
    setTimeout(() => {
      setConfirmationPopup(false);
    }, 2000);
  };
  const Navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    Navigate("/login");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const toggleSubjectModal = () => {
    setShowSubjectModal(!showSubjectModal);
  };

  const handleSubjectSelect = (subject) => {
    if (selectedSubjects.includes(subject)) {
      setSelectedSubjects(selectedSubjects.filter((item) => item !== subject));
    } else {
      setSelectedSubjects([...selectedSubjects, subject]);
    }
  };

  const handleSaveSubjects = () => {
    setFormData({ ...formData, subjects: selectedSubjects });
    toggleSubjectModal();
  };

  return (
    <>
      {/* <Outline items={items} navBarItems={navBarItems} /> */}
      <div className="min-h-screen bg-gray-50">
        <div className="flex flex-col md:flex-row">
          <div
            className="bg-cover bg-center w-full md:w-1/2 h-64 md:h-auto opacity-90"
            style={{ backgroundImage: `url(${SignUpImage})` }}
          ></div>
          <div className="min-h-screen flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="bg-gray-200 py-8 px-4 sm:px-6 lg:px-8">
              <div className="max-w-md w-full space-y-8 ">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                  Sign Up
                </h2>
                {/* Role selection */}
                <div className="flex justify-center mb-4">
                  <button
                    className={`mr-4 px-4 py-2 rounded-md focus:outline-none ${
                      formData.role === "regular_donor"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-300 text-gray-600"
                    }`}
                    onClick={() =>
                      setFormData({ ...formData, role: "regular_donor" })
                    }
                  >
                    Regular Donor
                  </button>
                  <button
                    className={`mr-4 px-4 py-2 rounded-md focus:outline-none ${
                      formData.role === "doctor"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-300 text-gray-600"
                    }`}
                    onClick={() => setFormData({ ...formData, role: "doctor" })}
                  >
                    Doctor
                  </button>
                  <button
                    className={`px-4 py-2 rounded-md focus:outline-none ${
                      formData.role === "teacher"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-300 text-gray-600"
                    }`}
                    onClick={() =>
                      setFormData({ ...formData, role: "teacher" })
                    }
                  >
                    Teacher
                  </button>
                  <button
                    className={`ml-4 px-4 py-2 rounded-md focus:outline-none ${
                      formData.role === "Organization"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-300 text-gray-600"
                    }`}
                    onClick={() =>
                      setFormData({ ...formData, role: "Organization" })
                    }
                  >
                    Organization
                  </button>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                  {/* Teacher-specific fields */}
                  {formData.role === "teacher" && (
                    <>
                      <div>
                        <button
                          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          onClick={toggleSubjectModal}
                        >
                          Choose Subjects
                        </button>
                      </div>
                      <div>
                        <label htmlFor="maxProBonoClasses" className="sr-only">
                          Max Pro Bono Classes
                        </label>
                        <input
                          id="maxProBonoClasses"
                          name="maxProBonoClasses"
                          type="number"
                          autoComplete="max-pro-bono-classes"
                          required
                          className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                          placeholder="Max Pro Bono Classes"
                          value={formData.maxProBonoClasses}
                          onChange={handleChange}
                        />
                      </div>
                      <div>
                        <label htmlFor="maxPrivateStudents" className="sr-only">
                          Max Private Students
                        </label>
                        <input
                          id="maxPrivateStudents"
                          name="maxPrivateStudents"
                          type="number"
                          autoComplete="max-private-students"
                          required
                          className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                          placeholder="Max Private Students"
                          value={formData.maxPrivateStudents}
                          onChange={handleChange}
                        />
                      </div>
                    </>
                  )}
                  {/* Teacher-specific fields */}
                  {formData.role === "Organization" && (
                    <>
                      {/* Additional fields for doctor */}
                      <div>
                        <label
                          htmlFor="organizationAddress"
                          className="sr-only"
                        >
                          Organization Address
                        </label>
                        <input
                          id="organizationAddress"
                          name="organizationAddress"
                          type="text"
                          autoComplete="Organization-address"
                          required
                          className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                          placeholder="Oranization Address"
                          value={formData.organizationAddress}
                          onChange={handleChange}
                        />
                      </div>
                      <div>
                        <label htmlFor="organizationArea" className="sr-only">
                          Clinic Area
                        </label>
                        <input
                          id="organizationArea"
                          name="organizationArea"
                          type="text"
                          autoComplete="Organization-area"
                          required
                          className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                          placeholder="Organization Area"
                          value={formData.organizationArea}
                          onChange={handleChange}
                        />
                      </div>
                      <div>
                        <label htmlFor="clinicGovernorate" className="sr-only">
                          Organization Governorate
                        </label>
                        <input
                          id="organizationGovernorate"
                          name="organizationGovernorate"
                          type="text"
                          autoComplete="Organization-governorate"
                          required
                          className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                          placeholder="Organization Governorate"
                          value={formData.organizationGovernorate}
                          onChange={handleChange}
                        />
                      </div>
                      <button
                        className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        onClick={() => setShowPopup(true)}
                      >
                        Add Organization Location Marker
                      </button>
                    </>
                  )}
                  {formData.role === "doctor" && (
                    <>
                      {/* Additional fields for doctor */}
                      <div>
                        <label htmlFor="clinicAddress" className="sr-only">
                          Clinic Address
                        </label>
                        <input
                          id="clinicAddress"
                          name="clinicAddress"
                          type="text"
                          autoComplete="clinic-address"
                          required
                          className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                          placeholder="Clinic Address"
                          value={formData.clinicAddress}
                          onChange={handleChange}
                        />
                      </div>
                      <div>
                        <label htmlFor="clinicArea" className="sr-only">
                          Clinic Area
                        </label>
                        <input
                          id="clinicArea"
                          name="clinicArea"
                          type="text"
                          autoComplete="clinic-area"
                          required
                          className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                          placeholder="Clinic Area"
                          value={formData.clinicArea}
                          onChange={handleChange}
                        />
                      </div>
                      <div>
                        <label htmlFor="clinicGovernorate" className="sr-only">
                          Clinic Governorate
                        </label>
                        <input
                          id="clinicGovernorate"
                          name="clinicGovernorate"
                          type="text"
                          autoComplete="clinic-governorate"
                          required
                          className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                          placeholder="Clinic Governorate"
                          value={formData.clinicGovernorate}
                          onChange={handleChange}
                        />
                      </div>
                      <div>
                        <label htmlFor="specialty" className="sr-only">
                          Specialty
                        </label>
                        <input
                          id="specialty"
                          name="specialty"
                          type="text"
                          autoComplete="specialty"
                          required
                          className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                          placeholder="Specialty"
                          value={formData.specialty}
                          onChange={handleChange}
                        />
                      </div>
                      <div>
                        <label htmlFor="maxCases" className="sr-only">
                          Max Cases
                        </label>
                        <input
                          id="maxCases"
                          name="maxCases"
                          type="number"
                          autoComplete="max-cases"
                          required
                          className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                          placeholder="Max Cases"
                          value={formData.maxCases}
                          onChange={handleChange}
                        />
                      </div>
                      <button
                        className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        onClick={() => setShowPopup(true)}
                      >
                        Add Clinic Location Marker
                      </button>
                    </>
                  )}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="sr-only">
                        First Name
                      </label>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        autoComplete="given-name"
                        required
                        className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="sr-only">
                        Last Name
                      </label>
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        autoComplete="family-name"
                        required
                        className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="gender" className="sr-only">
                        Gender
                      </label>
                      <select
                        id="gender"
                        name="gender"
                        className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        value={formData.gender}
                        onChange={handleChange}
                      >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="email" className="sr-only">
                        Email address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Email address"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="contactNumber" className="sr-only">
                        Contact Number
                      </label>
                      <input
                        id="contactNumber"
                        name="contactNumber"
                        type="text"
                        autoComplete="tel"
                        required
                        className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Contact Number"
                        value={formData.contactNumber}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="password" className="sr-only">
                        Password
                      </label>
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="new-password"
                        required
                        className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="confirmPassword" className="sr-only">
                        Confirm Password
                      </label>
                      <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        autoComplete="new-password"
                        required
                        className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="address" className="sr-only">
                        Address
                      </label>
                      <input
                        id="address"
                        name="address"
                        type="text"
                        autoComplete="street-address"
                        required
                        className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Address"
                        value={formData.address}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="area" className="sr-only">
                        Area
                      </label>
                      <input
                        id="area"
                        name="area"
                        type="text"
                        autoComplete="address-level2"
                        required
                        className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Area"
                        value={formData.area}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="governorate" className="sr-only">
                        Governorate
                      </label>
                      <input
                        id="governorate"
                        name="governorate"
                        type="text"
                        autoComplete="address-level1"
                        required
                        className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Governorate"
                        value={formData.governorate}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      onSubmit={handleSubmit}
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Sign Up
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* Subject selection modal */}
        {showSubjectModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
            <div className="bg-white p-8 max-w-md mx-auto rounded-md items-center">
              <h3 className="text-lg font-semibold mb-4 items-center">
                Select Subjects
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {["Math", "Science", "English", "History"].map((subject) => (
                  <div
                    key={subject}
                    className={`border p-4 rounded-md cursor-pointer ${
                      selectedSubjects.includes(subject.toLowerCase())
                        ? "bg-blue-500 text-white"
                        : ""
                    }`}
                    onClick={() => handleSubjectSelect(subject.toLowerCase())}
                  >
                    {subject}
                  </div>
                ))}
              </div>
              <div className="mt-4 flex justify-end">
                <button
                  className="px-4 py-2 bg-blue-500 text-white rounded-md"
                  onClick={handleSaveSubjects}
                >
                  Select Subjects
                </button>
              </div>
            </div>
          </div>
        )}{" "}
        {showPopup && (
          <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-lg">
              <div className="p-6">
                <MapGet apiKey="AIzaSyCukQG4LqeiVrSCUcMnURRO53mPx9hBzok" />
                <div className="flex flex-row items-center justify-center mt-5">
                  <button
                    type="submit"
                    className=" w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mr-5"
                    onClick={handleConfirmLocation}
                  >
                    Confirm Location
                  </button>
                  <button
                    type="submit"
                    className=" w-full  flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ml-5"
                    onClick={() => setShowPopup(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* Confirmation Popup */}
        {confirmationPopup && (
          <div class="fixed inset-0 flex items-center justify-center z-50 backdrop-blur confirm-dialog ">
            <div class="relative px-4 min-h-screen md:flex md:items-center md:justify-center">
              <div class=" opacity-25 w-full h-full absolute z-10 inset-0"></div>
              <div class="bg-white rounded-lg md:max-w-md md:mx-auto p-4 fixed inset-x-0 bottom-0 z-50 mb-4 mx-4 md:relative shadow-lg">
                <div class="md:flex items-center">
                  <div class="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
                    <p class="font-bold">Success!</p>
                    <p class="text-sm text-gray-700 mt-1">
                      Location has successfully been set.
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
    </>
  );
}

export default SignUp;
