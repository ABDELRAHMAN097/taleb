
export default function StudentPerformance(){
    return(
        <div>
            <div className="bg-white p-6 rounded-2xl border border-gray-100/50 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex flex-col mb-6">
            <h4 className="text-lg font-bold text-primary-color mb-1">Student Performance Trend</h4>
              <span className="text-xl text-gray-400">Average grades for the last 6 exams</span>
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
    )
}