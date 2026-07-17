import { useState } from "react";
import TapsDashboard from "../../components/TapsDashboard";

export default function Dashboard() {
  const [examPeriod, setExamPeriod] = useState("Daily");

  return (
    <div className="space-y-6">
      {/* 4 Top Cards Grid */}
      <TapsDashboard />

      {/* Middle Section Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-6">
        {/* Exams Bar Chart Mockup */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100/50 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h4 className="text-lg font-bold text-primary-color">Exams</h4>
              <div className="flex items-center gap-4 mt-2">
                <span className="flex items-center gap-1.5 text-xs text-gray-500 font-medium">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#11255C]"></span>
                  Done
                </span>
                <span className="flex items-center gap-1.5 text-xs text-gray-500 font-medium">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#D3DCF2]"></span>
                  Cancelled
                </span>
              </div>
            </div>
            {/* Filter Toggle */}
            <div className="flex items-center bg-gray-50 p-1.5 rounded-xl border border-gray-100 text-xs font-semibold text-gray-500 gap-1 self-start sm:self-auto">
              <button
                onClick={() => setExamPeriod("Last 30 Days")}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  examPeriod === "Last 30 Days" ? "bg-white text-primary-color shadow-sm" : "hover:text-gray-800"
                }`}
              >
                Last 30 Days
              </button>
              <button
                onClick={() => setExamPeriod("Daily")}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  examPeriod === "Daily" ? "bg-white text-primary-color shadow-sm" : "hover:text-gray-800"
                }`}
              >
                Daily
              </button>
            </div>
          </div>

          {/* Bar Chart columns */}
          <div className="h-64 flex items-end justify-between gap-3 pt-6 border-b border-gray-100">
            {/* Columns (Done: dark blue, Cancelled: light blue) */}
            {[
              { label: "7:00 PM", done: 85, cancelled: 45 },
              { label: "8:00 PM", done: 55, cancelled: 65 },
              { label: "9:00 PM", done: 75, cancelled: 30 },
              { label: "10:00 PM", done: 40, cancelled: 20 },
              { label: "11:00 PM", done: 60, cancelled: 50 },
              { label: "12:00 AM", done: 80, cancelled: 35 },
            ].map((col, idx) => (
              <div key={idx} className="flex-1 flex flex-col items-center group h-full justify-end">
                <div className="w-full flex items-end gap-1.5 justify-center max-w-[50px] h-full pb-1">
                  {/* Cancelled Bar */}
                  <div
                    style={{ height: `${col.cancelled}%` }}
                    className="w-4 sm:w-5 bg-[#D3DCF2]/80 hover:bg-[#D3DCF2] rounded-t-md transition-all duration-300 relative group-hover:shadow-sm"
                  />
                  {/* Done Bar */}
                  <div
                    style={{ height: `${col.done}%` }}
                    className="w-4 sm:w-5 bg-[#11255C] hover:bg-[#1c357d] rounded-t-md transition-all duration-300 relative group-hover:shadow-sm"
                  />
                </div>
                <span className="text-[10px] sm:text-xs text-gray-400 mt-2 text-center truncate w-full">
                  {col.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Wallet Consumption Analytics Line Chart Mockup */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100/50 shadow-sm flex flex-col justify-between">
          <div>
            <h4 className="text-lg font-bold text-primary-color mb-1">Wallet Consumption Analytics</h4>
            <div className="flex items-baseline gap-1.5 mb-6">
              <span className="text-2xl font-black text-primary-color">2500</span>
              <span className="text-xs font-bold text-gray-500">EGP</span>
            </div>

            {/* SVG Line Chart */}
            <div className="w-full h-44 relative">
              <svg className="w-full h-full" viewBox="0 0 300 120" preserveAspectRatio="none">
                {/* Grid line */}
                <line x1="0" y1="90" x2="300" y2="90" stroke="#f1f5f9" strokeWidth="1" />
                <line x1="0" y1="50" x2="300" y2="50" stroke="#f1f5f9" strokeWidth="1" />
                {/* Vertical Marker */}
                <line x1="200" y1="0" x2="200" y2="120" stroke="#e2e8f0" strokeDasharray="3 3" />

                {/* Line Path 1 (Gray) */}
                <path
                  d="M0,80 Q50,95 100,70 T200,60 T300,70"
                  fill="none"
                  stroke="#94A3B8"
                  strokeWidth="2"
                  strokeLinecap="round"
                />

                {/* Line Path 2 (Dark Blue - Active) */}
                <path
                  d="M0,60 Q50,40 100,65 T200,30 T300,65"
                  fill="none"
                  stroke="#11255C"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />

                {/* Marker Dot */}
                <circle cx="200" cy="30" r="4.5" fill="#11255C" stroke="#FFFFFF" strokeWidth="1.5" />
              </svg>
            </div>
          </div>

          {/* Chart Months */}
          <div className="flex justify-between text-xs text-gray-400 mt-2 pt-2 border-t border-gray-50">
            {["Jan", "Feb", "Mar", "Apr", "May", "Jun"].map((m) => (
              <span key={m}>{m}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1.3fr] gap-6">
        {/* Progress List Card */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100/50 shadow-sm">
          <h4 className="text-lg font-bold text-primary-color mb-6">Number Of Students In Each Exam</h4>
          <div className="space-y-4">
            {[
              { subject: "Maths", count: "121,799", percentage: 85, colorClass: "bg-[#11255C]" },
              { subject: "Arabic", count: "50,799", percentage: 50, colorClass: "bg-gray-400" },
              { subject: "English", count: "25,567", percentage: 35, colorClass: "bg-gray-400" },
              { subject: "Biology", count: "5,789", percentage: 15, colorClass: "bg-gray-400" },
            ].map((item, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex items-center justify-between text-sm font-semibold text-primary-color">
                  <span>{item.subject}</span>
                  <span className="text-xs text-gray-500 font-medium">{item.count}</span>
                </div>
                <div className="w-full h-3 bg-gray-50 rounded-full overflow-hidden border border-gray-100/50">
                  <div
                    style={{ width: `${item.percentage}%` }}
                    className={`h-full rounded-full transition-all duration-500 ${item.colorClass}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pie Chart Legend Card */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100/50 shadow-sm flex flex-col justify-between">
          <h4 className="text-lg font-bold text-primary-color mb-6">Exams In Every Subject</h4>

          <div className="flex flex-col sm:flex-row items-center justify-around gap-6">
            {/* SVG Donut Chart */}
            <div className="relative w-40 h-40 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                {/* Gray Background circle */}
                <circle cx="18" cy="18" r="15.915" fill="none" stroke="#F1F5F9" strokeWidth="4.2" />

                {/* Biology 4% */}
                <circle
                  cx="18"
                  cy="18"
                  r="15.915"
                  fill="none"
                  stroke="#0F172A"
                  strokeWidth="4.2"
                  strokeDasharray="4 96"
                  strokeDashoffset="0"
                />
                {/* History 5% */}
                <circle
                  cx="18"
                  cy="18"
                  r="15.915"
                  fill="none"
                  stroke="#475569"
                  strokeWidth="4.2"
                  strokeDasharray="5 95"
                  strokeDashoffset="-4"
                />
                {/* English 23% */}
                <circle
                  cx="18"
                  cy="18"
                  r="15.915"
                  fill="none"
                  stroke="#94A3B8"
                  strokeWidth="4.2"
                  strokeDasharray="23 77"
                  strokeDashoffset="-9"
                />
                {/* Arabic 28% */}
                <circle
                  cx="18"
                  cy="18"
                  r="15.915"
                  fill="none"
                  stroke="#CBD5E1"
                  strokeWidth="4.2"
                  strokeDasharray="28 72"
                  strokeDashoffset="-32"
                />
                {/* Maths 40% */}
                <circle
                  cx="18"
                  cy="18"
                  r="15.915"
                  fill="none"
                  stroke="#11255C"
                  strokeWidth="4.2"
                  strokeDasharray="40 60"
                  strokeDashoffset="-60"
                />
              </svg>
            </div>

            {/* Legend with percentages and indicators */}
            <div className="flex-1 space-y-2.5 w-full">
              {[
                { label: "Maths", percent: "40%", change: "+2.98%", color: "text-[#11255C]", isPos: true },
                { label: "Arabic", percent: "28%", change: "-3.25%", color: "text-slate-500", isPos: false },
                { label: "English", percent: "23%", change: "+0.40%", color: "text-slate-400", isPos: true },
                { label: "History", percent: "5%", change: "-1.11%", color: "text-slate-600", isPos: false },
                { label: "Biology", percent: "4%", change: "-1.11%", color: "text-slate-900", isPos: false },
              ].map((sub, idx) => (
                <div key={idx} className="flex items-center justify-between text-sm font-semibold">
                  <div className="flex items-center gap-2 text-primary-color">
                    <span className={`w-2.5 h-2.5 rounded-full ${
                      idx === 0 ? "bg-[#11255C]" :
                      idx === 1 ? "bg-slate-300" :
                      idx === 2 ? "bg-slate-400" :
                      idx === 3 ? "bg-slate-600" : "bg-slate-900"
                    }`}></span>
                    <span>{sub.label}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-gray-500">{sub.percent}</span>
                    <span className={`text-xs ${sub.isPos ? "text-emerald-500" : "text-rose-500"}`}>
                      ({sub.change})
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}