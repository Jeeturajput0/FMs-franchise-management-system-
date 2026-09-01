import React from "react";
import FranchiseOwnerLayout from "../../layouts/FranchiseOwnerLayout";
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
    <FranchiseOwnerLayout>
      <PageHeader
        crumb="FRANCHISE OWNER / DASHBOARD"
        title="TechVeda Academy — Bengaluru Franchise"
        subtitle="Monitored performance, admissions growth, revenue vs expenses."
        actionLabel="+ New Admission"
        onAction={() => alert("New Admission modal")}
      />

      <QuickActions
        actions={[
          { label: "+ New Admission", onClick: () => alert("New Admission") },
          { label: "+ Add Student", onClick: () => alert("Add Student") },
          { label: "+ Add Teacher", onClick: () => alert("Add Teacher") },
          { label: "+ Create Batch", onClick: () => alert("Create Batch") },
          { label: "+ Record Expense", onClick: () => alert("Record Expense") },
        ]}
      />

      {/* Cards */}
      <section className="stats-grid">
        {franchiseOwnerStats.map((st, idx) => (
          <StatCard key={idx} {...st} />
        ))}
      </section>

      {/* Analytics & Expenses */}
      <section className="dashboard-grid">
        <ChartCard
          title="Revenue vs Monthly Expenses"
          subtitle="Monthly net operating income breakdown"
        />

        {/* Expenses Overview Panel */}
        <article className="panel">
          <div className="panel-head">
            <div>
              <h3>Recent Center Expenses</h3>
              <p>Operational costs & salaries</p>
            </div>
            <button type="button" className="text-button">
              View all
            </button>
          </div>

          <div className="space-y-3">
            {franchiseExpenses.map((exp) => (
              <div key={exp.id} className="p-3 border border-gray-100 rounded-xl bg-gray-50/50 flex justify-between items-center text-xs">
                <div>
                  <b className="text-[#25213a] block">{exp.title}</b>
                  <small className="text-gray-500">{exp.category} • {exp.date}</small>
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
        </article>
      </section>

      {/* Recent Admissions */}
      <DataTable
        title="Recent Franchise Admissions"
        subtitle="Newly registered students at TechVeda Academy"
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
    </FranchiseOwnerLayout>
  );
}

