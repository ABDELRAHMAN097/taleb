import { Link, useNavigate } from "react-router-dom";
import { HiOutlineMail } from "react-icons/hi";
import { IoLockClosedOutline, IoEyeOutline } from "react-icons/io5";
import { FiEyeOff } from "react-icons/fi";
import { useState } from "react";

import AuthHeader from "../../components/shared/AuthHeader";
import { login } from "../../apis/auth";
import { useI18n } from "@/i18n/i18n/context";
import { toast } from "react-toastify";

export default function Login() {
  const { toLocalePath } = useI18n()
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLoginn = async () => {
    try {
      const res = await login(email, password)
      if (res.success) {

        localStorage.setItem("talep_user", JSON.stringify(res.data.user))
        localStorage.setItem("token", JSON.stringify(res.data.token))
        toast.success(res.message)
        navigate(toLocalePath('/dashboard'))  
      } else {
        toast.error(res.message)
      }
    } catch (error) {
      console.log(error)

    }

  }

  return (
    <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white shadow-xl p-6 sm:p-8">

      {/* Header */}
      <div className="mb-8">
        <AuthHeader
          role="Admin Access"
          titleClass="text-primary-color text-4xl lg:text-6xl"
          heading="Welcome back, Admin!"
          description="Please log in to manage your exams, view student reports, and configure your dashboard settings."
        />
      </div>

      {/* Form */}
      <form className="space-y-6">

        {/* Email */}
        <div className="space-y-2">

          <label className="block text-sm font-semibold text-gray-700">
            Email Address
          </label>

          <div className="relative">

            <HiOutlineMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />

            <input
              type="email"
              placeholder="Enter Email Address"
              className="w-full rounded-xl border border-gray-300 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-primary-color focus:ring-2 focus:ring-primary-color/20"
              onChange={(e) => setEmail(e.target.value)}
            />

          </div>

        </div>

        {/* Password */}
        <div className="space-y-2">

          <label className="block text-sm font-semibold text-gray-700">
            Password
          </label>

          <div className="relative">

            <IoLockClosedOutline className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border border-gray-300 py-3 pl-11 pr-11 text-sm outline-none transition focus:border-primary-color focus:ring-2 focus:ring-primary-color/20"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary-color"
            >
              {showPassword ? (
                <IoEyeOutline size={20} />
              ) : (
                <FiEyeOff size={18} />
              )}
            </button>

          </div>

        </div>

        {/* Forgot Password */}
        <div className="flex justify-end">

          <Link
            to="/forgot-password"
            className="text-sm font-medium text-primary-color hover:underline"
          >
            Forgot Password?
          </Link>

        </div>

        {/* Buttons */}
        <div className="space-y-4 pt-2">

          <button
            type="button"
            onClick={handleLoginn}
            className="block w-full rounded-xl bg-primary-color py-3 text-center text-sm font-semibold text-white transition hover:opacity-90"
          >
            Login
          </button>

          <Link
            to={toLocalePath("/register")}
            className="block w-full rounded-xl border border-primary-color py-3 text-center text-sm font-semibold text-primary-color transition hover:bg-primary-color hover:text-white"
          >
            Create New Account
          </Link>

        </div>

      </form>

    </div>
  );
}