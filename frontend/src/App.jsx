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

// Layouts with Outlet
import SuperAdminLayout from "./layouts/SuperAdminLayout";
import CoachingAdminLayout from "./layouts/CoachingAdminLayout";
import TeacherLayout from "./layouts/TeacherLayout";
import StudentLayout from "./layouts/StudentLayout";
import FranchiseOwnerLayout from "./layouts/FranchiseOwnerLayout";

// 1. Super Admin Pages
import SuperAdminDashboard from "./pages/super-admin/Dashboard";
import FranchiseList from "./pages/super-admin/Franchises/FranchiseList";
import AddFranchise from "./pages/super-admin/Franchises/AddFranchise";
import EditFranchise from "./pages/super-admin/Franchises/EditFranchise";
import FranchiseDetails from "./pages/super-admin/Franchises/FranchiseDetails";
import FranchiseReports from "./pages/super-admin/Franchises/FranchiseReports";

import CourseList from "./pages/super-admin/Courses/CourseList";
import CourseModules from "./pages/super-admin/Courses/CourseModules";
import CourseTopics from "./pages/super-admin/Courses/CourseTopics";
import CourseMaterials from "./pages/super-admin/Courses/CourseMaterials";
import CourseAssignments from "./pages/super-admin/Courses/CourseAssignments";
import CourseTests from "./pages/super-admin/Courses/CourseTests";

import StudentList from "./pages/super-admin/Students/StudentList";

import PaymentHistory from "./pages/super-admin/Fees/PaymentHistory";
import RegistrationFees from "./pages/super-admin/Fees/RegistrationFees";
import CourseFees from "./pages/super-admin/Fees/CourseFees";
import CertificateFees from "./pages/super-admin/Fees/CertificateFees";

import CertificateList from "./pages/super-admin/Certificates/CertificateList";
import NotificationsList from "./pages/super-admin/Notifications/NotificationsList";
import AdminList from "./pages/super-admin/Admins/AdminList";
import ReportsList from "./pages/super-admin/Reports/ReportsList";
import SuperAdminSettings from "./pages/super-admin/Settings";

// 2. Coaching Admin Pages
import CoachingAdminDashboard from "./pages/coaching-admin/Dashboard";
import CoachingStudents from "./pages/coaching-admin/Students";
import CoachingTeachers from "./pages/coaching-admin/Teachers";
import CoachingCourses from "./pages/coaching-admin/Courses";
import CoachingBatches from "./pages/coaching-admin/Batches";
import CoachingAttendance from "./pages/coaching-admin/Attendance";
import CoachingFees from "./pages/coaching-admin/Fees";
import CoachingExams from "./pages/coaching-admin/Exams";
import CoachingResults from "./pages/coaching-admin/Results";
import CoachingCertificates from "./pages/coaching-admin/Certificates";
import CoachingNotifications from "./pages/coaching-admin/Notifications";
import CoachingReports from "./pages/coaching-admin/Reports";
import CoachingSettings from "./pages/coaching-admin/Settings";

// 3. Teacher Pages
import TeacherDashboard from "./pages/teacher/Dashboard";
import TeacherCourses from "./pages/teacher/MyCourses";
import TeacherBatches from "./pages/teacher/Batches";
import TeacherStudents from "./pages/teacher/Students";
import TeacherAttendance from "./pages/teacher/Attendance";
import TeacherAssignments from "./pages/teacher/Assignments";
import TeacherTests from "./pages/teacher/Tests";
import TeacherResults from "./pages/teacher/Results";
import TeacherMaterials from "./pages/teacher/Materials";
import TeacherAnnouncements from "./pages/teacher/Announcements";
import TeacherProfile from "./pages/teacher/Profile";

// 4. Student Pages
import StudentDashboard from "./pages/student/Dashboard";
import StudentCourses from "./pages/student/Courses";
import StudentCoursePlayer from "./pages/student/CoursePlayer";
import StudentAssignments from "./pages/student/Assignments";
import StudentTests from "./pages/student/Tests";
import StudentResults from "./pages/student/Results";
import StudentAttendance from "./pages/student/Attendance";
import StudentCertificates from "./pages/student/Certificates";
import StudentPayments from "./pages/student/Payments";
import StudentNotifications from "./pages/student/Notifications";
import StudentProfile from "./pages/student/Profile";

// 5. Franchise Owner Pages
import FranchiseOwnerDashboard from "./pages/franchise-owner/Dashboard";
import FranchiseAdmissions from "./pages/franchise-owner/Admissions";
import FranchiseStudents from "./pages/franchise-owner/Students";
import FranchiseTeachers from "./pages/franchise-owner/Teachers";
import FranchiseCourses from "./pages/franchise-owner/Courses";
import FranchiseBatches from "./pages/franchise-owner/Batches";
import FranchiseAttendance from "./pages/franchise-owner/Attendance";
import FranchiseFees from "./pages/franchise-owner/Fees";
import FranchiseCertificates from "./pages/franchise-owner/Certificates";
import FranchiseStaff from "./pages/franchise-owner/Staff";
import FranchiseExpenses from "./pages/franchise-owner/Expenses";
import FranchiseRevenue from "./pages/franchise-owner/Revenue";
import FranchiseReportsOwner from "./pages/franchise-owner/Reports";
import FranchiseSettings from "./pages/franchise-owner/Settings";

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

        {/* 1. SUPER ADMIN DEDICATED NESTED ROUTES */}
        <Route path="/admin" element={<SuperAdminLayout />}>
          <Route index element={<Navigate to="/admin/dashboard" replace />} />
          <Route path="dashboard" element={<SuperAdminDashboard />} />
          <Route path="franchises" element={<FranchiseList />} />
          <Route path="franchises/add" element={<AddFranchise />} />
          <Route path="franchises/edit" element={<EditFranchise />} />
          <Route path="franchises/edit/:id" element={<EditFranchise />} />
          <Route path="franchises/:id" element={<FranchiseDetails />} />
          <Route path="franchises/reports" element={<FranchiseReports />} />
          <Route path="courses" element={<CourseList />} />
          <Route path="courses/modules" element={<CourseModules />} />
          <Route path="courses/topics" element={<CourseTopics />} />
          <Route path="courses/materials" element={<CourseMaterials />} />
          <Route path="courses/assignments" element={<CourseAssignments />} />
          <Route path="courses/tests" element={<CourseTests />} />
          <Route path="students" element={<StudentList />} />
          <Route path="fees" element={<PaymentHistory />} />
          <Route path="fees/registration" element={<RegistrationFees />} />
          <Route path="fees/course" element={<CourseFees />} />
          <Route path="fees/certificate" element={<CertificateFees />} />
          <Route path="fees/history" element={<PaymentHistory />} />
          <Route path="certificates" element={<CertificateList />} />
          <Route path="notifications" element={<NotificationsList />} />
          <Route path="admins" element={<AdminList />} />
          <Route path="reports" element={<ReportsList />} />
          <Route path="reports/:type" element={<ReportsList />} />
          <Route path="settings" element={<SuperAdminSettings />} />
        </Route>

        {/* 2. COACHING ADMIN DEDICATED NESTED ROUTES */}
        <Route path="/dashboard/coaching-admin" element={<CoachingAdminLayout />}>
          <Route index element={<CoachingAdminDashboard />} />
          <Route path="students" element={<CoachingStudents />} />
          <Route path="students/:id" element={<CoachingStudents />} />
          <Route path="teachers" element={<CoachingTeachers />} />
          <Route path="teachers/:id" element={<CoachingTeachers />} />
          <Route path="courses" element={<CoachingCourses />} />
          <Route path="batches" element={<CoachingBatches />} />
          <Route path="batches/:id" element={<CoachingBatches />} />
          <Route path="attendance" element={<CoachingAttendance />} />
          <Route path="fees" element={<CoachingFees />} />
          <Route path="exams" element={<CoachingExams />} />
          <Route path="results" element={<CoachingResults />} />
          <Route path="certificates" element={<CoachingCertificates />} />
          <Route path="notifications" element={<CoachingNotifications />} />
          <Route path="reports" element={<CoachingReports />} />
          <Route path="settings" element={<CoachingSettings />} />
        </Route>

        {/* 3. TEACHER DEDICATED NESTED ROUTES */}
        <Route path="/dashboard/teacher" element={<TeacherLayout />}>
          <Route index element={<TeacherDashboard />} />
          <Route path="courses" element={<TeacherCourses />} />
          <Route path="batches" element={<TeacherBatches />} />
          <Route path="students" element={<TeacherStudents />} />
          <Route path="attendance" element={<TeacherAttendance />} />
          <Route path="assignments" element={<TeacherAssignments />} />
          <Route path="tests" element={<TeacherTests />} />
          <Route path="results" element={<TeacherResults />} />
          <Route path="materials" element={<TeacherMaterials />} />
          <Route path="announcements" element={<TeacherAnnouncements />} />
          <Route path="profile" element={<TeacherProfile />} />
        </Route>

        {/* 4. STUDENT DEDICATED NESTED ROUTES */}
        <Route path="/dashboard/student" element={<StudentLayout />}>
          <Route index element={<StudentDashboard />} />
          <Route path="courses" element={<StudentCourses />} />
          <Route path="player" element={<StudentCoursePlayer />} />
          <Route path="assignments" element={<StudentAssignments />} />
          <Route path="tests" element={<StudentTests />} />
          <Route path="results" element={<StudentResults />} />
          <Route path="attendance" element={<StudentAttendance />} />
          <Route path="certificates" element={<StudentCertificates />} />
          <Route path="payments" element={<StudentPayments />} />
          <Route path="notifications" element={<StudentNotifications />} />
          <Route path="profile" element={<StudentProfile />} />
        </Route>
        <Route path="/student/dashboard" element={<Navigate to="/dashboard/student" replace />} />

        {/* 5. FRANCHISE OWNER DEDICATED NESTED ROUTES */}
        <Route path="/dashboard/franchise-owner" element={<FranchiseOwnerLayout />}>
          <Route index element={<FranchiseOwnerDashboard />} />
          <Route path="admissions" element={<FranchiseAdmissions />} />
          <Route path="students" element={<FranchiseStudents />} />
          <Route path="teachers" element={<FranchiseTeachers />} />
          <Route path="courses" element={<FranchiseCourses />} />
          <Route path="batches" element={<FranchiseBatches />} />
          <Route path="attendance" element={<FranchiseAttendance />} />
          <Route path="fees" element={<FranchiseFees />} />
          <Route path="certificates" element={<FranchiseCertificates />} />
          <Route path="staff" element={<FranchiseStaff />} />
          <Route path="expenses" element={<FranchiseExpenses />} />
          <Route path="revenue" element={<FranchiseRevenue />} />
          <Route path="reports" element={<FranchiseReportsOwner />} />
          <Route path="settings" element={<FranchiseSettings />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
