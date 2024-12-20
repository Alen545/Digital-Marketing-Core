import React from 'react';
import AdminSideBar from './AdminSideBar';
import AdminNavBar from './AdminNavBar';
import AdminSettingPanel from './AdminSettingPanel';
import AdminFooter from './AdminFooter';

function AdminDashBoard() {
  return (
    <div className="flex h-screen overflow-hidden bg-white">
      {/* Loading Screen */}
      <div className="fixed inset-0 z-50 flex items-center justify-center text-white bg-black bg-opacity-50">
        Loading.....
      </div>

      <div className="flex flex-col flex-1 h-full overflow-hidden">
        {/* Navbar */}
        <div className="relative flex items-center space-x-3">
          <button className="p-2 bg-gray-100 rounded-full md:hidden">
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
          </button>

          <div className="items-center hidden space-x-3 md:flex">
            {/* Notification Button */}
            <div className="relative">
              <div className="absolute right-0 p-1 bg-red-400 rounded-full animate-ping"></div>
              <div className="absolute right-0 p-1 bg-red-400 border rounded-full"></div>
              <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
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
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </button>
            </div>

            {/* Services Button */}
            <div className="relative">
              <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
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
                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                  />
                </svg>
              </button>
            </div>

            {/* Options Button */}
            <div className="relative">
              <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
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
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Avatar */}
          <div className="relative">
            <button className="p-1 bg-gray-200 rounded-full">
              <img
                className="object-cover w-8 h-8 rounded-full"
                src="https://avatars0.githubusercontent.com/u/57622665?s=460&u=8f581f4c4acd4c18c33a87b3e6476112325e8b38&v=4"
                alt="User Avatar"
              />
            </button>
          </div>
        </div>

        {/* Sidebar and Content */}
        <div className="flex flex-1">
          <AdminSideBar />
          <div className="flex flex-col flex-1">
            <AdminNavBar />
            <div className="flex-1 p-4 overflow-auto">
              <AdminSettingPanel />
            </div>
            <AdminFooter />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashBoard;
