import React from "react";
import AdminSideBar from "./AdminSideBar";

function AdminDashBoard() {
  const metrics = [
    {
      title: "Total Reach",
      value: "2,340,560",
      growth: "+8%",
      bgColor: "bg-blue-500",
      textColor: "text-blue-100",
    },
    {
      title: "Active Campaigns",
      value: "15",
      growth: "+10%",
      bgColor: "bg-green-500",
      textColor: "text-green-100",
    },
    {
      title: "Engagement Rate",
      value: "14.3%",
      growth: "+5%",
      bgColor: "bg-purple-500",
      textColor: "text-purple-100",
    },
    {
      title: "Total Interaction",
      value: "9,458,980",
      growth: "+12%",
      bgColor: "bg-yellow-500",
      textColor: "text-yellow-100",
    },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <AdminSideBar />

      {/* Main Content */}
      <div className="flex-1 lg:ml-16 p-6 overflow-y-auto">
        {/* User Info */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <img
              alt="User Avatar"
              className="rounded-full border-2 border-gray-200"
              height="50"
              src="https://storage.googleapis.com/a1aa/image/7J4UrT6BMMbkGRV9jeAAcHMZEzBe3VinG7WIYTSWSf2vBXYnA.jpg"
              width="50"
            />
            <div>
              <p className="text-lg font-semibold text-gray-800">Alen George</p>
              <p className="text-gray-500 text-sm">Admin</p>
            </div>
          </div>
          <i className="fas fa-bell text-gray-600 text-2xl"></i>
        </div>

        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-gray-800">
            Welcome back, Alen
          </h1>
          <p className="text-gray-600 mt-1">
            Manage your campaigns and track progress effectively.
          </p>
        </div>

        {/* Metrics Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg shadow-lg ${metric.bgColor} text-white`}
            >
              <p className="text-lg font-medium">{metric.title}</p>
              <h2 className="text-3xl font-bold mt-2">{metric.value}</h2>
              <p className="text-sm mt-1">{`vs. last month ${metric.growth}`}</p>
            </div>
          ))}
        </div>

        {/* Overview Interaction */}
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <p className="text-gray-800 font-semibold">Overview Interaction</p>
            <div className="flex items-center space-x-2">
              <p className="text-gray-600">Weekly</p>
              <i className="fas fa-chevron-down text-gray-600"></i>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">9,458,980</h2>
          <p className="text-gray-600">Total Interaction</p>
          <div className="h-32 bg-gray-100 rounded-lg mt-4 flex items-center justify-center">
            {/* Placeholder for graph */}
            <p className="text-gray-400">Graph coming soon...</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashBoard;
