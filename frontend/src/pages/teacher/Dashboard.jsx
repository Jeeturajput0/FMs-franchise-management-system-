import React from "react";
import PageHeader from "../../components/PageHeader";
import StatCard from "../../components/StatCard";
import QuickActions from "../../components/dashboard/QuickActions";
import ProgressBar from "../../components/ProgressBar";
import {
  teacherStats,
  teacherTodaySchedule,
  teacherAssignments,
} from "../../data/teacherData";

export default function TeacherDashboard() {
  return (
    <div className="space-y-6">
      <PageHeader
        crumb="FACULTY PORTAL / DASHBOARD"
        title="Welcome back, Dr. Priya 👋"
        subtitle="Here is your teaching schedule and student assignments for today."
        actionLabel="Mark Attendance"
        actionIcon="check"
        onAction={() => alert("Mark Attendance modal")}
      />

      <QuickActions
        actions={[
          { label: "Mark Attendance", onClick: () => alert("Mark Attendance"), variant: "primary" },
          { label: "Create Assignment", onClick: () => alert("Create Assignment") },
          { label: "Schedule Test", onClick: () => alert("Schedule Test") },
          { label: "Upload Material", onClick: () => alert("Upload Material") },
        ]}
      />

      {/* Teacher Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {teacherStats.map((st, idx) => (
          <StatCard key={idx} {...st} />
        ))}
      </section>

      {/* Schedule & Pending Reviews */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Today's Schedule */}
        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
            <div>
              <h3 className="text-sm font-bold text-slate-900">Today's Lecture Schedule</h3>
              <p className="text-xs text-slate-500">Your live lectures & lab sessions</p>
            </div>
            <span className="text-[10px] bg-amber-100 text-amber-800 px-2.5 py-0.5 rounded-full font-bold">
              4 Classes Today
            </span>
          </div>

          <div className="space-y-2.5">
            {teacherTodaySchedule.map((cls, idx) => (
              <div
                key={idx}
                className="p-3 border border-slate-100 rounded-xl bg-slate-50 flex items-center justify-between gap-3 text-xs"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-amber-600 font-mono text-xs">{cls.time}</span>
                    <span className="font-bold text-slate-800">{cls.course}</span>
                  </div>
                  <small className="text-slate-500 block mt-1">
                    {cls.batch} • {cls.room} • {cls.students} Students
                  </small>
                </div>

                <span
                  className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                    cls.status === "Completed"
                      ? "bg-emerald-100 text-emerald-800"
                      : "bg-amber-100 text-amber-800"
                  }`}
                >
                  {cls.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Pending Reviews */}
        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
            <div>
              <h3 className="text-sm font-bold text-slate-900">Pending Submissions</h3>
              <p className="text-xs text-slate-500">Assignments awaiting grading</p>
            </div>
            <button type="button" className="text-xs text-amber-600 font-bold hover:underline">
              View all
            </button>
          </div>

          <div className="space-y-2.5">
            {teacherAssignments.map((asn, idx) => (
              <div
                key={idx}
                className="p-3 border border-slate-100 rounded-xl bg-slate-50 flex flex-col gap-1 text-xs"
              >
                <div className="flex justify-between items-start">
                  <b className="text-slate-900">{asn.title}</b>
                  <span className="text-[10px] bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded-full">
                    {asn.status}
                  </span>
                </div>
                <small className="text-slate-500">
                  {asn.course} • {asn.batch}
                </small>
                <div className="mt-1 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Submissions: {asn.submitted}/{asn.total}</span>
                  <span className="text-amber-600 font-bold">Due: {asn.dueDate}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
