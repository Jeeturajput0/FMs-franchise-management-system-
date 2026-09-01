import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import DashboardSidebar from "../components/dashboard/DashboardSidebar";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import { NAVIGATION_CONFIG } from "../config/navigation";
import { ROLES } from "../config/roles";

export default function CoachingAdminLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const currentUser = {
    name: "Vikram Malhotra",
    role: "Coaching Admin",
    avatar: "VM",
  };

  return (
    <div className="min-h-screen bg-slate-50 flex">
      <DashboardSidebar
        roleTitle="Coaching Center"
        userRole={ROLES.COACHING_ADMIN}
        navigation={NAVIGATION_CONFIG[ROLES.COACHING_ADMIN]}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      <div className="flex-1 lg:ml-[280px] min-h-screen flex flex-col w-full transition-all duration-300">
        <DashboardHeader
          onMobileMenuToggle={() => setMobileOpen(true)}
          user={currentUser}
          title="Coaching Center Operations"
          breadcrumb="Center Admin"
        />

        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
