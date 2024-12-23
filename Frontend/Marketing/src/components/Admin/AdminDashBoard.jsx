import React from "react";
import AdminSideBar from "./AdminSideBar";

function AdminDashBoard() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <AdminSideBar />

      {/* Main Content */}
      <div className="flex-1 lg:ml-16 p-6 overflow-y-auto">
        {/* User Info */}
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
              <p className="text-lg font-semibold text-black">Alen George</p>
            </div>
          </div>
          <i className="fas fa-bell text-black text-xl"></i>
        </div>

        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-black">
            Welcome back, Alen
          </h1>
          <p className="text-black">
            Track your finances and achieve your financial goals.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="highlight-card p-4 bg-gray-800 rounded-lg">
            <p className="text-gray-400">Total Reach</p>
            <h2 className="text-3xl font-semibold text-white">2,340,560</h2>
            <p className="text-gray-400">vs. last month +8%</p>
          </div>
          <div className="card p-4 bg-gray-800 rounded-lg">
            <p className="text-gray-400">Active Campaigns</p>
            <h2 className="text-3xl font-semibold text-white">15</h2>
            <p className="text-gray-400">vs. last month +10%</p>
          </div>
          <div className="card p-4 bg-gray-800 rounded-lg">
            <p className="text-gray-400">Engagement Rate</p>
            <h2 className="text-3xl font-semibold text-white">14.3%</h2>
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
          <h2 className="text-3xl font-semibold text-white mb-4">9,458,980</h2>
          <p className="text-gray-400">Total Interaction</p>
          <div className="h-32 bg-gray-700 rounded-lg mt-4"></div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashBoard;
