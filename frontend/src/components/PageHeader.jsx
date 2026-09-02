import React from "react";
import { Plus } from "lucide-react";
import Button from "./Button";

export default function PageHeader({
  crumb = "OVERVIEW",
  title,
  subtitle,
  actionLabel,
  onAction,
  actionIcon = "plus",
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-2">
      <div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-extrabold tracking-widest text-amber-600 uppercase bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200/60">
            {crumb}
          </span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1.5">
          {title}
        </h1>
        {subtitle && <p className="text-xs sm:text-sm text-slate-500 mt-1">{subtitle}</p>}
      </div>

      {actionLabel && (
        <button
          type="button"
          onClick={onAction}
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-amber-500 hover:text-slate-950 text-white text-xs font-bold shadow-md shadow-slate-900/10 transition-all duration-200 cursor-pointer self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>{actionLabel}</span>
        </button>
      )}
    </div>
  );
}
