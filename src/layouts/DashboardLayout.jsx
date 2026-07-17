import { Outlet, useLocation } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import TopNavbar from "../components/TopNavbar";

import { pageTitles } from "../components/sidebarData";

export default function DashboardLayout() {

  const location = useLocation();

  const currentTitle =
    pageTitles[location.pathname] || "Dashboard";

  return (
    <div className="min-h-screen flex bg-[#F4F6FA]">

      <Sidebar />

      <div className="ml-[270px] flex-1 flex flex-col min-h-screen">

        <TopNavbar />

        <section className="mx-8 mb-4">

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