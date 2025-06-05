"use client";
import { useEffect, useState } from "react";
import SignupForm from "./signup"; // adjust path if needed

export default function LoginSignupForm() {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <div className="min-h-screen w-full grid place-items-center bg-gradient-to-r from-[#003366] via-[#0059b3] to-[#0073e6] p-4">
      <div className="bg-white max-w-md w-full p-8 rounded-2xl shadow-xl overflow-hidden">
        <div className="flex w-full transition-all duration-500 mb-4">
          {" "}
          {isSignup ? (
            <h2
              className={`w-1/2 text-center text-2xl font-semibold ${
                isSignup ? "text-[#1a75ff]" : "text-gray-400"
              }`}
            >
              Signup Form
            </h2>
          ) : (
            <h2
              className={`w-1/2 text-center text-2xl font-semibold ${
                !isSignup ? "text-[#1a75ff]" : "text-gray-400"
              }`}
            >
              Login Form
            </h2>
          )}
        </div>

        <div className="relative flex justify-between items-center h-12 border border-gray-300 rounded-xl mb-6">
          <button
            onClick={() => setIsSignup(false)}
            className={`w-1/2 h-full text-center z-10 font-medium ${
              !isSignup ? "text-white" : "text-black"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setIsSignup(true)}
            className={`w-1/2 h-full text-center z-10 font-medium ${
              isSignup ? "text-white" : "text-black"
            }`}
          >
            Signup
          </button>
          <div
            className={`absolute top-0 h-full w-1/2 bg-gradient-to-r from-[#003366] via-[#0059b3] to-[#0073e6] rounded-xl transition-all duration-500 ${
              isSignup ? "left-1/2" : "left-0"
            }`}
          ></div>
        </div>

        <div className="w-full">
          {isSignup ? (
            <SignupForm onSwitchToLogin={() => setIsSignup(false)} />
          ) : (
            <form className="w-full px-2">
              <div className="mt-5">
                <input
                  type="text"
                  placeholder="Email Address"
                  required
                  className="w-full h-12 px-4 rounded-xl border border-gray-300 focus:border-[#1a75ff] focus:outline-none"
                />
              </div>
              <div className="mt-5">
                <input
                  type="password"
                  placeholder="Password"
                  required
                  className="w-full h-12 px-4 rounded-xl border border-gray-300 focus:border-[#1a75ff] focus:outline-none"
                />
              </div>
              <div className="text-sm text-right mt-2">
                <a href="#" className="text-[#1a75ff] hover:underline">
                  Forgot password?
                </a>
              </div>
              <div className="mt-6 relative group">
                <input
                  type="submit"
                  value="Login"
                  className="w-full h-12 bg-gradient-to-r from-[#003366] via-[#0059b3] to-[#0073e6] text-white font-medium cursor-pointer rounded-xl"
                />
              </div>
              <div className="text-center mt-6 text-sm">
                Not a member?{" "}
                <button
                  className="text-[#1a75ff] hover:underline"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsSignup(true);
                  }}
                >
                  Signup now
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
