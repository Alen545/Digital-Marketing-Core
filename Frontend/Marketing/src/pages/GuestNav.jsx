import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function GuestNav() {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  const navigate = useNavigate();

  return (
    <div>
      <header className="px-5 sm:px-10 md:px-10 md:py-5 lg:px-20 flex items-center justify-between">
        <div>
          <img
            src="https://storage.googleapis.com/devitary-image-host.appspot.com/15846435184459982716-LogoMakr_7POjrN.png"
            className="w-48"
            alt="Logo"
          />
        </div>
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
                href="#"
                className="transition-all duration-100 ease-in-out pb-1 border-b-2 text-indigo-500 border-transparent hover:border-indigo-300 hover:text-gray-600 md:mr-8 text-lg md:text-sm font-bold tracking-wide my-4 md:my-0"
              >
                Blog
              </a>
              <a
                onClick={() => navigate("/login")}
                className="transition-all duration-100 ease-in-out pb-1 border-b-2 text-indigo-500 border-transparent hover:border-indigo-300 hover:text-indigo-600 md:mr-8 text-lg md:text-sm font-bold tracking-wide my-4 md:my-0"
              >
                Login
              </a>
              <button
                className="border border-transparent rounded font-semibold tracking-wide text-lg md:text-sm px-5 py-3 md:py-2 focus:outline-none focus:shadow-outline bg-indigo-600 text-gray-100 hover:bg-indigo-800 hover:text-gray-200 transition-all duration-300 ease-in-out my-4 md:my-0 w-full md:w-auto"
                onClick={() => navigate("/register")}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default GuestNav;
