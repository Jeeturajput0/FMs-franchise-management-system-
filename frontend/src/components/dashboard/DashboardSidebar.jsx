import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { 
  LayoutDashboard, 
  Building2, 
  BookOpen, 
  Users, 
  Wallet, 
  Award, 
  Bell, 
  ShieldCheck, 
  BarChart3, 
  Settings, 
  ChevronRight, 
  ChevronDown, 
  Layers, 
  UserCheck, 
  Calendar, 
  FileText, 
  Clock, 
  Folder, 
  UserPlus, 
  TrendingDown, 
  DollarSign, 
  X, 
  ArrowLeft,
  GraduationCap
} from "lucide-react";

// Map string icon names to Lucide icons
const iconMap = {
  grid: LayoutDashboard,
  building: Building2,
  book: BookOpen,
  users: Users,
  wallet: Wallet,
  award: Award,
  bell: Bell,
  shield: ShieldCheck,
  chart: BarChart3,
  barChart: BarChart3,
  settings: Settings,
  layers: Layers,
  userCheck: UserCheck,
  calendar: Calendar,
  fileText: FileText,
  clock: Clock,
  folder: Folder,
  userPlus: UserPlus,
  trendingDown: TrendingDown,
  dollar: DollarSign,
  user: Users,
};

export default function DashboardSidebar({
  roleTitle = "Super Admin HQ",
  userRole = "super_admin",
  navigation = [],
  mobileOpen = false,
  setMobileOpen,
}) {
  const location = useLocation();
  const navigate = useNavigate();
  const [openSubmenus, setOpenSubmenus] = useState({});

  const toggleSubmenu = (label) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-40 lg:hidden"
          onClick={() => setMobileOpen && setMobileOpen(false)}
        />
      )}

      {/* 280px Fixed Sidebar */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 w-[280px] min-w-[280px] bg-slate-900 text-slate-300 border-r border-slate-800 flex flex-col h-screen transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Brand Header */}
        <div className="h-18 px-5 flex items-center justify-between border-b border-slate-800/80 bg-slate-950/40 shrink-0">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-400 flex items-center justify-center text-slate-950 font-black shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
              <GraduationCap className="w-6 h-6 text-slate-950" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <span className="font-extrabold text-base tracking-tight text-white">AI Scholar</span>
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
              </div>
              <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                LMS & Franchise OS
              </span>
            </div>
          </Link>

          {/* Close for mobile */}
          <button
            type="button"
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 lg:hidden"
            onClick={() => setMobileOpen && setMobileOpen(false)}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Portal Scope Tag */}
        <div className="mx-4 my-3.5 p-3 rounded-xl bg-slate-800/60 border border-slate-700/50 flex items-center gap-3 shrink-0">
          <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 font-bold text-xs">
            HQ
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-xs font-bold text-white truncate">{roleTitle}</div>
            <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Active Session</div>
          </div>
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
        </div>

        {/* Navigation List */}
        <div className="flex-1 overflow-y-auto px-3 py-2 space-y-1 custom-scrollbar">
          <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-500">
            Main Menu
          </div>

          {navigation.map((item) => {
            const IconComponent = iconMap[item.icon] || LayoutDashboard;
            const hasChildren = item.children && item.children.length > 0;
            
            // Check if this item or any of its children are currently active
            const isChildActive = hasChildren && item.children.some((c) => location.pathname === c.path);
            const isDirectActive = location.pathname === item.path;
            const isActive = isDirectActive || isChildActive;
            
            // Auto expand if active child or toggle state
            const isExpanded = openSubmenus[item.label] !== undefined 
              ? openSubmenus[item.label] 
              : isChildActive;

            return (
              <div key={item.label} className="space-y-0.5">
                {hasChildren ? (
                  <button
                    type="button"
                    onClick={() => toggleSubmenu(item.label)}
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all group ${
                      isActive
                        ? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                        : "text-slate-300 hover:bg-slate-800/70 hover:text-white"
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <IconComponent
                        className={`w-4 h-4 shrink-0 transition-colors ${
                          isActive ? "text-amber-400" : "text-slate-400 group-hover:text-slate-200"
                        }`}
                      />
                      <span className="truncate">{item.label}</span>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      {item.badge && (
                        <span className="px-1.5 py-0.5 text-[10px] font-bold rounded-md bg-amber-500/20 text-amber-300">
                          {item.badge}
                        </span>
                      )}
                      {isExpanded ? (
                        <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                      ) : (
                        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                      )}
                    </div>
                  </button>
                ) : (
                  <Link
                    to={item.path}
                    onClick={() => setMobileOpen && setMobileOpen(false)}
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all group ${
                      isDirectActive
                        ? "bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20"
                        : "text-slate-300 hover:bg-slate-800/70 hover:text-white"
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <IconComponent
                        className={`w-4 h-4 shrink-0 ${
                          isDirectActive ? "text-slate-950" : "text-slate-400 group-hover:text-slate-200"
                        }`}
                      />
                      <span className="truncate">{item.label}</span>
                    </div>

                    {item.badge && (
                      <span
                        className={`px-1.5 py-0.5 text-[10px] font-bold rounded-md ${
                          isDirectActive ? "bg-slate-950/20 text-slate-950" : "bg-amber-500/20 text-amber-300"
                        }`}
                      >
                        {item.badge}
                      </span>
                    )}
                  </Link>
                )}

                {/* Submenu Dropdown */}
                {hasChildren && isExpanded && (
                  <div className="ml-4 pl-3 py-1 space-y-1 border-l border-slate-800">
                    {item.children.map((child) => {
                      const isSubActive = location.pathname === child.path;
                      return (
                        <Link
                          key={child.path + child.label}
                          to={child.path}
                          onClick={() => setMobileOpen && setMobileOpen(false)}
                          className={`block px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                            isSubActive
                              ? "text-amber-400 bg-slate-800 font-bold"
                              : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/40"
                          }`}
                        >
                          {child.label}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Sidebar Footer */}
        <div className="p-3 border-t border-slate-800 bg-slate-950/50 shrink-0">
          <Link
            to="/"
            className="flex items-center justify-center gap-2 w-full py-2 px-3 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-300 hover:text-white text-xs font-semibold border border-slate-700/60 transition-all mb-2"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Website</span>
          </Link>
        </div>
      </aside>
    </>
  );
}
