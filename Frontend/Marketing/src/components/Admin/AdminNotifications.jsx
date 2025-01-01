import React from "react";

function AdminNotifications() {
  const notifications = [
    {
      id: 1,
      title: "New User Registered",
      message: "A new user has signed up for your service.",
      time: "5 minutes ago",
      type: "info", // info, success, warning, error
    },
    {
      id: 2,
      title: "Server Overload",
      message: "The server is experiencing high traffic.",
      time: "15 minutes ago",
      type: "warning",
    },
    {
      id: 3,
      title: "Payment Received",
      message: "Payment of $120 has been processed.",
      time: "1 hour ago",
      type: "success",
    },
    {
      id: 4,
      title: "Login Attempt Failed",
      message: "There was a failed login attempt on your account.",
      time: "2 hours ago",
      type: "error",
    },
  ];

  const typeColors = {
    info: "bg-blue-100 border-blue-500 text-blue-800",
    success: "bg-green-100 border-green-500 text-green-800",
    warning: "bg-yellow-100 border-yellow-500 text-yellow-800",
    error: "bg-red-100 border-red-500 text-red-800",
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-6 text-center">
        <h1 className="text-3xl font-bold text-gray-800">Notifications</h1>
        <p className="text-gray-600">Stay updated with recent activities</p>
      </div>

      {/* Notifications Container */}
      <div className="w-full max-w-8xl mx-auto space-y-4">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 rounded-lg shadow border-l-4 ${
              typeColors[notification.type]
            }`}
          >
            {/* Content */}
            <div className="flex-1">
              <h2 className="font-bold text-lg">{notification.title}</h2>
              <p className="text-sm mt-1">{notification.message}</p>
              <p className="text-xs mt-2 text-gray-500">{notification.time}</p>
            </div>
            {/* Actions */}
            <div className="flex items-center mt-4 sm:mt-0 space-x-3">
              <button
                className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full hover:bg-gray-300 transition"
                aria-label="Bell Icon"
              >
                <i className="fas fa-bell text-gray-600"></i>
              </button>
              <button
                className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full hover:bg-gray-300 transition"
                aria-label="Close Icon"
              >
                <i className="fas fa-times text-gray-600"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminNotifications;
