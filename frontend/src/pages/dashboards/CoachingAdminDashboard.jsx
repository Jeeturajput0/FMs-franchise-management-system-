import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../components/Icon';

export default function CoachingAdminDashboard() {
  const [batches, setBatches] = useState([
    { id: "B-101", course: "Full Stack Web Development", teacher: "Rahul Sharma", students: 35, timing: "10:00 AM - 12:00 PM", status: "Ongoing" },
    { id: "B-102", course: "Data Science & AI", teacher: "Priya Verma", students: 28, timing: "02:00 PM - 04:00 PM", status: "Ongoing" },
    { id: "B-103", course: "UI/UX Design Masterclass", teacher: "Amit Patel", students: 22, timing: "05:00 PM - 07:00 PM", status: "Upcoming" }
  ]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-blue-900 text-white px-6 py-4 flex items-center justify-between border-b border-blue-800">
        <div className="flex items-center gap-3">
          <Link to="/" className="w-9 h-9 rounded-xl bg-amber-500 text-white flex items-center justify-center font-extrabold text-base">
            AIS
          </Link>
          <div>
            <h1 className="font-extrabold text-base text-white">Apex Coaching Admin Portal</h1>
            <p className="text-xs text-blue-200">Jaipur Hub Center #101</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Link to="/" className="text-xs font-bold text-gray-300 hover:text-white flex items-center gap-1 bg-blue-800 px-3 py-1.5 rounded-lg">
            <Icon name="Home" size={14} /> Main Site
          </Link>
          <div className="w-8 h-8 rounded-full bg-amber-500 text-white font-bold flex items-center justify-center text-xs">
            CA
          </div>
        </div>
      </header>

      <div className="flex-1 p-6 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
            <div className="text-xs text-gray-500 font-bold uppercase mb-1">Center Enrolled Students</div>
            <div className="text-2xl font-black text-gray-900">420 Students</div>
            <span className="text-xs font-bold text-emerald-600">8 Batches Active</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
            <div className="text-xs text-gray-500 font-bold uppercase mb-1">Assigned Teachers</div>
            <div className="text-2xl font-black text-gray-900">14 Faculty</div>
            <span className="text-xs font-bold text-blue-600">100% Attendance Logged</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
            <div className="text-xs text-gray-500 font-bold uppercase mb-1">Center Monthly Fees</div>
            <div className="text-2xl font-black text-gray-900">₹3,40,000</div>
            <span className="text-xs font-bold text-emerald-600">₹45k Pending Collect</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
            <h2 className="text-lg font-bold text-gray-900">Active Batches & Schedule</h2>
            <button className="px-4 py-2 bg-amber-500 text-white font-bold text-xs rounded-xl shadow-xs hover:bg-amber-600">
              + Create New Batch
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="bg-gray-50 text-gray-600 font-bold uppercase border-b border-gray-200">
                  <th className="p-3">Batch Code</th>
                  <th className="p-3">Course Name</th>
                  <th className="p-3">Assigned Faculty</th>
                  <th className="p-3">Capacity</th>
                  <th className="p-3">Session Timing</th>
                  <th className="p-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {batches.map((b) => (
                  <tr key={b.id} className="hover:bg-blue-50/40 transition-colors">
                    <td className="p-3 font-mono font-bold text-blue-700">{b.id}</td>
                    <td className="p-3 font-bold text-gray-900">{b.course}</td>
                    <td className="p-3 font-semibold text-gray-700">{b.teacher}</td>
                    <td className="p-3 font-semibold text-gray-900">{b.students} / 40</td>
                    <td className="p-3 font-medium text-gray-600">{b.timing}</td>
                    <td className="p-3">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                        {b.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

