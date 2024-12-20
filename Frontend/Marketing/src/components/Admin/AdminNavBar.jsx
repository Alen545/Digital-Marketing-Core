import React, { useState } from 'react';

function AdminNavBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSearchBoxOpen, setIsSearchBoxOpen] = useState(false);

  const toggleSidebarMenu = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleSearchBox = () => {
    setIsSearchBoxOpen(!isSearchBoxOpen);
  };

  return (
    <div>
      <header className="flex-shrink-0 border-b">
        <div className="flex items-center justify-between p-2">
          {/* Navbar left */}
          <div className="flex items-center space-x-3">
            <span className="p-2 text-xl font-semibold tracking-wider uppercase lg:hidden">K-WD</span>
            {/* Toggle sidebar button */}
            <button onClick={toggleSidebarMenu} className="p-2 rounded-md focus:outline-none focus:ring">
              <svg
                className="w-4 h-4 text-gray-600"
                className={isSidebarOpen ? 'transform transition-transform -rotate-180' : ''}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Mobile search box */}
          {isSearchBoxOpen && (
            <div
              className="fixed inset-0 z-10 bg-black bg-opacity-20"
              style={{ backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)' }}
            >
              <div
                onClick={() => setIsSearchBoxOpen(false)}
                className="absolute inset-x-0 flex items-center justify-between p-2 bg-white shadow-md"
              >
                <div className="flex items-center flex-1 px-2 space-x-2">
                  {/* search icon */}
                  <span>
                    <svg
                      className="w-6 h-6 text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </span>
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full px-4 py-3 text-gray-600 rounded-md focus:bg-gray-100 focus:outline-none"
                  />
                </div>
                {/* close button */}
                <button onClick={() => setIsSearchBoxOpen(false)} className="flex-shrink-0 p-4 rounded-md">
                  <svg
                    className="w-4 h-4 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          )}

          {/* Desktop search box */}
          <div className="items-center hidden px-2 space-x-2 md:flex-1 md:flex md:mr-auto md:ml-5">
            {/* search icon */}
            <span>
              <svg
                className="w-5 h-5 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Search"
              className="px-4 py-3 rounded-md hover:bg-gray-100 lg:max-w-sm md:py-2 md:flex-1 focus:outline-none md:focus:bg-gray-100 md:focus:shadow md:focus:border"
            />
          </div>
        </div>
      </header>
    </div>
  );
}

export default AdminNavBar;
