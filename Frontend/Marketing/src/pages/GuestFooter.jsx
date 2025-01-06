import React from "react";

function GuestFooter() {
  return (
    <div>
      <footer className="px-5 sm:px-10 md:px-20 py-4 bg-indigo-500 text-white">
        {/* Main Footer Section */}
        <div className="flex flex-col items-center lg:flex-row justify-between space-y-6 lg:space-y-0">
          {/* Navigation Links */}
          <div className="flex flex-col items-center lg:flex-row">
            <a
              className="mx-4 text-sm font-bold text-white hover:text-indigo-200 transition duration-300"
              href="#"
            >
              Home
            </a>
            <a
              className="mx-4 text-sm font-bold text-white hover:text-indigo-200 transition duration-300"
              href="#"
            >
              About Us
            </a>
            <a
              className="mx-4 text-sm font-bold text-white hover:text-indigo-200 transition duration-300"
              href="#"
            >
              Careers
            </a>
            <a
              className="mx-4 text-sm font-bold text-white hover:text-indigo-200 transition duration-300"
              href="#"
            >
              Privacy Policy
            </a>
            <a
              className="mx-4 text-sm font-bold text-white hover:text-indigo-200 transition duration-300"
              href="#"
            >
              Terms of Service
            </a>
          </div>

          {/* Logo Section */}
          <div>
            <img
              src="https://via.placeholder.com/120x40?text=D%27Core+Logo"
              className="w-32 h-auto"
              alt="D'Core Logo"
            />
          </div>

          {/* Copyright Section */}
          <div className="text-xs font-bold text-indigo-100 text-center lg:text-left">
            &copy; {new Date().getFullYear()} D'Core | All Rights Reserved
          </div>
        </div>
      </footer>
    </div>
  );
}

export default GuestFooter;
