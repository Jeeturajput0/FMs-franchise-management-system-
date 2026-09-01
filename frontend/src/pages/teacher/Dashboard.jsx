import React from "react";
import TeacherLayout from "../../layouts/TeacherLayout";
import PageHeader from "../../components/PageHeader";
import StatCard from "../../components/StatCard";
import QuickActions from "../../components/dashboard/QuickActions";
import ProgressBar from "../../components/ProgressBar";
import Icon from "../../components/Icon";
import {
  teacherStats,
  teacherTodaySchedule,
  teacherAssignments,
} from "../../data/teacherData";

export default function TeacherDashboard() {
  return (
    <TeacherLayout>
      <PageHeader
        crumb="FACULTY PORTAL / DASHBOARD"
        title="Welcome back, Prof. Rajesh 👋"
        subtitle="Here is your teaching schedule and student assignments for today."
        actionLabel="Mark Attendance"
        actionIcon="check"
        onAction={() => alert("Mark Attendance modal")}
      />

      <QuickActions
        actions={[
          { label: "Mark Attendance", icon: "check", onClick: () => alert("Mark Attendance") },
          { label: "Create Assignment", icon: "plus", onClick: () => alert("Create Assignment") },
          { label: "Create Test", icon: "clock", onClick: () => alert("Create Test") },
          { label: "Upload Material", icon: "folder", onClick: () => alert("Upload Material") },
          { label: "Post Announcement", icon: "bell", onClick: () => alert("Post Announcement") },
        ]}
      />

      {/* Teacher Cards */}
      <section className="stats-grid">
        {teacherStats.map((st, idx) => (
          <StatCard key={idx} {...st} />
        ))}
      </section>

      {/* Schedule & Pending Reviews */}
      <section className="dashboard-grid">
        {/* Today's Schedule */}
        <article className="panel">
          <div className="panel-head">
            <div>
              <h3>Today's Teaching Schedule</h3>
              <p>Your live lectures & lab sessions</p>
            </div>
            <span className="text-xs bg-[#f0ebff] text-[#684aca] px-2 py-0.5 rounded-full font-bold">
              4 Classes Today
            </span>
          </div>

          <div className="space-y-3">
            {teacherTodaySchedule.map((cls, idx) => (
              <div
                key={idx}
                className="p-3.5 border border-gray-100 rounded-xl bg-gray-50/70 flex items-center justify-between gap-3 text-xs"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[#7658df] font-mono text-xs">{cls.time}</span>
                    <span className="font-bold text-[#25213a]">{cls.course}</span>
                  </div>
                  <small className="text-gray-500 block mt-1">
                    {cls.batch} • {cls.room} • {cls.students} Enrolled Students
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
        </article>

        {/* Pending Reviews */}
        <article className="panel">
          <div className="panel-head">
            <div>
              <h3>Pending Submissions</h3>
              <p>Assignments awaiting your grading</p>
            </div>
            <button type="button" className="text-button">
              View all
            </button>
          </div>

          <div className="space-y-3">
            {teacherAssignments.map((asn, idx) => (
              <div
                key={idx}
                className="p-3 border border-gray-100 rounded-xl bg-white flex flex-col gap-1 text-xs"
              >
                <div className="flex justify-between items-start">
                  <b className="text-[#25213a]">{asn.title}</b>
                  <span className="text-[10px] bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded-full">
                    {asn.status}
                  </span>
                </div>
                <small className="text-gray-500">
                  {asn.course} • {asn.batch}
                </small>
                <div className="mt-1 flex items-center justify-between text-[11px] text-gray-400">
                  <span>Submissions: {asn.submitted}/{asn.total}</span>
                  <span className="text-[#7658df] font-bold">Due: {asn.dueDate}</span>
                </div>
              </div>
            ))}
          </div>
        </article>
      </section>

      {/* Course Completion Progress */}
      <div className="panel">
        <h3 className="font-bold text-[#25213a] text-base mb-4">My Batches Syllabus Progress</h3>
        <div className="space-y-4">
          <div>
            <ProgressBar label="Python Basics - Batch A" value={82} />
          </div>
          <div>
            <ProgressBar label="AI Fundamentals - Batch B" value={65} />
          </div>
          <div>
            <ProgressBar label="Machine Learning - Batch C" value={48} />
          </div>
        </div>
      </div>
    </TeacherLayout>
  );
}

