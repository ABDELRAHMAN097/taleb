import { Outlet, useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import TopNavbar from "../components/TopNavbar";

import { pageTitles } from "../components/sidebarData";

export default function DashboardLayout() {
  const location = useLocation();

  const currentTitle =
    pageTitles[location.pathname] || "Dashboard";

    const [isSidebarOpen, setIsSidebarOpen] = useState(
      window.innerWidth >= 1024
    );

    useEffect(() => {
      const handleResize = () => {
        setIsSidebarOpen(window.innerWidth >= 1024);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
    
  return (
    <div className="min-h-screen flex bg-[#F4F6FA]">

      <Sidebar
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />

      <div
        className={`flex-1 flex flex-col min-h-screen  transition-all duration-300
        ${isSidebarOpen ? "ml-[270px]" : "ml-[20px]"}`}
      >
        <TopNavbar />

        <section className="flex justify-between items-center mx-2 md:mx-8 my-4 p-2 bg-white rounded-t-lg shadow-sm">
          <div className="">
            <h2 className="text-sm md:text-2xl font-bold text-primary-color">
              {currentTitle}
            </h2>
          </div>

          <div>
            <Link
              to="/exams"
              className="p-2 text-hover-color border border-hover-color hover:bg-hover-color hover:text-white rounded-xl inline-block transition text-sm font-semibold"
            >
              + Create New Exam
            </Link>
          </div>
        </section>

        <main className="flex-1 px-2 md:px-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}