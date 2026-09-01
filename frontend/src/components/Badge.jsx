import React from "react";

export default function Badge({
  children,
  variant = "active",
  size = "md",
  className = "",
}) {
  const variantStyles = {
    active: "bg-emerald-100 text-emerald-800 border-emerald-200",
    success: "bg-emerald-100 text-emerald-800 border-emerald-200",
    paid: "bg-emerald-100 text-emerald-800 border-emerald-200",
    pending: "bg-amber-100 text-amber-800 border-amber-200",
    warning: "bg-amber-100 text-amber-800 border-amber-200",
    overdue: "bg-rose-100 text-rose-800 border-rose-200",
    danger: "bg-rose-100 text-rose-800 border-rose-200",
    neutral: "bg-gray-100 text-gray-700 border-gray-200",
    purple: "bg-[#f0ebff] text-[#684aca] border-[#e2d6ff]",
  };

  const statusKey = (children || variant || "").toString().toLowerCase();

  let selectedStyle = variantStyles.neutral;
  if (statusKey.includes("active") || statusKey.includes("paid") || statusKey.includes("completed") || statusKey.includes("graded")) {
    selectedStyle = variantStyles.active;
  } else if (statusKey.includes("pending") || statusKey.includes("draft") || statusKey.includes("upcoming") || statusKey.includes("review")) {
    selectedStyle = variantStyles.pending;
  } else if (statusKey.includes("overdue") || statusKey.includes("failed") || statusKey.includes("inactive")) {
    selectedStyle = variantStyles.overdue;
  } else if (variantStyles[variant]) {
    selectedStyle = variantStyles[variant];
  }

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${selectedStyle} ${className}`}
    >
      {children}
    </span>
  );
}

