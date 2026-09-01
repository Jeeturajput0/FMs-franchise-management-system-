import React, { useState } from "react";
import DashboardSidebar from "../components/dashboard/DashboardSidebar";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import { NAVIGATION_CONFIG } from "../config/navigation";
import { ROLES } from "../config/roles";

export default function StudentLayout({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const currentUser = {
    name: "Rahul Sharma",
    role: "Student Portal",
    avatar: "RS",
  };

  return (
    <div className="dashboard">
      <DashboardSidebar
        roleTitle="Student LMS"
        userRole={ROLES.STUDENT}
        navigation={NAVIGATION_CONFIG[ROLES.STUDENT]}
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
