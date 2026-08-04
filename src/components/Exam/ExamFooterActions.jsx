import { HiOutlineChevronLeft } from "react-icons/hi";

export default function ExamFooterActions({
  navigate,
  handlePublish,
}) {
  return (
    <div className="sticky bottom-0 -mx-8 px-8 py-4 bg-white border-t border-gray-200/60 shadow-[0_-4px_12px_rgba(0,0,0,0.02)] flex items-center justify-between z-10">

      {/* Back */}
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-primary-color transition cursor-pointer"
      >
        <HiOutlineChevronLeft className="w-5 h-5" />
        <span>Back to Questions</span>
      </button>

      {/* Publish */}
      <button
        type="button"
        onClick={handlePublish}
        className="px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-semibold shadow-sm hover:shadow-md transition cursor-pointer"
      >
        Publish Exam
      </button>

    </div>
  );
}