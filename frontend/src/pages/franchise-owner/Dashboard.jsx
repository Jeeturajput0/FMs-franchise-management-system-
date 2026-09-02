import React from "react";
import PageHeader from "../../components/PageHeader";
import StatCard from "../../components/StatCard";
import ChartCard from "../../components/ChartCard";
import QuickActions from "../../components/dashboard/QuickActions";
import DataTable from "../../components/DataTable";
import {
  franchiseOwnerStats,
  franchiseRecentAdmissions,
  franchiseExpenses,
} from "../../data/franchiseOwnerData";

export default function FranchiseOwnerDashboard() {
  return (
    <div className="space-y-6">
      <PageHeader
        crumb="FRANCHISE OWNER / DASHBOARD"
        title="Quantum Skill Academy — Bengaluru Franchise"
        subtitle="Monitored center performance, student admissions growth, revenue and royalty ledger."
        actionLabel="New Admission"
        onAction={() => alert("New Admission modal")}
      />

      <QuickActions
        actions={[
          { label: "+ New Admission", onClick: () => alert("New Admission"), variant: "primary" },
          { label: "+ Add Student", onClick: () => alert("Add Student") },
          { label: "+ Add Teacher", onClick: () => alert("Add Teacher") },
          { label: "+ Create Batch", onClick: () => alert("Create Batch") },
          { label: "Record Expense", onClick: () => alert("Record Expense") },
        ]}
      />

      {/* Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {franchiseOwnerStats.map((st, idx) => (
          <StatCard key={idx} {...st} />
        ))}
      </section>

      {/* Analytics & Expenses */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ChartCard
            title="Monthly Revenue vs Center Expenses"
            subtitle="Monthly net operating income & royalty breakdown"
          />
        </div>

        {/* Expenses Overview Panel */}
        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
            <div>
              <h3 className="text-sm font-bold text-slate-900">Recent Center Expenses</h3>
              <p className="text-xs text-slate-500">Operational costs & lab utilities</p>
            </div>
            <button type="button" className="text-xs text-amber-600 font-bold hover:underline">
              View all
            </button>
          </div>

          <div className="space-y-2.5">
            {franchiseExpenses.map((exp) => (
              <div key={exp.id} className="p-3 border border-slate-100 rounded-xl bg-slate-50 flex justify-between items-center text-xs">
                <div>
                  <b className="text-slate-800 block">{exp.title}</b>
                  <small className="text-slate-500">{exp.category} • {exp.date}</small>
                </div>
                <div className="text-right">
                  <b className="text-rose-600 block">{exp.amount}</b>
                  <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-bold">
                    {exp.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Admissions */}
      <DataTable
        title="Recent Franchise Admissions"
        subtitle="Newly registered students at Quantum Skill Academy"
        columns={[
          { header: "ID", accessor: "id" },
          { header: "Student Name", accessor: "studentName" },
          { header: "Course Program", accessor: "course" },
          { header: "Date", accessor: "date" },
          { header: "Fee Collected", accessor: "feePaid" },
          { header: "Source", accessor: "agent" },
        ]}
        data={franchiseRecentAdmissions}
      />
    </div>
  );
}
