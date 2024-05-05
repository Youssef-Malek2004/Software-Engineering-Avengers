import React, { useState } from "react";

const Test = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    area: "",
    governorate: "",
    type: "",
  });

  const organizationsData = [
    {
      id: 1,
      name: "Organization 1",
      area: "Area 1",
      governorate: "Governorate 1",
      type: "Type 1",
    },
    {
      id: 2,
      name: "Organization 2",
      area: "Area 2",
      governorate: "Governorate 2",
      type: "Type 2",
    },
    {
      id: 3,
      name: "Organization 3",
      area: "Area 3",
      governorate: "Governorate 3",
      type: "Type 3",
    },
    {
      id: 4,
      name: "Organization 4",
      area: "Area 4",
      governorate: "Governorate 4",
      type: "Type 4",
    },
    {
      id: 5,
      name: "Organization 5",
      area: "Area 5",
      governorate: "Governorate 5",
      type: "Type 5",
    },
  ];

  const filteredOrganizations = organizationsData.filter((org) => {
    const matchName = org.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchArea = filters.area ? org.area === filters.area : true;
    const matchGovernorate = filters.governorate
      ? org.governorate === filters.governorate
      : true;
    const matchType = filters.type ? org.type === filters.type : true;
    return matchName && matchArea && matchGovernorate && matchType;
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full space-y-8">
        <div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by organization name"
            className="w-full px-3 py-2 placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div className="flex space-x-4">
          <select
            value={filters.area}
            onChange={(e) => setFilters({ ...filters, area: e.target.value })}
            className="w-1/3 px-3 py-2 placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          >
            <option value="">All Areas</option>
            <option value="Area 1">Area 1</option>
            <option value="Area 2">Area 2</option>
          </select>
          <select
            value={filters.governorate}
            onChange={(e) =>
              setFilters({ ...filters, governorate: e.target.value })
            }
            className="w-1/3 px-3 py-2 placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          >
            <option value="">All Governorates</option>
            <option value="Governorate 1">Governorate 1</option>
            <option value="Governorate 2">Governorate 2</option>
          </select>
          <select
            value={filters.type}
            onChange={(e) => setFilters({ ...filters, type: e.target.value })}
            className="w-1/3 px-3 py-2 placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          >
            <option value="">All Types</option>
            <option value="Type 1">Type 1</option>
            <option value="Type 2">Type 2</option>
          </select>
        </div>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                ID
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Organization Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Area
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Governorate
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Type
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredOrganizations.map((org) => (
              <tr key={org.id} className="hover:bg-gray-100">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {org.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {org.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {org.area}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {org.governorate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {org.type}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Test;
