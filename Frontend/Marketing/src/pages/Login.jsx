import React from "react";
import GuestNav from "./GuestNav";
import GuestFooter from "./GuestFooter";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-screen">
      <GuestNav />

      <div className="flex flex-1 lg:flex-row">
        <div className="lg:w-1/2 xl:max-w-screen-sm">
          <div className="py-12 bg-indigo-100 lg:bg-white flex justify-center lg:justify-start lg:px-12">
            <div className="cursor-pointer flex items-center">
              <svg
                className="w-10 text-indigo-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 225 225"
                aria-labelledby="title"
                aria-describedby="desc"
                role="img"
              >
                <title>Blockify</title>
                <path
                  d="M173.8,151.5l13.6-13.6 M35.4,89.9l29.1-29 M89.4,34.9v1 M137.4,187.9l-0.6-0.4 M36.6,138.7l0.2-0.2 M56.1,169.1l27.7-27.6 M63.8,111.5l74.3-74.4 M87.1,188.1L187.6,87.6 M110.8,114.5l57.8-57.8"
                  strokeWidth="20"
                  strokeLinecap="round"
                  strokeMiterlimit="3"
                  stroke="currentColor"
                  fill="none"
                />
              </svg>
              <span className="text-2xl text-indigo-800 tracking-wide ml-2 font-semibold">
                Blockify
              </span>
            </div>
          </div>
          <div className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
            <h2 className="text-center text-4xl text-indigo-900 font-display font-semibold lg:text-left xl:text-5xl">
              Log in
            </h2>
            <form className="mt-12">
              <div>
                <label className="text-sm font-bold text-gray-700 tracking-wide">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="mike@gmail.com"
                  className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                />
              </div>
              <div className="mt-8">
                <label className="flex justify-between items-center text-sm font-bold text-gray-700 tracking-wide">
                  Password
                  <a className="text-xs font-display font-semibold text-indigo-600 hover:text-indigo-800">
                    Forgot Password?
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
                className="mt-10 bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600 shadow-lg"
              >
                Log In
              </button>
            </form>
            <div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
              Don't have an account?{" "}
              <a
                className="cursor-pointer text-indigo-600 hover:text-indigo-800"
                onClick={() => navigate("/register")}
              >
                Sign up
              </a>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex items-center justify-center bg-indigo-100 flex-1">
          <div className="max-w-xs transform duration-200 hover:scale-110">
            <img
              className="w-full h-auto max-w-sm lg:max-w-md xl:max-w-lg mx-auto rounded-lg shadow-lg"
              src="https://plus.unsplash.com/premium_photo-1683872921964-25348002a392?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGlnaXRhbCUyMG1hcmtldGluZ3xlbnwwfHwwfHx8MA%3D%3D"
              alt="Illustration for Login"
            />
          </div>
        </div>
      </div>

      <GuestFooter />
    </div>
  );
}

export default Login;
