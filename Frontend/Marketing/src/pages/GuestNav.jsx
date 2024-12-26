import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function GuestNav() {
  const [navOpen, setNavOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Implement search functionality here
      console.log("Searching for:", searchQuery);
    }
  };

  return (
    <div>
      <header className="px-5 sm:px-10 md:px-10 py-3 lg:px-20 flex items-center justify-between bg-white shadow-md rounded-lg">
        <div className="flex items-center">
          <h1
            onClick={() => navigate("/")}
            className="text-3xl font-bold cursor-pointer text-indigo-600 hover:text-indigo-800 transition-all duration-300"
          >
            D'Core
          </h1>
        </div>

        {/* Search Bar */}
        <div className="flex items-center justify-center w-full">
          <form
            onSubmit={handleSearchSubmit}
            className="w-full max-w-xl flex items-center space-x-3 p-2 rounded-full border-2 border-indigo-400 bg-transparent shadow-lg focus-within:ring-4 focus-within:ring-indigo-300 transition-all duration-300"
          >
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search here..."
              className="w-full py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-400 text-lg text-gray-800"
            />
            <button
              type="submit"
              className="bg-white text-indigo-600 p-2 rounded-full hover:bg-indigo-100 transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M21 21l-4.35-4.35M10 17a7 7 0 1 1 7-7 7 7 0 0 1-7 7z" />
              </svg>
            </button>
          </form>
        </div>

        {/* Menu Button for mobile */}
        <div>
          <button onClick={toggleNav}>
            <svg
              className="cursor-pointer text-gray-700 hover:text-gray-900 w-6 md:hidden"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
          <div
            className={`${
              navOpen ? "block" : "hidden"
            } md:block fixed top-0 inset-x-0 bg-white p-8 m-4 z-30 rounded-lg shadow md:rounded-none md:shadow-none md:p-0 md:m-0 md:relative md:bg-transparent`}
          >
            <button
              onClick={toggleNav}
              className="absolute top-0 right-0 mr-5 mt-5 md:hidden"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
            <div className="flex flex-col items-center justify-center md:block">
              <a
                onClick={() => navigate("/login")}
                className="transition-all duration-100 ease-in-out pb-1 border-b-2 text-indigo-500 border-transparent hover:border-indigo-300 hover:text-indigo-600 md:mr-8 text-xl font-bold tracking-wide my-4 md:my-0"
              >
                Login
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default GuestNav;
