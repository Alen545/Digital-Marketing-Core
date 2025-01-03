import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

// Register ChartJS components
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale
);

function AdSpendAnalytics() {
  const data = [
    {
      platform: "Google Ads",
      spend: 1500,
      lastYearSpend: 1200,
      color: "#FF6347", // Red
    },
    {
      platform: "Facebook Ads",
      spend: 1200,
      lastYearSpend: 1000,
      color: "#4682B4", // Blue
    },
    {
      platform: "Instagram Ads",
      spend: 900,
      lastYearSpend: 800,
      color: "#FF1493", // Pink
    },
  ];

  const chartData = {
    labels: data.map((ad) => ad.platform),
    datasets: [
      {
        label: "Ad Spend",
        data: data.map((ad) => ad.spend),
        backgroundColor: data.map((ad) => ad.color),
        borderColor: data.map((ad) => ad.color),
        borderWidth: 1,
      },
    ],
  };

  const getDifference = (current, lastYear) => current - lastYear;
  const getPercentageChange = (current, lastYear) =>
    ((current - lastYear) / lastYear) * 100;

  return (
    <div className="mb-8 px-4 sm:px-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center sm:text-left">
        Ad Spend Analytics
      </h2>
      <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-6 space-y-6 sm:space-y-0">
        {/* Pie Chart */}
        <div className="w-full sm:w-2/3 lg:w-1/2 flex justify-center">
          <div className="w-72 sm:w-full max-w-md lg:max-w-lg shadow-lg p-6 rounded-lg flex items-center justify-center bg-white">
            <Pie
              data={chartData}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    position: "top",
                  },
                },
              }}
            />
          </div>
        </div>

        {/* Right Side Data */}
        <div className="w-full sm:w-1/3 lg:w-1/2 grid grid-cols-1 gap-4">
          {data.map((ad, index) => {
            const difference = getDifference(ad.spend, ad.lastYearSpend);
            const percentageChange = getPercentageChange(
              ad.spend,
              ad.lastYearSpend
            );

            return (
              <div
                key={index}
                className="p-4 rounded-lg shadow-md bg-gray-100"
                style={{
                  background: `linear-gradient(to right, ${ad.color}, ${ad.color}60)`,
                }}
              >
                <div className="p-3 rounded-full text-gray-800 shadow-md">
                  <i className="fas fa-chart-pie"></i>
                </div>
                <div className="mt-2">
                  <p className="text-lg font-extrabold">{ad.platform}</p>
                  <p className="text-xl font-extrabold">${ad.spend}</p>
                  <p className="text-red-600 font-bold mt-3">
                    Last Year: ${ad.lastYearSpend}
                  </p>
                  <p
                    className={`mt-3 font-extrabold ${
                      percentageChange >= 0 ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    Difference: {difference > 0 ? `+${difference}` : difference} (
                    {percentageChange.toFixed(2)}%)
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AdSpendAnalytics;
