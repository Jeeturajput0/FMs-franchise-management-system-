import React, { useState } from "react";
import DashboardSidebar from "../components/dashboard/DashboardSidebar";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import { NAVIGATION_CONFIG } from "../config/navigation";
import { ROLES } from "../config/roles";

export default function CoachingAdminLayout({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const currentUser = {
    name: "Sanjay Sharma",
    role: "Coaching Admin",
    avatar: "SS",
  };

  return (
    <div className="dashboard">
      <DashboardSidebar
        roleTitle="Coaching Admin"
        userRole={ROLES.COACHING_ADMIN}
        navigation={NAVIGATION_CONFIG[ROLES.COACHING_ADMIN]}
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

