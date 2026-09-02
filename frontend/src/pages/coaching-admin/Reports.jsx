import React from "react";
import PageHeader from "../../components/PageHeader";
import StatCard from "../../components/StatCard";
import ChartCard from "../../components/ChartCard";
import { Download } from "lucide-react";

export default function CoachingReports() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <PageHeader
          crumb="COACHING / REPORTS"
          title="Center Performance & Fee Reports"
          subtitle="Monthly admissions, attendance logs, and fee collection summaries."
        />
        <button
          onClick={() => alert("Downloading Center Report...")}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-amber-500 hover:text-slate-950 text-white text-xs font-bold transition-all shadow-sm self-start sm:self-auto cursor-pointer"
        >
          <Download className="w-4 h-4" />
          <span>Download Summary (PDF)</span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <StatCard label="Total Admissions" value="125" change="+18% this month" icon="users" tone="blue" />
        <StatCard label="Fee Collections" value="₹4.85 L" change="+14.2%" icon="wallet" tone="green" />
        <StatCard label="Avg. Attendance" value="94.2%" icon="userCheck" tone="violet" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard
          title="Monthly Admissions"
          subtitle="New student seat bookings per month"
          bars={[24, 38, 42, 50, 65, 80]}
          labels={["Apr", "May", "Jun", "Jul", "Aug", "Sep"]}
        />
        <ChartCard
          title="Fee Collection vs Pending"
          subtitle="Monthly fee realization rate"
          bars={[80, 85, 90, 88, 92, 95]}
          labels={["Apr", "May", "Jun", "Jul", "Aug", "Sep"]}
        />
      </div>
    </div>
  );
}
