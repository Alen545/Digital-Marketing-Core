import React, { useState } from "react";
import AdminSideBar from "./AdminSideBar";

function AdminSettings() {
  const [darkMode, setDarkMode] = useState(false);

  // Handle theme change (light/dark)
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Sidebar */}
      <AdminSideBar />

      {/* Main Content */}
      <div
        className={`flex-1 lg:ml-64 p-6 overflow-y-auto bg-gray-50 ${
          darkMode ? "text-white bg-gray-800" : "text-gray-800 bg-white"
        }`}
      >
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold">Admin Settings</h1>
          <p className="text-sm">Customize your admin settings here.</p>
        </div>

        {/* Settings Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* User Information */}
          <div className="p-6 rounded-lg shadow-lg bg-indigo-600 text-white">
            <h2 className="text-xl font-semibold mb-4">User Profile</h2>
            <p className="text-sm mb-2">Manage your personal information.</p>
            <button className="mt-4 px-4 py-2 rounded-lg bg-indigo-800 text-white">
              Edit Profile
            </button>
          </div>

          {/* Notification Settings */}
          <div className="p-6 rounded-lg shadow-lg bg-teal-600 text-white">
            <h2 className="text-xl font-semibold mb-4">
              Notification Settings
            </h2>
            <p className="text-sm mb-2">Adjust notification preferences.</p>
            <button className="mt-4 px-4 py-2 rounded-lg bg-teal-800 text-white">
              Edit Notifications
            </button>
          </div>

          {/* Theme Settings */}
          <div className="p-6 rounded-lg shadow-lg bg-yellow-600 text-white">
            <h2 className="text-xl font-semibold mb-4">Theme Settings</h2>
            <p className="text-sm mb-2">Toggle between light and dark mode.</p>
            <button
              onClick={toggleDarkMode}
              className={`mt-4 px-4 py-2 rounded-lg ${
                darkMode ? "bg-yellow-800" : "bg-yellow-500"
              } text-white`}
            >
              {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            </button>
          </div>

          {/* Security Settings */}
          <div className="p-6 rounded-lg shadow-lg bg-pink-600 text-white">
            <h2 className="text-xl font-semibold mb-4">Security Settings</h2>
            <p className="text-sm mb-2">
              Update your account security settings.
            </p>
            <button className="mt-4 px-4 py-2 rounded-lg bg-pink-800 text-white">
              Change Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminSettings;
