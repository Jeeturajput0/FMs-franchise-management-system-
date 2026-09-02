import React from "react";
import { ArrowRight, Clock } from "lucide-react";

export default function ActivityList({ title = "Recent activity", items = [] }) {
  const toneStyles = {
    purple: "bg-indigo-100 text-indigo-700",
    blue: "bg-blue-100 text-blue-700",
    orange: "bg-amber-100 text-amber-700",
    green: "bg-emerald-100 text-emerald-700",
  };

  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-base font-bold text-slate-900">{title}</h3>
          <p className="text-xs text-slate-500 mt-0.5">Latest updates from your network</p>
        </div>
        <button type="button" className="text-xs font-bold text-amber-600 hover:text-amber-700 flex items-center gap-1">
          <span>View all</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="divide-y divide-slate-100 flex-1">
        {items.map((item, idx) => (
          <div className="py-3 flex items-start gap-3 first:pt-1 last:pb-0" key={idx}>
            <div className={`w-9 h-9 rounded-xl ${toneStyles[item.tone] || toneStyles.purple} flex items-center justify-center font-bold text-xs shrink-0`}>
              {item.initials}
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-xs font-bold text-slate-800 truncate">{item.person}</p>
              <p className="text-xs text-slate-500 leading-snug mt-0.5">{item.detail}</p>
            </div>

            <div className="flex items-center gap-1 text-[10px] font-semibold text-slate-400 shrink-0">
              <Clock className="w-3 h-3" />
              <span>{item.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
