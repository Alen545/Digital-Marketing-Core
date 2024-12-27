import React from "react";
import AdminSideBar from "./AdminSideBar";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register necessary chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

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

  const salesData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Monthly Sales",
        data: [12000, 19000, 3000, 5000, 20000, 30000],
        borderColor: "#4F46E5",
        backgroundColor: "rgba(79, 70, 229, 0.5)",
        fill: true,
      },
    ],
  };

  const salesOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
    },
  };

  const productData = {
    labels: ["Product A", "Product B", "Product C", "Product D"],
    datasets: [
      {
        label: "Units Sold",
        data: [120, 150, 180, 90],
        backgroundColor: ["#4CAF50", "#FF5722", "#2196F3", "#FFC107"],
      },
    ],
  };

  const productOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
    },
  };

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

        {/* Sales and Product Graphs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Sales Line Graph Card */}
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Sales Overview
            </h3>
            <Line data={salesData} options={salesOptions} />
          </div>

          {/* Product Bar Graph Card */}
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Product Performance
            </h3>
            <Bar data={productData} options={productOptions} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashBoard;
