import { NavLink, Link } from "react-router-dom";
import { HiOutlineChevronDown } from "react-icons/hi";
import { RiLogoutBoxRLine } from "react-icons/ri";

import AuthHeader from "./shared/AuthHeader";
import { menuItems } from "../components/sidebarData";

export default function Sidebar() {
  return (
    <aside className="w-[270px] h-screen fixed top-0 left-0 bg-white border-r border-gray-100 flex flex-col justify-between p-6 z-30">

      <div>
        <div className="mb-5">
          <AuthHeader title="Taleb" />
        </div>

        <nav className="flex flex-col gap-1.5">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center justify-between px-4 py-3 rounded-xl transition ${
                    isActive
                      ? "bg-[#D3DCF2]/75 text-primary-color font-semibold"
                      : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <div className="flex items-center gap-3">
                      <Icon
                        className={`w-5 h-5 ${
                          isActive
                            ? "text-primary-color"
                            : "text-gray-400"
                        }`}
                      />

                      <span className="text-sm">
                        {item.name}
                      </span>
                    </div>

                    {item.hasSubmenu && (
                      <HiOutlineChevronDown className="w-4 h-4" />
                    )}
                  </>
                )}
              </NavLink>
            );
          })}
        </nav>
      </div>

      <Link
        to="/"
        className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-500 hover:bg-red-50 hover:text-red-600"
      >
        <RiLogoutBoxRLine className="w-5 h-5" />

        <span>Log Out</span>
      </Link>
    </aside>
  );
}