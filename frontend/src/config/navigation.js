import { ROLES } from "./roles";

export const NAVIGATION_CONFIG = {
  [ROLES.SUPER_ADMIN]: [
    { label: "Overview", icon: "grid", path: "/admin/dashboard" },
    {
      label: "Franchises",
      icon: "building",
      path: "/admin/franchises",
      children: [
        { label: "Add Franchise", path: "/admin/franchises/add" },
        { label: "All Franchises", path: "/admin/franchises" },
        { label: "Franchise Details", path: "/admin/franchises/101" },
        { label: "Franchise Reports", path: "/admin/franchises/reports" },
      ],
    },
    {
      label: "Courses",
      icon: "book",
      path: "/admin/courses",
      children: [
        { label: "Courses", path: "/admin/courses" },
        { label: "Modules", path: "/admin/courses/modules" },
        { label: "Topics", path: "/admin/courses/topics" },
        { label: "Materials", path: "/admin/courses/materials" },
        { label: "Assignments", path: "/admin/courses/assignments" },
        { label: "Tests", path: "/admin/courses/tests" },
      ],
    },
    { label: "Students", icon: "users", path: "/admin/students" },
    {
      label: "Fees",
      icon: "wallet",
      path: "/admin/fees",
      children: [
        { label: "Registration Fees", path: "/admin/fees/registration" },
        { label: "Course Fees", path: "/admin/fees/course" },
        { label: "Certificate Fees", path: "/admin/fees/certificate" },
        { label: "Payment History", path: "/admin/fees/history" },
      ],
    },
    { label: "Certificates", icon: "award", path: "/admin/certificates" },
    { label: "Notifications", icon: "bell", path: "/admin/notifications", badge: "4" },
    { label: "Admins", icon: "shield", path: "/admin/admins" },
    {
      label: "Reports",
      icon: "chart",
      path: "/admin/reports",
      children: [
        { label: "Revenue Reports", path: "/admin/reports/revenue" },
        { label: "Student Reports", path: "/admin/reports/students" },
        { label: "Franchise Reports", path: "/admin/reports/franchise" },
        { label: "Performance Reports", path: "/admin/reports/performance" },
      ],
    },
    { label: "Settings", icon: "settings", path: "/admin/settings" },
  ],

  [ROLES.COACHING_ADMIN]: [
    { label: "Dashboard", icon: "grid", path: "/dashboard/coaching-admin" },
    {
      label: "Students",
      icon: "users",
      path: "/dashboard/coaching-admin/students",
      children: [
        { label: "All Students", path: "/dashboard/coaching-admin/students" },
        { label: "Student Details", path: "/dashboard/coaching-admin/students/1" },
      ],
    },
    {
      label: "Teachers",
      icon: "userCheck",
      path: "/dashboard/coaching-admin/teachers",
      children: [
        { label: "All Teachers", path: "/dashboard/coaching-admin/teachers" },
        { label: "Teacher Details", path: "/dashboard/coaching-admin/teachers/1" },
      ],
    },
    { label: "Courses", icon: "book", path: "/dashboard/coaching-admin/courses" },
    {
      label: "Batches",
      icon: "layers",
      path: "/dashboard/coaching-admin/batches",
      children: [
        { label: "All Batches", path: "/dashboard/coaching-admin/batches" },
        { label: "Batch Details", path: "/dashboard/coaching-admin/batches/101" },
      ],
    },
    { label: "Attendance", icon: "calendar", path: "/dashboard/coaching-admin/attendance" },
    { label: "Fees", icon: "wallet", path: "/dashboard/coaching-admin/fees" },
    { label: "Exams", icon: "fileText", path: "/dashboard/coaching-admin/exams" },
    { label: "Results", icon: "chart", path: "/dashboard/coaching-admin/results" },
    { label: "Certificates", icon: "award", path: "/dashboard/coaching-admin/certificates" },
    { label: "Notifications", icon: "bell", path: "/dashboard/coaching-admin/notifications", badge: "3" },
    { label: "Reports", icon: "barChart", path: "/dashboard/coaching-admin/reports" },
    { label: "Settings", icon: "settings", path: "/dashboard/coaching-admin/settings" },
  ],

  [ROLES.TEACHER]: [
    { label: "Dashboard", icon: "grid", path: "/dashboard/teacher" },
    { label: "My Courses", icon: "book", path: "/dashboard/teacher/courses" },
    { label: "My Batches", icon: "layers", path: "/dashboard/teacher/batches" },
    { label: "My Students", icon: "users", path: "/dashboard/teacher/students" },
    { label: "Attendance", icon: "calendar", path: "/dashboard/teacher/attendance" },
    { label: "Assignments", icon: "fileText", path: "/dashboard/teacher/assignments", badge: "12" },
    { label: "Tests", icon: "clock", path: "/dashboard/teacher/tests" },
    { label: "Results", icon: "chart", path: "/dashboard/teacher/results" },
    { label: "Materials", icon: "folder", path: "/dashboard/teacher/materials" },
    { label: "Announcements", icon: "bell", path: "/dashboard/teacher/announcements" },
    { label: "Profile", icon: "user", path: "/dashboard/teacher/profile" },
  ],

  [ROLES.STUDENT]: [
    { label: "Dashboard", icon: "grid", path: "/dashboard/student" },
    { label: "My Courses", icon: "book", path: "/dashboard/student/courses" },
    { label: "Assignments", icon: "fileText", path: "/dashboard/student/assignments", badge: "3" },
    { label: "Tests", icon: "clock", path: "/dashboard/student/tests" },
    { label: "Results", icon: "chart", path: "/dashboard/student/results" },
    { label: "Attendance", icon: "calendar", path: "/dashboard/student/attendance" },
    { label: "Certificates", icon: "award", path: "/dashboard/student/certificates" },
    { label: "Payments", icon: "wallet", path: "/dashboard/student/payments" },
    { label: "Notifications", icon: "bell", path: "/dashboard/student/notifications", badge: "2" },
    { label: "Profile", icon: "user", path: "/dashboard/student/profile" },
  ],

  [ROLES.FRANCHISE_OWNER]: [
    { label: "Dashboard", icon: "grid", path: "/dashboard/franchise-owner" },
    { label: "Admissions", icon: "userPlus", path: "/dashboard/franchise-owner/admissions" },
    { label: "Students", icon: "users", path: "/dashboard/franchise-owner/students" },
    { label: "Teachers", icon: "userCheck", path: "/dashboard/franchise-owner/teachers" },
    { label: "Courses", icon: "book", path: "/dashboard/franchise-owner/courses" },
    { label: "Batches", icon: "layers", path: "/dashboard/franchise-owner/batches" },
    { label: "Attendance", icon: "calendar", path: "/dashboard/franchise-owner/attendance" },
    { label: "Fees", icon: "wallet", path: "/dashboard/franchise-owner/fees" },
    { label: "Certificates", icon: "award", path: "/dashboard/franchise-owner/certificates" },
    { label: "Staff", icon: "shield", path: "/dashboard/franchise-owner/staff" },
    { label: "Expenses", icon: "trendingDown", path: "/dashboard/franchise-owner/expenses" },
    { label: "Revenue", icon: "dollar", path: "/dashboard/franchise-owner/revenue" },
    { label: "Reports", icon: "chart", path: "/dashboard/franchise-owner/reports" },
    { label: "Settings", icon: "settings", path: "/dashboard/franchise-owner/settings" },
  ],
};

