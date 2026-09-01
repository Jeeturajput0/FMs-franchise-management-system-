import React from "react";
import Button from "../Button";

export default function QuickActions({ actions = [] }) {
  return (
    <div className="bg-white border border-[#ededf3] rounded-xl p-4 mb-6 shadow-xs flex flex-wrap items-center justify-between gap-3">
      <span className="text-xs font-bold text-[#25213a] uppercase tracking-wider">
        Quick Actions
      </span>
      <div className="flex flex-wrap items-center gap-2">
        {actions.map((act, index) => (
          <Button
            key={index}
            size="sm"
            variant={act.variant || "secondary"}
            icon={act.icon || "plus"}
            onClick={act.onClick}
          >
            {act.label}
          </Button>
        ))}
      </div>
    </div>
  );
}
