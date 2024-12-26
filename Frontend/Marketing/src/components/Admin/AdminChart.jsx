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
  Filler,
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
  Legend,
  Filler
);

function AdminChart() {
  // Sample data for both charts
  const lineChartData = {
    datasets: [
      {
        label: "Sales",
        borderColor: "navy",
        pointRadius: 3,
        fill: true,
        backgroundColor: "rgba(0, 0, 128, 0.2)",
        lineTension: 0.4,
        data: [10, 20, 15, 30, 25, 40, 35, 50],
        borderWidth: 2,
      },
    ],
    labels: [1, 2, 3, 4, 5, 6, 7, 8],
  };

  const barChartData = {
    datasets: [
      {
        label: "Product",
        backgroundColor: "rgba(255, 99, 132, 0.6)",
        data: [10, 30, 20, 40, 25, 35, 50, 45],
        borderWidth: 1,
      },
    ],
    labels: [1, 2, 3, 4, 5, 6, 7, 8],
  };

  // Chart options
  const options = {
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "red",
          font: {
            family: "Nunito",
            size: 12,
          },
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          stepSize: 10,
          color: "green",
          font: {
            family: "Nunito",
            size: 12,
          },
        },
      },
    },
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      title: {
        display: false,
      },
    },
  };

  // Styles for the graph cards
  const cardStyle =
    "bg-white shadow-lg rounded-lg p-6 w-full sm:w-11/12 md:w-10/12 lg:w-1/2 mb-6";

  return (
    <div className="flex h-screen bg-gray-100">
      <AdminSideBar />

      <div className="flex-1 lg:ml-16 p-6 overflow-y-auto mt-16">
        {/* Main Title for the Graph Section */}
        <h1 className="text-3xl font-bold text-center mb-6 text-indigo-700">
          Sales and Product Analysis
        </h1>

        <div className="flex flex-col lg:flex-row lg:space-x-6 justify-center">
          {/* Line Chart Card */}
          <div className={cardStyle}>
            <h2 className="text-lg font-semibold mb-4 text-center">
              Line Chart
            </h2>
            <div className="relative" style={{ height: "300px" }}>
              <Line options={options} data={lineChartData} />
            </div>
          </div>

          {/* Bar Chart Card */}
          <div className={cardStyle}>
            <h2 className="text-lg font-semibold mb-4 text-center">
              Bar Chart
            </h2>
            <div className="relative" style={{ height: "300px" }}>
              <Bar options={options} data={barChartData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminChart;
