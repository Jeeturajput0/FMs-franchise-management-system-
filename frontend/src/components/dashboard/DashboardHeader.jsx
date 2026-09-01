import React from "react";
import Icon from "../Icon";
import NotificationBell from "./NotificationBell";
import UserMenu from "./UserMenu";

export default function DashboardHeader({ onMobileMenuToggle, user }) {
  return (
    <header className="dash-header">
      <button
        type="button"
        className="mobile-menu"
        onClick={onMobileMenuToggle}
        aria-label="Open menu"
      >
        <Icon name="menu" />
      </button>

      <div className="mobile-logo">
        <span className="brand-mark">A</span>
        AI<span>Scholars</span>
      </div>

      <div className="header-actions">
        <button type="button" className="head-icon" aria-label="Search">
          <Icon name="search" />
        </button>

        <NotificationBell />

        <UserMenu user={user} />
      </div>
    </header>
  );
}

