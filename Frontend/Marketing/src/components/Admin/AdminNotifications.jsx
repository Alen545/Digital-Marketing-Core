import React from "react";
import AdminSideBar from "./AdminSideBar";

function AdminNotifications() {
  // Example notifications
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

  // Notification type colors
  const typeColors = {
    info: "bg-blue-500",
    success: "bg-green-500",
    warning: "bg-yellow-500",
    error: "bg-red-500",
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <AdminSideBar />

      <div className="flex-1 lg:ml-16 p-6 overflow-y-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Notifications</h1>
          <p className="text-gray-600">Stay updated with recent activities</p>
        </div>

        {/* Notifications List */}
        <div className="space-y-4">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`flex items-center justify-between p-4 rounded-lg shadow-lg ${
                typeColors[notification.type]
              } text-white`}
            >
              <div>
                <h2 className="font-bold text-lg">{notification.title}</h2>
                <p className="text-sm">{notification.message}</p>
                <p className="text-xs mt-2 opacity-75">{notification.time}</p>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fas fa-bell text-xl"></i>
                <i className="fas fa-times-circle text-xl cursor-pointer hover:opacity-75"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdminNotifications;
