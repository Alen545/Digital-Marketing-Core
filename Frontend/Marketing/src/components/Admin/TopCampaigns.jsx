import React from "react";

function TopCampaigns() {
  const campaigns = [
    { name: "Summer Sale", performance: "High", color: "bg-green-500" },
    {
      name: "Winter Collection",
      performance: "Moderate",
      color: "bg-yellow-500",
    },
    { name: "Flash Deals", performance: "High", color: "bg-green-500" },
  ];

  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Top Campaigns</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {campaigns.map((campaign, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-lg shadow-lg flex items-center justify-between"
          >
            <div>
              <p className="text-lg font-medium text-gray-700">
                {campaign.name}
              </p>
              <span
                className={`px-3 py-1 mt-2 inline-block text-sm font-semibold rounded-full text-white ${campaign.color}`}
              >
                {campaign.performance}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopCampaigns;
