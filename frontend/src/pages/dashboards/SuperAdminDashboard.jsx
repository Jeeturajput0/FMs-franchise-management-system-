import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../components/Icon';

export default function SuperAdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');

  const coachings = [
    { id: 101, name: "Apex Coaching Hub", city: "Jaipur", students: 420, teachers: 14, revenue: "₹3,40,000", status: "Active" },
    { id: 102, name: "Zenith Scholars Institute", city: "Delhi", students: 610, teachers: 18, revenue: "₹5,20,000", status: "Active" },
    { id: 103, name: "Pioneer Education Center", city: "Indore", students: 310, teachers: 9, revenue: "₹2,80,000", status: "Active" },
    { id: 104, name: "Bright Future Coaching", city: "Ahmedabad", students: 540, teachers: 16, revenue: "₹4,10,000", status: "Active" },
    { id: 105, name: "Quantum Skill Academy", city: "Pune", students: 290, teachers: 8, revenue: "₹2,10,000", status: "Pending Review" }
  ];

  const filteredCoachings = coachings.filter(c => c.name.toLowerCase().includes(searchTerm.toLowerCase()) || c.city.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Dashboard Header */}
      <header className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between border-b border-gray-800">
        <div className="flex items-center gap-3">
          <Link to="/" className="w-9 h-9 rounded-xl bg-amber-500 text-white flex items-center justify-center font-extrabold text-base">
            AIS
          </Link>
          <div>
            <h1 className="font-extrabold text-base text-white">Super Admin Master Portal</h1>
            <p className="text-xs text-amber-400">Global Network Oversight</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Link to="/" className="text-xs font-bold text-gray-300 hover:text-white flex items-center gap-1 bg-gray-800 px-3 py-1.5 rounded-lg">
            <Icon name="Home" size={14} /> Back to Website
          </Link>
          <div className="w-8 h-8 rounded-full bg-amber-500 text-white font-bold flex items-center justify-center text-xs">
            SA
          </div>
        </div>
      </header>

      <div className="flex-1 p-6 max-w-7xl mx-auto w-full">
        {/* Top Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
            <div className="text-xs text-gray-500 font-bold uppercase mb-1">Total Franchises</div>
            <div className="text-2xl font-black text-gray-900">42 Centers</div>
            <span className="text-xs font-bold text-emerald-600">+3 New this month</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
            <div className="text-xs text-gray-500 font-bold uppercase mb-1">Enrolled Students</div>
            <div className="text-2xl font-black text-gray-900">4,250</div>
            <span className="text-xs font-bold text-emerald-600">88.4% Avg Score</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
            <div className="text-xs text-gray-500 font-bold uppercase mb-1">Total Network Revenue</div>
            <div className="text-2xl font-black text-gray-900">₹23,27,000</div>
            <span className="text-xs font-bold text-amber-600">Auto Fee Sharing</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
            <div className="text-xs text-gray-500 font-bold uppercase mb-1">Certificates Issued</div>
            <div className="text-2xl font-black text-gray-900">1,840</div>
            <span className="text-xs font-bold text-emerald-600">100% QR Verified</span>
          </div>
        </div>

        {/* Content Box */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-gray-100">
            <h2 className="text-lg font-bold text-gray-900">Franchise Coaching Centers Roster</h2>
            
            <div className="relative w-full sm:w-72">
              <Icon name="Search" size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search center or city..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-xl border border-gray-200 text-xs focus:outline-none focus:border-amber-500"
              />
            </div>
          </div>

          {/* Data Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="bg-gray-50 text-gray-600 font-bold uppercase border-b border-gray-200">
                  <th className="p-3">Center ID</th>
                  <th className="p-3">Coaching Name</th>
                  <th className="p-3">City</th>
                  <th className="p-3">Students</th>
                  <th className="p-3">Teachers</th>
                  <th className="p-3">Monthly Revenue</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredCoachings.map((c) => (
                  <tr key={c.id} className="hover:bg-amber-50/40 transition-colors">
                    <td className="p-3 font-mono font-bold text-gray-500">#{c.id}</td>
                    <td className="p-3 font-bold text-gray-900">{c.name}</td>
                    <td className="p-3 font-semibold text-gray-700">{c.city}</td>
                    <td className="p-3 font-semibold text-gray-900">{c.students}</td>
                    <td className="p-3 font-semibold text-gray-700">{c.teachers}</td>
                    <td className="p-3 font-bold text-emerald-700">{c.revenue}</td>
                    <td className="p-3">
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                        c.status === 'Active' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                      }`}>
                        {c.status}
                      </span>
                    </td>
                    <td className="p-3">
                      <button className="px-2.5 py-1 rounded-lg bg-gray-900 text-white font-bold hover:bg-amber-500 transition-colors">
                        Manage
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

