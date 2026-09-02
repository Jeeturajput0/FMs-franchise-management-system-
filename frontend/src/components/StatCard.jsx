import React from "react";
import { TrendingUp, MoreVertical } from "lucide-react";
import Icon from "./Icon";

export default function StatCard({ label, value, change, icon = "grid", tone = "violet" }) {
  const toneMap = {
    violet: { bg: "bg-indigo-50", text: "text-indigo-600", border: "border-indigo-100" },
    blue: { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-100" },
    orange: { bg: "bg-amber-50", text: "text-amber-600", border: "border-amber-100" },
    green: { bg: "bg-emerald-50", text: "text-emerald-600", border: "border-emerald-100" },
  };

  const style = toneMap[tone] || toneMap.violet;

  return (
    <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-200 relative group flex flex-col justify-between">
      <div className="flex items-start justify-between mb-3">
        <div className={`w-11 h-11 rounded-xl ${style.bg} ${style.text} flex items-center justify-center font-bold`}>
          <Icon name={icon} size={22} />
        </div>

        <button type="button" aria-label="More options" className="text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-100 transition-colors">
          <MoreVertical className="w-4 h-4" />
        </button>
      </div>

      <div>
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">{label}</p>
        <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">{value}</h3>
      </div>

      {change && (
        <div className="mt-3 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs">
          <span className="flex items-center text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.5 rounded">
            <TrendingUp className="w-3.5 h-3.5 mr-0.5" />
            {change}
          </span>
          <span className="text-slate-400 font-medium">vs last month</span>
        </div>
      )}
    </div>
  );
}
