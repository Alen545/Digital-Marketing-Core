import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";

const LinksSection = () => {
  const sections = [
    {
      title: "About Google Ads",
      links: [
        "Overview",
        "Goals",
        "Expert support",
        "Mobile app for Android",
        "Mobile app for iOS",
      ],
    },
    {
      title: "Learning & Support",
      links: [
        "Your guide to Google Ads",
        "Google Ads Help Center",
        "Google Ads Announcements",
        "Google Advertiser Community",
        "Primer",
      ],
    },
    {
      title: "Developers & Partners",
      links: [
        "Google Developers Site",
        "Google Ads API (AdWords API)",
        "Google Ads Scripts",
      ],
    },
    {
      title: "Related Products",
      links: [
        "Google Analytics",
        "Shopping Campaigns",
        "Business Profile",
        "Chrome",
      ],
    },
    {
      title: "More Solutions",
      links: [
        "Business Solutions",
        "Google Workspace",
        "Think with Google",
        "AdSense",
        "AdMob",
      ],
    },
  ];

  // State to track dropdowns for mobile view
  const [activeSection, setActiveSection] = useState(null);

  return (
    <div className="bg-gray-50 py-8 md:py-12 lg:py-16">
      <div className="max-w-screen-xl mx-auto px-4 lg:px-16">
        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-8">
          <FaTwitter className="text-blue-500 text-xl cursor-pointer" />
          <FaInstagram className="text-pink-600 text-xl cursor-pointer" />
          <FaYoutube className="text-red-500 text-xl cursor-pointer" />
          <FaFacebookF className="text-blue-800 text-xl cursor-pointer" />
        </div>

        {/* Desktop View */}
        <div className="hidden lg:flex justify-between">
          {sections.map((section, index) => (
            <div key={index} className="w-1/5">
              <h3 className="text-lg font-bold mb-4">{section.title}</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {section.links.map((link, linkIndex) => (
                  <li
                    key={linkIndex}
                    className="hover:underline cursor-pointer"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Mobile/Tablet View */}
        <div className="lg:hidden">
          {sections.map((section, index) => (
            <div key={index} className="border-b pb-2 mb-4">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() =>
                  setActiveSection(activeSection === index ? null : index)
                }
              >
                <h3 className="text-lg font-bold">{section.title}</h3>
                {/* Dropdown icon logic */}
                <button className="text-xl">
                  {activeSection === index ? (
                    <IoIosArrowDropup />
                  ) : (
                    <IoIosArrowDropdown />
                  )}
                </button>
              </div>
              {activeSection === index && (
                <ul className="space-y-2 mt-2 text-sm text-gray-700">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex} className="hover:underline">
                      {link}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LinksSection;
