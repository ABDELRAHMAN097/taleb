import {
  HiOutlineSearch,
  HiOutlineGlobe,
  HiOutlineBell,
} from "react-icons/hi";

export default function TopNavbar() {
  return (
   <header className="w-full px-8 py-2 flex items-center justify-between gap-4 bg-white">

        <div className="relative flex-1 max-w-sm md:max-w-xl">
        <HiOutlineSearch className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />

        <input
            type="text"
            placeholder="Search"
            className="w-full pl-11 pr-4 py-2.5 border border-gray-200 rounded-xl bg-[#F4F6FA]"
        />
        </div>

      <div className="flex items-center gap-2 md:gap-4">

        <button className="p-2.5 border rounded-xl">
          <HiOutlineGlobe className="w-3.5 h-3.5 md:w-5 md:h-5" />
        </button>

        <button className="relative p-2.5 border rounded-xl">
          <HiOutlineBell className="w-3.5 h-3.5 md:w-5 md:h-5" />

          <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-500"></span>
        </button>

        <div className="flex items-center gap-3">

          <div className="text-right">
            <p className="text-sm md:text-xs text-gray-400">
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