import {
  HiOutlineSearch,
  HiOutlineGlobe,
  HiOutlineBell,
} from "react-icons/hi";

export default function TopNavbar() {
  return (
    <header className="w-full py-2 px-8 mb-4 flex items-center justify-between sticky top-0 z-20 bg-white">

      <div className="relative">
        <HiOutlineSearch className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />

        <input
          type="text"
          placeholder="Search"
          className="w-80 pl-11 pr-4 py-2.5 bg-[#F4F6FA] border border-gray-200 rounded-xl"
        />
      </div>

      <div className="flex items-center gap-4">

        <button className="p-2.5 border rounded-xl">
          <HiOutlineGlobe className="w-5 h-5" />
        </button>

        <button className="relative p-2.5 border rounded-xl">
          <HiOutlineBell className="w-5 h-5" />

          <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-500"></span>
        </button>

        <div className="flex items-center gap-3">

          <div className="text-right">
            <p className="text-xs text-gray-400">
              Welcome, Center
            </p>

            <p className="font-semibold text-primary-color">
              Elnoor!
            </p>
          </div>

          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80"
            alt=""
            className="w-10 h-10 rounded-xl"
          />

        </div>

      </div>
    </header>
  );
}