import React from "react";
import PageHeader from "../../../components/PageHeader";
import StatCard from "../../../components/StatCard";
import ChartCard from "../../../components/ChartCard";
import { Download, FileSpreadsheet, TrendingUp, BarChart2 } from "lucide-react";

export default function ReportsList() {
  const exportReports = [
    { title: "Consolidated Revenue & Fee Collection Ledger", desc: "All tuition, registration, and certificate fees collected across centers", size: "1.2 MB", format: "Excel / CSV" },
    { title: "Student Retention & Course Completion Audit", desc: "Dropout rates, pass percentages, and certification success ratios", size: "840 KB", format: "PDF Report" },
    { title: "Franchise Royalty & Growth Ledger", desc: "Breakdown of 15% royalty payouts, active centers and expansion goals", size: "620 KB", format: "Excel / CSV" },
    { title: "Faculty Performance & Course Feedback Report", desc: "Student evaluations, attendance compliance, and batch completion rates", size: "950 KB", format: "PDF Report" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <PageHeader
          crumb="REPORTS / ANALYTICS"
          title="Executive Analytics & Data Reports"
          subtitle="Generate audit-ready spreadsheets, revenue breakdowns, and performance analytics."
        />
        <button
          onClick={() => alert("Exporting all master reports...")}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-amber-500 hover:text-slate-950 text-white text-xs font-bold transition-all shadow-sm cursor-pointer self-start sm:self-auto"
        >
          <Download className="w-4 h-4" />
          <span>Export Master Dataset (ZIP)</span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <StatCard label="Total Students" value="12,450" change="+8.2%" icon="users" tone="blue" />
        <StatCard label="Gross Revenue" value="₹1.42 Cr" change="+14.8%" icon="wallet" tone="green" />
        <StatCard label="Active Franchises" value="48" change="+4" icon="building" tone="violet" />
        <StatCard label="Certifications Issued" value="1,890" change="+22%" icon="award" tone="orange" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard
          title="Revenue Growth By Quarter"
          subtitle="Platform royalty vs franchise direct earnings"
          bars={[50, 68, 74, 85, 92, 98]}
          labels={["Q1 25", "Q2 25", "Q3 25", "Q4 25", "Q1 26", "Q2 26"]}
        />

        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xs flex flex-col justify-between">
          <div>
            <h3 className="text-base font-bold text-slate-900 mb-1">Downloadable Summary Reports</h3>
            <p className="text-xs text-slate-500 mb-4">Click to export real-time generated statements</p>
          </div>

          <div className="space-y-3">
            {exportReports.map((rep, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between gap-3 hover:bg-amber-50/30 transition-colors">
                <div className="min-w-0 flex-1">
                  <h4 className="text-xs font-bold text-slate-900 truncate">{rep.title}</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">{rep.desc}</p>
                </div>
                <button
                  onClick={() => alert(`Downloading: ${rep.title}`)}
                  className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:bg-slate-900 hover:text-white text-slate-700 text-xs font-bold transition-colors flex items-center gap-1.5 shrink-0"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{rep.format}</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

