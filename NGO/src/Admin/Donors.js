import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Donors = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({ profession: '' });

  const [donors, setDonors] = useState([
    { id: 1, name: 'Donor 1', age: 30, profession: 'Teacher' },
    { id: 2, name: 'Donor 2', age: 35, profession: 'Doctor' },
    { id: 3, name: 'Donor 3', age: 40, profession: 'Teacher' },
    { id: 4, name: 'Donor 4', age: 45, profession: 'Doctor' },
  ]);

  const handleDeleteDonor = id => {
    setDonors(prevDonors => prevDonors.filter(donor => donor.id !== id));
  };

  const filteredDonors = donors.filter(donor => {
    const matchName = donor.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchProfession = filters.profession ? donor.profession === filters.profession : true;
    return matchName && matchProfession;
  });

  return (
    <div className="flex flex-col items-center">
      <div className="my-4">
        <input
          type="text"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder="Search by donor name"
          className="border rounded px-2 py-1"
        />
      </div>
      <div className="flex space-x-4 mb-4">
        <select
          value={filters.profession}
          onChange={e => setFilters({ ...filters, profession: e.target.value })}
          className="border rounded px-2 py-1"
        >
          <option value="">All Professions</option>
          <option value="Teacher">Teacher</option>
          <option value="Doctor">Doctor</option>
        </select>
      </div>
      <table className="w-full table-auto bg-white text-black-900 border-collapse border border-purple-900">
        <thead>
          <tr className="bg-purple-800 text-white">
            <th className="border border-purple-900 px-4 py-2">ID</th>
            <th className="border border-purple-900 px-4 py-2">Name</th>
            <th className="border border-purple-900 px-4 py-2">Age</th>
            <th className="border border-purple-900 px-4 py-2">Profession</th>
            <th className="border border-purple-900 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredDonors.map(donor => (
            <tr key={donor.id} className="border-purple-600">
              <td className="border border-purple-900 px-4 py-2">{donor.id}</td>
              <td className="border border-purple-900 px-4 py-2">{donor.name}</td>
              <td className="border border-purple-900 px-4 py-2">{donor.age}</td>
              <td className="border border-purple-900 px-4 py-2">{donor.profession}</td>
              <td className="border border-purple-900 px-4 py-2">
                <button onClick={() => handleDeleteDonor(donor.id)} className="text-red-600">
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Donors;






