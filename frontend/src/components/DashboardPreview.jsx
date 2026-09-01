import React from 'react';
import { motion } from 'framer-motion';
import Icon from './Icon';
import { heroStats, floatingNotifications } from '../data/siteData';

export default function DashboardPreview() {
  return (
    <div className="relative w-full max-w-5xl mx-auto mt-8">
      {/* Background Decorative Blur */}
      <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition duration-1000"></div>

      {/* Main Dashboard Card Container */}
      <div className="relative bg-white/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-gray-200/90 shadow-2xl p-4 sm:p-7 overflow-hidden">
        
        {/* Top Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-5 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center text-white font-extrabold shadow-md">
              AIS
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-gray-900 text-base">AI Scholar Master Portal</h3>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800 uppercase">Live Network</span>
              </div>
              <p className="text-xs text-gray-600">Central Franchise & LMS Operating System</p>
            </div>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              All 42 Centers Online
            </div>
            <div className="hidden sm:flex items-center gap-2 text-xs font-medium text-gray-600 bg-gray-100 px-3 py-1.5 rounded-lg">
              <Icon name="Calendar" size={14} />
              <span>Sept 2026</span>
            </div>
          </div>
        </div>

        {/* 4 Key Stat Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6">
          <div className="bg-gradient-to-br from-amber-500/10 to-amber-500/5 p-4 rounded-xl border border-amber-200/60">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-gray-600">Total Coachings</span>
              <div className="p-1.5 bg-amber-500 text-white rounded-lg">
                <Icon name="Building2" size={16} />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-gray-900">{heroStats.totalCoachings}</div>
            <span className="text-[11px] font-semibold text-emerald-600 flex items-center gap-1 mt-1">
              <Icon name="TrendingUp" size={12} /> +4 this month
            </span>
          </div>

          <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 p-4 rounded-xl border border-blue-200/60">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-gray-600">Total Students</span>
              <div className="p-1.5 bg-blue-500 text-white rounded-lg">
                <Icon name="Users" size={16} />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-gray-900">{heroStats.totalStudents.toLocaleString()}</div>
            <span className="text-[11px] font-semibold text-emerald-600 flex items-center gap-1 mt-1">
              <Icon name="TrendingUp" size={12} /> {heroStats.coachingGrowthRate} YoY
            </span>
          </div>

          <div className="bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 p-4 rounded-xl border border-emerald-200/60">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-gray-600">Total Teachers</span>
              <div className="p-1.5 bg-emerald-500 text-white rounded-lg">
                <Icon name="GraduationCap" size={16} />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-gray-900">{heroStats.totalTeachers}</div>
            <span className="text-[11px] font-semibold text-gray-600 mt-1 block">Active across batches</span>
          </div>

          <div className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 p-4 rounded-xl border border-purple-200/60">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-gray-600">Active Courses</span>
              <div className="p-1.5 bg-purple-500 text-white rounded-lg">
                <Icon name="BookOpen" size={16} />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-gray-900">{heroStats.activeCourses}</div>
            <span className="text-[11px] font-semibold text-purple-600 mt-1 block">Standardized Syllabus</span>
          </div>
        </div>

        {/* Revenue & Performance Split Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-50/80 p-4 rounded-xl border border-gray-200/70">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-xs font-bold text-gray-700 uppercase tracking-wider">Revenue Breakdown</h4>
              <span className="text-[11px] text-gray-600 font-semibold">Total Pool</span>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between p-2.5 bg-white rounded-lg border border-gray-100 shadow-2xs">
                <div className="flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
                  <span className="text-xs font-medium text-gray-700">Registration Revenue</span>
                </div>
                <span className="text-xs font-bold text-gray-900">{heroStats.registrationRevenue}</span>
              </div>

              <div className="flex items-center justify-between p-2.5 bg-white rounded-lg border border-gray-100 shadow-2xs">
                <div className="flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                  <span className="text-xs font-medium text-gray-700">Certificate Verification Revenue</span>
                </div>
                <span className="text-xs font-bold text-gray-900">{heroStats.certificateRevenue}</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-50/80 p-4 rounded-xl border border-gray-200/70">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-xs font-bold text-gray-700 uppercase tracking-wider">Network Health</h4>
              <span className="text-[11px] text-emerald-600 font-semibold">99.8% Compliance</span>
            </div>

            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span className="text-gray-600">Student Average Performance</span>
                  <span className="text-gray-900">{heroStats.studentPerformanceAvg}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div className="bg-amber-500 h-2 rounded-full" style={{ width: '88.4%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span className="text-gray-600">Coaching Compliance Index</span>
                  <span className="text-gray-900">96.2%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '96.2%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Framer Motion Animated Cards */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-6 -left-4 sm:-left-8 hidden lg:flex items-center gap-3 bg-white p-3 px-4 rounded-xl shadow-xl border border-gray-100 z-10"
      >
        <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
          <Icon name="UserPlus" size={18} />
        </div>
        <div>
          <div className="text-xs font-bold text-gray-900">+12 New Students</div>
          <div className="text-[10px] text-gray-600">Jaipur Hub Batch A</div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -bottom-6 -left-2 sm:-left-6 hidden sm:flex items-center gap-3 bg-white p-3 px-4 rounded-xl shadow-xl border border-gray-100 z-10"
      >
        <div className="w-9 h-9 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center font-bold">
          <Icon name="Award" size={18} />
        </div>
        <div>
          <div className="text-xs font-bold text-gray-900">Certificate Generated</div>
          <div className="text-[10px] text-emerald-600 font-semibold">QR Verified #9942</div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute -top-4 -right-4 sm:-right-8 hidden lg:flex items-center gap-3 bg-white p-3 px-4 rounded-xl shadow-xl border border-gray-100 z-10"
      >
        <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
          <Icon name="Building2" size={18} />
        </div>
        <div>
          <div className="text-xs font-bold text-gray-900">New Coaching Approved</div>
          <div className="text-[10px] text-gray-600">Indore Center #43</div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute -bottom-5 -right-2 sm:-right-6 hidden sm:flex items-center gap-3 bg-white p-3 px-4 rounded-xl shadow-xl border border-gray-100 z-10"
      >
        <div className="w-9 h-9 rounded-lg bg-emerald-500 text-white flex items-center justify-center font-bold">
          <Icon name="CheckCircle2" size={18} />
        </div>
        <div>
          <div className="text-xs font-bold text-gray-900">₹45,000 Fees Collected</div>
          <div className="text-[10px] text-gray-600">Auto Split Processed</div>
        </div>
      </motion.div>
    </div>
  );
}

