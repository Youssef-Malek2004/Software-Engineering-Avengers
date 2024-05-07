import React from "react";
import { useLocation ,useParams } from "react-router-dom";
import user1 from "../../shared/assets/userimage2.avif";
import user2 from "../../shared/assets/userimage.avif";
import user3 from "../../shared/assets/userimage3.avif";

const UserDetails = () => {
    // const donor = location.state;
    // Dummy donor data
    const donors = [
      { id: 1, name: "John Doe", gender: "Male", phone: "1234567890", image: user1,email:"John@hotmail.com",address:' Elm Avenue' },
      { id: 2, name: "Jane Smith", gender: "Female", phone: "0987654321", image: user2,email:"Jane@hotmail.com",address: 'Main Street' },
      { id: 3, name: "Alex Johnson", gender: "Male", phone: "5556667777", image: user3,email:"Alex@hotmail.com",address:' Pine Street' }
    ];
    const { idx } = useParams();

    const donor = donors.find(d => d.id === parseInt(idx));

    console.log(`DONOR ${donor} ${idx}`)

  return (
    <div className="max-w-xl mx-auto mt-8 p-8 bg-white shadow-md rounded-md relative">
      <div className="flex items-center justify-center mb-4">
        <img src={donor.image} alt={donor.name} className="w-32 h-32 rounded-full" />
      </div>
      <div className="mb-4 text-center">
        <h1 className="text-2xl font-bold">{donor.name}</h1>
      </div>
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-lg font-semibold">Gender:</p>
          <p>{donor.gender}</p>
        </div>
        <div>
          <p className="text-lg font-semibold">Phone:</p>
          <p>{donor.phone}</p>
        </div>
      </div>
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-lg font-semibold">Email:</p>
          <p>{donor.email}</p>
        </div>
        <div>
          <p className="text-lg font-semibold">Address:</p>
          <p>{donor.address}</p>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
