import React, { useState } from "react";
import GuestNav from "./GuestNav";
import GuestFooter from "./GuestFooter";

function Register() {
  const [activeTab, setActiveTab] = useState("business"); // 'business' or 'user'

  const [businessDetails, setBusinessDetails] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    companyIdentifier: "",
    phone: "",
    email: "",
    location: "",
    website: "",
    username: "",
    password: "",
  });

  const [userDetails, setUserDetails] = useState({
    department: "",
    designation: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    username: "",
    password: "",
  });

  const handleBusinessSubmit = (e) => {
    e.preventDefault();
    console.log("Business Details:", businessDetails);
    // Add API call for business registration here
  };

  const handleUserSubmit = (e) => {
    e.preventDefault();
    console.log("User Details:", userDetails);
    // Add API call for user registration here
  };

  const handleChange = (setter) => (e) => {
    setter((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-gray-900">
      {/* Guest Navigation */}
      <GuestNav />

      {/* Main Registration Section */}
      <div className="flex-grow flex justify-center items-center">
        <div className="max-w-screen-lg m-0 sm:m-20 bg-white shadow sm:rounded-lg flex flex-col w-full">
          <div className="flex justify-center border-b border-gray-200">
            <button
              className={`px-4 py-2 w-full ${
                activeTab === "business"
                  ? "text-indigo-600 border-b-2 border-indigo-600"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("business")}
            >
              Business Owner
            </button>
            <button
              className={`px-4 py-2 w-full ${
                activeTab === "user"
                  ? "text-indigo-600 border-b-2 border-indigo-600"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("user")}
            >
              User
            </button>
          </div>

          {activeTab === "business" ? (
            <form
              onSubmit={handleBusinessSubmit}
              className="p-6 sm:p-12 flex flex-col items-center"
            >
              <h2 className="text-2xl font-bold mb-6">
                Business Owner Registration
              </h2>
              {[
                { label: "First Name", name: "firstName" },
                { label: "Last Name", name: "lastName" },
                { label: "Company Name", name: "companyName" },
                { label: "Company Identifier", name: "companyIdentifier" },
                { label: "Phone", name: "phone" },
                { label: "Email", name: "email" },
                { label: "Location", name: "location" },
                { label: "Website", name: "website" },
                { label: "Username", name: "username" },
                { label: "Password", name: "password", type: "password" },
              ].map(({ label, name, type = "text" }) => (
                <input
                  key={name}
                  type={type}
                  name={name}
                  placeholder={label}
                  value={businessDetails[name]}
                  onChange={handleChange(setBusinessDetails)}
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-4"
                />
              ))}
              <button
                type="submit"
                className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
              >
                Register as Business
              </button>
            </form>
          ) : (
            <form
              onSubmit={handleUserSubmit}
              className="p-6 sm:p-12 flex flex-col items-center"
            >
              <h2 className="text-2xl font-bold mb-6">User Registration</h2>
              <select
                name="department"
                value={userDetails.department}
                onChange={handleChange(setUserDetails)}
                className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-4"
              >
                <option value="">Select Department</option>
                <option value="HR">HR</option>
                <option value="IT">IT</option>
                <option value="Marketing">Marketing</option>
              </select>
              <select
                name="designation"
                value={userDetails.designation}
                onChange={handleChange(setUserDetails)}
                className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-4"
              >
                <option value="">Select Designation</option>
                <option value="Manager">Manager</option>
                <option value="Team Lead">Team Lead</option>
                <option value="Staff">Staff</option>
              </select>
              {[
                { label: "First Name", name: "firstName" },
                { label: "Last Name", name: "lastName" },
                { label: "Email", name: "email" },
                { label: "Phone", name: "phone" },
                { label: "Username", name: "username" },
                { label: "Password", name: "password", type: "password" },
              ].map(({ label, name, type = "text" }) => (
                <input
                  key={name}
                  type={type}
                  name={name}
                  placeholder={label}
                  value={userDetails[name]}
                  onChange={handleChange(setUserDetails)}
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-4"
                />
              ))}
              <button
                type="submit"
                className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
              >
                Register as User
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Guest Footer */}
      <GuestFooter />
    </div>
  );
}

export default Register;
