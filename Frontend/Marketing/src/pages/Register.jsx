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
  };

  const handleUserSubmit = (e) => {
    e.preventDefault();
    console.log("User Details:", userDetails);
  };

  const handleChange = (setter) => (e) => {
    setter((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Guest Navigation */}
      <GuestNav />

      {/* Main Registration Section */}
      <div className="flex-grow flex bg-gradient-to-r from-indigo-500 to-purple-500 justify-center items-center py-10 ">
        <div className="bg-white text-gray-900 shadow-lg rounded-xl overflow-hidden max-w-3xl w-full">
          {/* Tabs */}
          <div className="flex">
            <button
              className={`w-1/2 py-4 text-center font-semibold text-lg ${
                activeTab === "business"
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-200 text-gray-700"
              } transition duration-300`}
              onClick={() => setActiveTab("business")}
            >
              Business Owner
            </button>
            <button
              className={`w-1/2 py-4 text-center font-semibold text-lg ${
                activeTab === "user"
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-200 text-gray-700"
              } transition duration-300`}
              onClick={() => setActiveTab("user")}
            >
              User
            </button>
          </div>

          {/* Form Content */}
          <div className="p-6 sm:p-10">
            {activeTab === "business" ? (
              <form onSubmit={handleBusinessSubmit} className="space-y-6">
                <h2 className="text-2xl font-bold text-center mb-4">
                  Register as Business Owner
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
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring focus:ring-indigo-500 focus:outline-none"
                  />
                ))}
                <button
                  type="submit"
                  className="w-full py-3 text-lg font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition duration-300"
                >
                  Register
                </button>
              </form>
            ) : (
              <form onSubmit={handleUserSubmit} className="space-y-6">
                <h2 className="text-2xl font-bold text-center mb-4">
                  Register as User
                </h2>
                <select
                  name="department"
                  value={userDetails.department}
                  onChange={handleChange(setUserDetails)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring focus:ring-indigo-500 focus:outline-none"
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
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring focus:ring-indigo-500 focus:outline-none"
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
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring focus:ring-indigo-500 focus:outline-none"
                  />
                ))}
                <button
                  type="submit"
                  className="w-full py-3 text-lg font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition duration-300"
                >
                  Register
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Guest Footer */}
      <GuestFooter />
    </div>
  );
}

export default Register;
