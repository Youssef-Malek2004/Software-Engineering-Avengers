import React, { useState } from "react";
import Map from "../Components/MapComponent";

export const clothes = [
  {
    id: 1,
    type: "Shirt",
    age: "Adult",
    gender: "Male",
    season: "Spring",
    material: "Cotton",
    quantity: 50,
    organization: "Org 1",
  },
  {
    id: 2,
    type: "Dress",
    age: "Child",
    gender: "Female",
    season: "Summer",
    material: "Polyester",
    quantity: 30,
    organization: "Org 2",
  },
  {
    id: 3,
    type: "Jacket",
    age: "Teen",
    gender: "Male",
    season: "Fall",
    material: "Nylon",
    quantity: 20,
    organization: "Org 3",
  },
  {
    id: 4,
    type: "Pants",
    age: "Adult",
    gender: "Female",
    season: "Winter",
    material: "Denim",
    quantity: 40,
    organization: "Org 4",
  },
  {
    id: 5,
    type: "Sweater",
    age: "Child",
    gender: "Unisex",
    season: "Spring",
    material: "Wool",
    quantity: 25,
    organization: "Org 5",
  },
  {
    id: 6,
    type: "Skirt",
    age: "Teen",
    gender: "Female",
    season: "Summer",
    material: "Cotton",
    quantity: 35,
    organization: "Org 6",
  },
  {
    id: 7,
    type: "Hoodie",
    age: "Adult",
    gender: "Male",
    season: "Fall",
    material: "Polyester",
    quantity: 45,
    organization: "Org 7",
  },
  {
    id: 8,
    type: "Shorts",
    age: "Child",
    gender: "Female",
    season: "Winter",
    material: "Cotton",
    quantity: 15,
    organization: "Org 8",
  },
  {
    id: 9,
    type: "T-shirt",
    age: "Teen",
    gender: "Male",
    season: "Spring",
    material: "Cotton",
    quantity: 55,
    organization: "Org 9",
  },
  {
    id: 10,
    type: "Jeans",
    age: "Adult",
    gender: "Female",
    season: "Summer",
    material: "Denim",
    quantity: 60,
    organization: "Org 10",
  },
];

export const SchoolSupplies = [
  {
    id: 1,
    type: "Stationary",
    item: "Pens",
    quantityInNeed: 100,
    organization: "School A",
  },
  {
    id: 2,
    type: "Stationary",
    item: "Notebooks",
    quantityInNeed: 50,
    organization: "School B",
  },
  {
    id: 3,
    type: "Stationary",
    item: "Markers",
    quantityInNeed: 75,
    organization: "School C",
  },
  {
    id: 4,
    type: "Book",
    item: "Math Textbooks",
    author: "Karim Waleed",
    language: "English",
    edition: "2nd Edition",
    summary: "The Rules of Differentiation and Integration.",
    picture: "math_textbook.jpg",
    quantityInNeed: 30,
    organization: "School D",
  },
  {
    id: 5,
    type: "Book",
    item: "English Literature Books",
    author: "John Doe",
    language: "English",
    edition: "4rd Edition",
    summary: "Comprehensive guide to English Literature.",
    picture: "english_literature.jpg",
    quantityInNeed: 20,
    organization: "School E",
  },
  {
    id: 6,
    type: "Stationary",
    item: "Scissors",
    quantityInNeed: 50,
    organization: "School F",
  },
  {
    id: 7,
    type: "Book",
    item: "Science Encyclopedia",
    author: "John Smith",
    language: "English",
    edition: "3rd Edition",
    summary: "Comprehensive guide to various scientific concepts and topics.",
    picture: "science_encyclopedia.jpg",
    quantityInNeed: 15,
    organization: "School G",
  },
  {
    id: 8,
    type: "Book",
    item: "History Textbooks",
    author: "Emily Johnson",
    language: "English",
    edition: "2nd Edition",
    summary: "Covers major historical events from around the world.",
    picture: "history_textbooks.jpg",
    quantityInNeed: 25,
    organization: "School H",
  },
];

export const Toys = [
  {
    id: 1,
    type: "Board Game",
    age: "5-7",
    gender: "Unisex",
    category: "Board Games",
    picture: "board_game.jpg",
    quantity: 20,
    organizationInNeed: "Children's Shelter",
  },
  {
    id: 2,
    type: "Stuffed Toy",
    age: "2-4",
    gender: "Female",
    category: "Stuffed Toys",
    picture: "stuffed_toy.jpg",
    quantity: 15,
    organizationInNeed: "Children's Shelter",
  },
  {
    id: 3,
    type: "Doll",
    age: "3-6",
    gender: "Female",
    category: "Dolls",
    picture: "doll.jpg",
    quantity: 25,
    organizationInNeed: "Children's Shelter",
  },
  {
    id: 4,
    type: "Sports Equipment",
    age: "8-12",
    gender: "Male",
    category: "Sports",
    picture: "sports_equipment.jpg",
    quantity: 30,
    organizationInNeed: "Orphanage Home",
  },
  {
    id: 5,
    type: "Toy Car",
    age: "3-5",
    gender: "Unisex",
    category: "Cars",
    picture: "toy_car.jpg",
    quantity: 10,
    organizationInNeed: "Orphanage Home",
  },
  {
    id: 6,
    type: "Outdoor Playset",
    age: "5-10",
    gender: "Unisex",
    category: "Outdoor",
    picture: "outdoor_playset.jpg",
    quantity: 18,
    organizationInNeed: "Orphanage Home",
  },
];

export const Food = [
  {
    id: 1,
    category: "Fruits and Vegetables",
    itemName: "Apples",
    quantityRequired: "20 KG",
    organizationInNeed: "Food Bank",
  },
  {
    id: 2,
    category: "Fruits and Vegetables",
    itemName: "Carrots",
    quantityRequired: "15 KG",
    organizationInNeed: "Food Bank",
  },
  {
    id: 3,
    category: "Canned Foods",
    itemName: "Canned Soup",
    quantityRequired: "50 cans",
    organizationInNeed: "Food Bank",
  },
  {
    id: 4,
    category: "Canned Foods",
    itemName: "Canned Beans",
    quantityRequired: "30 cans",
    organizationInNeed: "Food Bank",
  },
  {
    id: 5,
    category: "Fresh Meals",
    itemName: "Grilled Chicken",
    quantityRequired: "10 meals",
    organizationInNeed: "Food Bank",
  },
  {
    id: 6,
    category: "Fresh Meals",
    itemName: "Salad",
    quantityRequired: "15 meals",
    organizationInNeed: "Food Bank",
  },
  {
    id: 7,
    category: "Baked Goods",
    itemName: "Bread",
    quantityRequired: "20 loaves",
    organizationInNeed: "Food Bank",
  },
  {
    id: 8,
    category: "Baked Goods",
    itemName: "Muffins",
    quantityRequired: "25 pieces",
    organizationInNeed: "Food Bank",
  },
];

export const Medical = [
  {
    id: 1,
    type: "Medical Device",
    deviceName: "Blood Pressure Monitor",
    use: "Monitoring blood pressure levels",
    image: "blood_pressure_monitor.jpg",
    quantity: 10,
    organizationInNeed: "Hospital A",
  },
  {
    id: 2,
    type: "Medical Device",
    deviceName: "Thermometer",
    use: "Measuring body temperature",
    image: "thermometer.jpg",
    quantity: 15,
    organizationInNeed: "Hospital A",
  },
  {
    id: 3,
    type: "Medical Equipment",
    deviceName: "Wheelchair",
    use: "Mobility assistance",
    image: "wheelchair.jpg",
    quantity: 5,
    organizationInNeed: "Hospital A",
  },
  {
    id: 4,
    type: "Medical Equipment",
    deviceName: "Crutches",
    use: "Mobility assistance",
    image: "crutches.jpg",
    quantity: 8,
    organizationInNeed: "Hospital B",
  },
  {
    id: 5,
    type: "Medication",
    medicationName: "Painkillers",
    use: "Pain relief",
    image: "painkillers.jpg",
    quantity: "100 tablets",
    organizationInNeed: "Hospital B",
  },
  {
    id: 6,
    type: "Medication",
    medicationName: "Antibiotics",
    use: "Treatment of bacterial infections",
    image: "antibiotics.jpg",
    quantity: "50 tablets",
    organizationInNeed: "Hospital C",
  },
];

export const Blood = [
  {
    id: 1,
    patientName: "John Smith",
    bloodType: "A+",
    rhType: "+",
    hospitalName: "City Hospital",
    area: "Downtown",
    governorate: "Metropolis",
    hospitalAddress: "123 Main Street, Downtown, Metropolis",
    latitude: 37.7749,
    longitude: -122.4194,
  },
  {
    id: 2,
    patientName: "Emily Johnson",
    bloodType: "B-",
    rhType: "-",
    hospitalName: "Community Hospital",
    area: "Westside",
    governorate: "Metropolis",
    hospitalAddress: "456 Elm Street, Westside, Metropolis",
    latitude: 37.7749,
    longitude: -122.4194,
  },
  {
    id: 3,
    patientName: "Michael Williams",
    bloodType: "O+",
    rhType: "+",
    hospitalName: "Metropolis General",
    area: "Uptown",
    governorate: "Metropolis",
    hospitalAddress: "789 Oak Avenue, Uptown, Metropolis",
    latitude: 37.7749,
    longitude: -122.4194,
  },
];

export const TeachingData = [
  {
    id: 1,
    numberOfStudents: 5,
    address: "123 Main Street, Cityville, USA",
    latitude: 40.7128,
    area: "Downtown",
    governorate: "New York",
    longitude: -74.006,
    subjects: ["Mathematics", "Science"],
  },
  {
    id: 2,
    numberOfStudents: 3,
    address: "456 Elm Avenue, Townsville, USA",
    latitude: 34.0522,
    area: "Downtown",
    governorate: "Los Angeles",
    longitude: -118.2437,
    subjects: ["English", "History"],
  },
  {
    id: 3,
    numberOfStudents: 8,
    address: "789 Oak Boulevard, Villagetown, USA",
    latitude: 41.8781,
    area: "MidTown",
    governorate: "Chicago",
    longitude: -87.6298,
    subjects: ["Art", "Music"],
  },
  {
    id: 4,
    numberOfStudents: 2,
    address: "101 Pine Street, Hamletville, USA",
    latitude: 51.5074,
    area: "UpTown",
    governorate: "London",
    longitude: -0.1278,
    subjects: ["Foreign Language", "Computer Science"],
  },
];

export const MedicalData = [
  {
    id: 1,
    patientName: "John Doe",
    age: 35,
    gender: "Male",
    weight: "75 kg",
    location: {
      latitude: 34.052235,
      longitude: -118.243683,
    },
    address: "123 Main Street, Cityville, USA",
    organizationName: "City Hospital",
    medicalSpecialty: "Cardiology",
    caseDescription: "Patient needs surgery for a heart condition.",
    area: "Downtown",
    governorate: "Los Angeles",
  },
  {
    id: 2,
    patientName: "Jane Smith",
    age: 45,
    gender: "Female",
    weight: "65 kg",
    location: {
      latitude: 40.712776,
      longitude: -74.005974,
    },
    address: "456 Elm Street, Townville, USA",
    organizationName: "Town Medical Center",
    medicalSpecialty: "Orthopedics",
    caseDescription: "Patient has a broken leg and requires surgery.",
    area: "Downtown",
    governorate: "New York",
  },
  {
    id: 3,
    patientName: "Alice Johnson",
    age: 28,
    gender: "Female",
    weight: "55 kg",
    location: {
      latitude: 37.774929,
      longitude: -122.419418,
    },
    address: "789 Oak Boulevard, Villagetown, USA",
    organizationName: "Village Clinic",
    medicalSpecialty: "Dermatology",
    caseDescription:
      "Patient has a severe skin condition that needs treatment.",
    area: "Downtown",
    governorate: "San Francisco",
  },
];

export const ClothesTable = ({ items, cartItemsState, setCartItemsFunc }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState(false);
  const [filter, setFilter] = useState("All");
  const [ageFilter, setAgeFilter] = useState("All");
  const [genderFilter, setGenderFilter] = useState("All");
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [donateQuantity, setDonateQuantity] = useState(0);
  const [showDonationPopup, setDonationPopup] = useState(false);

  function handleDonateItem(item) {
    const newItem = {
      type: "Clothes",
      item,
      handleDetailsButtonClick,
    };

    setCartItemsFunc((cartItemsState) => [...cartItemsState, newItem]);
  }

  const handlePopupClose = () => {
    setShowPopup(false);
    setSelectedItem(null);
  };

  const handleDonationPopupClose = () => {
    setDonationPopup(false);
    //selectedItem.q
  };

  const handleDonateConfirm = () => {
    setDonationPopup(false);
    handleDonateItem(selectedItem);
    handlePopupClose();
    selectedItem.quantity -= donateQuantity;
  };

  const handleDetailsButtonClick = (item) => {
    setSelectedItem(item);
    setShowPopup(true);
  };

  const applyFilters = (item) => {
    const seasonFilterPassed =
      !selectedFilters.includes("season") ||
      filter === "All" ||
      item.season === filter;
    const genderFilterPassed =
      !selectedFilters.includes("gender") ||
      genderFilter === "All" ||
      item.gender === genderFilter;
    const ageFilterPassed =
      !selectedFilters.includes("age") ||
      ageFilter === "All" ||
      item.age === ageFilter;
    return seasonFilterPassed && genderFilterPassed && ageFilterPassed;
  };

  const filteredItems = items.filter((item) => applyFilters(item));

  const toggleSelectFilter = () => {
    setSelectedFilter(!selectedFilter);
  };
  const handleFilterSelect = (filter) => {
    if (selectedFilters.includes(filter)) {
      setSelectedFilters(selectedFilters.filter((item) => item !== filter));
    } else {
      setSelectedFilters([...selectedFilters, filter]);
    }
  };

  return (
    <div>
      <div className="flex justify-between mb-4">
        {/* Filter button */}
        <button
          className="ml-2 justify-left py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={toggleSelectFilter}
        >
          Filter
        </button>
        {selectedFilters.includes("age") && (
          <div className="flex justify-center flex-grow">
            <button
              className={`ml-2 px-4 py-2 rounded-md focus:outline-none ${
                ageFilter === "All" ? "bg-indigo-600 text-white" : "bg-gray-200"
              }`}
              onClick={() => setAgeFilter("All")}
            >
              All
            </button>
            <button
              className={`mx-2 px-4 py-2 rounded-md focus:outline-none ${
                ageFilter === "Child"
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => setAgeFilter("Child")}
            >
              Child
            </button>
            <button
              className={`mx-2 px-4 py-2 rounded-md focus:outline-none ${
                ageFilter === "Teen"
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => setAgeFilter("Teen")}
            >
              Teen
            </button>
            <button
              className={`mx-2 px-4 py-2 rounded-md focus:outline-none ${
                ageFilter === "Adult"
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => setAgeFilter("Adult")}
            >
              Adult
            </button>
          </div>
        )}
        {selectedFilters.includes("gender") && (
          <div className="flex justify-center flex-grow">
            <button
              className={`ml-2 px-4 py-2 rounded-md focus:outline-none ${
                genderFilter === "All"
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => setGenderFilter("All")}
            >
              All
            </button>
            <button
              className={`mx-2 px-4 py-2 rounded-md focus:outline-none ${
                genderFilter === "Male"
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => setGenderFilter("Male")}
            >
              Male
            </button>
            <button
              className={`mx-2 px-4 py-2 rounded-md focus:outline-none ${
                genderFilter === "Female"
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => setGenderFilter("Female")}
            >
              Female
            </button>
            <button
              className={`mx-2 px-4 py-2 rounded-md focus:outline-none ${
                genderFilter === "Unisex"
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => setGenderFilter("Unisex")}
            >
              Unisex
            </button>
          </div>
        )}
        {selectedFilters.includes("season") && (
          <div className="flex justify-center flex-grow">
            <button
              className={`ml-2 px-4 py-2 rounded-md focus:outline-none ${
                filter === "All" ? "bg-indigo-600 text-white" : "bg-gray-200"
              }`}
              onClick={() => setFilter("All")}
            >
              All
            </button>
            <button
              className={`mx-2 px-4 py-2 rounded-md focus:outline-none ${
                filter === "Spring" ? "bg-indigo-600 text-white" : "bg-gray-200"
              }`}
              onClick={() => setFilter("Spring")}
            >
              Spring
            </button>
            <button
              className={`mx-2 px-4 py-2 rounded-md focus:outline-none ${
                filter === "Summer" ? "bg-indigo-600 text-white" : "bg-gray-200"
              }`}
              onClick={() => setFilter("Summer")}
            >
              Summer
            </button>
            <button
              className={`mx-2 px-4 py-2 rounded-md focus:outline-none ${
                filter === "Winter" ? "bg-indigo-600 text-white" : "bg-gray-200"
              }`}
              onClick={() => setFilter("Winter")}
            >
              Winter
            </button>
            <button
              className={`mx-2 px-4 py-2 rounded-md focus:outline-none ${
                filter === "Fall" ? "bg-indigo-600 text-white" : "bg-gray-200"
              }`}
              onClick={() => setFilter("Fall")}
            >
              Fall
            </button>
          </div>
        )}
      </div>

      <table className="w-full divide-y divide-purple-600">
        <thead>
          <tr>
            <th className="px-6 py-3 bg-purple-600 text-left text-xs leading-4 font-medium text-gray-100 uppercase tracking-wider text-center">
              Type
            </th>
            <th className="px-6 py-3 bg-purple-600 text-left text-xs leading-4 font-medium text-gray-100 uppercase tracking-wider text-center">
              Age
            </th>
            <th className="px-6 py-3 bg-purple-600 text-left text-xs leading-4 font-medium text-gray-100 uppercase tracking-wider text-center">
              Gender
            </th>
            <th className="px-6 py-3 bg-purple-600 text-left text-xs leading-4 font-medium text-gray-100 uppercase tracking-wider text-center">
              Season
            </th>
            <th className="px-6 py-3 bg-purple-600 text-left text-xs leading-4 font-medium text-gray-100 uppercase tracking-wider text-center">
              Organization
            </th>
            <th className="px-6 py-3 bg-purple-600 text-left text-xs leading-4 font-medium text-gray-100 uppercase tracking-wider text-center">
              View Details
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y">
          {filteredItems.map((item) => (
            <tr key={item.id}>
              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900 text-center">
                {item.type}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900 text-center">
                {item.age}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900 text-center">
                {item.gender}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900 text-center">
                {item.season}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900 text-center">
                {item.organization}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900 text-center">
                <button
                  className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-900 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={() => handleDetailsButtonClick(item)}
                >
                  Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-4">Details</h2>
            <p className="text-2xl">Material: {selectedItem.material}</p>
            <p className="text-2xl">
              Quantity in Need: {selectedItem.quantity}
            </p>
            <p className="mb-4 text-2xl">
              Organization: {selectedItem.organization}
            </p>
            <button
              className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 focus:outline-none"
              onClick={() => setDonationPopup(true)}
            >
              Donate
            </button>
            <button
              className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500 focus:outline-none ml-2"
              onClick={handlePopupClose}
            >
              Close
            </button>
          </div>
        </div>
      )}
      {selectedFilter && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 ">
          <div className="bg-white p-8 mx-auto rounded-md items-center max-w-2xl">
            <h3 className="text-lg font-semibold mb-4 items-center">
              Select filters
            </h3>
            <div className="grid grid-cols-3 gap-4">
              {["Age", "Gender", "Season"].map((filter) => (
                <div
                  key={filter}
                  className={`border p-4 rounded-md cursor-pointer ${
                    selectedFilters.includes(filter.toLowerCase())
                      ? "bg-blue-500 text-white"
                      : ""
                  }`}
                  onClick={() => handleFilterSelect(filter.toLowerCase())}
                >
                  {filter}
                </div>
              ))}
            </div>
            <div className="mt-4 flex justify-center">
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-md"
                onClick={toggleSelectFilter}
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
      {showDonationPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">
              Enter Quantity to Donate
            </h2>
            <input
              type="number"
              min="1"
              max={items.find((item) => item.id === selectedItem.id).quantity}
              value={donateQuantity}
              onChange={(e) => setDonateQuantity(e.target.value)}
              className="w-full px-3 py-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 mb-4"
            />
            <div className="flex justify-center">
              <button
                className="mr-2 bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 focus:outline-none"
                onClick={handleDonateConfirm}
              >
                Submit Donation Post
              </button>
              <button
                className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500 focus:outline-none"
                onClick={handleDonationPopupClose}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export const SchoolSuppliesTable = ({
  items,
  cartItemsState,
  setCartItemsFunc,
}) => {
  const [selectedItem, setSelectedItem] = useState("null");
  const [showPopup, setShowPopup] = useState(false);
  const [filter, setFilter] = useState("All");
  const [donateQuantity, setDonateQuantity] = useState(0);
  const [showDonationPopup, setDonationPopup] = useState(false);

  function handleDonateItem(item) {
    const newItem = {
      type: "School Supplies",
      item,
      handleDetailsButtonClick,
    };

    setCartItemsFunc((cartItemsState) => [...cartItemsState, newItem]);
  }

  const handleDonationPopupClose = () => {
    setDonationPopup(false);
    //selectedItem.q
  };

  const handleDonateConfirm = () => {
    setDonationPopup(false);
    handleDonateItem(selectedItem);
    handlePopupClose();
    selectedItem.quantityInNeed -= donateQuantity;
  };

  const handlePopupClose = () => {
    setShowPopup(false);
    setSelectedItem(null);
  };

  const handleDetailsButtonClick = (item) => {
    setSelectedItem(item);
    setShowPopup(true);
  };

  const filteredItems = items.filter((item) =>
    filter === "All" ? true : item.type === filter
  );

  return (
    <div>
      <div className="flex justify-center mb-4">
        <button
          className={`mx-2 px-4 py-2 rounded-md focus:outline-none ${
            filter === "All" ? "bg-indigo-600 text-white" : "bg-gray-200"
          }`}
          onClick={() => setFilter("All")}
        >
          All
        </button>
        <button
          className={`mx-2 px-4 py-2 rounded-md focus:outline-none ${
            filter === "Book" ? "bg-indigo-600 text-white" : "bg-gray-200"
          }`}
          onClick={() => setFilter("Book")}
        >
          Books
        </button>
        <button
          className={`mx-2 px-4 py-2 rounded-md focus:outline-none ${
            filter === "Stationary" ? "bg-indigo-600 text-white" : "bg-gray-200"
          }`}
          onClick={() => setFilter("Stationary")}
        >
          Stationary Items
        </button>
      </div>
      <table className="w-full divide-y divide-purple-600">
        <thead>
          <tr>
            <th className="px-6 py-3 bg-purple-600 text-left text-xs leading-4 font-medium text-gray-100 uppercase tracking-wider text-center">
              Type
            </th>
            <th className="px-6 py-3 bg-purple-600 text-left text-xs leading-4 font-medium text-gray-100 uppercase tracking-wider text-center">
              Item
            </th>
            <th className="px-6 py-3 bg-purple-600 text-left text-xs leading-4 font-medium text-gray-100 uppercase tracking-wider text-center">
              Organization
            </th>
            <th className="px-6 py-3 bg-purple-600 text-left text-xs leading-4 font-medium text-gray-100 uppercase tracking-wider text-center">
              View Details
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y">
          {filteredItems.map((item) => (
            <tr key={item.id}>
              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900 text-center">
                {item.type}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900 text-center">
                {item.item}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900 text-center">
                {item.organization}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900 text-center">
                <button
                  className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-900 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={() => handleDetailsButtonClick(item)}
                >
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg">
            <div className="p-6">
              <h2 className="text-xl font-bold mb-4">Details</h2>
              <p className="mb-2 text-2xl">
                <span className="font-semibold text-2xl">Item:</span>{" "}
                {selectedItem.item}
              </p>
              <p className="mb-2 text-2xl">
                <span className="font-semibold">Quantity in Need:</span>{" "}
                {selectedItem.quantityInNeed}
              </p>
              <p className="mb-2 text-2xl">
                <span className="font-semibold">Organization:</span>{" "}
                {selectedItem.organization}
              </p>
              {selectedItem.type === "Book" && (
                <div>
                  <p className="mb-2 text-2xl">
                    <span className="font-semibold">Author:</span>{" "}
                    {selectedItem.author}
                  </p>
                  <p className="mb-2 text-2xl">
                    <span className="font-semibold">Language:</span>{" "}
                    {selectedItem.language}
                  </p>
                  <p className="mb-2 text-2xl">
                    <span className="font-semibold">Edition:</span>{" "}
                    {selectedItem.edition}
                  </p>
                  <p className="mb-2 text-2xl">
                    <span className="font-semibold">Summary:</span>{" "}
                    {selectedItem.summary}
                  </p>
                  <div className="mb-4">
                    <img
                      src={selectedItem.picture}
                      alt="Book Cover"
                      className="w-24 h-auto"
                    />
                  </div>
                </div>
              )}
              <div className="flex justify-end">
                <button
                  className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 focus:outline-none mr-2"
                  onClick={() => setDonationPopup(true)}
                >
                  Donate
                </button>
                <button
                  className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500 focus:outline-none"
                  onClick={handlePopupClose}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {showDonationPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">
              Enter Quantity to Donate
            </h2>
            <input
              type="number"
              min="1"
              max={items.find((item) => item.id === selectedItem.id).quantity}
              value={donateQuantity}
              onChange={(e) => setDonateQuantity(e.target.value)}
              className="w-full px-3 py-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 mb-4"
            />
            <div className="flex justify-center">
              <button
                className="mr-2 bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 focus:outline-none"
                onClick={handleDonateConfirm}
              >
                Submit Donation Post
              </button>
              <button
                className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500 focus:outline-none"
                onClick={handleDonationPopupClose}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export const ToysTable = ({ items, cartItemsState, setCartItemsFunc }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState(false);
  const [filter, setFilter] = useState("All");
  const [genderFilter, setGenderFilter] = useState("All");
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [minAgeFilter, setMinAgeFilter] = useState("");
  const [maxAgeFilter, setMaxAgeFilter] = useState("");
  const [donateQuantity, setDonateQuantity] = useState(0);
  const [showDonationPopup, setDonationPopup] = useState(false);

  function handleDonateItem(item) {
    const newItem = {
      type: "Toys",
      item,
      handleDetailsButtonClick,
    };

    setCartItemsFunc((cartItemsState) => [...cartItemsState, newItem]);
  }

  const handleDonationPopupClose = () => {
    setDonationPopup(false);
    //selectedItem.q
  };

  const handleDonateConfirm = () => {
    setDonationPopup(false);
    handleDonateItem(selectedItem);
    handlePopupClose();
    selectedItem.quantity -= donateQuantity;
  };

  const handlePopupClose = () => {
    setShowPopup(false);
    setSelectedItem(null);
  };

  const handleDetailsButtonClick = (item) => {
    setSelectedItem(item);
    setShowPopup(true);
  };

  const applyFilters = (item) => {
    const seasonFilterPassed =
      !selectedFilters.includes("category") ||
      filter === "All" ||
      item.category === filter;
    const genderFilterPassed =
      !selectedFilters.includes("gender") ||
      genderFilter === "All" ||
      item.gender === genderFilter;
    const range = item.age.split("-");
    const ageFilterPassed =
      !selectedFilters.includes("age") ||
      ((minAgeFilter === "" || parseInt(range[0]) >= minAgeFilter) &&
        (maxAgeFilter === "" || parseInt(range[1]) <= maxAgeFilter));
    return seasonFilterPassed && genderFilterPassed && ageFilterPassed;
  };

  const filteredItems = items.filter((item) => applyFilters(item));

  const toggleSelectFilter = () => {
    setSelectedFilter(!selectedFilter);
  };
  const handleFilterSelect = (filter) => {
    if (selectedFilters.includes(filter)) {
      setSelectedFilters(selectedFilters.filter((item) => item !== filter));
    } else {
      setSelectedFilters([...selectedFilters, filter]);
    }
  };
  const applyAgeFilter = () => {
    // Apply the age filter by triggering a re-render with updated state
    setSelectedFilters([...selectedFilters, "age"]);
  };

  return (
    <div>
      <div className="flex justify-between mb-4">
        {/* Filter button */}
        <button
          className="ml-2 justify-left py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={toggleSelectFilter}
        >
          Filter
        </button>
        {selectedFilters.includes("age") && (
          <div className="flex justify-center flex-grow">
            <input
              type="number"
              className="mx-2 px-4 py-2 rounded-md focus:outline-none"
              placeholder="Min Age"
              value={minAgeFilter}
              onChange={(e) => setMinAgeFilter(parseInt(e.target.value))}
            />
            <span className="mx-2 px-4 py-2 rounded-md">-</span>
            <input
              type="number"
              className="mx-2 px-4 py-2 rounded-md focus:outline-none"
              placeholder="Max Age"
              value={maxAgeFilter}
              onChange={(e) => setMaxAgeFilter(parseInt(e.target.value))}
            />
            <button
              className="mx-2 px-4 py-2 rounded-md focus:outline-none bg-indigo-600 text-white"
              onClick={() => applyAgeFilter()}
            >
              Apply
            </button>
          </div>
        )}
        {selectedFilters.includes("gender") && (
          <div className="flex justify-center flex-grow">
            <button
              className={`ml-2 px-4 py-2 rounded-md focus:outline-none ${
                genderFilter === "All"
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => setGenderFilter("All")}
            >
              All
            </button>
            <button
              className={`mx-2 px-4 py-2 rounded-md focus:outline-none ${
                genderFilter === "Male"
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => setGenderFilter("Male")}
            >
              Male
            </button>
            <button
              className={`mx-2 px-4 py-2 rounded-md focus:outline-none ${
                genderFilter === "Female"
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => setGenderFilter("Female")}
            >
              Female
            </button>
            <button
              className={`mx-2 px-4 py-2 rounded-md focus:outline-none ${
                genderFilter === "Unisex"
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => setGenderFilter("Unisex")}
            >
              Unisex
            </button>
          </div>
        )}
      </div>
      <div className="flex justify-center mb-4">
        {" "}
        {selectedFilters.includes("category") && (
          <div className="flex justify-center">
            <button
              className={`mx-2 px-4 py-2 rounded-md focus:outline-none ${
                filter === "All" ? "bg-indigo-600 text-white" : "bg-gray-200"
              }`}
              onClick={() => setFilter("All")}
            >
              All
            </button>
            <button
              className={`mx-2 px-4 py-2 rounded-md focus:outline-none ${
                filter === "Board Games"
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => setFilter("Board Games")}
            >
              Board Games
            </button>
            <button
              className={`mx-2 px-4 py-2 rounded-md focus:outline-none ${
                filter === "Stuffed Toys"
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => setFilter("Stuffed Toys")}
            >
              Stuffed Toys
            </button>
            <button
              className={`mx-2 px-4 py-2 rounded-md focus:outline-none ${
                filter === "Dolls" ? "bg-indigo-600 text-white" : "bg-gray-200"
              }`}
              onClick={() => setFilter("Dolls")}
            >
              Dolls
            </button>
            <button
              className={`mx-2 px-4 py-2 rounded-md focus:outline-none ${
                filter === "Sports" ? "bg-indigo-600 text-white" : "bg-gray-200"
              }`}
              onClick={() => setFilter("Sports")}
            >
              Sports
            </button>
            <button
              className={`mx-2 px-4 py-2 rounded-md focus:outline-none ${
                filter === "Cars" ? "bg-indigo-600 text-white" : "bg-gray-200"
              }`}
              onClick={() => setFilter("Cars")}
            >
              Cars
            </button>
            <button
              className={`mx-2 px-4 py-2 rounded-md focus:outline-none ${
                filter === "Outdoor"
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => setFilter("Outdoor")}
            >
              Outdoor
            </button>
          </div>
        )}
      </div>
      <table className="w-full divide-y divide-purple-600">
        <thead>
          <tr>
            <th className="px-6 py-3 bg-purple-600 text-left text-xs leading-4 font-medium text-gray-100 uppercase tracking-wider text-center">
              Item
            </th>
            <th className="px-6 py-3 bg-purple-600 text-left text-xs leading-4 font-medium text-gray-100 uppercase tracking-wider text-center">
              Age
            </th>
            <th className="px-6 py-3 bg-purple-600 text-left text-xs leading-4 font-medium text-gray-100 uppercase tracking-wider text-center">
              Gender
            </th>
            <th className="px-6 py-3 bg-purple-600 text-left text-xs leading-4 font-medium text-gray-100 uppercase tracking-wider text-center">
              Category
            </th>
            <th className="px-6 py-3 bg-purple-600 text-left text-xs leading-4 font-medium text-gray-100 uppercase tracking-wider text-center">
              Organization
            </th>
            <th className="px-6 py-3 bg-purple-600 text-left text-xs leading-4 font-medium text-gray-100 uppercase tracking-wider text-center">
              View Details
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y">
          {filteredItems.map((item) => (
            <tr key={item.id}>
              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900 text-center">
                {item.type}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900 text-center">
                {item.age}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900 text-center">
                {item.gender}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900 text-center">
                {item.category}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900 text-center">
                {item.organizationInNeed}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900 text-center">
                <button
                  className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-900 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={() => handleDetailsButtonClick(item)}
                >
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg items-center justify-center">
            <div className="p-6 flex flex-col items-center justify-center">
              <h2 className="text-xl font-bold mb-4">Details</h2>
              <p className="mb-2 text-2xl">
                <span className="font-semibold">Item:</span> {selectedItem.type}
              </p>
              <p className="mb-2 text-2xl">
                <span className="font-semibold">Quantity in Need:</span>{" "}
                {selectedItem.quantity}
              </p>
              <p className="mb-2 text-2xl">
                <span className="font-semibold">Organization:</span>{" "}
                {selectedItem.organizationInNeed}
              </p>
              <img
                src={require(`../../shared/assets/${selectedItem.picture}`)}
                style={{ maxWidth: "200px", maxHeight: "200px" }}
                alt={selectedItem.type}
                className="max-w-full h-auto rounded-lg my-4 flex items-center justify-center"
              />
              <div className="flex justify-center">
                <button
                  className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 focus:outline-none mr-2"
                  onClick={() => setDonationPopup(true)}
                >
                  Donate
                </button>
                <button
                  className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500 focus:outline-none"
                  onClick={handlePopupClose}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {selectedFilter && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 ">
          <div className="bg-white p-8 mx-auto rounded-md items-center max-w-2xl">
            <h3 className="text-lg font-semibold mb-4 items-center">
              Select filters
            </h3>
            <div className="grid grid-cols-3 gap-4">
              {["Age", "Gender", "Category"].map((filter) => (
                <div
                  key={filter}
                  className={`border p-4 rounded-md cursor-pointer ${
                    selectedFilters.includes(filter.toLowerCase())
                      ? "bg-blue-500 text-white"
                      : ""
                  }`}
                  onClick={() => handleFilterSelect(filter.toLowerCase())}
                >
                  {filter}
                </div>
              ))}
            </div>
            <div className="mt-4 flex justify-center">
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-md"
                onClick={toggleSelectFilter}
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
      {showDonationPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">
              Enter Quantity to Donate
            </h2>
            <input
              type="number"
              min="1"
              max={items.find((item) => item.id === selectedItem.id).quantity}
              value={donateQuantity}
              onChange={(e) => setDonateQuantity(e.target.value)}
              className="w-full px-3 py-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 mb-4"
            />
            <div className="flex justify-center">
              <button
                className="mr-2 bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 focus:outline-none"
                onClick={handleDonateConfirm}
              >
                Submit Donation Post
              </button>
              <button
                className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500 focus:outline-none"
                onClick={handleDonationPopupClose}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export const FoodTable = ({ items, cartItemsState, setCartItemsFunc }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [filter, setFilter] = useState("All");
  const [donateQuantity, setDonateQuantity] = useState(0);
  const [showDonationPopup, setDonationPopup] = useState(false);

  function handleDonateItem(item) {
    const newItem = {
      type: "Food",
      item,
      handleDetailsButtonClick,
    };

    setCartItemsFunc((cartItemsState) => [...cartItemsState, newItem]);
  }

  const handleDonationPopupClose = () => {
    setDonationPopup(false);
    //selectedItem.q
  };

  const handleDonateConfirm = () => {
    setDonationPopup(false);
    handleDonateItem(selectedItem);
    handlePopupClose();
    let quantityRequired = selectedItem.quantityRequired.split(" ");
    quantityRequired[0] = parseInt(quantityRequired[0]) - donateQuantity;
    selectedItem.quantityRequired =
      quantityRequired[0] + " " + quantityRequired[1];
  };

  const handlePopupClose = () => {
    setShowPopup(false);
    setSelectedItem(null);
  };

  const handleDetailsButtonClick = (item) => {
    setSelectedItem(item);
    setShowPopup(true);
  };

  const filteredItems = items.filter((item) =>
    filter === "All" ? true : item.category === filter
  );

  return (
    <div>
      <div className="flex justify-center mb-4">
        <button
          className={`mx-2 px-4 py-2 rounded-md focus:outline-none ${
            filter === "All" ? "bg-indigo-600 text-white" : "bg-gray-200"
          }`}
          onClick={() => setFilter("All")}
        >
          All
        </button>
        <button
          className={`mx-2 px-4 py-2 rounded-md focus:outline-none ${
            filter === "Fruits and Vegetables"
              ? "bg-indigo-600 text-white"
              : "bg-gray-200"
          }`}
          onClick={() => setFilter("Fruits and Vegetables")}
        >
          Fruits and Vegetables
        </button>
        <button
          className={`mx-2 px-4 py-2 rounded-md focus:outline-none ${
            filter === "Canned Foods"
              ? "bg-indigo-600 text-white"
              : "bg-gray-200"
          }`}
          onClick={() => setFilter("Canned Foods")}
        >
          Canned Foods
        </button>
        <button
          className={`mx-2 px-4 py-2 rounded-md focus:outline-none ${
            filter === "Fresh Meals"
              ? "bg-indigo-600 text-white"
              : "bg-gray-200"
          }`}
          onClick={() => setFilter("Fresh Meals")}
        >
          Fresh Meals
        </button>
        <button
          className={`mx-2 px-4 py-2 rounded-md focus:outline-none ${
            filter === "Baked Goods"
              ? "bg-indigo-600 text-white"
              : "bg-gray-200"
          }`}
          onClick={() => setFilter("Baked Goods")}
        >
          Baked Goods
        </button>
      </div>
      <table className="w-full divide-y divide-purple-600">
        <thead>
          <tr>
            <th className="px-6 py-3 bg-purple-600 text-left text-xs leading-4 font-medium text-gray-100 uppercase tracking-wider text-center">
              Category
            </th>
            <th className="px-6 py-3 bg-purple-600 text-left text-xs leading-4 font-medium text-gray-100 uppercase tracking-wider text-center">
              Item
            </th>
            <th className="px-6 py-3 bg-purple-600 text-left text-xs leading-4 font-medium text-gray-100 uppercase tracking-wider text-center">
              Organization
            </th>
            <th className="px-6 py-3 bg-purple-600 text-left text-xs leading-4 font-medium text-gray-100 uppercase tracking-wider text-center">
              View Details
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y">
          {filteredItems.map((item) => (
            <tr key={item.id}>
              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900 text-center">
                {item.category}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900 text-center">
                {item.itemName}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900 text-center">
                {item.organizationInNeed}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900 text-center">
                <button
                  className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-900 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={() => handleDetailsButtonClick(item)}
                >
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg">
            <div className="p-6">
              <h2 className="text-xl font-bold mb-4 text-center">Details</h2>
              <p className="mb-2 text-2xl">
                <span className="font-semibold">Item:</span>{" "}
                {selectedItem.itemName}
              </p>
              <p className="mb-2 text-2xl">
                <span className="font-semibold">Quantity in Need:</span>{" "}
                {selectedItem.quantityRequired}
              </p>
              <p className="mb-2 text-2xl">
                <span className="font-semibold">Organization:</span>{" "}
                {selectedItem.organizationInNeed}
              </p>
              <div className="flex justify-center">
                <button
                  className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 focus:outline-none mr-2"
                  onClick={() => setDonationPopup(true)}
                >
                  Donate
                </button>
                <button
                  className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500 focus:outline-none"
                  onClick={handlePopupClose}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {showDonationPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">
              Enter Quantity to Donate
            </h2>
            <input
              type="number"
              min="1"
              max={items.find((item) => item.id === selectedItem.id).quantity}
              value={donateQuantity}
              onChange={(e) => setDonateQuantity(e.target.value)}
              className="w-full px-3 py-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 mb-4"
            />
            <div className="flex justify-center">
              <button
                className="mr-2 bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 focus:outline-none"
                onClick={handleDonateConfirm}
              >
                Submit Donation Post
              </button>
              <button
                className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500 focus:outline-none"
                onClick={handleDonationPopupClose}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export const MedicalTable = ({ items, cartItemsState, setCartItemsFunc }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [filter, setFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState(items);
  const [donateQuantity, setDonateQuantity] = useState(0);
  const [showDonationPopup, setDonationPopup] = useState(false);

  function handleDonateItem(item) {
    const newItem = {
      type: "Medical Supplies",
      item,
      handleDetailsButtonClick,
    };

    setCartItemsFunc((cartItemsState) => [...cartItemsState, newItem]);
  }

  const handleDonationPopupClose = () => {
    setDonationPopup(false);
    //selectedItem.q
  };

  const handleDonateConfirm = () => {
    setDonationPopup(false);
    handleDonateItem(selectedItem);
    handlePopupClose();
    selectedItem.quantity -= donateQuantity;
  };

  const handlePopupClose = () => {
    setShowPopup(false);
    setSelectedItem(null);
  };

  const handleDetailsButtonClick = (item) => {
    setSelectedItem(item);
    setShowPopup(true);
  };

  const applyFilters = () => {
    setFilteredItems(
      items.filter(
        (item) =>
          (filter === "All" || item.type === filter) &&
          item.use.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    applyFilters();
  };

  const clearSearch = () => {
    setSearchQuery("");
    applyFilters();
  };

  return (
    <div>
      <div className="flex justify-center mb-4">
        {/* Search bar */}
        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder="Search Use"
            value={searchQuery}
            onChange={handleSearchChange}
            className="mr-2 px-4 py-2 rounded-md focus:outline-none"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-indigo-600 text-white rounded-md focus:outline-none"
          >
            Search
          </button>
          <button
            type="button"
            onClick={clearSearch}
            className="px-4 py-2 ml-2 bg-gray-400 text-white rounded-md focus:outline-none"
          >
            Clear
          </button>
          <button
            className={`mx-2 px-4 py-2 rounded-md focus:outline-none ml-20 ${
              filter === "All" ? "bg-indigo-600 text-white" : "bg-gray-200"
            }`}
            onClick={() => setFilter("All")}
          >
            All
          </button>
          <button
            className={`mx-2 px-4 py-2 rounded-md focus:outline-none ${
              filter === "Medical Device"
                ? "bg-indigo-600 text-white"
                : "bg-gray-200"
            }`}
            onClick={() => setFilter("Medical Device")}
          >
            Medical Device
          </button>
          <button
            className={`mx-2 px-4 py-2 rounded-md focus:outline-none ${
              filter === "Medical Equipment"
                ? "bg-indigo-600 text-white"
                : "bg-gray-200"
            }`}
            onClick={() => setFilter("Medical Equipment")}
          >
            Medical Equipment
          </button>
          <button
            className={`mx-2 px-4 py-2 rounded-md focus:outline-none ${
              filter === "Medication"
                ? "bg-indigo-600 text-white"
                : "bg-gray-200"
            }`}
            onClick={() => setFilter("Medication")}
          >
            Medication
          </button>
        </form>
      </div>
      <table className="w-full divide-y divide-purple-600">
        <thead>
          <tr>
            <th className="px-6 py-3 bg-purple-600 text-left text-xs leading-4 font-medium text-gray-100 uppercase tracking-wider text-center">
              Type
            </th>
            <th className="px-6 py-3 bg-purple-600 text-left text-xs leading-4 font-medium text-gray-100 uppercase tracking-wider text-center">
              Item
            </th>
            <th className="px-6 py-3 bg-purple-600 text-left text-xs leading-4 font-medium text-gray-100 uppercase tracking-wider text-center">
              Use
            </th>
            <th className="px-6 py-3 bg-purple-600 text-left text-xs leading-4 font-medium text-gray-100 uppercase tracking-wider text-center">
              Organization
            </th>
            <th className="px-6 py-3 bg-purple-600 text-left text-xs leading-4 font-medium text-gray-100 uppercase tracking-wider text-center">
              View Details
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y">
          {filteredItems.map((item) => (
            <tr key={item.id}>
              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900 text-center">
                {item.type}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900 text-center">
                {item.type !== "Medication"
                  ? item.deviceName
                  : item.medicationName}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900 text-center">
                {item.use}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900 text-center">
                {item.organizationInNeed}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900 text-center">
                <button
                  className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-900 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={() => handleDetailsButtonClick(item)}
                >
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg flex flex-col items-center justify-center">
            <div className="p-6 flex flex-col items-center justify-center">
              <h2 className="text-xl font-bold mb-4">Details</h2>
              <p className="mb-2 text-2xl">
                <span className="font-semibold">Item:</span>{" "}
                {selectedItem.type !== "Medication"
                  ? selectedItem.deviceName
                  : selectedItem.medicationName}
              </p>
              <p className="mb-2 text-2xl">
                <span className="font-semibold">Item Use:</span>{" "}
                {selectedItem.use}
              </p>
              <p className="mb-2 text-2xl">
                <span className="font-semibold">Quantity In Need:</span>{" "}
                {selectedItem.quantity}
              </p>
              <img
                src={require(`../../shared/assets/${selectedItem.image}`)}
                style={{ maxWidth: "200px", maxHeight: "200px" }}
                alt={selectedItem.type}
                className="max-w-full h-auto rounded-lg my-4 flex items-center justify-center"
              />
              <div className="flex justify-center">
                <button
                  className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 focus:outline-none mr-2"
                  onClick={() => setDonationPopup(true)}
                >
                  Donate
                </button>
                <button
                  className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500 focus:outline-none"
                  onClick={handlePopupClose}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {showDonationPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">
              Enter Quantity to Donate
            </h2>
            <input
              type="number"
              min="1"
              max={items.find((item) => item.id === selectedItem.id).quantity}
              value={donateQuantity}
              onChange={(e) => setDonateQuantity(e.target.value)}
              className="w-full px-3 py-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 mb-4"
            />
            <div className="flex justify-center">
              <button
                className="mr-2 bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 focus:outline-none"
                onClick={handleDonateConfirm}
              >
                Submit Donation Post
              </button>
              <button
                className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500 focus:outline-none"
                onClick={handleDonationPopupClose}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export const BloodTable = ({ items, cartItemsState, setCartItemsFunc }) => {
  const [searchQueryArea, setSearchQueryArea] = useState("");
  const [searchQueryHospital, setSearchQueryHospital] = useState("");
  const [searchQueryGovernate, setSearchQueryGovernate] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [filter, setFilter] = useState("All");
  const [donateQuantity, setDonateQuantity] = useState(0);
  const [showDonationPopup, setDonationPopup] = useState(false);

  function handleDonateItem(item) {
    const newItem = {
      type: "Blood",
      item,
      handleDetailsButtonClick,
    };

    setCartItemsFunc((cartItemsState) => [...cartItemsState, newItem]);
  }

  const handleDonationPopupClose = () => {
    setDonationPopup(false);
    //selectedItem.q
  };

  const handleDonateConfirm = () => {
    setDonationPopup(false);
    handleDonateItem(selectedItem);
    handlePopupClose();
  };

  const handlePopupClose = () => {
    setShowPopup(false);
    setSelectedItem(null);
  };

  const handleDetailsButtonClick = (item) => {
    setSelectedItem(item);
    setShowPopup(true);
  };

  const filteredItems = items.filter((item) => {
    const matchArea = item.area
      .toLowerCase()
      .includes(searchQueryArea.toLowerCase());
    const matchGovernate = item.governorate
      .toLowerCase()
      .includes(searchQueryGovernate.toLowerCase());
    const matchHospital = item.hospitalName
      .toLowerCase()
      .includes(searchQueryHospital.toLowerCase());
    return matchArea && matchGovernate && matchHospital;
  });

  return (
    <div>
      <div className="flex justify-center mb-4">
        <button
          className={`mx-2 px-4 py-2 rounded-md focus:outline-none ${
            filter === "All" ? "bg-indigo-600 text-white" : "bg-gray-200"
          }`}
          onClick={() => setFilter("All")}
        >
          All
        </button>
        <input
          type="text"
          value={searchQueryHospital}
          onChange={(e) => setSearchQueryHospital(e.target.value)}
          placeholder="Search by Hospital"
          className="mr-2 px-4 py-2 rounded-md focus:outline-none"
        />
        <input
          type="text"
          value={searchQueryGovernate}
          onChange={(e) => setSearchQueryGovernate(e.target.value)}
          placeholder="Search by Governate"
          className="mr-2 px-4 py-2 rounded-md focus:outline-none"
        />
        <input
          type="text"
          value={searchQueryArea}
          onChange={(e) => setSearchQueryArea(e.target.value)}
          placeholder="Search by Area"
          className="mr-2 px-4 py-2 rounded-md focus:outline-none"
        />
      </div>
      <table className="w-full divide-y divide-purple-600">
        <thead>
          <tr>
            <th className="px-6 py-3 bg-purple-600 text-left text-xs leading-4 font-medium text-gray-100 uppercase tracking-wider text-center">
              Blood Type
            </th>
            <th className="px-6 py-3 bg-purple-600 text-left text-xs leading-4 font-medium text-gray-100 uppercase tracking-wider text-center">
              Hospital Name
            </th>
            <th className="px-6 py-3 bg-purple-600 text-left text-xs leading-4 font-medium text-gray-100 uppercase tracking-wider text-center">
              Governorate
            </th>
            <th className="px-6 py-3 bg-purple-600 text-left text-xs leading-4 font-medium text-gray-100 uppercase tracking-wider text-center">
              Area
            </th>
            <th className="px-6 py-3 bg-purple-600 text-left text-xs leading-4 font-medium text-gray-100 uppercase tracking-wider text-center">
              View Details
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y">
          {filteredItems.map((item) => (
            <tr key={item.id}>
              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900 text-center">
                {item.bloodType}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900 text-center">
                {item.hospitalName}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900 text-center">
                {item.governorate}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900 text-center">
                {item.area}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900 text-center">
                <button
                  className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-900 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={() => handleDetailsButtonClick(item)}
                >
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg">
            <div className="p-6">
              <h2 className="text-3xl font-bold mb-4 text-center">Details</h2>
              <p className="mb-2 text-2xl">
                <span className="font-semibold text-2xl">Patient Name:</span>{" "}
                {selectedItem.patientName}
              </p>
              <p className="mb-2 text-2xl">
                <span className="font-semibold text-2xl">Blood Type:</span>{" "}
                {selectedItem.bloodType}
              </p>
              <p className="mb-2 text-2xl">
                <span className="font-semibold text-2xl">rh type:</span>{" "}
                {selectedItem.rhType}
              </p>
              <p className="mb-2 text-2xl">
                <span className="font-semibold text-2xl">Hospital Name:</span>{" "}
                {selectedItem.hospitalName}
              </p>
              <p className="mb-2 text-2xl">
                <span className="font-semibold text-2xl">
                  Hospital Address:
                </span>{" "}
                {selectedItem.hospitalAddress}
              </p>
              <p className="mb-2 text-2xl">
                <span className="font-semibold text-2xl">Area:</span>{" "}
                {selectedItem.area}
              </p>
              <p className="mb-2 text-2xl">
                <span className="font-semibold text-2xl">Governorate:</span>{" "}
                {selectedItem.governorate}
              </p>
              <div className="flex justify-center">
                <button
                  className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 focus:outline-none mr-2"
                  onClick={() => setDonationPopup(true)}
                >
                  Donate
                </button>
                <button
                  className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500 focus:outline-none"
                  onClick={handlePopupClose}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {showDonationPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">
              Enter Quantity to Donate
            </h2>
            <input
              type="number"
              min="1"
              max={items.find((item) => item.id === selectedItem.id).quantity}
              value={donateQuantity}
              onChange={(e) => setDonateQuantity(e.target.value)}
              className="w-full px-3 py-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 mb-4"
            />
            <div className="flex justify-center">
              <button
                className="mr-2 bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 focus:outline-none"
                onClick={handleDonateConfirm}
              >
                Submit Donation Post
              </button>
              <button
                className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500 focus:outline-none"
                onClick={handleDonationPopupClose}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export const TeachingPosts = ({ items, cartItemsState, setCartItemsFunc }) => {
  const [searchQueryArea, setSearchQueryArea] = useState("");
  const [searchQueryHospital, setSearchQueryHospital] = useState("");
  const [searchQueryGovernate, setSearchQueryGovernate] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [filter, setFilter] = useState("All");
  const [showDonationPopup, setDonationPopup] = useState(false);

  function handleDonateItem(item) {
    const newItem = {
      type: "Teaching Post",
      item,
      handleDetailsButtonClick,
    };

    setCartItemsFunc((cartItemsState) => [...cartItemsState, newItem]);
  }

  const handleDonateConfirm = () => {
    setDonationPopup(false);
    //handleDonateItem(selectedItem);
    handlePopupClose();
  };

  const handlePopupClose = () => {
    setShowPopup(false);
    setSelectedItem(null);
  };

  const handleDetailsButtonClick = (item) => {
    setSelectedItem(item);
    setShowPopup(true);
  };

  const filteredItems = items.filter((item) => {
    const matchSubjects = item.subjects.some((subject) =>
      subject.toLowerCase().includes(searchQueryArea.toLowerCase())
    );
    const matchGovernate = item.governorate
      .toLowerCase()
      .includes(searchQueryGovernate.toLowerCase());
    const matchArea = item.area
      .toLowerCase()
      .includes(searchQueryHospital.toLowerCase());
    return matchSubjects && matchGovernate && matchArea;
  });

  return (
    <div>
      <div className="flex justify-center mb-4">
        <button
          className={`mx-2 px-4 py-2 rounded-md focus:outline-none ${
            filter === "All" ? "bg-indigo-600 text-white" : "bg-gray-200"
          }`}
          onClick={() => setFilter("All")}
        >
          All
        </button>
        <input
          type="text"
          value={searchQueryArea}
          onChange={(e) => setSearchQueryArea(e.target.value)}
          placeholder="Search by Subjects"
          className="mr-2 px-4 py-2 rounded-md focus:outline-none"
        />
        <input
          type="text"
          value={searchQueryGovernate}
          onChange={(e) => setSearchQueryGovernate(e.target.value)}
          placeholder="Search by Governate"
          className="mr-2 px-4 py-2 rounded-md focus:outline-none"
        />
        <input
          type="text"
          value={searchQueryHospital}
          onChange={(e) => setSearchQueryHospital(e.target.value)}
          placeholder="Search by Area"
          className="mr-2 px-4 py-2 rounded-md focus:outline-none"
        />
      </div>
      <table className="w-full divide-y divide-purple-600">
        <thead>
          <tr>
            <th className="px-6 py-3 bg-purple-600 text-left text-xs leading-4 font-medium text-gray-100 uppercase tracking-wider text-center">
              Subjects
            </th>
            <th className="px-6 py-3 bg-purple-600 text-left text-xs leading-4 font-medium text-gray-100 uppercase tracking-wider text-center">
              Students
            </th>
            <th className="px-6 py-3 bg-purple-600 text-left text-xs leading-4 font-medium text-gray-100 uppercase tracking-wider text-center">
              Governorate
            </th>
            <th className="px-6 py-3 bg-purple-600 text-left text-xs leading-4 font-medium text-gray-100 uppercase tracking-wider text-center">
              Area
            </th>
            <th className="px-6 py-3 bg-purple-600 text-left text-xs leading-4 font-medium text-gray-100 uppercase tracking-wider text-center">
              View Details
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y">
          {filteredItems.map((item) => (
            <tr key={item.id}>
              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900 text-center">
                {item.subjects.join(", ")}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900 text-center">
                {item.numberOfStudents}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900 text-center">
                {item.governorate}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900 text-center">
                {item.area}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900 text-center">
                <button
                  className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-900 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={() => handleDetailsButtonClick(item)}
                >
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg">
            <div className="p-6">
              <h2 className="text-3xl font-bold mb-4 text-center">Details</h2>
              <p className="mb-2 text-2xl">
                <span className="font-semibold text-2xl">Subjects:</span>{" "}
                {selectedItem.subjects.join(", ")}
              </p>
              <p className="mb-2 text-2xl">
                <span className="font-semibold text-2xl">
                  Number of Students:
                </span>{" "}
                {selectedItem.numberOfStudents}
              </p>
              <p className="mb-2 text-2xl">
                <span className="font-semibold text-2xl">Address:</span>{" "}
                {selectedItem.address}
              </p>
              <p className="mb-2 text-2xl">
                <span className="font-semibold text-2xl">Area:</span>{" "}
                {selectedItem.area}
              </p>
              <p className="mb-2 text-2xl">
                <span className="font-semibold text-2xl">Governorate:</span>{" "}
                {selectedItem.governorate}
              </p>
              <Map
                lat={selectedItem.latitude}
                lng={selectedItem.longitude}
              ></Map>
              <div className="flex justify-center">
                <button
                  className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 focus:outline-none mr-2"
                  onClick={handleDonateConfirm}
                >
                  Fullfill
                </button>
                <button
                  className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500 focus:outline-none"
                  onClick={handlePopupClose}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export const MedicalPosts = ({ items, cartItemsState, setCartItemsFunc }) => {
  const [searchQueryArea, setSearchQueryArea] = useState("");
  const [searchQueryHospital, setSearchQueryHospital] = useState("");
  const [searchQueryGovernate, setSearchQueryGovernate] = useState("");
  const [searchQueryOrganization, setSearchQueryOrganization] = useState("");
  const [searchQuerySpeciality, setSearchQuerySpeciality] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [filter, setFilter] = useState("All");
  const [showDonationPopup, setDonationPopup] = useState(false);

  function handleDonateItem(item) {
    const newItem = {
      type: "Medical Post",
      item,
      handleDetailsButtonClick,
    };

    setCartItemsFunc((cartItemsState) => [...cartItemsState, newItem]);
  }

  const handleDonateConfirm = () => {
    setDonationPopup(false);
    //handleDonateItem(selectedItem);
    handlePopupClose();
  };

  const handlePopupClose = () => {
    setShowPopup(false);
    setSelectedItem(null);
  };

  const handleDetailsButtonClick = (item) => {
    setSelectedItem(item);
    setShowPopup(true);
  };

  const filteredItems = items.filter((item) => {
    const matchSpeciality = item.medicalSpecialty
      .toLowerCase()
      .includes(searchQuerySpeciality.toLowerCase());
    const matchOrganization = item.organizationName
      .toLowerCase()
      .includes(searchQueryOrganization.toLowerCase());
    const matchGovernate = item.governorate
      .toLowerCase()
      .includes(searchQueryGovernate.toLowerCase());
    const matchArea = item.area
      .toLowerCase()
      .includes(searchQueryHospital.toLowerCase());
    return matchGovernate && matchArea && matchSpeciality && matchOrganization;
  });

  return (
    <div>
      <div className="flex justify-center mb-4">
        <button
          className={`mx-2 px-4 py-2 rounded-md focus:outline-none ${
            filter === "All" ? "bg-indigo-600 text-white" : "bg-gray-200"
          }`}
          onClick={() => setFilter("All")}
        >
          All
        </button>
        <input
          type="text"
          value={searchQuerySpeciality}
          onChange={(e) => setSearchQuerySpeciality(e.target.value)}
          placeholder="Search by Speciality"
          className="mr-2 px-4 py-2 rounded-md focus:outline-none"
        />
        <input
          type="text"
          value={searchQueryGovernate}
          onChange={(e) => setSearchQueryGovernate(e.target.value)}
          placeholder="Search by Governate"
          className="mr-2 px-4 py-2 rounded-md focus:outline-none"
        />
        <input
          type="text"
          value={searchQueryHospital}
          onChange={(e) => setSearchQueryHospital(e.target.value)}
          placeholder="Search by Area"
          className="mr-2 px-4 py-2 rounded-md focus:outline-none"
        />
        <input
          type="text"
          value={searchQueryOrganization}
          onChange={(e) => setSearchQueryOrganization(e.target.value)}
          placeholder="Search by Organization"
          className="mr-2 px-4 py-2 rounded-md focus:outline-none"
        />
      </div>
      <table className="w-full divide-y divide-purple-600">
        <thead>
          <tr>
            <th className="px-6 py-3 bg-purple-600 text-left text-xs leading-4 font-medium text-gray-100 uppercase tracking-wider text-center">
              Patient Name
            </th>
            <th className="px-6 py-3 bg-purple-600 text-left text-xs leading-4 font-medium text-gray-100 uppercase tracking-wider text-center">
              Gender
            </th>
            <th className="px-6 py-3 bg-purple-600 text-left text-xs leading-4 font-medium text-gray-100 uppercase tracking-wider text-center">
              Specialty
            </th>
            <th className="px-6 py-3 bg-purple-600 text-left text-xs leading-4 font-medium text-gray-100 uppercase tracking-wider text-center">
              Address
            </th>
            <th className="px-6 py-3 bg-purple-600 text-left text-xs leading-4 font-medium text-gray-100 uppercase tracking-wider text-center">
              Governate
            </th>
            <th className="px-6 py-3 bg-purple-600 text-left text-xs leading-4 font-medium text-gray-100 uppercase tracking-wider text-center">
              Area
            </th>
            <th className="px-6 py-3 bg-purple-600 text-left text-xs leading-4 font-medium text-gray-100 uppercase tracking-wider text-center">
              Organization
            </th>
            <th className="px-6 py-3 bg-purple-600 text-left text-xs leading-4 font-medium text-gray-100 uppercase tracking-wider text-center">
              View Details
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y">
          {filteredItems.map((item) => (
            <tr key={item.id}>
              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900 text-center">
                {item.patientName}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900 text-center">
                {item.gender}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900 text-center">
                {item.medicalSpecialty}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900 text-center">
                {item.address}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900 text-center">
                {item.governorate}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900 text-center">
                {item.area}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900 text-center">
                {item.organizationName}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900 text-center">
                <button
                  className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-900 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={() => handleDetailsButtonClick(item)}
                >
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg">
            <div className="p-6">
              <h2 className="text-3xl font-bold mb-4 text-center">Details</h2>
              <p className="mb-2 text-2xl">
                <span className="font-semibold text-2xl">Patient Name:</span>{" "}
                {selectedItem.patientName}
              </p>
              <p className="mb-2 text-2xl">
                <span className="font-semibold text-2xl">Age:</span>{" "}
                {selectedItem.age}
              </p>
              <p className="mb-2 text-2xl">
                <span className="font-semibold text-2xl">Gender:</span>{" "}
                {selectedItem.gender}
              </p>
              <p className="mb-2 text-2xl">
                <span className="font-semibold text-2xl">Weight:</span>{" "}
                {selectedItem.weight}
              </p>
              <p className="mb-2 text-2xl">
                <span className="font-semibold text-2xl">Area:</span>{" "}
                {selectedItem.area}
              </p>
              <p className="mb-2 text-2xl">
                <span className="font-semibold text-2xl">Governorate:</span>{" "}
                {selectedItem.governorate}
              </p>
              <p className="mb-2 text-2xl">
                <span className="font-semibold text-2xl">Address:</span>{" "}
                {selectedItem.address}
              </p>
              <p className="mb-2 text-2xl">
                <span className="font-semibold text-2xl">Organization:</span>{" "}
                {selectedItem.organizationName}
              </p>
              <p className="mb-2 text-2xl">
                <span className="font-semibold text-2xl">Speciality:</span>{" "}
                {selectedItem.medicalSpecialty}
              </p>
              <p className="mb-2 text-2xl">
                <span className="font-semibold text-2xl">
                  Case description:
                </span>{" "}
                {selectedItem.caseDescription}
              </p>
              <Map
                lat={selectedItem.location.latitude}
                lng={selectedItem.location.longitude}
              ></Map>
              <div className="flex justify-center">
                <button
                  className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 focus:outline-none mr-2"
                  onClick={handleDonateConfirm}
                >
                  Fullfill
                </button>
                <button
                  className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500 focus:outline-none"
                  onClick={handlePopupClose}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
