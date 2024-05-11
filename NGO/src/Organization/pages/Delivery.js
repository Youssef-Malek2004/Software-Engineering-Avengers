import React, { useState } from "react";
import { Space, DatePicker, notification } from 'antd';
// import 'antd/dist/antd.css';

const DeliverySchedule = () => {
  // Dummy data for donation deliveries
  const [donationDeliveries, setDonationDeliveries] = useState([
     { id: 1, donor: "John Doe", deliveryGuy: "Michael Smith", date: new Date(), type: "Toys", timeSlots: ["09:00 AM - 10:00 AM", "10:00 AM - 11:00 AM", "11:00 AM - 12:00 PM"] },
    { id: 2, donor: "Jane Smith", deliveryGuy: "David Johnson", date: new Date(), type: "Clothes", timeSlots: ["01:00 PM - 02:00 PM", "02:00 PM - 03:00 PM", "03:00 PM - 04:00 PM"] },
    { id: 3, donor: "Emily Brown", deliveryGuy: "Chris Wilson", date: new Date(), type: "Food", timeSlots: ["10:00 AM - 11:00 AM", "11:00 AM - 12:00 PM", "01:00 PM - 02:00 PM"] },
    // Add more donation deliveries as needed
    { id: 4, donor: "Robert Johnson", deliveryGuy: "Daniel Brown", date: new Date(), type: "School Supplies", timeSlots: ["09:00 AM - 10:00 AM", "10:00 AM - 11:00 AM", "11:00 AM - 12:00 PM"] },
    { id: 5, donor: "Lisa Davis", deliveryGuy: "Jennifer Lee", date: new Date(), type: "Toys", timeSlots: ["01:00 PM - 02:00 PM", "02:00 PM - 03:00 PM", "03:00 PM - 04:00 PM"] },
    { id: 6, donor: "William Wilson", deliveryGuy: "Mark Taylor", date: new Date(), type: "Food", timeSlots: ["10:00 AM - 11:00 AM", "11:00 AM - 12:00 PM", "01:00 PM - 02:00 PM"] },
    { id: 7, donor: "Karen Anderson", deliveryGuy: "Sarah Johnson", date: new Date(), type: "Clothes", timeSlots: ["09:00 AM - 10:00 AM", "10:00 AM - 11:00 AM", "11:00 AM - 12:00 PM"] },
    { id: 8, donor: "Jason Martinez", deliveryGuy: "Andrew Thomas", date: new Date(), type: "Toys", timeSlots: ["01:00 PM - 02:00 PM", "02:00 PM - 03:00 PM", "03:00 PM - 04:00 PM"] },
    { id: 9, donor: "Amanda White", deliveryGuy: "Stephanie Hall", date: new Date(), type: "School Supplies", timeSlots: ["10:00 AM - 11:00 AM", "11:00 AM - 12:00 PM", "01:00 PM - 02:00 PM"] },
    { id: 10, donor: "Michael Adams", deliveryGuy: "Jessica Clark", date: new Date(), type: "Clothes", timeSlots: ["09:00 AM - 10:00 AM", "10:00 AM - 11:00 AM", "11:00 AM - 12:00 PM"] },
    // Add more donation deliveries as needed
  ]);

  // State to store selected date and time slot for each delivery
  const [selectedDateTime, setSelectedDateTime] = useState({});

  // Function to handle selecting a date and time slot
  const handleSelectDateTime = (deliveryId, date) => {
    setSelectedDateTime({ ...selectedDateTime, [deliveryId]: date });
  };

  // Function to handle modifying the date for a delivery
  const handleModifyDate = (deliveryId, date) => {
    const updatedDeliveries = donationDeliveries.map((delivery) =>
      delivery.id === deliveryId ? { ...delivery, date } : delivery
    );
    setDonationDeliveries(updatedDeliveries);
  };

  // Function to handle confirming the selected date and time slot
  const handleConfirm = (deliveryId) => {
    const selectedDate = selectedDateTime[deliveryId];
    if (selectedDate) {
      notification.success({
        message: "Date and Time Slot Confirmed",
        description: `Selected Date: ${selectedDate.format('MMMM D, YYYY')}`,
        duration: 3,
      });
    } else {
      notification.error({
        message: "Error",
        description: "Please select a date and time slot.",
        duration: 3,
      });
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-8 mt-8">Delivery Schedule for Donation Drop-off</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Map over donation deliveries and create a card for each */}
        {donationDeliveries.map((delivery) => (
          <div key={delivery.id} className="bg-purple-200 rounded-lg overflow-hidden  p-6 hover:shadow-lg">
            <h2 className="text-xl font-semibold mb-4 text-purple-800">Donation Details</h2>
            <p className="text-gray-600 mb-2">Donor: {delivery.donor}</p>
            <p className="text-gray-600 mb-2">Delivery Guy: {delivery.deliveryGuy}</p>
            <p className="text-gray-600 mb-2">Type of Donation: {delivery.type}</p>
            {/* Use Ant Design DatePicker for selecting the date */}
            <p className="text-gray-600 mb-2">Choose Date:</p>
            <DatePicker
              showTime
              onChange={(date) => handleSelectDateTime(delivery.id, date)}
              onOk={(date) => handleModifyDate(delivery.id, date)}
              className="w-full border rounded-md p-2 mb-4"
            />
            <button
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded w-full"
              onClick={() => handleConfirm(delivery.id)}
            >
              Confirm
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeliverySchedule;
