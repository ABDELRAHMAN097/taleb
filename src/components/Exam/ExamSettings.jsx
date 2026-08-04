import { HiOutlineShieldCheck } from "react-icons/hi";

export default function ExamSettings({
  timeLimit,
  setTimeLimit,
  autoSubmit,
  setAutoSubmit,
  shuffleQuestions,
  setShuffleQuestions,
  shuffleAnswers,
  setShuffleAnswers,
  questionsPerPage,
  setQuestionsPerPage,
}) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-6">

      {/* Time Limit */}
      <div>
        <label className="text-[11px] font-bold text-primary-color tracking-wider uppercase mb-2 block">
          Time Limit
        </label>

        <div className="relative flex items-center bg-white border border-gray-200 rounded-xl focus-within:border-sky-400 focus-within:ring-1 focus-within:ring-sky-400 transition">
          <input
            type="number"
            value={timeLimit}
            onChange={(e) => setTimeLimit(e.target.value)}
            className="w-full px-4 py-3 bg-transparent rounded-xl text-sm focus:outline-none"
          />

          <span className="pr-4 text-xs font-semibold text-gray-400">
            minutes
          </span>
        </div>
      </div>

      {/* Auto Submit */}
      <div className="flex items-center justify-between bg-[#F0F9FF] rounded-2xl px-4 py-4 border border-gray-200">
        <div>
          <h5 className="text-sm font-bold text-gray-800">
            Auto-Submit Exam
          </h5>

          <p className="text-xs text-gray-500 mt-0.5">
            Automatically submit exam when time expires.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setAutoSubmit(!autoSubmit)}
          className={`relative inline-flex h-6 w-11 rounded-full transition ${
            autoSubmit ? "bg-sky-400" : "bg-gray-200"
          }`}
        >
          <span
            className={`inline-block h-5 w-5 rounded-full bg-white shadow transform transition ${
              autoSubmit ? "translate-x-5" : "translate-x-0"
            }`}
          />
        </button>
      </div>

      {/* Anti Cheating */}
      <div className="space-y-4">

        <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-sky-600">
          <HiOutlineShieldCheck className="w-4 h-4" />
          <span>Anti-Cheating Toggles</span>
        </div>

        {/* Shuffle Questions */}
        <div className="flex items-center justify-between border-b border-gray-100 pb-4">
          <div>
            <h5 className="text-sm font-bold text-gray-800">
              Shuffle Questions Order
            </h5>

            <p className="text-xs text-gray-500">
              Randomize question sequence for every student.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setShuffleQuestions(!shuffleQuestions)}
            className={`relative inline-flex h-6 w-11 rounded-full transition ${
              shuffleQuestions ? "bg-sky-400" : "bg-gray-200"
            }`}
          >
            <span
              className={`inline-block h-5 w-5 rounded-full bg-white shadow transform transition ${
                shuffleQuestions ? "translate-x-5" : "translate-x-0"
              }`}
            />
          </button>
        </div>

        {/* Shuffle Answers */}
        <div className="flex items-center justify-between">
          <div>
            <h5 className="text-sm font-bold text-gray-800">
              Shuffle Answer Choices
            </h5>

            <p className="text-xs text-gray-500">
              Randomize MCQ options for each question.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setShuffleAnswers(!shuffleAnswers)}
            className={`relative inline-flex h-6 w-11 rounded-full transition ${
              shuffleAnswers ? "bg-sky-400" : "bg-gray-200"
            }`}
          >
            <span
              className={`inline-block h-5 w-5 rounded-full bg-white shadow transform transition ${
                shuffleAnswers ? "translate-x-5" : "translate-x-0"
              }`}
            />
          </button>
        </div>

      </div>

      {/* Questions Per Page */}
      <div>
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
  );
}