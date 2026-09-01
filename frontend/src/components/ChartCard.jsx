import React from "react";
import { BarChart3, ChevronDown } from "lucide-react";

export default function ChartCard({
  title = "Learning Performance",
  subtitle = "Student enrollments & course completions",
  filterText = "Last 6 months",
  bars = [42, 58, 50, 73, 62, 86],
  labels = ["Mar", "Apr", "May", "Jun", "Jul", "Aug"],
}) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-base font-bold text-slate-900">{title}</h3>
          <p className="text-xs text-slate-500 mt-0.5">{subtitle}</p>
        </div>
        <button
          type="button"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 bg-slate-50 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors"
        >
          <span>{filterText}</span>
          <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
        </button>
      </div>

      {/* Modern Bars Graphic */}
      <div className="h-48 w-full flex items-end justify-between gap-3 pt-6 pb-2 px-2">
        {bars.map((height, index) => (
          <div key={index} className="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
            <div className="w-full max-w-[36px] flex items-end justify-center gap-1.5 h-full">
              {/* Primary Bar */}
              <div
                className="w-1/2 bg-amber-500 group-hover:bg-amber-400 rounded-t-md transition-all duration-300 relative"
                style={{ height: `${height}%` }}
              >
                <div className="opacity-0 group-hover:opacity-100 absolute -top-7 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] py-0.5 px-1.5 rounded font-bold pointer-events-none transition-opacity">
                  {height * 10}
                </div>
              </div>
              {/* Secondary Bar */}
              <div
                className="w-1/2 bg-amber-200 group-hover:bg-amber-300 rounded-t-md transition-all duration-300"
                style={{ height: `${Math.max(20, height - 25)}%` }}
              />
            </div>
            <span className="text-[11px] font-semibold text-slate-500 group-hover:text-slate-900">
              {labels[index] || ""}
            </span>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center gap-6 mt-4 pt-4 border-t border-slate-100 text-xs font-medium text-slate-600">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-sm bg-amber-500"></span>
          <span>New Admissions</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-sm bg-amber-200"></span>
          <span>Course Completions</span>
        </div>
      </div>
    </div>
  );
}
