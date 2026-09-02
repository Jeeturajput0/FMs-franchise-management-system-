import React from "react";
import PageHeader from "../../components/PageHeader";
import StatCard from "../../components/StatCard";

export default function FranchiseAttendance() {
  return (
    <div className="space-y-6 max-w-4xl">
      <PageHeader
        crumb="FRANCHISE / ATTENDANCE"
        title="Center Daily Attendance Monitor"
        subtitle="Review student and faculty biometric attendance compliance for your franchise."
      />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <StatCard label="Overall Center Attendance" value="95.4%" change="+1.8%" icon="userCheck" tone="green" />
        <StatCard label="Today Active Scholars" value="78 Students" icon="users" tone="blue" />
        <StatCard label="Faculty Punctuality" value="100%" icon="calendar" tone="violet" />
      </div>

      <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xs">
        <h3 className="font-bold text-slate-900 text-sm mb-3">Attendance Audit Status</h3>
        <p className="text-xs text-slate-500 leading-relaxed">
          Your franchise center currently meets all AI Scholars HQ compliance thresholds for attendance reporting.
        </p>
      </div>
    </div>
  );
}
