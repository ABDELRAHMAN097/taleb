import { NavLink, useNavigate, useParams} from "react-router-dom";
import { useEffect, useState } from "react";

import { getTeacherProfile } from "../apis/auth";
import {
  HiOutlineChevronDown,
} from "react-icons/hi";

import { RiLogoutBoxRLine } from "react-icons/ri";

import AuthHeader from "./shared/AuthHeader";
import { menuItems } from "../components/sidebarData";
import { logout } from "../apis/auth";
import { useI18n } from "../i18n/i18n/context";

export default function Sidebar({ isOpen, setIsOpen }) {
  const navigate = useNavigate();
  const { locale } = useParams();
  const { t } = useI18n();
  const isArabic = locale === "ar";

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
  // 
  const [profile, setProfile] = useState(null);

useEffect(() => {
  const fetchProfile = async () => {
    try {
      const res = await getTeacherProfile();

      if (res.success) {
        setProfile(res.data.account);
      }
    } catch (error) {
      console.error("SIDEBAR PROFILE ERROR:", error);
    }
  };

  fetchProfile();
}, []);

const userName = profile?.user?.name || "Teacher";

const primarySubject =
  profile?.subjects?.find((subject) => subject.is_primary) ||
  profile?.subjects?.[0];

const subtitle =
  primarySubject?.name_en ||
  primarySubject?.name_ar ||
  "Teacher";

const initials = userName
  .split(" ")
  .map((name) => name[0])
  .slice(0, 2)
  .join("")
  .toUpperCase();

const profileImage = profile?.teacher_profile?.profile_image_url;

  return (
    <aside
      className={`
        fixed
        top-0
        bottom-0
        z-50
        w-[270px]
        bg-primary-color
        border-white/10
        transition-[width,transform]
        duration-300
        ease-in-out

        ${isArabic ? "right-0 border-s" : "left-0 border-e"}

        /* Mobile */
        ${
          isOpen
            ? "translate-x-0"
            : isArabic
              ? "translate-x-full"
              : "-translate-x-full"
        }

        /* Desktop */
        lg:translate-x-0
        ${isOpen ? "lg:w-[270px]" : "lg:w-[20px]"}
      `}
    >
      {/* Toggle Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="
          absolute
          top-1/2
          -translate-y-1/2
          end-[-12px]
          z-50

          hidden
          lg:flex

          w-6
          h-16

          items-center
          justify-center

          bg-white
          border
          border-gray-300
          rounded-md
          shadow-sm

          cursor-pointer
          hover:bg-gray-50

          transition-colors
          duration-200
        "
      >
        <span className="w-1 h-10 rounded-full bg-gray-700" />
      </button>

      {/* Sidebar Content */}
      <div
        className={`
          h-full
          flex
          flex-col
          overflow-hidden

          transition-opacity
          duration-200

          ${
            isOpen
              ? "opacity-100"
              : "opacity-0 pointer-events-none"
          }
        `}
      >
        {/* Top */}
        <div className="flex-1 overflow-y-auto px-2 py-4">
          {/* Logo */}
          <div className="mb-5">
            <AuthHeader
              title="Taleb"
              titleClass="text-hover-color text-4xl lg:text-6xl"
            />
          </div>

          {/* Navigation */}
          <nav className="flex flex-col gap-.5">
            {menuItems.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.path}
                  to={`/${locale}${item.path}`}
                  className={({ isActive }) =>
                    `
                    flex
                    items-center
                    justify-between
                    px-4
                    py-3
                    rounded-xl
                    transition-colors
                    duration-200

                    ${
                      isActive
                        ? "bg-hover-color text-primary-color font-bold"
                        : "text-hover-color hover:bg-[#ebebeb] hover:text-gray-900"
                    }
                    `
                  }
                >
                  {({ isActive }) => (
                    <>
                      <div className="flex items-center gap-3 min-w-0">
                        <Icon
                          className={`
                            w-5
                            h-5
                            shrink-0
                            ${
                              isActive
                                ? "text-primary-color"
                                : "text-hover-color"
                            }
                          `}
                        />

                        <span className="text-sm truncate">
                          {t(item.name)}
                        </span>
                      </div>

                      {item.hasSubmenu && (
                        <HiOutlineChevronDown className="w-4 h-4 shrink-0" />
                      )}
                    </>
                  )}
                </NavLink>
              );
            })}
          </nav>
        </div>

        {/* Bottom Section */}
        <div className="shrink-0">
          {/* Logout */}
          <div className="px-2">
            <button
              type="button"
              onClick={handleLogout}
              className="
                w-full
                flex
                items-center
                gap-3
                px-4
                py-3
                rounded-xl

                text-hover-color

                hover:bg-red-50
                hover:text-red-600

                transition-colors
                duration-200
              "
            >
              <RiLogoutBoxRLine className="w-5 h-5 shrink-0" />

              <span>{t('Logout')}</span>
            </button>
          </div>

          {/* User */}
          <div className="p-4">
            <div className="w-full border-t border-white/10 mb-4" />

           <NavLink
                to={`/${locale}/profile`}
                className="w-full flex items-center gap-3 px-3 py-3 rounded-xl bg-[#535f7e31] hover:bg-[#64748b4d] transition-colors"
              >
                {profileImage ? (
                  <img
                    src={profileImage}
                    alt={userName}
                    className="w-9 h-9 shrink-0 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-9 h-9 shrink-0 rounded-full bg-[#38BDF8] flex items-center justify-center text-white font-bold text-sm">
                    {initials}
                  </div>
                )}

                <div className="min-w-0 flex flex-col">
                  <span className="text-sm font-semibold text-white truncate">
                    {userName}
                  </span>

                  <span className="text-xs text-gray-400 mt-0.5 truncate">
                    {subtitle}
                  </span>
                </div>
              </NavLink>
          </div>
        </div>
      </div>
    </aside>
  );
}

