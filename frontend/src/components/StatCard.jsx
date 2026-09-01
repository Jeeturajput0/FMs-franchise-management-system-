import React from "react";
import Icon from "./Icon";

export default function StatCard({ label, value, change, icon = "grid", tone = "violet" }) {
  const toneStyles = {
    violet: "bg-[#eee8ff] text-[#7355d9]",
    blue: "bg-[#e7f3ff] text-[#5194df]",
    orange: "bg-[#fff1df] text-[#e39843]",
    green: "bg-[#e5f7ed] text-[#52a978]",
  };

  return (
    <article className="stat-card">
      <div className={`stat-icon ${toneStyles[tone] ? tone : "violet"}`}>
        <Icon name={icon} size={20} />
      </div>

      <button type="button" aria-label="More options" className="text-gray-400 hover:text-gray-600">
        <Icon name="more" size={18} />
      </button>

      <p>{label}</p>

      <h2>{value}</h2>

      {change && (
        <small>
          <b>↑</b> {change}
        </small>
      )}
    </article>
  );
}

