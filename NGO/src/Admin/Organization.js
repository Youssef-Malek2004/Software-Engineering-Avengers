import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import OrganizationDetailsModal from "./OrganizationDetailsModal";

const Organization = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    area: "",
    governorate: "",
    type: "",
  });
  const [organizations, setOrganizations] = useState([
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
    {
      id: 6,
      name: "Organization 6",
      area: "Area 1",
      governorate: "Governorate 2",
      type: "Type 3",
    },
    {
      id: 7,
      name: "Organization 7",
      area: "Area 2",
      governorate: "Governorate 3",
      type: "Type 4",
    },
    {
      id: 8,
      name: "Organization 8",
      area: "Area 3",
      governorate: "Governorate 4",
      type: "Type 5",
    },
  ]);
  const [selectedOrganization, setSelectedOrganization] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleDeleteOrganization = (id) => {
    setOrganizations((prevOrganizations) =>
      prevOrganizations.filter((org) => org.id !== id)
    );
  };

  const handleViewDetails = (org) => {
    setSelectedOrganization(org);
    setIsModalVisible(true);
  };

  const filteredOrganizations = organizations.filter((org) => {
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
    <div className="flex flex-col items-center justify-center mt-4 w-full">
      <div className="my-4">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by organization name"
          className="border rounded px-2 py-1"
        />
      </div>
      <div className="flex space-x-4 mb-4">
        <select
          value={filters.area}
          onChange={(e) => setFilters({ ...filters, area: e.target.value })}
          className="border rounded px-2 py-1"
        >
          <option value="">All Areas</option>
          <option value="Area 1">Area 1</option>
          <option value="Area 2">Area 2</option>
          <option value="Area 3">Area 3</option>
      
        </select>
        <select
          value={filters.governorate}
          onChange={(e) =>
            setFilters({ ...filters, governorate: e.target.value })
          }
          className="border rounded px-2 py-1"
        >
          <option value="">All Governorates</option>
          <option value="Governorate 1">Governorate 1</option>
          <option value="Governorate 2">Governorate 2</option>
          <option value="Governorate 3">Governorate 3</option>
 
        </select>
        <select
          value={filters.type}
          onChange={(e) => setFilters({ ...filters, type: e.target.value })}
          className="border rounded px-2 py-1"
        >
          <option value="">All Types</option>
          <option value="Type 1">Type 1</option>
          <option value="Type 2">Type 2</option>
          <option value="Type 3">Type 3</option>

        </select>
      </div>
      <div className="flex justify-center items-center w-full">
        <div className="w-11/12 h-full">
          <table className="w-full bg-white border-collapse border">
            <thead>
              <tr
                className="text-white"
                style={{
                  background: "linear-gradient(to right, #9B1B59, #6b2d98)",
                }}
              >
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">Organization Name</th>
                <th className="px-4 py-2">Area</th>
                <th className="px-4 py-2">Governorate</th>
                <th className="px-4 py-2">Type</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrganizations.map((org) => (
                <tr key={org.id} className="border">
                  <td className="px-4 py-2">{org.id}</td>
                  <td className="px-4 py-2">{org.name}</td>
                  <td className="px-4 py-2">{org.area}</td>
                  <td className="px-4 py-2">{org.governorate}</td>
                  <td className="px-4 py-2">{org.type}</td>
                  <td className="px-4 py-2 flex ">
                    <button
                      onClick={() => handleDeleteOrganization(org.id)}
                      className="text-red-600 w-full"
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                    <button
                      onClick={() => handleViewDetails(org)}
                      className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-1 px-2 rounded"
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <OrganizationDetailsModal
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        organization={selectedOrganization}
      />
    </div>
  );
};

export default Organization;
