import React from "react";
import PageHeader from "../../components/PageHeader";
import StatCard from "../../components/StatCard";
import ChartCard from "../../components/ChartCard";
import QuickActions from "../../components/dashboard/QuickActions";
import DataTable from "../../components/DataTable";
import {
  coachingAdminStats,
  coachingAdminTodayClasses,
  coachingAdminStudents,
} from "../../data/coachingAdminData";

export default function CoachingAdminDashboard() {
  return (
    <div className="space-y-6">
      <PageHeader
        crumb="COACHING PORTAL / DASHBOARD"
        title="Bright Minds Coaching Institute"
        subtitle="Manage institute students, teachers, running batches, and revenue."
        actionLabel="+ Add Student"
        onAction={() => alert("Add Student modal")}
      />

      <QuickActions
        actions={[
          { label: "+ Add Student", onClick: () => alert("Add Student"), variant: "primary" },
          { label: "+ Add Teacher", onClick: () => alert("Add Teacher") },
          { label: "+ Create Batch", onClick: () => alert("Create Batch") },
          { label: "+ Collect Fee", onClick: () => alert("Collect Fee") },
        ]}
      />

      {/* Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {coachingAdminStats.map((st, idx) => (
          <StatCard key={idx} {...st} />
        ))}
      </section>

      {/* Analytics & Today's Classes */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ChartCard
            title="Student Growth & Revenue"
            subtitle="Monthly student admissions and collection"
          />
        </div>

        {/* Today's Schedule Panel */}
        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
            <div>
              <h3 className="text-sm font-bold text-slate-900">Today's Class Schedule</h3>
              <p className="text-xs text-slate-500">Active lectures & lab sessions</p>
            </div>
            <span className="text-[10px] bg-amber-100 text-amber-800 px-2.5 py-0.5 rounded-full font-bold">
              4 Classes
            </span>
          </div>

          <div className="space-y-2.5">
            {coachingAdminTodayClasses.map((cls, idx) => (
              <div
                key={idx}
                className="p-3 border border-slate-100 rounded-xl bg-slate-50 flex items-center justify-between gap-3 text-xs"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-amber-600 font-mono">{cls.time}</span>
                    <span className="font-bold text-slate-800">{cls.title}</span>
                  </div>
                  <small className="text-slate-500 block mt-0.5">
                    {cls.batch} • {cls.room} • Faculty: {cls.teacher}
                  </small>
                </div>
                <div className="text-right">
                  <span className="font-semibold text-slate-700">{cls.students} Students</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Students Roster */}
      <DataTable
        title="Recent Student Admissions"
        subtitle="Newly enrolled students in your institute"
        columns={[
          { header: "ID", accessor: "id" },
          { header: "Student Name", accessor: "name" },
          { header: "Course", accessor: "course" },
          { header: "Batch", accessor: "batch" },
          { header: "Attendance", accessor: "attendance" },
          { header: "Fee Status", accessor: "feeStatus" },
          { header: "Status", accessor: "status", isBadge: true },
        ]}
        data={coachingAdminStudents}
      />
    </div>
  );
}
