import React from "react";
import GuestNav from "./GuestNav";
import GuestFooter from "./GuestFooter";
import LinksSection from "./LinksSection";
import GoalsSections from "./GoalsSections";
import Features from "./Features";
import SEOOptimization from "./SEOOptimization";
import SocialMediaManagement from "./SocialMediaManagement";
import HilariousServices from "./HilariousServices";
import AnimatedVideo from "./AnimatedVideo";
import ContactUs from "./ContactUs";
import Map from "./Map";

function GuestHome() {
  return (
    <>
      {/* Navbar */}
      <GuestNav />

      {/* Main Content */}
      <main className="py-4 bg-gray-100 text-gray-900 min-h-screen">
        <div id="hero" className="pt-5 lg:flex items-center">
          {/* Left Section */}
          <div className="px-5 sm:px-10 md:px-10 lg:w-1/2 lg:max-w-3xl lg:mr-8 lg:px-20">
            <h1 className="text-3xl xl:text-4xl font-black md:leading-none xl:leading-tight">
              Get ready to LOL while your business goes viral 🚀😂 – Let’s turn
              your brand into a digital comedy sensation!
            </h1>
            <p className="mt-4 xl:mt-2 text-lg sm:text-xl">
              Hire the funniest and most talented designers on the internet 🌍✨
              – full-time, part-time, or just for giggles.
            </p>

            {/* Search Inputs */}
            <div className="mt-6 lg:mt-4">
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
                  placeholder="Type (e.g junior, senior) 🤓"
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
                  placeholder="Location (e.g. Mountain View, California) 🏖️"
                />
              </div>
              <div>
                <button className="transition-all duration-300 mt-5 w-full border border-transparent rounded font-semibold tracking-wide text-sm px-5 py-4 focus:outline-none focus:shadow-outline bg-indigo-500 text-gray-100 hover:bg-indigo-600 hover:text-gray-200">
                  Find Designers 🤩
                </button>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="mt-6 w-full flex-1 lg:mt-0">
            <img
              src="https://images.unsplash.com/photo-1524749292158-7540c2494485?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=85"
              alt="Designers"
              className="w-full h-full object-cover rounded-lg"
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

        <GoalsSections />

        {/* Features */}
        <Features />

        {/* SEO Optimization Section */}
        <SEOOptimization />

        {/* Social Media Management Section */}
        <SocialMediaManagement />

        {/* Services Section */}
        <HilariousServices />

        {/* Animated Video Marketing Section */}
        <AnimatedVideo />

        {/* Contact Us Section */}
        <ContactUs />

        {/* Map */}
        <Map />

        <LinksSection />
      </main>

      {/* Footer */}
      <GuestFooter />
    </>
  );
}

export default GuestHome;
