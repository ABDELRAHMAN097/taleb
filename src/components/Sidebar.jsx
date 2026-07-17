import { NavLink, Link } from "react-router-dom";

import {
  HiOutlineChevronDown,
  HiChevronLeft,
  HiChevronRight,
} from "react-icons/hi";

import { RiLogoutBoxRLine } from "react-icons/ri";

import AuthHeader from "./shared/AuthHeader";
import { menuItems } from "../components/sidebarData";

export default function Sidebar({
  isOpen,
  setIsOpen,
}) {
  return (
    <aside
      className={`
      fixed
      top-0
      left-0
      h-screen
      bg-white
      border-r
      border-gray-100
      z-30
      transition-all
      duration-300
      overflow-hidden
      ${
        isOpen
          ? "w-[270px]"
          : "w-[20px]"
      }
    `}
    >
      {/* Toggle Button */}

     <button
  onClick={() => setIsOpen(!isOpen)}
  className="
    absolute
    top-1/2
    -translate-y-1/2
    -right-3
    w-6
    h-16
    bg-white
    border
    border-gray-300
    rounded-md
    shadow-sm
    flex
    items-center
    justify-center
    cursor-pointer
    hover:bg-gray-50
    transition
    z-50
  "
>
  <span
    className="
      w-1
      h-10
      rounded-full
      bg-gray-700
    "
  ></span>
</button>

      {isOpen && (
        <div className="h-full flex flex-col">

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
            className="sticky flex items-center gap-3 px-4 py-3 mt-8 rounded-xl text-gray-500 hover:bg-red-50 hover:text-red-600 transition"
          >
            <RiLogoutBoxRLine className="w-5 h-5" />

            <span>Log Out</span>
          </Link>
        </div>
      )}
    </aside>
  );
}