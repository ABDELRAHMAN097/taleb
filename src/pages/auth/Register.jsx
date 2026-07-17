import { useState } from "react";
import { Link } from "react-router-dom";
import { RiUser6Line } from "react-icons/ri";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { IoLockClosedOutline } from "react-icons/io5";
import { FiEyeOff } from "react-icons/fi";
import { IoEyeOutline } from "react-icons/io5";
import AuthHeader from "../../components/shared/AuthHeader";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full grid grid-cols-1 gap-4 bg-white border border-gray-300 rounded-2xl shadow-xl p-8">
      
      {/* Logo & Header */}
      <div className="text-center">
        <AuthHeader
          role="Admin Access"
          heading="Welcome back, Admin!"
          description="Please log in to manage your exams, view student reports, and configure your dashboard settings."
          />
      </div>

      {/* Form */}
      <form className="flex flex-col gap-4.5" onSubmit={(e) => e.preventDefault()}>
        
        {/* Your Name */}
        <div className="space-y-1">
          <label className="text-xs font-semibold text-gray-700 block">Your Name</label>
          <div className="relative flex items-center">
            <span className="absolute left-3.5 text-gray-400">
              <RiUser6Line />
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
              <HiOutlineMail />
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
              <BsTelephone />
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
              <IoLockClosedOutline />
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
                <IoEyeOutline />
              ) : (
               <FiEyeOff />
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