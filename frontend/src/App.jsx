import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './layout/Layout';

// Landing Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Solutions from './pages/Solutions';
import Features from './pages/Features';
import HowItWorks from './pages/HowItWorks';
import Franchise from './pages/Franchise';
import Contact from './pages/Contact';
import Login from './pages/Login';

// Dashboard Views
import SuperAdminDashboard from './pages/dashboards/SuperAdminDashboard';
import CoachingAdminDashboard from './pages/dashboards/CoachingAdminDashboard';
import TeacherDashboard from './pages/dashboards/TeacherDashboard';
import StudentDashboard from './pages/dashboards/StudentDashboard';
import FranchiseOwnerDashboard from './pages/dashboards/FranchiseOwnerDashboard';
import DashboardPage from './features/admin/dashboard/DashboardPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Website Landing Routes with Sticky Navbar & Footer */}
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/services" element={<Layout><Services /></Layout>} />
        <Route path="/solutions" element={<Layout><Solutions /></Layout>} />
        <Route path="/features" element={<Layout><Features /></Layout>} />
        <Route path="/how-it-works" element={<Layout><HowItWorks /></Layout>} />
        <Route path="/franchise" element={<Layout><Franchise /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />

        {/* Authentication Route */}
        <Route path="/login" element={<Login />} />

        {/* Standalone Interactive Role Dashboards */}
        <Route path="/dashboard/coaching-admin" element={<CoachingAdminDashboard />} />
        <Route path="/dashboard/teacher" element={<TeacherDashboard />} />
        <Route path="/dashboard/student" element={<StudentDashboard />} />
        <Route path="/dashboard/franchise-owner" element={<FranchiseOwnerDashboard />} />

        {/* Legacy Admin Dashboard Fallback Route */}
        <Route path="/admin/dashboard" element={<DashboardPage/>} />

        {/* Fallback to Home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
