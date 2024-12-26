import React from "react";
import GuestNav from "./GuestNav";
import GuestFooter from "./GuestFooter";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-screen">
      {/* Navigation Section */}
      <GuestNav />

      <div className="flex flex-1 lg:flex-row">
        {/* Left Section (Login Form) */}
        <div className="lg:w-1/2 xl:max-w-screen-sm p-10 ml-10">
          <div className="text-center py-12 lg:bg-white rounded-xl shadow-md">
            <h2 className="text-3xl font-semibold text-indigo-800 mb-6">
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

        {/* Right Section (Image) */}
        <div className="hidden lg:flex items-center justify-center bg-white flex-1">
          <div className="max-w-xs transform duration-200 hover:scale-110">
            <img
              className="w-full h-auto max-w-sm lg:max-w-md xl:max-w-lg mx-auto rounded-lg shadow-lg"
              src="https://plus.unsplash.com/premium_photo-1683872921964-25348002a392?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGlnaXRhbCUyMG1hcmtldGluZ3xlbnwwfHwwfHx8MA%3D%3D"
              alt="Login illustration"
            />
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <GuestFooter />
    </div>
  );
}

export default Login;
