import { Outlet, useLocation } from "react-router-dom";
import { useState } from "react";

import Sidebar from "../components/Sidebar";
import TopNavbar from "../components/TopNavbar";

import { pageTitles } from "../components/sidebarData";

export default function DashboardLayout() {
  const location = useLocation();

  const currentTitle =
    pageTitles[location.pathname] || "Dashboard";

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen flex bg-[#F4F6FA]">

      <Sidebar
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />

      <div
        className={`flex-1 flex flex-col min-h-screen transition-all duration-300
        ${isSidebarOpen ? "ml-[270px]" : "ml-[20px]"}`}
      >
        <TopNavbar />

        <section className="mx-8 my-4">
          <div className="p-2 bg-white rounded-t-lg shadow-sm">
            <h2 className="text-2xl font-bold text-primary-color">
              {currentTitle}
            </h2>
          </div>
        </section>

        <main className="flex-1 px-8 pb-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}