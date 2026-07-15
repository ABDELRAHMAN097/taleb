import { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full max-w-md bg-white border border-gray-100 shadow-xl p-8 flex flex-col gap-5 select-none my-6">
      
      {/* Logo & Header */}
      <div className="text-center space-y-1">
        <h1 className="text-5xl font-secondary text-primary-color">
          Taleb
        </h1>
        <h2 className="text-xl font-bold text-gray-800 tracking-tight mt-2">
          Welcome To Tawla!
        </h2>
        <p className="text-xs text-gray-400 max-w-[280px] mx-auto leading-normal">
          Empower Your Teaching With Seamless Exam Management
        </p>
      </div>

      {/* Form */}
      <form className="flex flex-col gap-4.5" onSubmit={(e) => e.preventDefault()}>
        
        {/* Your Name */}
        <div className="space-y-1">
          <label className="text-xs font-semibold text-gray-700 block">Your Name</label>
          <div className="relative flex items-center">
            <span className="absolute left-3.5 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor" className="w-4.5 h-4.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="w-full py-2.5 pl-11 pr-4 text-sm text-gray-800 border border-gray-200 rounded-xl focus:outline-none focus:border-[#11255C] focus:ring-1 focus:ring-[#11255C] transition placeholder-gray-300"
            />
          </div>
        </div>

        {/* Email Address */}
        <div className="space-y-1">
          <label className="text-xs font-semibold text-gray-700 block">Email Address</label>
          <div className="relative flex items-center">
            <span className="absolute left-3.5 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor" className="w-4.5 h-4.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
            </span>
            <input
              type="email"
              placeholder="Enter Email Address"
              className="w-full py-2.5 pl-11 pr-4 text-sm text-gray-800 border border-gray-200 rounded-xl focus:outline-none focus:border-[#11255C] focus:ring-1 focus:ring-[#11255C] transition placeholder-gray-300"
            />
          </div>
        </div>

        {/* Phone Number */}
        <div className="space-y-1">
          <label className="text-xs font-semibold text-gray-700 block">Phone Number</label>
          <div className="relative flex items-center">
            <span className="absolute left-3.5 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor" className="w-4.5 h-4.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.802-5.194-4.174-6.996-6.997l1.293-.97c.362-.272.528-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
            </span>
            <input
              type="tel"
              placeholder="+20 011 2345 5678"
              className="w-full py-2.5 pl-11 pr-4 text-sm text-gray-800 border border-gray-200 rounded-xl focus:outline-none focus:border-[#11255C] focus:ring-1 focus:ring-[#11255C] transition placeholder-gray-300"
            />
          </div>
        </div>

        {/* Password */}
        <div className="space-y-1">
          <label className="text-xs font-semibold text-gray-700 block">Password</label>
          <div className="relative flex items-center">
            <span className="absolute left-3.5 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor" className="w-4.5 h-4.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
              </svg>
            </span>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              className="w-full py-2.5 pl-11 pr-10 text-sm text-gray-800 border border-gray-200 rounded-xl focus:outline-none focus:border-[#11255C] focus:ring-1 focus:ring-[#11255C] transition placeholder-gray-300"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 text-gray-400 hover:text-gray-600 focus:outline-none cursor-pointer"
            >
              {showPassword ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor" className="w-4.5 h-4.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.822 7.822 3 3m-3-3-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor" className="w-4.5 h-4.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Subject Name */}
        <div className="space-y-1">
          <label className="text-xs font-semibold text-gray-700 block">Subject Name</label>
          <input
            type="text"
            placeholder="Enter Subject Name"
            className="w-full py-2.5 px-4 text-sm text-gray-800 border border-gray-200 rounded-xl focus:outline-none focus:border-[#11255C] focus:ring-1 focus:ring-[#11255C] transition placeholder-gray-300"
          />
        </div>

        {/* Level */}
        <div className="space-y-1">
          <label className="text-xs font-semibold text-gray-700 block">Level</label>
          <input
            type="text"
            placeholder="Enter Level"
            className="w-full py-2.5 px-4 text-sm text-gray-800 border border-gray-200 rounded-xl focus:outline-none focus:border-[#11255C] focus:ring-1 focus:ring-[#11255C] transition placeholder-gray-300"
          />
        </div>

        {/* Terms and Conditions */}
        <div className="flex items-start gap-2.5 mt-1">
          <input
            id="terms"
            type="checkbox"
            className="mt-0.5 h-4 w-4 rounded border-gray-300 text-[#11255C] focus:ring-0 accent-[#11255C] cursor-pointer"
          />
          <label htmlFor="terms" className="text-xs text-gray-600 leading-normal font-medium cursor-pointer">
            I Have Read And Agree To <span className="text-[#11255C] font-semibold hover:underline">Terms Of Service</span> And <span className="text-[#11255C] font-semibold hover:underline">Privacy Policy</span>
          </label>
        </div>

        {/* Create Account Button */}
        <button
          type="submit"
          className="w-full bg-[#11255C] text-white py-3.5 rounded-2xl font-bold text-sm hover:bg-[#1b347a] transition-all shadow-md mt-2 cursor-pointer"
        >
          Create Account
        </button>

        {/* Footer */}
        <p className="text-center text-xs text-gray-400 font-medium">
          Already Have An Account?{" "}
          <Link to="/" className="text-[#11255C] font-bold hover:underline ml-1">
            Sign In
          </Link>
        </p>
      </form>
    </div>
  );
}