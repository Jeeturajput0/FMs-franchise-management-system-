import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../components/Icon';

export default function StudentDashboard() {
  const [activeTab, setActiveTab] = useState('courses');
  const [certificateGenerated, setCertificateGenerated] = useState(true);

  const modules = [
    { title: "Module 1: HTML5 & CSS3 Glassmorphic Styling", duration: "12 Sessions", status: "Completed", score: "96%" },
    { title: "Module 2: Modern JavaScript & ES6+ Concepts", duration: "15 Sessions", status: "Completed", score: "90%" },
    { title: "Module 3: React.js & State Architecture", duration: "18 Sessions", status: "In Progress", score: "88%" },
    { title: "Module 4: Node.js & MongoDB Backend APIs", duration: "14 Sessions", status: "Upcoming", score: "-" }
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-purple-900 text-white px-6 py-4 flex items-center justify-between border-b border-purple-800">
        <div className="flex items-center gap-3">
          <Link to="/" className="w-9 h-9 rounded-xl bg-amber-500 text-white flex items-center justify-center font-extrabold text-base">
            AIS
          </Link>
          <div>
            <h1 className="font-extrabold text-base text-white">Student LMS Dashboard - Aarav Sharma</h1>
            <p className="text-xs text-purple-200">Apex Coaching Center | Roll #S-101</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Link to="/" className="text-xs font-bold text-gray-300 hover:text-white flex items-center gap-1 bg-purple-800 px-3 py-1.5 rounded-lg">
            <Icon name="Home" size={14} /> Website Home
          </Link>
          <div className="w-8 h-8 rounded-full bg-amber-500 text-white font-bold flex items-center justify-center text-xs">
            ST
          </div>
        </div>
      </header>

      <div className="flex-1 p-6 max-w-7xl mx-auto w-full">
        {/* Enrolled Course Banner */}
        <div className="bg-gradient-to-r from-purple-900 via-purple-800 to-amber-900 text-white p-6 rounded-3xl shadow-xl mb-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500 text-white mb-2 inline-block">
              Enrolled Course
            </span>
            <h2 className="text-2xl font-extrabold mb-1">Full Stack Web Development & AI</h2>
            <p className="text-xs text-purple-200">Instructor: Rahul Sharma | Apex Coaching Center Jaipur</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 text-center shrink-0">
            <div className="text-xs text-purple-200 font-semibold mb-1">Overall Progress</div>
            <div className="text-3xl font-extrabold text-amber-400">88.4%</div>
            <div className="text-[10px] text-emerald-300 font-bold">Eligible for Certificate</div>
          </div>
        </div>

        {/* 3 Metrics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
            <div className="text-xs text-gray-500 font-bold uppercase mb-1">Attendance Record</div>
            <div className="text-2xl font-black text-gray-900">94% Present</div>
            <span className="text-xs font-bold text-emerald-600">47 / 50 Classes Attended</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
            <div className="text-xs text-gray-500 font-bold uppercase mb-1">Assignments</div>
            <div className="text-2xl font-black text-gray-900">12 Submitted</div>
            <span className="text-xs font-bold text-emerald-600">Avg Score: 92/100</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
            <div className="text-xs text-gray-500 font-bold uppercase mb-1">Certificate Status</div>
            <div className="text-2xl font-black text-amber-600">QR Verified</div>
            <span className="text-xs font-bold text-emerald-600">#AIS-9942 Ready</span>
          </div>
        </div>

        {/* Course Syllabus & Certificate View Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Column: Syllabus Modules */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
            <h3 className="text-base font-bold text-gray-900 mb-4 pb-3 border-b border-gray-100">
              Course Modules & Study Materials
            </h3>

            <div className="space-y-3">
              {modules.map((mod, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-gray-50 border border-gray-200/80 flex items-center justify-between gap-4">
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 mb-0.5">{mod.title}</h4>
                    <p className="text-xs text-gray-500">{mod.duration} | Quiz Score: <span className="font-bold text-gray-800">{mod.score}</span></p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold shrink-0 ${
                    mod.status === 'Completed' ? 'bg-emerald-100 text-emerald-800' :
                    mod.status === 'In Progress' ? 'bg-amber-100 text-amber-800' : 'bg-gray-200 text-gray-700'
                  }`}>
                    {mod.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: QR Verified Certificate Card */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-amber-300 shadow-xl p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 border border-amber-200">
                  AI Scholar Certificate
                </span>
                <span className="text-xs font-extrabold text-emerald-600 flex items-center gap-1">
                  <Icon name="CheckCircle" size={14} /> Verified
                </span>
              </div>

              <div className="border-2 border-dashed border-amber-300 p-6 rounded-xl text-center bg-amber-50/40 mb-4">
                <div className="w-12 h-12 rounded-full bg-amber-500 text-white flex items-center justify-center mx-auto mb-2 font-extrabold text-sm shadow-md">
                  AIS
                </div>
                <div className="text-xs uppercase tracking-widest font-bold text-gray-600">Certificate of Completion</div>
                <div className="text-lg font-extrabold text-gray-900 my-1">Aarav Sharma</div>
                <p className="text-xs text-gray-600 mb-3">Has successfully completed the Full Stack Web Development course with Distinction (88.4%).</p>
                
                {/* QR Code Demo Box */}
                <div className="w-24 h-24 mx-auto bg-white border border-gray-300 rounded-lg p-2 flex flex-col items-center justify-center shadow-xs">
                  <Icon name="QrCode" size={64} className="text-gray-900" />
                  <span className="text-[8px] font-mono text-gray-600 mt-1">#AIS-9942</span>
                </div>
              </div>
            </div>

            <button className="w-full py-3 rounded-xl bg-amber-500 text-white font-extrabold text-xs hover:bg-amber-600 shadow-md transition-colors flex items-center justify-center gap-2">
              <Icon name="Download" size={16} /> Download Verified Certificate PDF
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}

