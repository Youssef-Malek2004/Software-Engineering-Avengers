import React from "react";
import user1 from "../../shared/assets/userimage2.avif";

const UserDetails = ({ user }) => {
    const usercopy = { 
        name: "John Doe", 
        gender: "Male", 
        phone: "1234567890", 
        image: user1,
        email: "john@example.com",
        address: "123 Street, City",
    };

  return (
    <div className="max-w-xl mx-auto mt-8 p-8 bg-white shadow-md rounded-md relative">
      <div className="flex items-center justify-center mb-4">
        <img src={usercopy.image} alt={usercopy.name} className="w-32 h-32 rounded-full" />
      </div>
      <div className="mb-4 text-center">
        <h1 className="text-2xl font-bold">{usercopy.name}</h1>
      </div>
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-lg font-semibold">Gender:</p>
          <p>{usercopy.gender}</p>
        </div>
        <div>
          <p className="text-lg font-semibold">Phone:</p>
          <p>{usercopy.phone}</p>
        </div>
      </div>
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-lg font-semibold">Email:</p>
          <p>{usercopy.email}</p>
        </div>
        <div>
          <p className="text-lg font-semibold">Address:</p>
          <p>{usercopy.address}</p>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
