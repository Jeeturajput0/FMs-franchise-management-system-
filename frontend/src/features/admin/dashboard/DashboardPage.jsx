
import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "../../../../src/components/Icon";

// ========================================
// SIDEBAR NAVIGATION
// ========================================

const navigation = [
  ["Overview", "grid"],

  [
    "Franchises",
    "building",
    ["Add", "View", "Edit", "Reports"],
  ],

  [
    "Courses",
    "book",
    [
      "Courses",
      "Modules",
      "Topics",
      "Materials",
      "Assignments",
      "Tests",
    ],
  ],

  ["Students", "users"],

  [
    "Fees",
    "wallet",
    ["Registration", "Course", "Certificate"],
  ],

  ["Certificates", "award"],

  ["Notifications", "bell"],

  ["Admins", "shield"],

  ["Reports", "chart"],
];

// ========================================
// DASHBOARD STATISTICS
// ========================================

const stats = [
  [
    "Total franchises",
    "28",
    "+3 this month",
    "building",
    "violet",
  ],
  [
    "Active students",
    "12,480",
    "+8.2% this month",
    "users",
    "blue",
  ],
  [
    "Revenue collected",
    "₹ 24.8L",
    "+12.4% this month",
    "wallet",
    "orange",
  ],
  [
    "Certificates issued",
    "4,296",
    "+18.1% this month",
    "award",
    "green",
  ],
];

// ========================================
// RECENT ACTIVITY
// ========================================

const activity = [
  [
    "SK",
    "Sanjay Kumar",
    "New student enrolled",
    "2 min ago",
    "purple",
  ],
  [
    "RM",
    "Riya Mehta",
    "Course completed",
    "18 min ago",
    "blue",
  ],
  [
    "AP",
    "Apex Academy",
    "Submitted fee payment",
    "1 hr ago",
    "orange",
  ],
  [
    "JL",
    "Jatin Lal",
    "Certificate issued",
    "3 hr ago",
    "green",
  ],
];

// ========================================
// TOP FRANCHISES
// ========================================

const franchises = [
  [
    "01",
    "TechVeda Academy",
    "Bengaluru",
    "1,842",
    "92%",
  ],
  [
    "02",
    "NextGen Learning Hub",
    "Pune",
    "1,604",
    "88%",
  ],
  [
    "03",
    "Bright Minds Institute",
    "Hyderabad",
    "1,388",
    "84%",
  ],
];

// ========================================
// OVERVIEW
// ========================================

function Overview() {
  return (
    <>
      {/* ================================
          STATISTICS
      ================================= */}

      <section className="stats-grid">
        {stats.map(
          ([label, value, change, icon, tone]) => (
            <article
              className="stat-card"
              key={label}
            >
              <div
                className={`stat-icon ${tone}`}
              >
                <Icon name={icon} />
              </div>

              <button
                type="button"
                aria-label="More options"
              >
                <Icon
                  name="more"
                  size={18}
                />
              </button>

              <p>{label}</p>

              <h2>{value}</h2>

              <small>
                <b>↑</b> {change}
              </small>
            </article>
          )
        )}
      </section>

      {/* ================================
          PERFORMANCE + ACTIVITY
      ================================= */}

      <section className="dashboard-grid">

        {/* PERFORMANCE */}

        <article className="panel performance">
          <div className="panel-head">
            <div>
              <h3>
                Learning performance
              </h3>

              <p>
                Student enrollments &
                completions
              </p>
            </div>

            <button
              type="button"
              className="select-btn"
            >
              Last 6 months⌄
            </button>
          </div>

          <div className="chart">
            <div className="y-axis">
              <span>800</span>
              <span>600</span>
              <span>400</span>
              <span>200</span>
              <span>0</span>
            </div>

            <div className="chart-bars">
              {[42, 58, 50, 73, 62, 86].map(
                (height, index) => (
                  <div
                    className="bar-group"
                    key={index}
                  >
                    <div
                      className="bar"
                      style={{
                        height: `${height}%`,
                      }}
                    />

                    <div
                      className="bar light"
                      style={{
                        height: `${Math.max(
                          18,
                          height - 27
                        )}%`,
                      }}
                    />

                    <span>
                      {
                        [
                          "Mar",
                          "Apr",
                          "May",
                          "Jun",
                          "Jul",
                          "Aug",
                        ][index]
                      }
                    </span>
                  </div>
                )
              )}
            </div>
          </div>

          <div className="legend">
            <span>
              <i className="dot purple" />
              Enrollments
            </span>

            <span>
              <i className="dot lavender" />
              Completions
            </span>
          </div>
        </article>

        {/* RECENT ACTIVITY */}

        <article className="panel activity">
          <div className="panel-head">
            <div>
              <h3>Recent activity</h3>

              <p>
                Latest updates from your
                network
              </p>
            </div>

            <button
              type="button"
              className="text-button"
            >
              View all
            </button>
          </div>

          {activity.map(
            ([
              initials,
              person,
              detail,
              time,
              tone,
            ]) => (
              <div
                className="activity-row"
                key={person}
              >
                <span
                  className={`activity-avatar ${tone}`}
                >
                  {initials}
                </span>

                <div>
                  <b>{person}</b>
                  <p>{detail}</p>
                </div>

                <small>{time}</small>
              </div>
            )
          )}
        </article>
      </section>

      {/* ================================
          TOP PERFORMING FRANCHISES
      ================================= */}

      <section className="panel franchise-panel">
        <div className="panel-head">
          <div>
            <h3>
              Top performing franchises
            </h3>

            <p>
              Based on enrollments this
              month
            </p>
          </div>

          <button
            type="button"
            className="text-button"
          >
            View all
            <Icon
              name="arrow"
              size={15}
            />
          </button>
        </div>

        {franchises.map(
          ([
            rank,
            academy,
            city,
            enrolled,
            progress,
          ]) => (
            <div
              className="franchise-row"
              key={academy}
            >
              <span className="rank">
                {rank}
              </span>

              <span className="academy-logo">
                {academy
                  .slice(0, 2)
                  .toUpperCase()}
              </span>

              <div className="academy">
                <b>{academy}</b>
                <small>{city}</small>
              </div>

              <div className="enrolled">
                <b>{enrolled}</b>
                <small>enrolled</small>
              </div>

              <div className="progress">
                <span>
                  <i
                    style={{
                      width: progress,
                    }}
                  />
                </span>

                <small>
                  {progress} completion
                </small>
              </div>

              <button
                type="button"
                className="row-arrow"
                aria-label={`Open ${academy}`}
              >
                <Icon
                  name="chevron"
                  size={17}
                />
              </button>
            </div>
          )
        )}
      </section>
    </>
  );
}

// ========================================
// FEATURE SCREEN
// ========================================

function FeatureScreen({ title }) {
  // Icon based on current admin section
  const featureIcons = {
    Add: "building",
    View: "building",
    Edit: "building",
    Reports: "chart",

    Courses: "book",
    Modules: "book",
    Topics: "book",
    Materials: "book",
    Assignments: "book",
    Tests: "book",

    Registration: "wallet",
    Course: "wallet",
    Certificate: "award",

    Students: "users",
    Certificates: "award",
    Notifications: "bell",
    Admins: "shield",
  };

  const iconName =
    featureIcons[title] || "grid";

  return (
    <section className="empty-page">
      <div className="empty-icon">
        <Icon
          name={iconName}
          size={28}
        />
      </div>

      <h2>{title}</h2>

      <p>
        This frontend screen is ready
        for {title.toLowerCase()}{" "}
        management.
      </p>

      <button
        type="button"
        className="primary-btn"
      >
        + Add new
      </button>
    </section>
  );
}

// ========================================
// MAIN DASHBOARD
// ========================================

export default function DashboardPage() {
  const [active, setActive] =
    useState("Overview");

  const [expanded, setExpanded] =
    useState("Franchises");

  const [mobileOpen, setMobileOpen] =
    useState(false);

  // ======================================
  // SELECT NAVIGATION
  // ======================================

  const select = (item) => {
    setActive(item);
    setMobileOpen(false);
  };

  // ======================================
  // RENDER
  // ======================================

  return (
    <div className="dashboard">

      {/* ==================================
          SIDEBAR
      =================================== */}

      <aside
        className={`sidebar ${
          mobileOpen ? "open" : ""
        }`}
      >

        {/* BRAND */}

        <div className="side-brand">
          <span className="brand-mark">
            A
          </span>

          <span>
            AI
            <span>Scholars</span>
          </span>

          <button
            type="button"
            className="mobile-close"
            onClick={() =>
              setMobileOpen(false)
            }
            aria-label="Close menu"
          >
            <Icon name="close" />
          </button>
        </div>

        {/* WORKSPACE */}

        <div className="workspace">
          <span className="workspace-icon">
            AS
          </span>

          <div>
            <b>AI Scholars</b>
            <small>
              Admin workspace
            </small>
          </div>

          <Icon
            name="chevron"
            size={15}
          />
        </div>

        {/* NAVIGATION */}

        <nav className="side-nav">
          {navigation.map(
            ([
              label,
              icon,
              children,
            ]) => (
              <div key={label}>

                <button
                  type="button"
                  className={`nav-item ${
                    active === label
                      ? "active"
                      : ""
                  }`}
                  onClick={() =>
                    children
                      ? setExpanded(
                          expanded === label
                            ? ""
                            : label
                        )
                      : select(label)
                  }
                >
                  <Icon name={icon} />

                  <span>{label}</span>

                  {/* Notification badge */}

                  {label ===
                    "Notifications" && (
                    <i>4</i>
                  )}

                  {/* Expand icon */}

                  {children && (
                    <Icon
                      name="chevron"
                      size={16}
                    />
                  )}
                </button>

                {/* SUB NAV */}

                {children &&
                  expanded === label && (
                    <div className="subnav">
                      {children.map(
                        (child) => (
                          <button
                            type="button"
                            className={
                              active === child
                                ? "subactive"
                                : ""
                            }
                            onClick={() =>
                              select(child)
                            }
                            key={child}
                          >
                            {child}
                          </button>
                        )
                      )}
                    </div>
                  )}
              </div>
            )
          )}
        </nav>

        {/* SIDEBAR FOOTER */}

        <div className="side-footer">

          <Link to="/">
            ← Back to website
          </Link>

          <div className="profile">
            <span>AK</span>

            <div>
              <b>Arjun Kumar</b>
              <small>
                Super Admin
              </small>
            </div>

            <Icon
              name="more"
              size={18}
            />
          </div>
        </div>
      </aside>

      {/* ==================================
          MAIN
      =================================== */}

      <main className="dashboard-main">

        {/* HEADER */}

        <header className="dash-header">

          {/* MOBILE MENU */}

          <button
            type="button"
            className="mobile-menu"
            onClick={() =>
              setMobileOpen(true)
            }
            aria-label="Open menu"
          >
            <Icon name="menu" />
          </button>

          {/* MOBILE LOGO */}

          <div className="mobile-logo">
            <span className="brand-mark">
              A
            </span>

            AI
            <span>Scholars</span>
          </div>

          {/* HEADER ACTIONS */}

          <div className="header-actions">

            {/* SEARCH */}

            <button
              type="button"
              className="head-icon"
              aria-label="Search"
            >
              <Icon name="search" />
            </button>

            {/* NOTIFICATIONS */}

            <button
              type="button"
              className="head-icon notification"
              aria-label="Notifications"
            >
              <Icon name="bell" />
              <span />
            </button>

            {/* USER */}

            <div className="header-avatar">
              AK
            </div>
          </div>
        </header>

        {/* CONTENT */}

        <div className="content">

          {/* PAGE HEADING */}

          <div className="page-heading">
            <div>

              <span className="crumb">
                ADMIN PORTAL /{" "}
                {active.toUpperCase()}
              </span>

              <h1>
                {active === "Overview"
                  ? "Good morning, Arjun"
                  : active}
              </h1>

              <p>
                {active === "Overview"
                  ? "Here's what's happening across your learning network today."
                  : "Manage and monitor your AI Scholars workspace."}
              </p>
            </div>

            {/* ADD FRANCHISE */}

            {active === "Overview" && (
              <button
                type="button"
                className="primary-btn"
              >
                + Add franchise
              </button>
            )}
          </div>

          {/* PAGE CONTENT */}

          {active === "Overview" ? (
            <Overview />
          ) : (
            <FeatureScreen
              title={active}
            />
          )}
        </div>
      </main>
    </div>
  );
}
