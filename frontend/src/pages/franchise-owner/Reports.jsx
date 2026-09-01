import React from "react";
import PageHeader from "../../components/PageHeader";
import StatCard from "../../components/StatCard";
import { Download, FileSpreadsheet } from "lucide-react";

export default function FranchiseReports() {
  const reports = [
    { title: "Monthly Royalty & Settlement Statement", date: "August 2026", size: "480 KB", format: "PDF Statement" },
    { title: "Student Fee Collection & Tax Invoices Report", date: "Q2 2026", size: "1.1 MB", format: "Excel / CSV" },
    { title: "Batch Completion & Graduation Rate Audit", date: "2026 YTD", size: "650 KB", format: "PDF Report" },
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        crumb="FRANCHISE / REPORTS"
        title="Franchise Performance & Tax Reports"
        subtitle="Audit-ready financial statements, royalty clearances, and enrollment summaries."
      />

      <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xs space-y-3">
        <h3 className="text-sm font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">Download Statements</h3>
        {reports.map((r, i) => (
          <div key={i} className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between gap-3">
            <div>
              <h4 className="text-xs font-bold text-slate-900">{r.title}</h4>
              <p className="text-[11px] text-slate-500 mt-0.5">{r.date} • {r.size}</p>
            </div>
            <button
              onClick={() => alert(`Downloading: ${r.title}`)}
              className="px-3.5 py-1.5 rounded-xl bg-slate-900 text-white hover:bg-amber-500 hover:text-slate-950 text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{r.format}</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
