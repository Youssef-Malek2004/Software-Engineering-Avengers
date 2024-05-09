import React from "react";

const Notification = () => {
  // Dummy data for notifications
  const notifications = [
    {
      type: "donor",
      message: "New donor signed up!",
      time: "5 minutes ago",
    },
    {
      type: "fulfilled_donation",
      message: "A donation has been fulfilled.",
      time: "10 minutes ago",
    },
    {
      type: "pro_bono_teacher",
      message: "A new pro bono teacher is available.",
      time: "15 minutes ago",
    },
    {
      type: "school_supplies",
      message: "School supplies donation received.",
      time: "20 minutes ago",
    },
  ];

  return (
    <div className="p-4">
      <h1 className="text-3xl font-semibold mb-4">Notifications</h1>
      <div className="divide-y divide-gray-200">
        {notifications.map((notification, index) => (
          <div key={index} className="py-4">
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <span className="font-medium">{notification.message}</span>
                <span className="text-gray-500 text-sm">
                  {notification.time}
                </span>
              </div>
              <span className="px-3 py-1 text-xs font-medium text-white bg-blue-500 rounded-full">
                {notification.type.replace("_", " ")}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notification;
