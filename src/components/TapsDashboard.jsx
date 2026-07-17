export default function TapsDashboard() {
  return(
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* Card 1 */}
        <div className="bg-white p-5 rounded-2xl border border-gray-100/50 shadow-sm flex items-center justify-between">
          <div className="space-y-2">
            <span className="text-sm font-medium text-gray-400">Teachers</span>
            <h3 className="text-3xl font-bold text-primary-color">150</h3>
            <span className="inline-flex items-center text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-lg">
              +0.12% ↑
            </span>
          </div>
          <div className="p-3 bg-blue-50/50 rounded-xl text-primary-color border border-blue-100/30">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-5 rounded-2xl border border-gray-100/50 shadow-sm flex items-center justify-between">
          <div className="space-y-2">
            <span className="text-sm font-medium text-gray-400">Groups & Classes</span>
            <h3 className="text-3xl font-bold text-primary-color">500</h3>
            <span className="inline-flex items-center text-xs font-semibold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-lg">
              +0.3% ↓
            </span>
          </div>
          <div className="p-3 bg-indigo-50/50 rounded-xl text-indigo-600 border border-indigo-100/30">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-5 rounded-2xl border border-gray-100/50 shadow-sm flex items-center justify-between">
          <div className="space-y-2">
            <span className="text-sm font-medium text-gray-400">Wallet & Billing</span>
            <h3 className="text-3xl font-bold text-primary-color">200</h3>
            <span className="inline-flex items-center text-xs font-semibold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-lg">
              +0.5% ↓
            </span>
          </div>
          <div className="p-3 bg-sky-50/50 rounded-xl text-sky-600 border border-sky-100/30">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white p-5 rounded-2xl border border-gray-100/50 shadow-sm flex items-center justify-between">
          <div className="space-y-2">
            <span className="text-sm font-medium text-gray-400">Analytics & Reports</span>
            <h3 className="text-3xl font-bold text-primary-color">3500</h3>
            <span className="inline-flex items-center text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-lg">
              +0.10% ↑
            </span>
          </div>
          <div className="p-3 bg-violet-50/50 rounded-xl text-violet-600 border border-violet-100/30">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
        </div>
      </div>
      )
}