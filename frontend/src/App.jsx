import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layout/Layout";

// Landing Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Solutions from "./pages/Solutions";
import Features from "./pages/Features";
import HowItWorks from "./pages/HowItWorks";
import Franchise from "./pages/Franchise";
import Contact from "./pages/Contact";
import Login from "./pages/Login";

// Protected Route Component & Roles Config
import ProtectedRoute from "./components/ProtectedRoute";
import { ROLES } from "./config/roles";

// 1. Super Admin Pages
import SuperAdminDashboard from "./pages/super-admin/Dashboard";
import FranchiseList from "./pages/super-admin/Franchises/FranchiseList";
import FranchiseDetails from "./pages/super-admin/Franchises/FranchiseDetails";
import CourseList from "./pages/super-admin/Courses/CourseList";
import StudentList from "./pages/super-admin/Students/StudentList";
import AdminList from "./pages/super-admin/Admins/AdminList";
import PaymentHistory from "./pages/super-admin/Fees/PaymentHistory";
import CertificateList from "./pages/super-admin/Certificates/CertificateList";
import SuperAdminSettings from "./pages/super-admin/Settings";

// 2. Coaching Admin Pages
import CoachingAdminDashboard from "./pages/coaching-admin/Dashboard";
import CoachingStudents from "./pages/coaching-admin/Students";
import CoachingTeachers from "./pages/coaching-admin/Teachers";
import CoachingBatches from "./pages/coaching-admin/Batches";

// 3. Teacher Pages
import TeacherDashboard from "./pages/teacher/Dashboard";
import TeacherCourses from "./pages/teacher/MyCourses";

// 4. Student Pages
import StudentDashboard from "./pages/student/Dashboard";
import StudentCoursePlayer from "./pages/student/CoursePlayer";

// 5. Franchise Owner Pages
import FranchiseOwnerDashboard from "./pages/franchise-owner/Dashboard";
import FranchiseAdmissions from "./pages/franchise-owner/Admissions";
import FranchiseStaff from "./pages/franchise-owner/Staff";

// Custom Stylesheets
import "./styles/dashboard.css";
import "./styles/sidebar.css";
import "./styles/tables.css";
import "./styles/forms.css";
import "./styles/responsive.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Website Landing Routes */}
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/services" element={<Layout><Services /></Layout>} />
        <Route path="/solutions" element={<Layout><Solutions /></Layout>} />
        <Route path="/features" element={<Layout><Features /></Layout>} />
        <Route path="/how-it-works" element={<Layout><HowItWorks /></Layout>} />
        <Route path="/franchise" element={<Layout><Franchise /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />

        {/* Authentication */}
        <Route path="/login" element={<Login />} />

        {/* 1. SUPER ADMIN DEDICATED ROUTES */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute allowedRoles={[ROLES.SUPER_ADMIN]}>
              <SuperAdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/admin/franchises" element={<FranchiseList />} />
        <Route path="/admin/franchises/add" element={<FranchiseList />} />
        <Route path="/admin/franchises/:id" element={<FranchiseDetails />} />
        <Route path="/admin/franchises/reports" element={<FranchiseList />} />
        <Route path="/admin/courses" element={<CourseList />} />
        <Route path="/admin/courses/*" element={<CourseList />} />
        <Route path="/admin/students" element={<StudentList />} />
        <Route path="/admin/fees" element={<PaymentHistory />} />
        <Route path="/admin/fees/*" element={<PaymentHistory />} />
        <Route path="/admin/certificates" element={<CertificateList />} />
        <Route path="/admin/notifications" element={<SuperAdminDashboard />} />
        <Route path="/admin/admins" element={<AdminList />} />
        <Route path="/admin/reports" element={<SuperAdminDashboard />} />
        <Route path="/admin/reports/*" element={<SuperAdminDashboard />} />
        <Route path="/admin/settings" element={<SuperAdminSettings />} />

        {/* 2. COACHING ADMIN DEDICATED ROUTES */}
        <Route path="/dashboard/coaching-admin" element={<CoachingAdminDashboard />} />
        <Route path="/dashboard/coaching-admin/students" element={<CoachingStudents />} />
        <Route path="/dashboard/coaching-admin/students/:id" element={<CoachingStudents />} />
        <Route path="/dashboard/coaching-admin/teachers" element={<CoachingTeachers />} />
        <Route path="/dashboard/coaching-admin/teachers/:id" element={<CoachingTeachers />} />
        <Route path="/dashboard/coaching-admin/courses" element={<CoachingAdminDashboard />} />
        <Route path="/dashboard/coaching-admin/batches" element={<CoachingBatches />} />
        <Route path="/dashboard/coaching-admin/batches/:id" element={<CoachingBatches />} />
        <Route path="/dashboard/coaching-admin/attendance" element={<CoachingAdminDashboard />} />
        <Route path="/dashboard/coaching-admin/fees" element={<CoachingAdminDashboard />} />
        <Route path="/dashboard/coaching-admin/exams" element={<CoachingAdminDashboard />} />
        <Route path="/dashboard/coaching-admin/results" element={<CoachingAdminDashboard />} />
        <Route path="/dashboard/coaching-admin/certificates" element={<CoachingAdminDashboard />} />
        <Route path="/dashboard/coaching-admin/notifications" element={<CoachingAdminDashboard />} />
        <Route path="/dashboard/coaching-admin/reports" element={<CoachingAdminDashboard />} />
        <Route path="/dashboard/coaching-admin/settings" element={<CoachingAdminDashboard />} />

        {/* 3. TEACHER DEDICATED ROUTES */}
        <Route path="/dashboard/teacher" element={<TeacherDashboard />} />
        <Route path="/dashboard/teacher/courses" element={<TeacherCourses />} />
        <Route path="/dashboard/teacher/batches" element={<TeacherDashboard />} />
        <Route path="/dashboard/teacher/students" element={<TeacherDashboard />} />
        <Route path="/dashboard/teacher/attendance" element={<TeacherDashboard />} />
        <Route path="/dashboard/teacher/assignments" element={<TeacherDashboard />} />
        <Route path="/dashboard/teacher/tests" element={<TeacherDashboard />} />
        <Route path="/dashboard/teacher/results" element={<TeacherDashboard />} />
        <Route path="/dashboard/teacher/materials" element={<TeacherDashboard />} />
        <Route path="/dashboard/teacher/announcements" element={<TeacherDashboard />} />
        <Route path="/dashboard/teacher/profile" element={<TeacherDashboard />} />

        {/* 4. STUDENT DEDICATED ROUTES */}
        <Route path="/dashboard/student" element={<StudentDashboard />} />
        <Route path="/student/dashboard" element={<StudentDashboard />} />
        <Route path="/dashboard/student/courses" element={<StudentDashboard />} />
        <Route path="/dashboard/student/player" element={<StudentCoursePlayer />} />
        <Route path="/dashboard/student/assignments" element={<StudentDashboard />} />
        <Route path="/dashboard/student/tests" element={<StudentDashboard />} />
        <Route path="/dashboard/student/results" element={<StudentDashboard />} />
        <Route path="/dashboard/student/attendance" element={<StudentDashboard />} />
        <Route path="/dashboard/student/certificates" element={<StudentDashboard />} />
        <Route path="/dashboard/student/payments" element={<StudentDashboard />} />
        <Route path="/dashboard/student/notifications" element={<StudentDashboard />} />
        <Route path="/dashboard/student/profile" element={<StudentDashboard />} />

        {/* 5. FRANCHISE OWNER DEDICATED ROUTES */}
        <Route path="/dashboard/franchise-owner" element={<FranchiseOwnerDashboard />} />
        <Route path="/dashboard/franchise-owner/admissions" element={<FranchiseAdmissions />} />
        <Route path="/dashboard/franchise-owner/students" element={<FranchiseOwnerDashboard />} />
        <Route path="/dashboard/franchise-owner/teachers" element={<FranchiseOwnerDashboard />} />
        <Route path="/dashboard/franchise-owner/courses" element={<FranchiseOwnerDashboard />} />
        <Route path="/dashboard/franchise-owner/batches" element={<FranchiseOwnerDashboard />} />
        <Route path="/dashboard/franchise-owner/attendance" element={<FranchiseOwnerDashboard />} />
        <Route path="/dashboard/franchise-owner/fees" element={<FranchiseOwnerDashboard />} />
        <Route path="/dashboard/franchise-owner/certificates" element={<FranchiseOwnerDashboard />} />
        <Route path="/dashboard/franchise-owner/staff" element={<FranchiseStaff />} />
        <Route path="/dashboard/franchise-owner/expenses" element={<FranchiseOwnerDashboard />} />
        <Route path="/dashboard/franchise-owner/revenue" element={<FranchiseOwnerDashboard />} />
        <Route path="/dashboard/franchise-owner/reports" element={<FranchiseOwnerDashboard />} />
        <Route path="/dashboard/franchise-owner/settings" element={<FranchiseOwnerDashboard />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
