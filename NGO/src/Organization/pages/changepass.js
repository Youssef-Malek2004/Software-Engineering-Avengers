import React, { useState } from 'react';
//import { useHistory } from 'react-router-dom';
import {useNavigate } from 'react-router-dom';

const Changepass = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  //const history = useHistory(); // Get history object from React Router
  const navigate = useNavigate();

  const handleChangePassword = () => {
    if (!oldPassword || !newPassword || !confirmPassword) {
      setError('Please fill in all fields.');
    } else if (newPassword !== confirmPassword) {
      setError('New password and confirm password do not match.');
    } else {
      // Implement logic to change password
      // For demonstration purposes, simply log the password change
      console.log('Changing password...');
      console.log('Old Password:', oldPassword);
      console.log('New Password:', newPassword);
      console.log('Confirm Password:', confirmPassword);
      // Clear form fields and error message
      setOldPassword('');
      setNewPassword('');
      setConfirmPassword('');
      setError('');
      // Redirect to Home component after changing password
      navigate('/organization');
    }
  };

  return (
    <div className="max-w-md mx-auto p-8 bg-gray-300 text-gray-800 rounded-lg shadow-lg mt-20">
      <h2 className="text-2xl font-bold mb-4">Change Password</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div className="mb-4">
        <label htmlFor="oldPassword" className="block mb-2">Old Password</label>
        <input
          type="password"
          id="oldPassword"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
          className="w-full px-4 py-2 rounded bg-gray-200 text-gray-800 focus:outline-none focus:ring focus:ring-gray-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="newPassword" className="block mb-2">New Password</label>
        <input
          type="password"
          id="newPassword"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="w-full px-4 py-2 rounded bg-gray-200 text-gray-800 focus:outline-none focus:ring focus:ring-gray-500"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="confirmPassword" className="block mb-2">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full px-4 py-2 rounded bg-gray-200 text-gray-800 focus:outline-none focus:ring focus:ring-gray-500"
        />
      </div>
      <button
        onClick={handleChangePassword}
        className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-purple-500"
      >
        Change Password
      </button>
    </div>
  );
};

export default Changepass;
