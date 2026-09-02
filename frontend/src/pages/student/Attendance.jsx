import React from "react";
import PageHeader from "../../components/PageHeader";
import StatCard from "../../components/StatCard";

export default function StudentAttendance() {
  return (
    <div className="space-y-6 max-w-4xl">
      <PageHeader
        crumb="STUDENT / ATTENDANCE"
        title="My Classroom & Lecture Attendance"
        subtitle="Monitor your lecture attendance compliance to maintain certification eligibility (Min. 80% required)."
      />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <StatCard label="My Attendance Rate" value="94.6%" change="Eligible for Exam" icon="userCheck" tone="green" />
        <StatCard label="Total Lectures Attended" value="35 / 37" icon="calendar" tone="violet" />
        <StatCard label="Approved Leaves" value="2 Days" icon="clock" tone="orange" />
      </div>

      <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xs">
        <h3 className="font-bold text-slate-900 text-sm mb-3">Attendance Criteria Compliance</h3>
        <p className="text-xs text-slate-500 leading-relaxed">
          Great job! You have satisfied the 80% attendance requirement for <strong>Python for Artificial Intelligence & ML</strong>. You are cleared for the upcoming final certification exam.
        </p>
      </div>
    </div>
  );
}
