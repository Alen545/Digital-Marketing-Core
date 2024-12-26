import React from "react";

function GuestFooter() {
  return (
    <div>
      <footer className="px-5 sm:px-10 md:px-20 py-8 bg-gray-50">
        <div className="flex flex-col items-center lg:flex-row justify-between space-y-4 lg:space-y-0">
          <div className="flex flex-col items-center lg:flex-row">
            <a
              className="mx-4 text-sm font-bold text-indigo-600 hover:text-indigo-800"
              href="#"
            >
              Home
            </a>
            <a
              className="mx-4 text-sm font-bold text-indigo-600 hover:text-indigo-800"
              href="#"
            >
              About Us
            </a>
            <a
              className="mx-4 text-sm font-bold text-indigo-600 hover:text-indigo-800"
              href="#"
            >
              Careers
            </a>
            <a
              className="mx-4 text-sm font-bold text-indigo-600 hover:text-indigo-800"
              href="#"
            >
              Privacy Policy
            </a>
            <a
              className="mx-4 text-sm font-bold text-indigo-600 hover:text-indigo-800"
              href="#"
            >
              Terms of Service
            </a>
          </div>
          <div className="mt-4 lg:mt-0">
            <img
              src="https://via.placeholder.com/120x40?text=D%27Core+Logo"
              className="w-32 h-auto"
              alt="D'Core Logo"
            />
          </div>
          <div className="mt-4 text-xs font-bold text-gray-500 text-center lg:text-left">
            &copy; {new Date().getFullYear()} D'Core | All Rights Reserved
          </div>
        </div>
      </footer>
    </div>
  );
}

export default GuestFooter;
