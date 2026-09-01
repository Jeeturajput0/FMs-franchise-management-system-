import React, { useState } from "react";
import DashboardSidebar from "../components/dashboard/DashboardSidebar";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import { NAVIGATION_CONFIG } from "../config/navigation";
import { ROLES } from "../config/roles";

export default function TeacherLayout({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const currentUser = {
    name: "Prof. Rajesh Gupta",
    role: "Teacher Portal",
    avatar: "RG",
  };

  return (
    <div className="dashboard">
      <DashboardSidebar
        roleTitle="Faculty Portal"
        userRole={ROLES.TEACHER}
        navigation={NAVIGATION_CONFIG[ROLES.TEACHER]}
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
