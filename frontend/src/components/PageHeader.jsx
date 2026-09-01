import React from "react";
import Button from "./Button";

export default function PageHeader({
  crumb = "PORTAL",
  title,
  subtitle,
  actionLabel,
  onAction,
  actionIcon = "plus",
}) {
  return (
    <div className="page-heading flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
      <div>
        <span className="crumb text-[11px] font-bold tracking-widest text-[#7658df] uppercase">
          {crumb}
        </span>
        <h1 className="text-2xl font-bold text-[#25213a] tracking-tight mt-1">{title}</h1>
        {subtitle && <p className="text-xs text-[#858091] mt-1">{subtitle}</p>}
      </div>

      {actionLabel && (
        <Button icon={actionIcon} onClick={onAction}>
          {actionLabel}
        </Button>
      )}
    </div>
  );
}

