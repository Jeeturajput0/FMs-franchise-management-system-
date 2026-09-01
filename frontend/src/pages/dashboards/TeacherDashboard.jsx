import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../components/Icon';

export default function TeacherDashboard() {
  const [students, setStudents] = useState([
    { id: "S-101", name: "Aarav Sharma", attendance: "94%", assignment: "Submitted", score: "92/100" },
    { id: "S-102", name: "Ananya Gupta", attendance: "88%", assignment: "Submitted", score: "85/100" },
    { id: "S-103", name: "Rohan Mehta", attendance: "98%", assignment: "Submitted", score: "96/100" },
    { id: "S-104", name: "Sanya Verma", attendance: "76%", assignment: "Pending", score: "74/100" }
  ]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-emerald-900 text-white px-6 py-4 flex items-center justify-between border-b border-emerald-800">
        <div className="flex items-center gap-3">
          <Link to="/" className="w-9 h-9 rounded-xl bg-amber-500 text-white flex items-center justify-center font-extrabold text-base">
            AIS
          </Link>
          <div>
            <h1 className="font-extrabold text-base text-white">Teacher Portal - Rahul Sharma</h1>
            <p className="text-xs text-emerald-200">Full Stack Web Development Faculty</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Link to="/" className="text-xs font-bold text-gray-300 hover:text-white flex items-center gap-1 bg-emerald-800 px-3 py-1.5 rounded-lg">
            <Icon name="Home" size={14} /> Main Site
          </Link>
          <div className="w-8 h-8 rounded-full bg-amber-500 text-white font-bold flex items-center justify-center text-xs">
            T
          </div>
        </div>
      </header>

      <div className="flex-1 p-6 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
            <div className="text-xs text-gray-500 font-bold uppercase mb-1">Assigned Batches</div>
            <div className="text-2xl font-black text-gray-900">2 Batches</div>
            <span className="text-xs font-bold text-emerald-600">63 Active Students</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
            <div className="text-xs text-gray-500 font-bold uppercase mb-1">Class Attendance Avg</div>
            <div className="text-2xl font-black text-gray-900">91.5%</div>
            <span className="text-xs font-bold text-emerald-600">Today Marked</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
            <div className="text-xs text-gray-500 font-bold uppercase mb-1">Assignments Evaluated</div>
            <div className="text-2xl font-black text-gray-900">142 PDFs</div>
            <span className="text-xs font-bold text-amber-600">4 Pending Review</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
            <h2 className="text-lg font-bold text-gray-900">Batch A Student Roster & Marks Entry</h2>
            <button className="px-4 py-2 bg-emerald-600 text-white font-bold text-xs rounded-xl shadow-xs hover:bg-emerald-700">
              Mark Class Attendance
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="bg-gray-50 text-gray-600 font-bold uppercase border-b border-gray-200">
                  <th className="p-3">Student ID</th>
                  <th className="p-3">Student Name</th>
                  <th className="p-3">Attendance Rate</th>
                  <th className="p-3">Assignment Status</th>
                  <th className="p-3">Latest Mock Score</th>
                  <th className="p-3">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {students.map((s) => (
                  <tr key={s.id} className="hover:bg-emerald-50/40 transition-colors">
                    <td className="p-3 font-mono font-bold text-emerald-700">{s.id}</td>
                    <td className="p-3 font-bold text-gray-900">{s.name}</td>
                    <td className="p-3 font-semibold text-gray-700">{s.attendance}</td>
                    <td className="p-3">
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                        s.assignment === 'Submitted' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                      }`}>
                        {s.assignment}
                      </span>
                    </td>
                    <td className="p-3 font-bold text-gray-900">{s.score}</td>
                    <td className="p-3">
                      <button className="px-2.5 py-1 rounded-lg bg-gray-900 text-white font-bold hover:bg-amber-500 transition-colors">
                        Grade Marks
                      </button>
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

