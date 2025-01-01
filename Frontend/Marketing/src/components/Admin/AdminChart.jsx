import React from "react";
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
function AdminChart() {
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
  );
}

export default AdminChart;
