import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Icon from "../Icon";

export default function DashboardSidebar({
  roleTitle = "Admin Workspace",
  userRole = "super_admin",
  navigation = [],
  mobileOpen = false,
  setMobileOpen,
}) {
  const location = useLocation();
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState("");

  const handleNavClick = (item) => {
    if (item.children) {
      setExpanded(expanded === item.label ? "" : item.label);
    } else if (item.path) {
      navigate(item.path);
      if (setMobileOpen) setMobileOpen(false);
    }
  };

  return (
    <aside className={`sidebar ${mobileOpen ? "open" : ""}`}>
      <div className="side-brand flex items-center justify-between">
        <div className="brand flex items-center gap-2 font-bold text-lg">
          <span className="brand-mark">A</span>
          <span>
            AI<span>Scholars</span>
          </span>
        </div>

        <button
          type="button"
          className="mobile-close"
          onClick={() => setMobileOpen && setMobileOpen(false)}
          aria-label="Close menu"
        >
          <Icon name="close" />
        </button>
      </div>

      <div className="workspace">
        <span className="workspace-icon">AIS</span>
        <div>
          <b>AI Scholars</b>
          <small>{roleTitle}</small>
        </div>
        <Icon name="chevron" size={15} />
      </div>

      <nav className="side-nav">
        {navigation.map((item) => {
          const isActive =
            location.pathname === item.path ||
            (item.children && item.children.some((c) => location.pathname === c.path));

          const isExpanded = expanded === item.label || isActive;

          return (
            <div key={item.label}>
              <button
                type="button"
                className={`nav-item ${isActive ? "active" : ""}`}
                onClick={() => handleNavClick(item)}
              >
                <Icon name={item.icon || "grid"} size={18} />
                <span>{item.label}</span>

                {item.badge && <i>{item.badge}</i>}

                {item.children && (
                  <Icon
                    name="chevron"
                    size={16}
                    className={`transition-transform duration-200 ${
                      isExpanded ? "rotate-90" : ""
                    }`}
                  />
                )}
              </button>

              {item.children && isExpanded && (
                <div className="subnav">
                  {item.children.map((child) => (
                    <button
                      key={child.label}
                      type="button"
                      className={location.pathname === child.path ? "subactive" : ""}
                      onClick={() => {
                        navigate(child.path);
                        if (setMobileOpen) setMobileOpen(false);
                      }}
                    >
                      {child.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      <div className="side-footer">
        <Link to="/">← Back to website</Link>

        <div className="profile">
          <span>AIS</span>
          <div>
            <b>{roleTitle}</b>
            <small>{userRole.replace("_", " ").toUpperCase()}</small>
          </div>
          <Icon name="more" size={18} />
        </div>
      </div>
    </aside>
  );
}
