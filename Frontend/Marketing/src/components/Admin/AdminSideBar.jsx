import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CiLogout } from "react-icons/ci";

function AdminSideBar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Logic to clear user session (e.g., remove token or user info from localStorage)
    localStorage.removeItem("authToken");
    navigate("/login"); // Redirect to login page after logout
  };

  return (
    <div>
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen bg-gradient-to-b from-purple-500 to-indigo-600 flex flex-col items-center py-6 z-50 ${
          isOpen || window.innerWidth >= 1024 ? "w-20" : "w-0"
        } lg:w-20 overflow-hidden transition-all duration-300`}
      >
        {/* Logo */}
        <div className="mb-10 flex justify-center">
          <img
            alt="Logo"
            className="rounded-full cursor-pointer border-2 border-white"
            height="50"
            src="https://storage.googleapis.com/a1aa/image/1drhaSUW1nIpHt3DzmlqVFV7y37TtilNaUSR0cFCEeJcwF2JA.jpg"
            width="50"
            onClick={() => navigate("/admin/adminDashBoard")}
          />
        </div>

        {/* Menu Icons */}
        <div className="flex flex-col space-y-8 text-white">
          <div className="flex flex-col items-center cursor-pointer group">
            <i
              className="fas fa-cog text-2xl group-hover:text-red-300"
              onClick={() => navigate("/admin/adminSettings")}
            ></i>
            <span className="text-sm text-transparent group-hover:text-white transition-all">
              Settings
            </span>
          </div>
        </div>

        {/* Logout Button */}
        <div
          className="flex flex-col items-center cursor-pointer group mt-auto mb-6"
          onClick={handleLogout}
        >
          <CiLogout className="text-white text-3xl group-hover:text-red-300" />{" "}
          {/* Updated color and size */}
          <span className="text-sm text-transparent group-hover:text-white transition-all">
            Logout
          </span>
        </div>
      </div>

      {/* Toggle Button (for mobile view) */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white hover:text-gray-300 focus:outline-none"
        >
          <i className={`fas ${isOpen ? "fa-times" : "fa-bars"} text-3xl`}></i>
        </button>
      </div>

      {/* Overlay (for mobile view) */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
}

export default AdminSideBar;
