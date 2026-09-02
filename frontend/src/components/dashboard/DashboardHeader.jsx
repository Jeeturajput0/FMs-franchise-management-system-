import React from "react";
import { Search, Menu, Bell, Sparkles } from "lucide-react";
import NotificationBell from "./NotificationBell";
import UserMenu from "./UserMenu";

export default function DashboardHeader({ onMobileMenuToggle, user, title, breadcrumb }) {
  return (
    <header className="sticky top-0 z-30 h-18 bg-white/90 backdrop-blur-md border-b border-slate-200/80 px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4 transition-all">
      {/* Left: Mobile Toggle & Breadcrumbs */}
      <div className="flex items-center gap-3 min-w-0">
        <button
          type="button"
          onClick={onMobileMenuToggle}
          className="p-2 -ml-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 lg:hidden"
          aria-label="Open menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div className="hidden sm:flex flex-col min-w-0">
          <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
            <span>AI Scholar</span>
            <span>/</span>
            <span className="text-amber-600 font-bold">{breadcrumb || "Admin Portal"}</span>
          </div>
          <h1 className="text-sm font-bold text-slate-900 truncate">
            {title || "Dashboard Overview"}
          </h1>
        </div>
      </div>

      {/* Center: Search Bar */}
      <div className="flex-1 max-w-md hidden md:block">
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search franchises, students, courses, receipts..."
            className="w-full pl-9 pr-4 py-2 bg-slate-100/80 hover:bg-slate-100 focus:bg-white text-xs text-slate-800 placeholder-slate-400 rounded-xl border border-slate-200/60 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all"
          />
        </div>
      </div>

      {/* Right: Actions, Notifications & Profile */}
      <div className="flex items-center gap-2 sm:gap-3 ml-auto shrink-0">
        <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 border border-amber-200/60 text-amber-800 text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-amber-600 animate-pulse" />
          <span>v2.4 Live</span>
        </div>

        <NotificationBell />

        <div className="h-6 w-px bg-slate-200 mx-1" />

        {/* Profile Avatar & Menu */}
        <UserMenu user={user} />
      </div>
    </header>
  );
}
