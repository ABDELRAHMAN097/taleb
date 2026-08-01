import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  HiOutlineChevronLeft,
  HiOutlineShieldCheck,
  HiOutlineCalendar,
  HiX,
  HiCheck,
  HiLightningBolt,
  HiOutlineInformationCircle
} from "react-icons/hi";

// Available groups mock data
const ALL_AVAILABLE_GROUPS = [
  "Group A - 1st Secondary",
  "Group B",
  "Group C - 2nd Secondary",
  "Group D - 1st Secondary",
  "Group E - 3rd Secondary",
];

export default function Exams() {
  const navigate = useNavigate();
  
  // State variables for form fields
  const [examTitle, setExamTitle] = useState("");
  const [selectedGroups, setSelectedGroups] = useState([
    "Group A - 1st Secondary",
    "Group B",
  ]);
  const [groupInput, setGroupInput] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [timeLimit, setTimeLimit] = useState(60);
  const [autoSubmit, setAutoSubmit] = useState(true);
  const [shuffleQuestions, setShuffleQuestions] = useState(true);
  const [shuffleAnswers, setShuffleAnswers] = useState(true);
  const [questionsPerPage, setQuestionsPerPage] = useState("");
  const [publishingSchedule, setPublishingSchedule] = useState("instant"); // 'instant' or 'later'
  const [scheduleDate, setScheduleDate] = useState("");
  const [scheduleTime, setScheduleTime] = useState("");
  const [showInstantResults, setShowInstantResults] = useState(true);

  // Suggestion menu ref to handle clicking outside
  const suggestionsRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (suggestionsRef.current && !suggestionsRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Filter groups for suggestions
  const filteredSuggestions = ALL_AVAILABLE_GROUPS.filter(
    (group) =>
      !selectedGroups.includes(group) &&
      group.toLowerCase().includes(groupInput.toLowerCase())
  );

  // Handle adding group
  const addGroup = (group) => {
    if (!selectedGroups.includes(group)) {
      setSelectedGroups([...selectedGroups, group]);
    }
    setGroupInput("");
    setShowSuggestions(false);
  };

  // Handle removing group
  const removeGroup = (groupToRemove) => {
    setSelectedGroups(selectedGroups.filter((g) => g !== groupToRemove));
  };

  // Select all groups link
  const selectAllGroups = () => {
    setSelectedGroups([...ALL_AVAILABLE_GROUPS]);
  };

  // Handle publish action
  const handlePublish = (e) => {
    e.preventDefault();
    const examData = {
      examTitle,
      selectedGroups,
      timeLimit,
      autoSubmit,
      shuffleQuestions,
      shuffleAnswers,
      questionsPerPage,
      publishingSchedule,
      scheduleDate: publishingSchedule === "later" ? scheduleDate : null,
      scheduleTime: publishingSchedule === "later" ? scheduleTime : null,
      showInstantResults,
    };
    
    console.log("Publishing Exam Data:", examData);
    alert(`Exam "${examTitle || "Untitled Exam"}" published successfully! Check console for details.`);
    navigate("/dashboard");
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-20">
      
      {/* Box 1: Title & Group Class Selection */}
      <div className="bg-white p-6 rounded-2xl border border-gray-100/80 shadow-sm space-y-5">
        
        {/* Exam Title */}
        <div>
          <label className="text-[11px] font-bold text-primary-color tracking-wider uppercase mb-2 block">
            Exam Title
          </label>
          <input
            type="text"
            placeholder="e.g., Physics Ch.1 Quiz"
            value={examTitle}
            onChange={(e) => setExamTitle(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition"
          />
        </div>

        {/* Select Group/Class */}
        <div className="relative">
          <label className="text-[11px] font-bold text-primary-color tracking-wider uppercase mb-2 block">
            Select Group/Class
          </label>
          
          <div className="min-h-[50px] p-2 rounded-xl border border-gray-200 bg-white flex flex-wrap gap-2 items-center focus-within:border-sky-400 focus-within:ring-1 focus-within:ring-sky-400 transition">
            
            {/* Tags */}
            {selectedGroups.map((group) => (
              <span
                key={group}
                className="bg-sky-50 text-sky-700 text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5 border border-sky-100"
              >
                {group}
                <button
                  type="button"
                  onClick={() => removeGroup(group)}
                  className="text-sky-500 hover:text-sky-700 focus:outline-none transition cursor-pointer"
                >
                  <HiX className="w-3.5 h-3.5" />
                </button>
              </span>
            ))}

            {/* Input inside container */}
            <input
              type="text"
              placeholder={selectedGroups.length === 0 ? "Search and select groups..." : "Add another group..."}
              value={groupInput}
              onChange={(e) => {
                setGroupInput(e.target.value);
                setShowSuggestions(true);
              }}
              onFocus={() => setShowSuggestions(true)}
              className="flex-1 min-w-[150px] bg-transparent text-sm py-1 px-2 focus:outline-none"
            />
          </div>

          {/* Suggestions Dropdown */}
          {showSuggestions && filteredSuggestions.length > 0 && (
            <div
              ref={suggestionsRef}
              className="absolute z-20 w-full mt-1 bg-white border border-gray-200 rounded-xl shadow-lg max-h-60 overflow-y-auto"
            >
              {filteredSuggestions.map((group) => (
                <button
                  key={group}
                  type="button"
                  onClick={() => addGroup(group)}
                  className="w-full text-left px-4 py-2.5 hover:bg-gray-50 text-sm text-gray-700 transition"
                >
                  {group}
                </button>
              ))}
            </div>
          )}

          {/* Select all groups action */}
          <div className="mt-2.5">
            <button
              type="button"
              onClick={selectAllGroups}
              className="text-xs font-bold text-sky-500 hover:text-sky-600 transition focus:outline-none cursor-pointer"
            >
              + Select All Groups
            </button>
          </div>
        </div>

      </div>

      {/* Box 2: Time Limit, Auto Submit & Anti-Cheating */}
      <div className="bg-white p-6 rounded-2xl border border-gray-100/80 shadow-sm space-y-6">
        
        {/* Time Limit */}
        <div>
          <label className="text-[11px] font-bold text-primary-color tracking-wider uppercase mb-2 block">
            Time Limit
          </label>
          <div className="relative rounded-xl border border-gray-200 focus-within:border-sky-400 focus-within:ring-1 focus-within:ring-sky-400 transition bg-white flex items-center">
            <input
              type="number"
              value={timeLimit}
              onChange={(e) => setTimeLimit(e.target.value)}
              className="w-full px-4 py-3 bg-transparent rounded-xl text-sm focus:outline-none"
            />
            <span className="pr-4 text-xs font-semibold text-gray-400 select-none">minutes</span>
          </div>
        </div>

        {/* Auto-Submit Switch */}
        <div className="flex items-center justify-between py-2 border-b border-gray-50 pb-4">
          <div>
            <h5 className="text-sm font-bold text-gray-800">Auto-Submit Exam</h5>
            <p className="text-xs text-gray-500 mt-0.5">Automatically submit exam when time expires.</p>
          </div>
          <button
            type="button"
            onClick={() => setAutoSubmit(!autoSubmit)}
            className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
              autoSubmit ? "bg-[#38BDF8]" : "bg-gray-200"
            }`}
          >
            <span
              className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                autoSubmit ? "translate-x-5" : "translate-x-0"
              }`}
            />
          </button>
        </div>

        {/* Anti Cheating Category */}
        <div className="space-y-4 pt-1">
          <div className="flex items-center gap-1.5 text-[11px] font-bold text-sky-600 uppercase tracking-wider">
            <HiOutlineShieldCheck className="w-4 h-4 text-sky-500" />
            <span>Anti-Cheating Toggles</span>
          </div>

          {/* Shuffle questions */}
          <div className="flex items-center justify-between py-2 border-b border-gray-50 pb-4">
            <div>
              <h5 className="text-sm font-bold text-gray-800">Shuffle Questions Order</h5>
              <p className="text-xs text-gray-500 mt-0.5">Randomize question sequence for every student.</p>
            </div>
            <button
              type="button"
              onClick={() => setShuffleQuestions(!shuffleQuestions)}
              className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                shuffleQuestions ? "bg-[#38BDF8]" : "bg-gray-200"
              }`}
            >
              <span
                className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                  shuffleQuestions ? "translate-x-5" : "translate-x-0"
                }`}
              />
            </button>
          </div>

          {/* Shuffle answer choices */}
          <div className="flex items-center justify-between py-2">
            <div>
              <h5 className="text-sm font-bold text-gray-800">Shuffle Answer Choices</h5>
              <p className="text-xs text-gray-500 mt-0.5">Randomize MCQ options for each question.</p>
            </div>
            <button
              type="button"
              onClick={() => setShuffleAnswers(!shuffleAnswers)}
              className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                shuffleAnswers ? "bg-[#38BDF8]" : "bg-gray-200"
              }`}
            >
              <span
                className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                  shuffleAnswers ? "translate-x-5" : "translate-x-0"
                }`}
              />
            </button>
          </div>
        </div>

        {/* Questions Per Page */}
        <div className="pt-2">
          <label className="text-[11px] font-bold text-primary-color tracking-wider uppercase mb-2 block">
            Questions Per Page
          </label>
          <input
            type="text"
            placeholder="e.g., 1 Question per page"
            value={questionsPerPage}
            onChange={(e) => setQuestionsPerPage(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition"
          />
        </div>

      </div>

      {/* Box 3: Publishing Schedule, Results Visibility, & Pro Tip */}
      <div className="bg-white p-6 rounded-2xl border border-gray-100/80 shadow-sm space-y-6">
        
        {/* Publishing Schedule Selector */}
        <div>
          <label className="text-[11px] font-bold text-primary-color tracking-wider uppercase mb-3 block">
            Publishing Schedule
          </label>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Option 1: Publish Instantly */}
            <div
              onClick={() => setPublishingSchedule("instant")}
              className={`relative p-5 rounded-2xl border-2 flex items-center gap-4 cursor-pointer transition select-none ${
                publishingSchedule === "instant"
                  ? "border-sky-400 bg-sky-50/10"
                  : "border-gray-200 bg-white hover:border-gray-300"
              }`}
            >
              {publishingSchedule === "instant" && (
                <div className="absolute top-3 right-3 bg-sky-500 text-white rounded-full p-0.5">
                  <HiCheck className="w-3.5 h-3.5" />
                </div>
              )}
              
              <div className={`p-2.5 rounded-xl flex items-center justify-center ${
                publishingSchedule === "instant"
                  ? "bg-sky-100 text-sky-600"
                  : "bg-gray-100 text-gray-400"
              }`}>
                <HiLightningBolt className="w-6 h-6" />
              </div>
              
              <div>
                <h6 className="text-sm font-bold text-primary-color">Publish Instantly</h6>
                <p className="text-xs text-gray-500 mt-0.5">Make it available immediately.</p>
              </div>
            </div>

            {/* Option 2: Schedule for Later */}
            <div
              onClick={() => setPublishingSchedule("later")}
              className={`relative p-5 rounded-2xl border-2 flex items-center gap-4 cursor-pointer transition select-none ${
                publishingSchedule === "later"
                  ? "border-sky-400 bg-sky-50/10"
                  : "border-gray-200 bg-white hover:border-gray-300"
              }`}
            >
              {publishingSchedule === "later" && (
                <div className="absolute top-3 right-3 bg-sky-500 text-white rounded-full p-0.5">
                  <HiCheck className="w-3.5 h-3.5" />
                </div>
              )}
              
              <div className={`p-2.5 rounded-xl flex items-center justify-center ${
                publishingSchedule === "later"
                  ? "bg-sky-100 text-sky-600"
                  : "bg-gray-100 text-gray-400"
              }`}>
                <HiOutlineCalendar className="w-6 h-6" />
              </div>
              
              <div>
                <h6 className="text-sm font-bold text-primary-color">Schedule for Later</h6>
                <p className="text-xs text-gray-500 mt-0.5">Choose a specific date and time.</p>
              </div>
            </div>

          </div>

          {/* Schedule Input Fields (Conditional) */}
          {publishingSchedule === "later" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 p-4 bg-gray-50 rounded-2xl border border-gray-100 animate-fadeIn">
              <div>
                <label className="text-[10px] font-bold text-gray-500 uppercase mb-1.5 block">
                  Schedule Date
                </label>
                <input
                  type="date"
                  value={scheduleDate}
                  onChange={(e) => setScheduleDate(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-sky-400 bg-white"
                />
              </div>
              <div>
                <label className="text-[10px] font-bold text-gray-500 uppercase mb-1.5 block">
                  Schedule Time
                </label>
                <input
                  type="time"
                  value={scheduleTime}
                  onChange={(e) => setScheduleTime(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-sky-400 bg-white"
                />
              </div>
            </div>
          )}
        </div>

        {/* Result Visibility */}
        <div className="border-t border-gray-50 pt-5 space-y-4">
          
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wide block mb-1">
                Result Visibility
              </span>
              <h5 className="text-sm font-bold text-gray-800">Show Instant Results</h5>
              <p className="text-xs text-gray-500 mt-0.5">
                Students will see their score immediately after submission.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setShowInstantResults(!showInstantResults)}
              className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                showInstantResults ? "bg-[#38BDF8]" : "bg-gray-200"
              }`}
            >
              <span
                className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                  showInstantResults ? "translate-x-5" : "translate-x-0"
                }`}
              />
            </button>
          </div>

          {/* Pro Tip Info Banner */}
          <div className="bg-sky-50/60 border border-sky-100 p-4 rounded-xl flex gap-3 text-sky-850 text-xs leading-relaxed">
            <HiOutlineInformationCircle className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold">Pro Tip:</span> Releasing results instantly improves student engagement,
              but for high-stakes exams, we recommend releasing them after the window ends to maintain integrity.
            </div>
          </div>

        </div>

      </div>

      {/* Sticky Bottom Footer Action Bar */}
      <div className="sticky bottom-0 -mx-8 px-8 py-4 bg-white border-t border-gray-200/60 shadow-[0_-4px_12px_rgba(0,0,0,0.02)] flex justify-between items-center z-10 mt-8">
        
        {/* Left Side: Back Link */}
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="flex items-center gap-1 text-sm font-semibold text-gray-500 hover:text-gray-900 transition focus:outline-none cursor-pointer"
        >
          <HiOutlineChevronLeft className="w-5 h-5" />
          <span>Back to Questions</span>
        </button>

        {/* Right Side: Publish Button */}
        <button
          onClick={handlePublish}
          className="bg-sky-500 hover:bg-sky-600 text-white font-bold text-sm px-6 py-2.5 rounded-xl shadow-sm hover:shadow-md transition cursor-pointer"
        >
          Publish Exam
        </button>

      </div>

    </div>
  );
}