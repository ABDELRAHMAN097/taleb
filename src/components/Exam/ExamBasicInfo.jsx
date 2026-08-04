import { HiX } from "react-icons/hi";

export default function ExamBasicInfo({
  examTitle,
  setExamTitle,
  selectedGroups,
  groupInput,
  setGroupInput,
  showSuggestions,
  setShowSuggestions,
  filteredSuggestions,
  addGroup,
  removeGroup,
  selectAllGroups,
  suggestionsRef,
}) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-5">

      {/* Exam Title */}
      <div>
        <label className="text-[11px] font-bold text-primary-color uppercase tracking-wider mb-2 block">
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

      {/* Groups */}
      <div className="relative">
        <label className="text-[11px] font-bold text-primary-color uppercase tracking-wider mb-2 block">
          Select Group/Class
        </label>

        <div className="min-h-[52px] p-2 rounded-xl border border-gray-200 flex flex-wrap gap-2 items-center focus-within:border-sky-400 focus-within:ring-1 focus-within:ring-sky-400 transition">

          {selectedGroups.map((group) => (
            <span
              key={group}
              className="bg-sky-50 border border-sky-100 text-sky-700 text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-2"
            >
              {group}

              <button
                type="button"
                onClick={() => removeGroup(group)}
                className="text-sky-500 hover:text-sky-700 transition"
              >
                <HiX className="w-3.5 h-3.5" />
              </button>
            </span>
          ))}

          <input
            type="text"
            value={groupInput}
            placeholder={
              selectedGroups.length
                ? "Add another group..."
                : "Search and select groups..."
            }
            onFocus={() => setShowSuggestions(true)}
            onChange={(e) => {
              setGroupInput(e.target.value);
              setShowSuggestions(true);
            }}
            className="flex-1 min-w-[160px] py-1 px-2 bg-transparent text-sm focus:outline-none"
          />
        </div>

        {showSuggestions && filteredSuggestions.length > 0 && (
          <div
            ref={suggestionsRef}
            className="absolute z-20 mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden"
          >
            {filteredSuggestions.map((group) => (
              <button
                key={group}
                type="button"
                onClick={() => addGroup(group)}
                className="w-full px-4 py-3 text-left text-sm hover:bg-gray-50 transition"
              >
                {group}
              </button>
            ))}
          </div>
        )}

        <button
          type="button"
          onClick={selectAllGroups}
          className="mt-3 text-xs font-bold text-sky-500 hover:text-sky-600 transition"
        >
          + Select All Groups
        </button>
      </div>

    </div>
  );
}