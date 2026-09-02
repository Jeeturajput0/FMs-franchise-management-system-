import React from "react";
import { Plus, ArrowUpRight } from "lucide-react";

export default function QuickActions({ actions = [] }) {
  return (
    <div className="bg-white border border-slate-200/80 rounded-2xl p-4 mb-6 shadow-xs flex flex-wrap items-center justify-between gap-3">
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-amber-500"></span>
        <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
          Quick Actions
        </span>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        {actions.map((act, index) => (
          <button
            key={index}
            type="button"
            onClick={act.onClick}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all duration-150 cursor-pointer flex items-center gap-1.5 ${
              act.variant === "primary"
                ? "bg-amber-500 hover:bg-amber-600 text-slate-950 shadow-sm"
                : "bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 border border-slate-200/60"
            }`}
          >
            <span>{act.label}</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
          </button>
        ))}
      </div>
    </div>
  );
}
