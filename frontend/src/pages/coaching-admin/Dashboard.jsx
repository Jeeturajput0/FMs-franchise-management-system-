import React from "react";
import CoachingAdminLayout from "../../layouts/CoachingAdminLayout";
import PageHeader from "../../components/PageHeader";
import StatCard from "../../components/StatCard";
import ChartCard from "../../components/ChartCard";
import QuickActions from "../../components/dashboard/QuickActions";
import DataTable from "../../components/DataTable";
import Icon from "../../components/Icon";
import {
  coachingAdminStats,
  coachingAdminTodayClasses,
  coachingAdminStudents,
} from "../../data/coachingAdminData";

export default function CoachingAdminDashboard() {
  return (
    <CoachingAdminLayout>
      <PageHeader
        crumb="COACHING PORTAL / DASHBOARD"
        title="Bright Minds Coaching Institute"
        subtitle="Manage institute students, teachers, running batches, and revenue."
        actionLabel="+ Add Student"
        onAction={() => alert("Add Student modal")}
      />

      <QuickActions
        actions={[
          { label: "+ Add Student", onClick: () => alert("Add Student") },
          { label: "+ Add Teacher", onClick: () => alert("Add Teacher") },
          { label: "+ Create Batch", onClick: () => alert("Create Batch") },
          { label: "+ Collect Fee", onClick: () => alert("Collect Fee") },
        ]}
      />

      {/* Cards */}
      <section className="stats-grid">
        {coachingAdminStats.map((st, idx) => (
          <StatCard key={idx} {...st} />
        ))}
      </section>

      {/* Analytics & Today's Classes */}
      <section className="dashboard-grid">
        <ChartCard
          title="Student Growth & Revenue"
          subtitle="Monthly student admissions and collection"
        />

        {/* Today's Schedule Panel */}
        <article className="panel">
          <div className="panel-head">
            <div>
              <h3>Today's Classes Schedule</h3>
              <p>Active lectures & lab sessions</p>
            </div>
            <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full font-bold">
              4 Classes
            </span>
          </div>

          <div className="space-y-3">
            {coachingAdminTodayClasses.map((cls, idx) => (
              <div
                key={idx}
                className="p-3 border border-gray-100 rounded-xl bg-gray-50/60 flex items-center justify-between gap-3 text-xs"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[#7154db] font-mono">{cls.time}</span>
                    <span className="font-bold text-[#25213a]">{cls.title}</span>
                  </div>
                  <small className="text-gray-500 block mt-0.5">
                    {cls.batch} • {cls.room} • Faculty: {cls.teacher}
                  </small>
                </div>
                <div className="text-right">
                  <span className="font-semibold text-gray-700">{cls.students} Students</span>
                </div>
              </div>
            ))}
          </div>
        </article>
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
    </CoachingAdminLayout>
  );
}

