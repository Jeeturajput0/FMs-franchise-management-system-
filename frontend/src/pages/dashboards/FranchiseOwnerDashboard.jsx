import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../components/Icon';

export default function FranchiseOwnerDashboard() {
  const financialMonthly = [
    { month: "Jan 2026", admissions: 42, revenue: "₹3,10,000", growth: "+12%" },
    { month: "Feb 2026", admissions: 48, revenue: "₹3,45,000", growth: "+11%" },
    { month: "Mar 2026", admissions: 54, revenue: "₹3,90,000", growth: "+13%" },
    { month: "Apr 2026", admissions: 62, revenue: "₹4,50,000", growth: "+15%" }
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-pink-950 text-white px-6 py-4 flex items-center justify-between border-b border-pink-900">
        <div className="flex items-center gap-3">
          <Link to="/" className="w-9 h-9 rounded-xl bg-amber-500 text-white flex items-center justify-center font-extrabold text-base">
            AIS
          </Link>
          <div>
            <h1 className="font-extrabold text-base text-white">Franchise Owner Business Intelligence</h1>
            <p className="text-xs text-pink-300">Apex Coaching Franchise Investor Dashboard</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Link to="/" className="text-xs font-bold text-gray-300 hover:text-white flex items-center gap-1 bg-pink-900 px-3 py-1.5 rounded-lg">
            <Icon name="Home" size={14} /> Website Home
          </Link>
          <div className="w-8 h-8 rounded-full bg-amber-500 text-white font-bold flex items-center justify-center text-xs">
            FO
          </div>
        </div>
      </header>

      <div className="flex-1 p-6 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
            <div className="text-xs text-gray-500 font-bold uppercase mb-1">Franchise Valuation</div>
            <div className="text-2xl font-black text-gray-900">₹45,00,000</div>
            <span className="text-xs font-bold text-emerald-600">+24.5% Annual ROI</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
            <div className="text-xs text-gray-500 font-bold uppercase mb-1">Active Admissions</div>
            <div className="text-2xl font-black text-gray-900">420 Students</div>
            <span className="text-xs font-bold text-pink-600">+62 this month</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
            <div className="text-xs text-gray-500 font-bold uppercase mb-1">Quarter Net Profit</div>
            <div className="text-2xl font-black text-emerald-600">₹14,95,000</div>
            <span className="text-xs font-bold text-emerald-600">32% Profit Margin</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4 pb-3 border-b border-gray-100">
            Month-over-Month Growth Metrics
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="bg-gray-50 text-gray-600 font-bold uppercase border-b border-gray-200">
                  <th className="p-3">Month Period</th>
                  <th className="p-3">New Admissions</th>
                  <th className="p-3">Gross Revenue</th>
                  <th className="p-3">Growth Rate</th>
                  <th className="p-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {financialMonthly.map((m, idx) => (
                  <tr key={idx} className="hover:bg-pink-50/40 transition-colors">
                    <td className="p-3 font-bold text-gray-900">{m.month}</td>
                    <td className="p-3 font-semibold text-gray-800">{m.admissions} Students</td>
                    <td className="p-3 font-bold text-emerald-700">{m.revenue}</td>
                    <td className="p-3 font-bold text-pink-600">{m.growth}</td>
                    <td className="p-3">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                        Audited
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

