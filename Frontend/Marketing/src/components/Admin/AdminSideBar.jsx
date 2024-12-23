import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function AdminSideBar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div>
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen bg-gray-700 flex flex-col items-center py-4 ${
          isOpen || window.innerWidth >= 1024 ? "w-16 lg:w-4" : "w-0"
        } lg:w-16 overflow-hidden transition-all duration-300`}
      >
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <img
            alt="Logo"
            className="rounded-full"
            height="40"
            src="https://storage.googleapis.com/a1aa/image/1drhaSUW1nIpHt3DzmlqVFV7y37TtilNaUSR0cFCEeJcwF2JA.jpg"
            width="40"
          />
        </div>

        {/* Menu Icons */}
        <div className="flex flex-col space-y-6 text-gray-400">
          <i
            className="fas fa-home text-xl lg:text-2xl"
            onClick={() => navigate("/admin/adminHome")}
          ></i>
          <i className="fas fa-chart-line text-xl lg:text-2xl"></i>
          <i className="fas fa-bell text-xl lg:text-2xl"></i>
          <i className="fas fa-cog text-xl lg:text-2xl"></i>
        </div>
      </div>

      {/* Toggle Button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-400 hover:text-white focus:outline-none"
        >
          <i className={`fas ${isOpen ? "fa-times" : "fa-bars"} text-2xl`}></i>
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
