import React, { useState } from "react";
import AdminSideBar from "./AdminSideBar";

function AdminDashBoard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-900">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 transition-transform transform  ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } lg:translate-x-0 lg:w-64 z-50`}
      >
        <AdminSideBar />
      </div>

      {/* Main Content */}
      <div
        className={`flex-1 p-6 transition-all duration-300 ${
          isSidebarOpen ? "ml-0" : "lg:ml-20"
        }`}
      >
        {/* Toggle Button for Mobile */}
        <div className="lg:hidden mb-4">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="text-gray-100 hover:text-white"
          >
            <i
              className={`fas ${
                isSidebarOpen ? "fa-times" : "fa-bars"
              } text-2xl`}
            ></i>
          </button>
        </div>

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <img
              alt="User Avatar"
              className="rounded-full"
              height="40"
              src="https://storage.googleapis.com/a1aa/image/7J4UrT6BMMbkGRV9jeAAcHMZEzBe3VinG7WIYTSWSf2vBXYnA.jpg"
              width="40"
            />
            <div>
              <p className="text-lg font-semibold">Alen George</p>
            </div>
          </div>
          <i className="fas fa-bell text-gray-400 text-xl"></i>
        </div>

        {/* Welcome Section */}
        <div className="mb-8 ">
          <h1 className="text-3xl font-semibold">Welcome back, Alen</h1>
          <p className="text-gray-400">
            Track your finances and achieve your financial goals.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="highlight-card p-4 bg-gray-800 rounded-lg">
            <p className="text-gray-400">Total Reach</p>
            <h2 className="text-3xl font-semibold">2,340,560</h2>
            <p className="text-gray-400">vs. last month +8%</p>
          </div>
          <div className="card p-4 bg-gray-800 rounded-lg">
            <p className="text-gray-400">Active Campaigns</p>
            <h2 className="text-3xl font-semibold">15</h2>
            <p className="text-gray-400">vs. last month +10%</p>
          </div>
          <div className="card p-4 bg-gray-800 rounded-lg">
            <p className="text-gray-400">Engagement Rate</p>
            <h2 className="text-3xl font-semibold">14.3%</h2>
            <p className="text-gray-400">vs. last month +5%</p>
          </div>
        </div>

        {/* Overview Interaction */}
        <div className="card p-4 bg-gray-800 rounded-lg mb-8">
          <div className="flex items-center justify-between mb-4">
            <p className="text-gray-400">Overview Interaction</p>
            <div className="flex items-center space-x-2">
              <p className="text-gray-400">Weekly</p>
              <i className="fas fa-chevron-down text-gray-400"></i>
            </div>
          </div>
          <h2 className="text-3xl font-semibold mb-4">9,458,980</h2>
          <p className="text-gray-400">Total Interaction</p>
          <div className="h-32 bg-gray-700 rounded-lg mt-4"></div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashBoard;
