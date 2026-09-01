import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import DashboardSidebar from "../components/dashboard/DashboardSidebar";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import { NAVIGATION_CONFIG } from "../config/navigation";
import { ROLES } from "../config/roles";

export default function StudentLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const currentUser = {
    name: "Rohan Verma",
    role: "AI Student",
    avatar: "RV",
  };

  return (
    <div className="min-h-screen bg-slate-50 flex">
      <DashboardSidebar
        roleTitle="Student Campus"
        userRole={ROLES.STUDENT}
        navigation={NAVIGATION_CONFIG[ROLES.STUDENT]}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      <div className="flex-1 lg:ml-[280px] min-h-screen flex flex-col w-full transition-all duration-300">
        <DashboardHeader
          onMobileMenuToggle={() => setMobileOpen(true)}
          user={currentUser}
          title="Student Learning Space"
          breadcrumb="My Campus"
        />

        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
