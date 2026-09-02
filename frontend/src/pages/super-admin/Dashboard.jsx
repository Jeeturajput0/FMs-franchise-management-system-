import React from "react";
import PageHeader from "../../components/PageHeader";
import StatCard from "../../components/StatCard";
import ChartCard from "../../components/ChartCard";
import ActivityList from "../../components/dashboard/ActivityList";
import QuickActions from "../../components/dashboard/QuickActions";
import { 
  superAdminStats, 
  superAdminActivity, 
  superAdminFranchises 
} from "../../data/superAdminData";
import { ChevronRight, ArrowUpRight, Award, Building2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function SuperAdminDashboard() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <PageHeader
        crumb="HQ OVERVIEW"
        title="Good morning, Arjun 👋"
        subtitle="Here's a real-time summary across your 48 learning franchises and AI centers today."
        actionLabel="Add Franchise"
        onAction={() => navigate("/admin/franchises/add")}
      />

      <QuickActions
        actions={[
          { label: "+ Add Franchise", onClick: () => navigate("/admin/franchises/add"), variant: "primary" },
          { label: "+ Create Course", onClick: () => navigate("/admin/courses") },
          { label: "Manage Admins", onClick: () => navigate("/admin/admins") },
          { label: "Fee Collections", onClick: () => navigate("/admin/fees") },
          { label: "Generate Reports", onClick: () => navigate("/admin/reports") },
        ]}
      />

      {/* Top Key Stats */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {superAdminStats.map((items, index) => (
          <StatCard key={index} {...items} />
        ))}
      </section>

      {/* Performance Charts & Activity */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ChartCard
            title="Admissions & Completions Analytics"
            subtitle="Monthly student enrollments vs course certifications across centers"
          />
        </div>

        <div>
          <ActivityList items={superAdminActivity} />
        </div>
      </section>

      {/* Top Franchises Leaderboard */}
      <section className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xs">
        <div className="flex items-center justify-between mb-5 pb-4 border-b border-slate-100">
          <div>
            <h3 className="text-base font-bold text-slate-900">Top Performing Franchises</h3>
            <p className="text-xs text-slate-500 mt-0.5">Ranked by monthly student enrollments & retention</p>
          </div>
          <button
            type="button"
            onClick={() => navigate("/admin/franchises")}
            className="text-xs font-bold text-amber-600 hover:text-amber-700 flex items-center gap-1 cursor-pointer"
          >
            <span>View All Franchises</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="divide-y divide-slate-100">
          {superAdminFranchises.map((items, index) => (
            <div
              key={items.id}
              onClick={() => navigate(`/admin/franchises/${items.id}`)}
              className="py-3.5 flex items-center justify-between gap-4 hover:bg-slate-50/80 px-3 -mx-3 rounded-xl transition-colors cursor-pointer group"
            >
              <div className="flex items-center gap-3 min-w-0">
                <span className="font-mono text-xs font-bold text-slate-400 w-6">
                  {`0${index + 1}`}
                </span>
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-xs shrink-0">
                  {items.name.slice(0, 2).toUpperCase()}
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-amber-600 transition-colors truncate">
                    {items.name}
                  </h4>
                  <p className="text-[11px] text-slate-400 truncate">
                    {items.city} • Owner: <span className="text-slate-600 font-medium">{items.owner}</span>
                  </p>
                </div>
              </div>

              <div className="hidden sm:flex items-center gap-8 text-right">
                <div>
                  <span className="text-xs font-extrabold text-slate-900 block">{items.students}</span>
                  <span className="text-[10px] text-slate-400 uppercase font-semibold">Students</span>
                </div>
                
                <div className="w-28 hidden md:block text-left">
                  <div className="flex justify-between text-[10px] font-bold text-slate-600 mb-1">
                    <span>Target</span>
                    <span>{items.progress}</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-amber-500 rounded-full" style={{ width: items.progress }}></div>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-xs font-bold text-emerald-600 block">{items.revenue}</span>
                  <span className="text-[10px] text-slate-400 uppercase font-semibold">Revenue</span>
                </div>
              </div>

              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 group-hover:text-amber-600 transition-all" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
