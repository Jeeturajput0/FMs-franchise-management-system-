import React, { useState } from "react";
import DashboardSidebar from "../components/dashboard/DashboardSidebar";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import { NAVIGATION_CONFIG } from "../config/navigation";
import { ROLES } from "../config/roles";

export default function FranchiseOwnerLayout({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const currentUser = {
    name: "Priya Mehta",
    role: "Franchise Owner",
    avatar: "PM",
  };

  return (
    <div className="dashboard">
      <DashboardSidebar
        roleTitle="Franchise Owner"
        userRole={ROLES.FRANCHISE_OWNER}
        navigation={NAVIGATION_CONFIG[ROLES.FRANCHISE_OWNER]}
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
