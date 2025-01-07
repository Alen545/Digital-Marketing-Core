import React from "react";
import GuestNav from "./GuestNav";
import GuestFooter from "./GuestFooter";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation Section */}
      <GuestNav />

      {/* Main Content */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2">
        {/* Image Section (Visible on top for <600px, on right for ≥600px) */}
        <div className="flex items-center justify-center ">
          <div className="w-full max-w-xs transform duration-200 hover:scale-105">
            <img
              className="block md:order-last mx-auto w-2/3 sm:w-1/2 md:w-full max-h-40 sm:max-h-60 md:max-h-80 lg:max-h-96 h-auto rounded-lg shadow-lg"
              src="https://plus.unsplash.com/premium_photo-1683872921964-25348002a392?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGlnaXRhbCUyMG1hcmtldGluZ3xlbnwwfHwwfHx8MA%3D%3D"
              alt="Login illustration"
            />
          </div>
        </div>

        {/* Login Section */}
        <div className="flex items-center justify-center bg-gray-50 p-8">
          <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-3xl font-semibold text-indigo-800 mb-6 text-center">
              🚀 Log in to your account
            </h2>
            <form className="space-y-5">
              <div>
                <label className="text-sm font-bold text-gray-700 tracking-wide">
                  📧 Email Address
                </label>
                <input
                  type="email"
                  placeholder="mike@gmail.com"
                  className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="flex justify-between items-center text-sm font-bold text-gray-700 tracking-wide">
                  🔒 Password
                  <a className="text-xs font-semibold text-indigo-600 hover:text-indigo-800">
                    Forgot Password? 🤔
                  </a>
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                />
              </div>
              <button
                type="submit"
                onClick={() => navigate("/admin/adminDashBoard")}
                className="mt-6 bg-indigo-500 text-white p-4 w-full rounded-full tracking-wide font-semibold focus:outline-none focus:shadow-outline hover:bg-indigo-600 shadow-lg"
              >
                🚪 Log In
              </button>
            </form>
            <div className="mt-6 text-sm font-semibold text-gray-700 text-center">
              Don't have an account?{" "}
              <a
                className="cursor-pointer text-indigo-600 hover:text-indigo-800"
                onClick={() => navigate("/register")}
              >
                📝 Sign up
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <GuestFooter />
    </div>
  );
}

export default Login;
