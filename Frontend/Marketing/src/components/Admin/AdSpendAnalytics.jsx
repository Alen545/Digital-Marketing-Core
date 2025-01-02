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

  // Prepare the chart data
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

  // Calculate the difference and percentage change
  const getDifference = (current, lastYear) => current - lastYear;
  const getPercentageChange = (current, lastYear) =>
    ((current - lastYear) / lastYear) * 100;

  return (
    <div className="mb-8 px-4 sm:px-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Ad Spend Analytics
      </h2>
      <div className="flex flex-col sm:flex-row justify-around items-center space-x-6">
        {/* Pie chart */}
        <div className="w-full sm:w-2/3 lg:w-1/2 xl:w-1/3 mb-6 sm:mb-0 shadow-lg p-6 rounded-lg items-center">
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

        {/* Data Display (Right side with colorful design and comparison) */}
        <div className="w-full sm:w-1/3 space-y-6">
          {data.map((ad, index) => {
            const difference = getDifference(ad.spend, ad.lastYearSpend);
            const percentageChange = getPercentageChange(
              ad.spend,
              ad.lastYearSpend
            );

            return (
              <div
                key={index}
                className={`p-4 bg-gradient-to-r from-${ad.color} to-opacity-60 rounded-lg shadow-lg flex items-center`}
              >
                <div className="p-3 rounded-full text-gray-800 shadow-md">
                  <i className="fas fa-chart-pie"></i>{" "}
                  {/* Add an appropriate icon */}
                </div>
                <div className="flex flex-col w-full ml-4">
                  {/* Title for each box */}
                  <p className="text-lg font-extrabold">{ad.platform}</p>
                  <p className="text-xl font-extrabold">${ad.spend}</p>

                  {/* Last Year Data */}
                  <div className="mt-3 text-bold">
                    <p className="text-red-600 font-bold">
                      Last Year: ${ad.lastYearSpend}
                    </p>
                  </div>

                  {/* Difference and Percentage Change */}
                  <div className="flex justify-between items-center mt-3 text-md">
                    <p className="text-amber-950 font-bold">Difference:</p>
                    <p
                      className={`font-extrabold ${
                        percentageChange >= 0
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {difference > 0 ? `+${difference}` : difference} (
                      {percentageChange.toFixed(2)}%)
                    </p>
                  </div>
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
