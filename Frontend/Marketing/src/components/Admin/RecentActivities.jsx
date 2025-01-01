import React from "react";

function RecentActivities() {
  const activities = [
    {
      icon: "fas fa-user-plus",
      activity: "New user registered",
      time: "2 mins ago",
    },
    {
      icon: "fas fa-bullhorn",
      activity: "Campaign launched: Summer Sale",
      time: "1 hour ago",
    },
    {
      icon: "fas fa-chart-line",
      activity: "Engagement rate increased by 5%",
      time: "4 hours ago",
    },
    {
      icon: "fas fa-shopping-cart",
      activity: "New product added: Winter Collection",
      time: "1 day ago",
    },
  ];

  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold text-gray-800 mb-4">
        Recent Activities
      </h2>
      <div className="bg-white rounded-lg shadow-lg p-6">
        {activities.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between mb-4 last:mb-0"
          >
            <div className="flex items-center space-x-4">
              <i className={`${item.icon} text-blue-500 text-xl`}></i>
              <p className="text-gray-700 font-medium">{item.activity}</p>
            </div>
            <span className="text-gray-500 text-sm">{item.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentActivities;
