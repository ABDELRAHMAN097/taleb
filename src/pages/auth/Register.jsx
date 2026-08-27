import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { RiUser6Line } from "react-icons/ri";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { IoLockClosedOutline, IoEyeOutline } from "react-icons/io5";
import { FiEyeOff } from "react-icons/fi";

import AuthHeader from "../../components/shared/AuthHeader";
import { register , getSubjects , getLevels } from "../../apis/auth";

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
  const [subjects, setSubjects] = useState([]);
  const [levels, setLevels] = useState([]);
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [selectedLevels, setSelectedLevels] = useState([]);
  const [termsAccepted, setTermsAccepted] = useState(false);
  // ── UI state ─────────────────────────────────────────────────────────────
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  /** @type {[Record<string,string[]>, Function]} */
  const [fieldErrors, setFieldErrors] = useState({});
//fetch-setSubjects-setLevels
    useEffect(() => {
  const fetchRegisterData = async () => {
    try {
      const subjectsRes = await getSubjects();
      const levelsRes = await getLevels();

      console.log("SUBJECTS:", subjectsRes.data.subjects);
      console.log("LEVELS:", levelsRes.data.levels);

      setSubjects(subjectsRes.data.subjects || []);
      setLevels(levelsRes.data.levels || []);

    } catch (error) {
      console.error("REGISTER DATA ERROR:", error);
      toast.error("Failed to load subjects and levels");
    }
  };

  fetchRegisterData();
}, []);

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
    subject_ids: selectedSubjects,
    level_ids: selectedLevels,
    terms_accepted: true,
    terms_version: TERMS_VERSION,
    privacy_policy_version: PRIVACY_POLICY_VERSION,
  };

  console.log("REGISTER PAYLOAD:", payload);

  setLoading(true);

  try {
    const data = await register(payload);

    if (data?.success) {
      localStorage.setItem(
        "talep_user",
        JSON.stringify(data.data.account.user)
      );

      localStorage.setItem(
        "token",
        JSON.stringify(data.data.token)
      );

      toast.success(data.message ?? "Registration completed!");

      navigate("/dashboard");
    } else {
      toast.error(
        data?.message ?? "Registration failed. Please try again."
      );
    }

  } catch (err) {
    const status = err?.response?.status;
    const responseData = err?.response?.data;

    if (status === 422) {
      setFieldErrors(responseData?.errors ?? {});

      toast.error(
        responseData?.message ?? "Please fix the errors below."
      );

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
    <div className="w-full grid grid-cols-1 gap-4 bg-white border border-gray-300 rounded-2xl shadow-xl p-4 sm:p-8">

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

          {/* Subjects */}
         <div className="space-y-3">
            <div>
              <label className="text-xs font-semibold text-gray-700 block">
                Select Subjects
              </label>

              <p className="text-[11px] text-gray-400 mt-1">
                Choose the subjects you teach
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {subjects.map((subject) => {
                const isSelected = selectedSubjects.includes(subject.id);

                return (
                  <button
                    key={subject.id}
                    type="button"
                    onClick={() => {
                      setSelectedSubjects((prev) =>
                        prev.includes(subject.id)
                          ? prev.filter((id) => id !== subject.id)
                          : [...prev, subject.id]
                      );
                    }}
                    className={`flex items-center justify-between w-full p-4 rounded-xl border text-left transition-all ${
                      isSelected
                        ? "border-[#11255C] bg-[#11255C]/5"
                        : "border-gray-200 bg-white hover:border-[#11255C]/50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-9 h-9 rounded-lg flex items-center justify-center text-sm font-bold ${
                          isSelected
                            ? "bg-[#11255C] text-white"
                            : "bg-gray-100 text-gray-500"
                        }`}
                      >
                        {subject.code?.slice(0, 2)}
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-gray-800">
                          {subject.name_en}
                        </p>

                        <p className="text-[11px] text-gray-400">
                          {subject.code}
                        </p>
                      </div>
                    </div>

                    <div
                      className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                        isSelected
                          ? "bg-[#11255C] border-[#11255C]"
                          : "border-gray-300"
                      }`}
                    >
                      {isSelected && (
                        <span className="text-white text-xs">✓</span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {selectedSubjects.length > 0 && (
              <p className="text-xs text-[#11255C] font-semibold">
                {selectedSubjects.length} subject
                {selectedSubjects.length > 1 ? "s" : ""} selected
              </p>
            )}

            {firstError("subject_ids") && (
              <p className="text-xs text-red-500">
                {firstError("subject_ids")}
              </p>
            )}
          </div>

          
    {/* Levels */}
    <div className="space-y-2">
      <label className="text-xs font-semibold text-gray-700 block">
        Select Levels
      </label>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {levels.map((level) => (
          <label
            key={level.id}
            className="flex items-center gap-3 p-3 border border-gray-200 rounded-xl cursor-pointer hover:border-[#11255C] transition"
          >
            <input
              type="checkbox"
              checked={selectedLevels.includes(level.id)}
              onChange={() => {
                setSelectedLevels((prev) =>
                  prev.includes(level.id)
                    ? prev.filter((id) => id !== level.id)
                    : [...prev, level.id]
                );
              }}
              className="h-4 w-4 accent-[#11255C]"
            />

            <span className="text-sm text-gray-700">
              {level.name_en}
            </span>
          </label>
        ))}
      </div>

      {firstError("level_ids") && (
        <p className="text-xs text-red-500 mt-1">
          {firstError("level_ids")}
        </p>
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