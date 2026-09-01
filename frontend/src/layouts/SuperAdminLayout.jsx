import React, { useState } from "react";
import DashboardSidebar from "../components/dashboard/DashboardSidebar";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import { NAVIGATION_CONFIG } from "../config/navigation";
import { ROLES } from "../config/roles";

export default function SuperAdminLayout({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const currentUser = {
    name: "Arjun Kumar",
    role: "Super Admin",
    avatar: "AK",
  };

  return (
    <div className="dashboard">
      <DashboardSidebar
        roleTitle="Super Admin HQ"
        userRole={ROLES.SUPER_ADMIN}
        navigation={NAVIGATION_CONFIG[ROLES.SUPER_ADMIN]}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      <main className="dashboard-main">
        <DashboardHeader
          onMobileMenuToggle={() => setMobileOpen(true)}
          user={currentUser}
        />

        <div className="content">{children}</div>
      </main>
    </div>
  );
}
