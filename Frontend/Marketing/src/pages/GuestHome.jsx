import React from "react";
import GuestNav from "./GuestNav";
import GuestFooter from "./GuestFooter";

function GuestHome() {
  return (
    <>
      {/* Navbar */}
      <GuestNav />

      {/* Main Content */}
      <main className="py-2 bg-gray-100 text-gray-900 min-h-screen">
        <div id="hero" className="pt-5 lg:flex items-center">
          {/* Left Section */}
          <div className="px-5 sm:px-10 md:px-10 md:flex lg:block lg:w-1/2 lg:max-w-3xl lg:mr-8 lg:px-20">
            <div className="md:w-1/2 md:mr-10 lg:w-full lg:mr-0">
              <h1 className="text-3xl xl:text-4xl font-black md:leading-none xl:leading-tight">
                Hire a Designer Near You
              </h1>
              <p className="mt-4 xl:mt-2">
                World-Class Designers, just for you on contract, full-time or
                part-time, whatever you need.
              </p>
            </div>

            {/* Search Inputs */}
            <div className="flex-1">
              <div className="relative mt-4 md:mt-0 lg:mt-4">
                <div className="pl-4 pr-4 h-full absolute bottom-0 left-0 flex items-center">
                  <svg
                    className="text-gray-700 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                </div>
                <input
                  type="text"
                  className="w-full border bg-gray-100 px-4 py-4 text-sm tracking-wide focus:outline-none focus:shadow-outline rounded pl-12"
                  placeholder="Type (e.g junior, senior)"
                />
              </div>
              <div className="relative mt-4">
                <div className="pl-4 pr-4 h-full absolute bottom-0 left-0 flex items-center">
                  <svg
                    className="text-gray-700 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <input
                  type="text"
                  className="w-full border bg-gray-100 px-4 py-4 text-sm tracking-wide focus:outline-none focus:shadow-outline rounded pl-12"
                  placeholder="Mountain View, California"
                />
              </div>
              <div>
                <button className="transition-all duration-300 mt-5 w-full border border-transparent rounded font-semibold tracking-wide text-sm px-5 py-4 focus:outline-none focus:shadow-outline bg-indigo-500 text-gray-100 hover:bg-indigo-600 hover:text-gray-200">
                  Find Designers
                </button>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="mt-6 w-full flex-1 lg:mt-0">
            <img
              src="https://images.unsplash.com/photo-1524749292158-7540c2494485?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=85"
              alt="Designers"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Companies */}
        <div className="p-5 sm:px-10 md:px-20" id="companies">
          <div className="max-w-screen-xl mx-auto">
            <img
              className="mx-auto"
              src="https://storage.googleapis.com/devitary-image-host.appspot.com/15846471026680582071-Strip-Payment-Logos.png"
              alt="Company Logos"
            />
          </div>
        </div>

        {/* Features */}
        {/* Features */}
        <div
          className="px-5 sm:px-10 md:px-20 lg:px-10 xl:px-20 py-8 bg-indigo-100"
          id="features"
        >
          <div className="max-w-screen-xl mx-auto">
            <h3 className="leading-none font-black text-3xl mb-6">Features</h3>
            <div className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {/* Feature Cards */}
              {[
                {
                  title: "Amazing People",
                  description:
                    "We guarantee that every designer you ever work with will be an awesome member for your team.",
                  color: "bg-indigo-200",
                  iconColor: "text-indigo-500",
                },
                {
                  title: "Best Rates",
                  description:
                    "Be assured that you will always get the best rates. We monitor trends to ensure fairness.",
                  color: "bg-green-200",
                  iconColor: "text-green-500",
                },
                {
                  title: "Abuse Protection",
                  description:
                    "Money is held by us in escrow. Customer service reviews any disputes personally.",
                  color: "bg-red-200",
                  iconColor: "text-red-500",
                },
              ].map((feature, idx) => (
                <div
                  key={idx}
                  className="bg-gray-100 rounded shadow-lg p-6 sm:p-8"
                >
                  <div
                    className={`p-4 inline-block ${feature.color} rounded-lg`}
                  >
                    <svg
                      className={`${feature.iconColor} w-8`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {/* SVG Placeholder */}
                      <circle cx="12" cy="12" r="10" />
                      <line x1="9" y1="9" x2="9.01" y2="9" />
                      <line x1="15" y1="9" x2="15.01" y2="9" />
                    </svg>
                  </div>
                  <div className="mt-4 font-extrabold text-2xl tracking-wide">
                    {feature.title}
                  </div>
                  <div className="text-sm">{feature.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div></div>
      </main>

      {/* Footer */}
      <GuestFooter />
    </>
  );
}

export default GuestHome;
