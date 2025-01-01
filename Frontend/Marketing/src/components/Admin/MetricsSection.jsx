import React from "react";

function MetricsSection() {
  const metrics = [
    {
      title: "Total Reach",
      value: "2,340,560",
      growth: "+8%",
      bgColor: "bg-blue-500",
      textColor: "text-blue-100",
    },
    {
      title: "Active Campaigns",
      value: "15",
      growth: "+10%",
      bgColor: "bg-green-500",
      textColor: "text-green-100",
    },
    {
      title: "Engagement Rate",
      value: "14.3%",
      growth: "+5%",
      bgColor: "bg-purple-500",
      textColor: "text-purple-100",
    },
    {
      title: "Total Interaction",
      value: "9,458,980",
      growth: "+12%",
      bgColor: "bg-yellow-500",
      textColor: "text-yellow-100",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {metrics.map((metric, index) => (
        <div
          key={index}
          className={`p-6 rounded-lg shadow-lg ${metric.bgColor} text-white`}
        >
          <p className="text-lg font-medium">{metric.title}</p>
          <h2 className="text-3xl font-bold mt-2">{metric.value}</h2>
          <p className="text-sm mt-1">{`vs. last month ${metric.growth}`}</p>
        </div>
      ))}
    </div>
  );
}

export default MetricsSection;
