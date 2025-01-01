import React from "react";

function TrafficSources() {
  const trafficSources = [
    { source: "Organic Search", value: 40, color: "bg-blue-500" },
    { source: "Social Media", value: 25, color: "bg-pink-500" },
    { source: "Direct", value: 20, color: "bg-green-500" },
    { source: "Referrals", value: 15, color: "bg-yellow-500" },
  ];

  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Traffic Sources</h2>
      <div className="space-y-4">
        {trafficSources.map((source, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-4 flex flex-col space-y-2"
          >
            <div className="flex justify-between items-center">
              <p className="text-lg font-medium text-gray-800">
                {source.source}
              </p>
              <p className="text-sm font-bold text-gray-600">{`${source.value}%`}</p>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div
                className={`h-full rounded-full ${source.color}`}
                style={{ width: `${source.value}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrafficSources;
