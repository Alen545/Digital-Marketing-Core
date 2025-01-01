import React from "react";
import { FaUser, FaEnvelope, FaRegChartBar } from "react-icons/fa"; // Icons for insights

function CustomerInsights() {
  const insights = [
    {
      insight: "New Subscribers",
      count: "1,500",
      color: "bg-blue-500",
      icon: <FaUser />,
    },
    {
      insight: "Returning Visitors",
      count: "850",
      color: "bg-green-500",
      icon: <FaRegChartBar />,
    },
    {
      insight: "Email Opens",
      count: "2,200",
      color: "bg-yellow-500",
      icon: <FaEnvelope />,
    },
  ];

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Customer Insights
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {insights.map((item, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl flex items-center space-x-4"
          >
            <div className={`p-3 rounded-full ${item.color} text-white`}>
              {item.icon}
            </div>
            <div>
              <p className="text-lg font-medium text-gray-800">
                {item.insight}
              </p>
              <p className="text-xl font-bold text-gray-800">{item.count}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CustomerInsights;
