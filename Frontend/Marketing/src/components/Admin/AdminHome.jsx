import React from "react";
import AdminSideBar from "./AdminSideBar";
function AdminHome() {
  return (
    <div className="flex h-screen bg-gray-900">
      <AdminSideBar />

      <div className="flex-1 lg:ml-16 p-6 overflow-y-auto">hello</div>
    </div>
  );
}

export default AdminHome;
