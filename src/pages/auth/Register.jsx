import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { RiUser6Line } from "react-icons/ri";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { IoLockClosedOutline, IoEyeOutline } from "react-icons/io5";
import { FiEyeOff } from "react-icons/fi";

import AuthHeader from "../../components/shared/AuthHeader";
import { register } from "../../apis/auth";

// Fixed versioning constants – update when terms / privacy policy change
const TERMS_VERSION = "2026-07";
const PRIVACY_POLICY_VERSION = "2026-07";

export default function Register() {
  const navigate = useNavigate();

  // ── Form state ──────────────────────────────────────────────────────────
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  // subject_ids / level_ids are stored as comma-separated strings by the
  // user, then parsed into number arrays before submission.
  const [subjectIds, setSubjectIds] = useState("");
  const [levelIds, setLevelIds] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  // ── UI state ─────────────────────────────────────────────────────────────
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  /** @type {[Record<string,string[]>, Function]} */
  const [fieldErrors, setFieldErrors] = useState({});

  // ── Helpers ───────────────────────────────────────────────────────────────
  /** Parse a comma-separated string of integers, e.g. "1, 2" → [1, 2] */
  const parseIds = (str) =>
    str
      .split(",")
      .map((s) => parseInt(s.trim(), 10))
      .filter((n) => !isNaN(n));

  const firstError = (field) =>
    fieldErrors[field]?.[0] ?? null;

  // ── Submit ────────────────────────────────────────────────────────────────
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFieldErrors({});

    if (!termsAccepted) {
      toast.error("You must accept the Terms of Service and Privacy Policy.");
      return;
    }

    const payload = {
      name,
      email,
      phone,
      password,
      password_confirmation: passwordConfirmation,
      subject_ids: parseIds(subjectIds),
      level_ids: parseIds(levelIds),
      terms_accepted: true,
      terms_version: TERMS_VERSION,
      privacy_policy_version: PRIVACY_POLICY_VERSION,
    };

    setLoading(true);
    try {
      const res = await register(payload);
      const data = res.data;

      if (data?.success) {
        // Persist token + user account for subsequent authenticated requests
        localStorage.setItem(
          "talep_user",
          JSON.stringify({
            token: data.data.token,
            ...data.data.account.user,
          })
        );
        toast.success(data.message ?? "Registration completed!");
        navigate("/dashboard");
      } else {
        toast.error(data?.message ?? "Registration failed. Please try again.");
      }
    } catch (err) {
      const status = err?.response?.status;
      const responseData = err?.response?.data;

      if (status === 422) {
        // Show per-field validation errors inline
        setFieldErrors(responseData?.errors ?? {});
        toast.error(responseData?.message ?? "Please fix the errors below.");
      } else if (status === 429) {
        toast.error("Too many attempts. Please wait before trying again.");
      } else if (status === 403) {
        toast.error("This action is unauthorized.");
      } else {
        toast.error("Something went wrong. Please try again.");
        console.error(err);
      }
    } finally {
      setLoading(false);
    }
  };

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <div className="w-full grid grid-cols-1 gap-4 bg-white border border-gray-300 rounded-2xl shadow-xl p-8">

      {/* Logo & Header */}
      <div className="text-center">
        <AuthHeader
          role="Teacher Access"
          titleClass="text-primary-color text-4xl lg:text-6xl"
          heading="Create Your Account"
          description="Register as a teacher to manage your exams, question banks, and student groups."
        />
      </div>

      {/* Form */}
      <form className="flex flex-col gap-4.5" onSubmit={handleSubmit} noValidate>

        {/* Name */}
        <div className="space-y-1">
          <label className="text-xs font-semibold text-gray-700 block">Your Name</label>
          <div className="relative flex items-center">
            <span className="absolute left-3.5 text-gray-400">
              <RiUser6Line />
            </span>
            <input
              type="text"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`w-full py-2.5 pl-11 pr-4 text-sm text-gray-800 border rounded-xl focus:outline-none focus:border-[#11255C] focus:ring-1 focus:ring-[#11255C] transition placeholder-gray-300 ${firstError("name") ? "border-red-400" : "border-gray-200"}`}
              required
            />
          </div>
          {firstError("name") && (
            <p className="text-xs text-red-500 mt-0.5">{firstError("name")}</p>
          )}
        </div>

        {/* Email */}
        <div className="space-y-1">
          <label className="text-xs font-semibold text-gray-700 block">Email Address</label>
          <div className="relative flex items-center">
            <span className="absolute left-3.5 text-gray-400">
              <HiOutlineMail />
            </span>
            <input
              type="email"
              placeholder="Enter Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full py-2.5 pl-11 pr-4 text-sm text-gray-800 border rounded-xl focus:outline-none focus:border-[#11255C] focus:ring-1 focus:ring-[#11255C] transition placeholder-gray-300 ${firstError("email") ? "border-red-400" : "border-gray-200"}`}
              required
            />
          </div>
          {firstError("email") && (
            <p className="text-xs text-red-500 mt-0.5">{firstError("email")}</p>
          )}
        </div>

        {/* Phone */}
        <div className="space-y-1">
          <label className="text-xs font-semibold text-gray-700 block">Phone Number</label>
          <div className="relative flex items-center">
            <span className="absolute left-3.5 text-gray-400">
              <BsTelephone />
            </span>
            <input
              type="tel"
              placeholder="+20 011 2345 5678"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={`w-full py-2.5 pl-11 pr-4 text-sm text-gray-800 border rounded-xl focus:outline-none focus:border-[#11255C] focus:ring-1 focus:ring-[#11255C] transition placeholder-gray-300 ${firstError("phone") ? "border-red-400" : "border-gray-200"}`}
              required
            />
          </div>
          {firstError("phone") && (
            <p className="text-xs text-red-500 mt-0.5">{firstError("phone")}</p>
          )}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full py-2.5 pl-11 pr-10 text-sm text-gray-800 border rounded-xl focus:outline-none focus:border-[#11255C] focus:ring-1 focus:ring-[#11255C] transition placeholder-gray-300 ${firstError("password") ? "border-red-400" : "border-gray-200"}`}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 text-gray-400 hover:text-gray-600 focus:outline-none cursor-pointer"
            >
              {showPassword ? <IoEyeOutline /> : <FiEyeOff />}
            </button>
          </div>
          {firstError("password") && (
            <p className="text-xs text-red-500 mt-0.5">{firstError("password")}</p>
          )}
        </div>

        {/* Confirm Password */}
        <div className="space-y-1">
          <label className="text-xs font-semibold text-gray-700 block">Confirm Password</label>
          <div className="relative flex items-center">
            <span className="absolute left-3.5 text-gray-400">
              <IoLockClosedOutline />
            </span>
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              className={`w-full py-2.5 pl-11 pr-10 text-sm text-gray-800 border rounded-xl focus:outline-none focus:border-[#11255C] focus:ring-1 focus:ring-[#11255C] transition placeholder-gray-300 ${firstError("password_confirmation") ? "border-red-400" : "border-gray-200"}`}
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 text-gray-400 hover:text-gray-600 focus:outline-none cursor-pointer"
            >
              {showConfirmPassword ? <IoEyeOutline /> : <FiEyeOff />}
            </button>
          </div>
          {firstError("password_confirmation") && (
            <p className="text-xs text-red-500 mt-0.5">{firstError("password_confirmation")}</p>
          )}
        </div>

        {/* Subject IDs */}
        <div className="space-y-1">
          <label className="text-xs font-semibold text-gray-700 block">
            Subject IDs
            <span className="text-gray-400 font-normal ml-1">(comma-separated, e.g. 1, 2)</span>
          </label>
          <input
            type="text"
            placeholder="e.g. 1, 2"
            value={subjectIds}
            onChange={(e) => setSubjectIds(e.target.value)}
            className={`w-full py-2.5 px-4 text-sm text-gray-800 border rounded-xl focus:outline-none focus:border-[#11255C] focus:ring-1 focus:ring-[#11255C] transition placeholder-gray-300 ${firstError("subject_ids") ? "border-red-400" : "border-gray-200"}`}
            required
          />
          {firstError("subject_ids") && (
            <p className="text-xs text-red-500 mt-0.5">{firstError("subject_ids")}</p>
          )}
        </div>

        {/* Level IDs */}
        <div className="space-y-1">
          <label className="text-xs font-semibold text-gray-700 block">
            Level IDs
            <span className="text-gray-400 font-normal ml-1">(comma-separated, e.g. 1)</span>
          </label>
          <input
            type="text"
            placeholder="e.g. 1"
            value={levelIds}
            onChange={(e) => setLevelIds(e.target.value)}
            className={`w-full py-2.5 px-4 text-sm text-gray-800 border rounded-xl focus:outline-none focus:border-[#11255C] focus:ring-1 focus:ring-[#11255C] transition placeholder-gray-300 ${firstError("level_ids") ? "border-red-400" : "border-gray-200"}`}
            required
          />
          {firstError("level_ids") && (
            <p className="text-xs text-red-500 mt-0.5">{firstError("level_ids")}</p>
          )}
        </div>

        {/* Terms & Conditions */}
        <div className="flex items-start gap-2.5 mt-1">
          <input
            id="terms"
            type="checkbox"
            checked={termsAccepted}
            onChange={(e) => setTermsAccepted(e.target.checked)}
            className="mt-0.5 h-4 w-4 rounded border-gray-300 text-[#11255C] focus:ring-0 accent-[#11255C] cursor-pointer"
          />
          <label htmlFor="terms" className="text-xs text-gray-600 leading-normal font-medium cursor-pointer">
            I Have Read And Agree To{" "}
            <span className="text-[#11255C] font-semibold hover:underline">Terms Of Service</span>
            {" "}And{" "}
            <span className="text-[#11255C] font-semibold hover:underline">Privacy Policy</span>
          </label>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#11255C] text-white py-3.5 rounded-2xl font-bold text-sm hover:bg-[#1b347a] transition-all shadow-md mt-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? "Creating Account…" : "Create Account"}
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