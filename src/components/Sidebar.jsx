import { NavLink , useNavigate ,useParams } from "react-router-dom";

import {
  HiOutlineChevronDown,
  HiChevronLeft,
  HiChevronRight,
} from "react-icons/hi";

import { RiLogoutBoxRLine } from "react-icons/ri";

import AuthHeader from "./shared/AuthHeader";
import { menuItems } from "../components/sidebarData";
import {logout} from "../apis/auth"
export default function Sidebar({
  isOpen,
  setIsOpen,
}) {

  const navigate = useNavigate();
  const { locale } = useParams();

  const handleLogout = async () => {
  try {
    await logout();
  } catch (error) {
    console.error("Logout API error:", error);
  } finally {
    localStorage.removeItem("token");
    localStorage.removeItem("talep_user");

    navigate("/");
  }
};
  return (
    <aside
      className={`
      fixed
      top-0
      start-0
      h-screen
      bg-primary-color
      border-e
      border-white/10
      z-50
      transition-all
      duration-300
      
      /* Mobile/Tablet: slide out of screen by default */
      -translate-x-full
      rtl:translate-x-full
      lg:translate-x-0
      w-[270px]

      /* Open state on mobile */
      ${isOpen ? "translate-x-0" : ""}

      /* Desktop width toggle */
      ${isOpen ? "lg:w-[270px]" : "lg:w-[20px]"}
    `}
    >
      {/* Toggle Button */}

    <button
      onClick={() => setIsOpen(!isOpen)}
      className="
        absolute
        top-1/2
        -translate-y-1/2
        end-[-12px]
        w-6
        h-16
        bg-white
        border
        border-gray-300
        rounded-md
        shadow-sm
        hidden
        lg:flex
        items-center
        justify-center
        cursor-pointer
        hover:bg-gray-50
        transition
        z-50
      "
    >
      <span className="w-1 h-10 rounded-full bg-gray-700" />
    </button>

      <div
        className={`h-full flex flex-col justify-between py-4 px-2 overflow-y-auto transition-all duration-300 origin-left rtl:origin-right
        ${isOpen ? "opacity-100 visible scale-100" : "opacity-0 invisible scale-95 lg:w-0"}`}
      >

        <div>
          <div className="mb-5">
            <AuthHeader
            title="Taleb"
            titleClass="text-hover-color text-4xl lg:text-6xl"
            />
          </div>

          <nav className="flex flex-col gap-1.5">
            {menuItems.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.path}
                  to={`/${locale}${item.path}`}
                  className={({ isActive }) =>
                    `flex items-center justify-between px-4 py-3 rounded-xl transition ${
                      isActive
                        ? "bg-hover-color text-primary-color font-bold"
                        : "text-hover-color hover:bg-[#ebebeb] hover:text-gray-900"
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
                              : "text-hover-color"
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

          <button onClick={handleLogout}
          className="sticky flex items-center gap-3 px-4 py-3 mt-8 rounded-xl text-hover-color hover:bg-red-50 hover:text-red-600 transition"
          >
          <RiLogoutBoxRLine className="w-5 h-5" />

          <span>Log Out</span>
        
          </button>


          <div className="p-4">
            <div className="w-full border-t border-white/10 my-5" />
            <div
              className="
                w-full
                flex
                items-center
                gap-3
                px-3
                py-3
                rounded-xl
                bg-[#535f7e31]
              "
            >

              <div
                className="
                  w-9
                  h-9
                  shrink-0
                  rounded-full
                  bg-[#38BDF8]
                  flex
                  items-center
                  justify-center
                  text-white
                  font-bold
                  text-sm
                "
              >
                AM
              </div>


              {/* User Info */}
              <div className="min-w-0 flex flex-col">

                <span
                  className="
                    text-sm
                    font-semibold
                    text-white
                    truncate
                  "
                >
                  Ahmed Mansour
                </span>

                <span
                  className="
                    text-xs
                    text-gray-400
                    mt-0.5
                  "
                >
                  Senior Tutor
                </span>

              </div>

            </div>

          </div>

      </div>
    </aside>
  );
}