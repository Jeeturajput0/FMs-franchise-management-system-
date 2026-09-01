import React from "react";
import PageHeader from "../../../components/PageHeader";
import StatCard from "../../../components/StatCard";
import ChartCard from "../../../components/ChartCard";
import { Download, TrendingUp, Building2, Users, DollarSign } from "lucide-react";

export default function FranchiseReports() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <PageHeader
          crumb="FRANCHISES / REPORTS"
          title="Franchise Performance & Royalty Reports"
          subtitle="Financial distribution, enrollment targets, and operational audits across regions."
        />
        <button
          onClick={() => alert("Downloading CSV Report...")}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-amber-500 hover:text-slate-950 text-white text-xs font-bold transition-all shadow-sm cursor-pointer self-start sm:self-auto"
        >
          <Download className="w-4 h-4" />
          <span>Export Analytics (CSV)</span>
        </button>
      </div>

      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <StatCard label="Total Centers" value="48" change="+4" icon="building" tone="violet" />
        <StatCard label="Total Network Revenue" value="₹1.42 Cr" change="+14.8%" icon="wallet" tone="green" />
        <StatCard label="Royalty Share (15%)" value="₹21.3 L" change="+18.2%" icon="chart" tone="orange" />
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard
          title="Regional Performance"
          subtitle="South vs North vs West Franchise clusters"
          bars={[65, 80, 45, 90, 75, 88]}
          labels={["South", "North", "West", "East", "Central", "Overseas"]}
        />

        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xs flex flex-col justify-between">
          <div>
            <h3 className="text-base font-bold text-slate-900 mb-1">Top Tier Franchises</h3>
            <p className="text-xs text-slate-500 mb-4">Consistently exceeding enrollment thresholds</p>
          </div>

          <div className="space-y-3">
            {[
              { name: "Quantum Skill Academy", city: "Bangalore", rev: "₹24.8L", rank: "Tier 1 Diamond" },
              { name: "Apex AI Learning Hub", city: "Hyderabad", rev: "₹19.2L", rank: "Tier 1 Platinum" },
              { name: "Zenith Tech Institute", city: "Pune", rev: "₹16.5L", rank: "Tier 2 Gold" },
              { name: "Future Minds Academy", city: "Delhi NCR", rev: "₹15.0L", rank: "Tier 2 Gold" },
            ].map((f, i) => (
              <div key={i} className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-slate-800">{f.name}</h4>
                  <p className="text-[11px] text-slate-500">{f.city} • <span className="text-amber-600 font-semibold">{f.rank}</span></p>
                </div>
                <span className="text-xs font-extrabold text-emerald-600">{f.rev}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

