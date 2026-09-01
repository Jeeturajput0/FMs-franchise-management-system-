
import React from "react";

const icons = {
  // =========================
  // DASHBOARD / OVERVIEW
  // =========================
  grid: (
    <>
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </>
  ),

  // =========================
  // FRANCHISES
  // =========================
  building: (
    <>
      <path d="M4 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" />
      <path d="M2 21h20" />
      <path d="M8 7h4" />
      <path d="M8 11h4" />
      <path d="M8 15h4" />
      <path d="M18 9h.01" />
      <path d="M18 13h.01" />
    </>
  ),

  // =========================
  // COURSES
  // =========================
  book: (
    <>
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
    </>
  ),

  // =========================
  // STUDENTS
  // =========================
  users: (
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </>
  ),

  // =========================
  // FEES
  // =========================
  wallet: (
    <>
      <path d="M20 7V6a2 2 0 0 0-2-2H5a3 3 0 0 0 0 6h15v8a2 2 0 0 1-2 2H5a3 3 0 0 1-3-3V7" />
      <path d="M16 14h2" />
    </>
  ),

  // =========================
  // CERTIFICATES
  // =========================
  award: (
    <>
      <circle cx="12" cy="8" r="6" />
      <path d="M15.5 13.5 17 22l-5-3-5 3 1.5-8.5" />
    </>
  ),

  // =========================
  // NOTIFICATIONS
  // =========================
  bell: (
    <>
      <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
      <path d="M9 21h6" />
    </>
  ),

  // =========================
  // ADMINS
  // =========================
  shield: (
    <>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),

  // =========================
  // REPORTS
  // =========================
  chart: (
    <>
      <path d="M3 3v18h18" />
      <path d="m7 16 4-5 3 3 6-8" />
    </>
  ),

  // =========================
  // CHEVRON
  // =========================
  chevron: <path d="m9 18 6-6-6-6" />,

  // =========================
  // ARROW
  // =========================
  arrow: (
    <>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </>
  ),

  // =========================
  // SEARCH
  // =========================
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </>
  ),

  // =========================
  // EYE / VIEW
  // =========================
  eye: (
    <>
      <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z" />
      <circle cx="12" cy="12" r="2.5" />
    </>
  ),

  // =========================
  // MORE
  // =========================
  more: (
    <>
      <circle
        cx="5"
        cy="12"
        r="1.2"
        fill="currentColor"
        stroke="none"
      />
      <circle
        cx="12"
        cy="12"
        r="1.2"
        fill="currentColor"
        stroke="none"
      />
      <circle
        cx="19"
        cy="12"
        r="1.2"
        fill="currentColor"
        stroke="none"
      />
    </>
  ),

  // =========================
  // MENU
  // =========================
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,

  // =========================
  // CLOSE
  // =========================
  close: (
    <>
      <path d="m6 6 12 12" />
      <path d="M18 6 6 18" />
    </>
  ),
};

export default function Icon({
  name,
  size = 20,
  stroke = 1.8,
  className = "",
  ...props
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      {icons[name] || icons.grid}
    </svg>
  );
}

