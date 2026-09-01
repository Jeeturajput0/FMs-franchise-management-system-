import React from "react";
import SuperAdminLayout from "../../layouts/SuperAdminLayout";
import PageHeader from "../../components/PageHeader";
import StatCard from "../../components/StatCard";
import ChartCard from "../../components/ChartCard";
import ActivityList from "../../components/dashboard/ActivityList";
import QuickActions from "../../components/dashboard/QuickActions";
import Icon from "../../components/Icon";
import {
  superAdminStats,
  superAdminActivity,
  superAdminFranchises,
} from "../../data/superAdminData";

export default function SuperAdminDashboard() {
  return (
    <SuperAdminLayout>
      <PageHeader
        crumb="ADMIN PORTAL / OVERVIEW"
        title="Good morning, Arjun"
        subtitle="Here's what's happening across your learning network today."
        actionLabel="+ Add Franchise"
        onAction={() => alert("Add Franchise modal")}
      />

      <QuickActions
        actions={[
          { label: "+ New Franchise", onClick: () => alert("New Franchise") },
          { label: "+ Add Course", onClick: () => alert("Add Course") },
          { label: "User Management", onClick: () => window.location.href = "/admin/admins" },
          { label: "Generate Reports", onClick: () => alert("Reports") },
        ]}
      />

      {/* Top Stats */}
      <section className="stats-grid">
        {superAdminStats.map((st, idx) => (
          <StatCard key={idx} {...st} />
        ))}
      </section>

      {/* Performance & Activity */}
      <section className="dashboard-grid">
        <ChartCard
          title="Learning performance"
          subtitle="Student enrollments & completions"
        />

        <ActivityList items={superAdminActivity} />
      </section>

      {/* Top Franchises Panel */}
      <section className="panel franchise-panel">
        <div className="panel-head">
          <div>
            <h3>Top performing franchises</h3>
            <p>Based on enrollments this month</p>
          </div>
          <button type="button" className="text-button">
            View all <Icon name="arrow" size={15} />
          </button>
        </div>

        {superAdminFranchises.map((fr, index) => (
          <div className="franchise-row" key={fr.id}>
            <span className="rank">{`0${index + 1}`}</span>
            <span className="academy-logo">{fr.name.slice(0, 2).toUpperCase()}</span>
            <div className="academy">
              <b>{fr.name}</b>
              <small>{fr.city} • Owner: {fr.owner}</small>
            </div>
            <div className="enrolled">
              <b>{fr.students}</b>
              <small>enrolled</small>
            </div>
            <div className="progress">
              <span>
                <i style={{ width: fr.progress }} />
              </span>
              <small>{fr.progress} completion</small>
            </div>
            <button type="button" className="row-arrow" aria-label={`Open ${fr.name}`}>
              <Icon name="chevron" size={17} />
            </button>
          </div>
        ))}
      </section>
    </SuperAdminLayout>
  );
}

