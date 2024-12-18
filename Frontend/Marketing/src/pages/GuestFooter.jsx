import React from "react";

function GuestFooter() {
  return (
    <div>
      <footer className="px-5 sm:px-10 md:px-20 py-8">
        <div className="flex flex-col items-center lg:flex-row-reverse justify-between">
          <div>
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
          </div>
          <div className="mt-4">
            <img
              src="https://storage.googleapis.com/devitary-image-host.appspot.com/15846435184459982716-LogoMakr_7POjrN.png"
              className="w-32"
              alt="Company Logo"
            />
          </div>
          <div className="mt-4 text-xs font-bold text-gray-500 text-center">
            &copy; 2020 TEMPLATANA | MIT License
          </div>
        </div>
      </footer>
    </div>
  );
}

export default GuestFooter;
