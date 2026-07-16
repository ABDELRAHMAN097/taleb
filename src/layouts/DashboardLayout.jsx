import { NavLink, Outlet, useLocation, Link } from "react-router-dom";
import { 
  HiOutlineChartSquareBar, 
  HiOutlineClipboardList, 
  HiOutlineCreditCard, 
  HiOutlineSearch, 
  HiOutlineGlobe, 
  HiOutlineBell, 
  HiOutlineChevronDown 
} from "react-icons/hi";
import { GoInbox } from "react-icons/go";
import { BiGroup } from "react-icons/bi";
import { TbFileText } from "react-icons/tb";
import { TbSettings } from "react-icons/tb";
import { RiLogoutBoxRLine } from "react-icons/ri";

const menuItems = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: (className) => <HiOutlineChartSquareBar className={className} />
  },
  {
    name: "Assessments",
    path: "/assessments",
    hasSubmenu: true,
    icon: (className) => <HiOutlineClipboardList className={className} />
  },
  {
    name: "Wallet",
    path: "/wallet",
    hasSubmenu: true,
    icon: (className) => <HiOutlineCreditCard className={className} />
  },
  {
    name: "Question Bank",
    path: "/question-bank",
    icon: (className) => <GoInbox className={className} />
  },
  {
    name: "Groups",
    path: "/groups",
    hasSubmenu: true,
    icon: (className) => <BiGroup className={className} />
  },
  {
    name: "Reports",
    path: "/reports",
    icon: (className) => <TbFileText className={className} />
  },
  {
    name: "Setting",
    path: "/setting",
    hasSubmenu: true,
    icon: (className) => <TbSettings className={className} />
  },
];

const pageTitles = {
  "/dashboard": "Dashboard",
  "/assessments": "Assessments",
  "/wallet": "Wallet",
  "/question-bank": "Question Bank",
  "/groups": "Groups",
  "/reports": "Reports",
  "/setting": "Setting",
};

export default function DashboardLayout() {
  const location = useLocation();
  const currentTitle = pageTitles[location.pathname] || "Dashboard";

  return (
    <div className="min-h-screen flex bg-[#F4F6FA]">
      {/* Sidebar - Fixed on the left */}
      <aside className="w-[270px] h-screen fixed top-0 left-0 bg-white border-r border-gray-100 flex flex-col justify-between p-6 select-none z-30">
        <div>
          {/* Logo Area */}
          <div className="mb-5">
            <h1 className="text-7xl text-center font-secondary text-primary-color tracking-wide">
              Taleb
            </h1>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-1.5">
            {menuItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 group ${isActive
                    ? "bg-[#D3DCF2]/75 text-primary-color font-semibold"
                    : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <div className="flex items-center gap-3">
                      {item.icon(
                        `w-5 h-5 transition-colors duration-200 ${isActive ? "text-primary-color" : "text-gray-400 group-hover:text-gray-600"
                        }`
                      )}
                      <span className="text-sm font-medium">{item.name}</span>
                    </div>
                    {item.hasSubmenu && (
                      <HiOutlineChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${isActive ? "text-primary-color" : "text-gray-400"
                          }`}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Log Out at the bottom */}
        <div>
          <Link
            to="/"
            className="flex items-center gap-3 px-4 py-3 text-gray-500 hover:bg-red-50 hover:text-red-600 rounded-xl transition-all duration-200 group"
          >
            <RiLogoutBoxRLine
              className="w-5 h-5 text-gray-400 group-hover:text-red-500 transition-colors duration-200"
            />
            <span className="text-sm font-medium">Log Out</span>
          </Link>
        </div>
      </aside>

      {/* Main Content Area - Shifted right by sidebar width */}
      <div className="ml-[270px] flex-1 flex flex-col min-h-screen overflow-y-auto">
        {/* Top Navbar */}
        <header className="w-full py-2 px-8 mb-4 flex items-center justify-between sticky top-0 z-20 bg-white backdrop-blur-md">
          {/* Search Box */}
          <div className="relative">
            <HiOutlineSearch
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search"
              className="w-80 pl-11 pr-4 py-2.5 bg-[#F4F6FA]/80 border border-gray-100 rounded-xl text-sm focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-100 transition-all placeholder-gray-400 shadow-sm"
            />
          </div>

          {/* Quick Actions & Profile */}
          <div className="flex items-center gap-4">
            {/* Language Switcher */}
            <button className="p-2.5 bg-white rounded-xl border border-gray-100 text-gray-500 hover:bg-gray-50 hover:text-gray-700 transition-all shadow-sm cursor-pointer">
              <HiOutlineGlobe className="w-5 h-5" />
            </button>

            {/* Notification Bell */}
            <button className="p-2.5 bg-white rounded-xl border border-gray-100 text-gray-500 hover:bg-gray-50 hover:text-gray-700 transition-all shadow-sm relative cursor-pointer">
              <HiOutlineBell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 border border-white rounded-full"></span>
            </button>

            {/* User Profile */}
            <div className="flex items-center gap-3 pl-2">
              <div className="text-right">
                <p className="text-xs text-gray-400">Welcome, Center</p>
                <p className="text-sm font-semibold text-primary-color">Elnoor!</p>
              </div>
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100&q=80"
                alt="Avatar"
                className="w-10 h-10 rounded-xl object-cover border-2 border-white shadow-md"
              />
            </div>
          </div>
        </header>

        {/* Dynamic Page Title Banner */}
        <section className="mx-8 mb-4">
          <div className="p-2 bg-white border border-gray-100/50 rounded-t-lg shadow-sm">
            <h2 className="text-2xl font-bold text-primary-color leading-tight">
              {currentTitle}
            </h2>
          </div>
        </section>

        {/* Page Content Outlet */}
        <main className="flex-1 px-8 pb-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}