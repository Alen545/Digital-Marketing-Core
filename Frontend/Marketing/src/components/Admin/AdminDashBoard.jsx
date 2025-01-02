import React from "react";
import AdminSideBar from "./AdminSideBar";
import AdminChart from "./AdminChart";
import AdminNotifications from "./AdminNotifications";
import TrafficSources from "./TrafficSources";
import TopCampaigns from "./TopCampaigns";
import RecentActivities from "./RecentActivities";
import MonthlyRevenue from "./MonthlyRevenue";
import MetricsSection from "./MetricsSection";
import CampaignPerformance from "./CampaignPerformance"; // New section
import CustomerInsights from "./CustomerInsights"; // New section
import AdSpendAnalytics from "./AdSpendAnalytics"; // New section

function AdminDashBoard() {
  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Sidebar */}
      <AdminSideBar />

      {/* Main Content */}
      <div className="flex-1 lg:ml-64 p-4 overflow-y-auto bg-gray-50 ">
        {/* User Info */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <img
              alt="User Avatar"
              className="rounded-full border-2 border-gray-200"
              height="50"
              src="https://storage.googleapis.com/a1aa/image/7J4UrT6BMMbkGRV9jeAAcHMZEzBe3VinG7WIYTSWSf2vBXYnA.jpg"
              width="50"
            />
            <div>
              <p className="text-lg font-semibold text-gray-800">Alen George</p>
              <p className="text-gray-500 text-sm">Admin</p>
            </div>
          </div>
          <i
            className="fas fa-bell text-gray-600 text-2xl"
            role="button"
            aria-label="Notifications"
          ></i>
        </div>

        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-gray-800">
            Welcome back, Alen
          </h1>
          <p className="text-gray-600 mt-1">
            Manage your campaigns and track progress effectively.
          </p>
        </div>

        {/* Metrics Section */}
        <MetricsSection />

        {/* Digital Marketing Core Sections */}
        <CampaignPerformance />
        <CustomerInsights />
        <AdSpendAnalytics />

        {/* Other Sections */}
        <TrafficSources />
        <TopCampaigns />
        <RecentActivities />
        <MonthlyRevenue />

        {/* Sales and Product Graphs */}
        <AdminChart />

        {/* Notifications */}
        <AdminNotifications />
      </div>
    </div>
  );
}

export default AdminDashBoard;
