import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import DashboardSidebar from "../components/dashboard/DashboardSidebar";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import { NAVIGATION_CONFIG } from "../config/navigation";
import { ROLES } from "../config/roles";

export default function SuperAdminLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const currentUser = {
    name: "Arjun Kumar",
    role: "Super Admin",
    avatar: "AK",
  };

  // Derive breadcrumb and title based on current path
  const getPageMeta = () => {
    const path = location.pathname;
    if (path.includes("/admin/franchises/add")) return { title: "Register New Franchise", breadcrumb: "Franchises / Add" };
    if (path.includes("/admin/franchises/reports")) return { title: "Franchise Performance Reports", breadcrumb: "Franchises / Reports" };
    if (path.includes("/admin/franchises/edit")) return { title: "Edit Franchise Details", breadcrumb: "Franchises / Edit" };
    if (path.includes("/admin/franchises")) return { title: "Franchise Network Roster", breadcrumb: "Franchises / View" };
    if (path.includes("/admin/courses/modules")) return { title: "Course Modules Manager", breadcrumb: "Courses / Modules" };
    if (path.includes("/admin/courses/topics")) return { title: "Course Topics Breakdown", breadcrumb: "Courses / Topics" };
    if (path.includes("/admin/courses/materials")) return { title: "Learning Materials & Resources", breadcrumb: "Courses / Materials" };
    if (path.includes("/admin/courses/assignments")) return { title: "Assignments & Submissions", breadcrumb: "Courses / Assignments" };
    if (path.includes("/admin/courses/tests")) return { title: "Tests & Examination Center", breadcrumb: "Courses / Tests" };
    if (path.includes("/admin/courses")) return { title: "Curriculum & Course Catalog", breadcrumb: "Courses" };
    if (path.includes("/admin/students")) return { title: "Student Directory & Enrollment", breadcrumb: "Students" };
    if (path.includes("/admin/fees/registration")) return { title: "Registration Fee Records", breadcrumb: "Fees / Registration" };
    if (path.includes("/admin/fees/course")) return { title: "Course Tuition Fee Ledger", breadcrumb: "Fees / Course" };
    if (path.includes("/admin/fees/certificate")) return { title: "Certificate Fee Collections", breadcrumb: "Fees / Certificate" };
    if (path.includes("/admin/fees")) return { title: "Fee Management & Ledger", breadcrumb: "Fees" };
    if (path.includes("/admin/certificates")) return { title: "Certificate Issuance & Verification", breadcrumb: "Certificates" };
    if (path.includes("/admin/notifications")) return { title: "System Broadcasts & Alerts", breadcrumb: "Notifications" };
    if (path.includes("/admin/admins")) return { title: "Platform Administrators & Staff", breadcrumb: "Admins" };
    if (path.includes("/admin/reports")) return { title: "Analytics & Executive Reports", breadcrumb: "Reports" };
    if (path.includes("/admin/settings")) return { title: "System Settings & Configuration", breadcrumb: "Settings" };
    return { title: "HQ Overview & Intelligence", breadcrumb: "Overview" };
  };

  const { title, breadcrumb } = getPageMeta();

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Fixed 280px Sidebar */}
      <DashboardSidebar
        roleTitle="Super Admin HQ"
        userRole={ROLES.SUPER_ADMIN}
        navigation={NAVIGATION_CONFIG[ROLES.SUPER_ADMIN]}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      {/* Main Content Area with 280px margin-left for desktop */}
      <div className="flex-1 lg:ml-[280px] min-h-screen flex flex-col w-full transition-all duration-300">
        {/* Sticky Top Header / Navbar */}
        <DashboardHeader
          onMobileMenuToggle={() => setMobileOpen(true)}
          user={currentUser}
          title={title}
          breadcrumb={breadcrumb}
        />

        {/* Dynamic Outlet for all Subroutes */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
