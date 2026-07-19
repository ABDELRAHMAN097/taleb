import { Link } from "react-router-dom";
import { HiOutlineMail } from "react-icons/hi";
import { IoLockClosedOutline } from "react-icons/io5";
import { FiEyeOff } from "react-icons/fi";
import { IoEyeOutline } from "react-icons/io5";
import AuthHeader from "../../components/shared/AuthHeader";
import { useState } from "react";



export default function ForgotPassword() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="w-full max-w-md bg-white border-gray-300 border rounded-2xl grid gap-1 py-7 px-4 space-y-4 shadow-lg">
      {/* Header */}
      <div className="text-center">
        <AuthHeader
          role="Admin Access"
          heading="Forgot Password?"
          description="enter your Email Address below to reset your password"
        />
      </div>

      {/* Form */}
     <form action="" className="space-y-1">
               {/* Email */}
             <div className="space-y-1">
     
               <label className="text-lg font-semibold text-gray-700 block">Email Address</label>
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
     
               <Link
                   to="/forgot-password"
                   >
               <div className="text-right text-sm text-blue-600">
                 Forgot Password?
               </div>
               </Link>
                 
               {/* Button */}
                 
               <div className="w-full grid items-center justify-center gap-y-4 mt-2">
                  <Link
                   to="/verify-code"
                   className="bg-blue-800 text-center text-white px-10 py-2 rounded-md"
                   >
                   Reset
                 </Link>
               </div>
                   </form>  
    </div>
  );
}