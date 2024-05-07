import React, { useState } from "react";

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

export const ClothesTable = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [filter, setFilter] = useState("All");

  const handlePopupClose = () => {
    setShowPopup(false);
    setSelectedItem(null);
  };

  const handleDetailsButtonClick = (item) => {
    setSelectedItem(item);
    setShowPopup(true);
  };

  const filteredItems = items.filter((item) =>
    filter === "All" ? true : item.season === filter
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
            <h2 className="text-2xl font-bold mb-4">Details</h2>
            <p>Material: {selectedItem.material}</p>
            <p>Quantity in Need: {selectedItem.quantity}</p>
            <p>Organization: {selectedItem.organization}</p>
            <button
              className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 focus:outline-none"
              //   onClick={() => handleDonate(selectedItem.id)}
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
    </div>
  );
};

export const SchoolSuppliesTable = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [filter, setFilter] = useState("All");

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
              <p className="mb-2">
                <span className="font-semibold">Item:</span> {selectedItem.item}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Quantity in Need:</span>{" "}
                {selectedItem.quantityInNeed}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Organization:</span>{" "}
                {selectedItem.organization}
              </p>
              {selectedItem.type === "Book" && (
                <div>
                  <p className="mb-2">
                    <span className="font-semibold">Author:</span>{" "}
                    {selectedItem.author}
                  </p>
                  <p className="mb-2">
                    <span className="font-semibold">Language:</span>{" "}
                    {selectedItem.language}
                  </p>
                  <p className="mb-2">
                    <span className="font-semibold">Edition:</span>{" "}
                    {selectedItem.edition}
                  </p>
                  <p className="mb-2">
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
                  // onClick={() => handleDonate(selectedItem.id)}
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
    </div>
  );
};

export const ToysTable = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [filter, setFilter] = useState("All");

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
            filter === "Outdoor" ? "bg-indigo-600 text-white" : "bg-gray-200"
          }`}
          onClick={() => setFilter("Outdoor")}
        >
          Outdoor
        </button>
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
          <div className="bg-white rounded-lg shadow-lg">
            <div className="p-6 ">
              <h2 className="text-xl font-bold mb-4">Details</h2>
              <p className="mb-2">
                <span className="font-semibold">Item:</span> {selectedItem.type}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Quantity in Need:</span>{" "}
                {selectedItem.quantity}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Organization:</span>{" "}
                {selectedItem.organizationInNeed}
              </p>
              <div className="flex justify-center">
                <button
                  className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 focus:outline-none mr-2"
                  // onClick={() => handleDonate(selectedItem.id)}
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
    </div>
  );
};

export const FoodTable = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [filter, setFilter] = useState("All");

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
              <h2 className="text-xl font-bold mb-4">Details</h2>
              <p className="mb-2">
                <span className="font-semibold">Item:</span>{" "}
                {selectedItem.itemName}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Quantity in Need:</span>{" "}
                {selectedItem.quantityRequired}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Organization:</span>{" "}
                {selectedItem.organizationInNeed}
              </p>
              <div className="flex justify-end">
                <button
                  className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 focus:outline-none mr-2"
                  // onClick={() => handleDonate(selectedItem.id)}
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
    </div>
  );
};

export const MedicalTable = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [filter, setFilter] = useState("All");

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
            filter === "Medication" ? "bg-indigo-600 text-white" : "bg-gray-200"
          }`}
          onClick={() => setFilter("Medication")}
        >
          Medication
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
                {item.type !== "Medication"
                  ? item.deviceName
                  : item.medicationName}
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
              <h2 className="text-xl font-bold mb-4">Details</h2>
              <p className="mb-2">
                <span className="font-semibold">Item:</span>{" "}
                {selectedItem.type !== "Medication"
                  ? selectedItem.deviceName
                  : selectedItem.medicationName}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Item Use:</span>{" "}
                {selectedItem.use}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Quantity In Need:</span>{" "}
                {selectedItem.quantity}
              </p>
              <div className="flex justify-end">
                <button
                  className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 focus:outline-none mr-2"
                  // onClick={() => handleDonate(selectedItem.id)}
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
    </div>
  );
};

export const BloodTable = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [filter, setFilter] = useState("All");

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
              <h2 className="text-xl font-bold mb-4">Details</h2>
              <p className="mb-2">
                <span className="font-semibold">Patient Name:</span>{" "}
                {selectedItem.patientName}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Blood Type:</span>{" "}
                {selectedItem.bloodType}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Hospital Name:</span>{" "}
                {selectedItem.hospitalName}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Hospital Address:</span>{" "}
                {selectedItem.hospitalAddress}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Area:</span> {selectedItem.area}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Governorate:</span>{" "}
                {selectedItem.governorate}
              </p>
              <div className="flex justify-end">
                <button
                  className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 focus:outline-none mr-2"
                  // onClick={() => handleDonate(selectedItem.id)}
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
    </div>
  );
};
