import {
  HiOutlineCalendar,
  HiCheck,
  HiLightningBolt,
  HiOutlineInformationCircle,
} from "react-icons/hi";

export default function ExamPublishingSettings({
  publishingSchedule,
  setPublishingSchedule,
  scheduleDate,
  setScheduleDate,
  scheduleTime,
  setScheduleTime,
  showInstantResults,
  setShowInstantResults,
}) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100/80 shadow-sm space-y-6">

      {/* Publishing Schedule */}
      <div>

        <label className="text-[11px] font-bold text-primary-color tracking-wider uppercase mb-3 block">
          Publishing Schedule
        </label>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* Publish Instantly */}
          <div
            onClick={() => setPublishingSchedule("instant")}
            className={`relative p-5 rounded-2xl border-2 flex items-center gap-4 cursor-pointer transition ${
              publishingSchedule === "instant"
                ? "border-sky-400 bg-sky-50/10"
                : "border-gray-200 hover:border-gray-300"
            }`}
          >
            {publishingSchedule === "instant" && (
              <div className="absolute top-3 right-3 bg-sky-500 text-white rounded-full p-0.5">
                <HiCheck className="w-3.5 h-3.5" />
              </div>
            )}

            <div
              className={`p-2.5 rounded-xl ${
                publishingSchedule === "instant"
                  ? "bg-sky-100 text-sky-600"
                  : "bg-gray-100 text-gray-400"
              }`}
            >
              <HiLightningBolt className="w-6 h-6" />
            </div>

            <div>
              <h6 className="text-sm font-bold text-primary-color">
                Publish Instantly
              </h6>

              <p className="text-xs text-gray-500">
                Make it available immediately.
              </p>
            </div>
          </div>

          {/* Schedule Later */}
          <div
            onClick={() => setPublishingSchedule("later")}
            className={`relative p-5 rounded-2xl border-2 flex items-center gap-4 cursor-pointer transition ${
              publishingSchedule === "later"
                ? "border-sky-400 bg-sky-50/10"
                : "border-gray-200 hover:border-gray-300"
            }`}
          >
            {publishingSchedule === "later" && (
              <div className="absolute top-3 right-3 bg-sky-500 text-white rounded-full p-0.5">
                <HiCheck className="w-3.5 h-3.5" />
              </div>
            )}

            <div
              className={`p-2.5 rounded-xl ${
                publishingSchedule === "later"
                  ? "bg-sky-100 text-sky-600"
                  : "bg-gray-100 text-gray-400"
              }`}
            >
              <HiOutlineCalendar className="w-6 h-6" />
            </div>

            <div>
              <h6 className="text-sm font-bold text-primary-color">
                Schedule for Later
              </h6>

              <p className="text-xs text-gray-500">
                Choose a specific date and time.
              </p>
            </div>
          </div>

        </div>

        {/* Schedule Inputs */}
        {publishingSchedule === "later" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 p-4 bg-gray-50 rounded-2xl border border-gray-100">

            <div>
              <label className="text-[10px] font-bold text-gray-500 uppercase mb-1.5 block">
                Schedule Date
              </label>

              <input
                type="date"
                value={scheduleDate}
                onChange={(e) => setScheduleDate(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-sky-400"
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
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-sky-400"
              />
            </div>

          </div>
        )}
      </div>

      {/* Result Visibility */}

      <div className="border-t border-gray-100 pt-5 space-y-4">

        <div className="flex justify-between items-center">

          <div>
            <span className="text-[10px] uppercase font-bold text-gray-500">
              Result Visibility
            </span>

            <h5 className="text-sm font-bold text-gray-800 mt-1">
              Show Instant Results
            </h5>

            <p className="text-xs text-gray-500">
              Students will see their score immediately after submission.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setShowInstantResults(!showInstantResults)}
            className={`relative inline-flex h-6 w-11 rounded-full transition ${
              showInstantResults ? "bg-sky-400" : "bg-gray-200"
            }`}
          >
            <span
              className={`inline-block h-5 w-5 rounded-full bg-white shadow transform transition ${
                showInstantResults ? "translate-x-5" : "translate-x-0"
              }`}
            />
          </button>

        </div>

        {/* Pro Tip */}

        <div className="bg-sky-50 border border-sky-100 rounded-xl p-4 flex gap-3">

          <HiOutlineInformationCircle className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" />

          <div className="text-xs text-sky-900 leading-relaxed">
            <span className="font-bold">Pro Tip:</span> Releasing results
            instantly improves student engagement, but for high-stakes exams,
            we recommend releasing them after the exam window ends.
          </div>

        </div>

      </div>

    </div>
  );
}