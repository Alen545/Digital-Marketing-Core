import React from "react";
import { FaBullhorn } from "react-icons/fa"; // Icon for Campaigns

function CampaignPerformance() {
  const data = [
    {
      title: "Ad Campaign 1",
      progress: 60,
      color: "bg-gradient-to-r from-blue-500 to-indigo-600",
    },
    {
      title: "Ad Campaign 2",
      progress: 80,
      color: "bg-gradient-to-r from-green-500 to-teal-600",
    },
    {
      title: "Ad Campaign 3",
      progress: 45,
      color: "bg-gradient-to-r from-yellow-500 to-orange-600",
    },
  ];

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Campaign Performance
      </h2>
      <div className="space-y-6">
        {data.map((campaign, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center">
                <div className="p-2 bg-gray-200 rounded-full mr-3">
                  <FaBullhorn className="text-xl text-gray-700" />
                </div>
                <p className="text-lg font-medium text-gray-800">
                  {campaign.title}
                </p>
              </div>
              <p className="text-sm text-gray-600">{campaign.progress}%</p>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div
                className={`h-full rounded-full ${campaign.color}`}
                style={{ width: `${campaign.progress}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CampaignPerformance;
