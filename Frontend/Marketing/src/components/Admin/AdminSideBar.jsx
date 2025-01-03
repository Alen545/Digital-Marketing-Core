import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaBars,
  FaAd,
  FaChartBar,
  FaCog,
  FaSignOutAlt,
  FaTimes,
} from "react-icons/fa"; // Add FaTimes for the close icon
import { MdGroup } from "react-icons/md";

function AdminSideBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAdsDropdownOpen, setAdsDropdownOpen] = useState(false);

  const navigate = useNavigate();

  const toggleCourseDropdown = () => {
    setAdsDropdownOpen(!isAdsDropdownOpen);
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Hamburger Menu for Mobile View */}
      <button
        className="top-4 z-50 lg:hidden text-white bg-gradient-to-r from-pink-500 to-yellow-500 p-3 rounded-full"
        style={{ margin: "6px" }}
        onClick={toggleSidebar}
      >
        <FaBars size={24} />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen bg-gradient-to-b from-pink-500 to-indigo-600 text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 w-64 z-40 transition-transform duration-300`}
      >
        {/* Close Icon for Mobile */}
        <div className="absolute top-4 right-4 z-50 p-4 lg:hidden">
          <button onClick={toggleSidebar} className="text-white">
            <FaTimes size={24} />
          </button>
        </div>

        {/* Logo */}
        <div className="p-4 border-b border-indigo-400 flex justify-center">
          <img
            alt="Logo"
            className="rounded-full cursor-pointer border-2 border-white"
            height="50"
            src="https://storage.googleapis.com/a1aa/image/1drhaSUW1nIpHt3DzmlqVFV7y37TtilNaUSR0cFCEeJcwF2JA.jpg"
            width="50"
            onClick={() => navigate("/admin/adminDashBoard")}
          />
        </div>

        {/* Navigation */}
        <nav className="flex-grow p-4 space-y-4">
          {/* Ads Dropdown */}
          <div>
            <button
              onClick={toggleCourseDropdown}
              className="flex items-center justify-between w-full text-left hover:bg-purple-600 p-3 rounded-lg transition-all duration-300"
            >
              <div className="flex items-center">
                <FaAd className="mr-3 text-yellow-400" />
                <span className="text-xl">Ads</span>
              </div>
              <svg
                className={`w-4 h-4 transform transition-transform ${
                  isAdsDropdownOpen ? "rotate-180" : "rotate-0"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isAdsDropdownOpen && (
              <div className="mt-2 space-y-2 pl-4">
                <Link
                  to="/addAds"
                  className="block hover:bg-purple-600 p-3 rounded-lg transition-all duration-300"
                >
                  Add Ads
                </Link>
                <Link
                  to="/viewAds"
                  className="block hover:bg-purple-600 p-3 rounded-lg transition-all duration-300"
                >
                  View Ads
                </Link>
              </div>
            )}
          </div>

          {/* Other Links */}
          <Link
            to="/status"
            className="flex items-center hover:bg-purple-600 p-3 rounded-lg transition-all duration-300"
          >
            <FaChartBar className="mr-3" />
            <span>Status</span>
          </Link>

          <Link
            to="/admin/adminSettings"
            className="flex items-center hover:bg-purple-600 p-3 rounded-lg transition-all duration-300"
          >
            <FaCog className="mr-3" />
            <span>Settings</span>
          </Link>

          <Link
            to="/userDetails"
            className="flex items-center hover:bg-purple-600 p-3 rounded-lg transition-all duration-300"
          >
            <MdGroup className="mr-3" />
            <span>User Details</span>
          </Link>

          <button
            onClick={() => navigate("/login")}
            className="flex items-center w-full text-left hover:bg-red-600 p-3 rounded-lg transition-all duration-300"
          >
            <FaSignOutAlt className="mr-3" />
            <span>Logout</span>
          </button>
        </nav>
      </div>

      {/* Overlay for Mobile View */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
}

export default AdminSideBar;
