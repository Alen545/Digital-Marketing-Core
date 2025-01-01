import React from "react";

function MonthlyRevenue() {
  const revenues = [
    { month: "Jan", revenue: 5000, color: "bg-blue-500" },
    { month: "Feb", revenue: 7500, color: "bg-green-500" },
    { month: "Mar", revenue: 9000, color: "bg-purple-500" },
    { month: "Apr", revenue: 6000, color: "bg-yellow-500" },
    { month: "May", revenue: 8000, color: "bg-pink-500" },
  ];

  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold text-gray-800 mb-4">
        Monthly Revenue Trends
      </h2>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="grid grid-cols-5 gap-4">
          {revenues.map((item, index) => (
            <div key={index} className="text-center">
              <div
                className={`h-${
                  (item.revenue / 1000) * 20
                } w-12 mx-auto rounded ${item.color}`}
                style={{ height: `${item.revenue / 100}px` }}
              ></div>
              <p className="text-gray-700 mt-2">{item.month}</p>
              <p className="text-gray-500 text-sm">${item.revenue}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MonthlyRevenue;
