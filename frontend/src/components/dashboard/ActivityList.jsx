import React from "react";

export default function ActivityList({ title = "Recent activity", items = [] }) {
  const toneStyles = {
    purple: "bg-[#eee8ff] text-[#7255d8]",
    blue: "bg-[#e2f2ff] text-[#4c94db]",
    orange: "bg-[#fff0de] text-[#df903a]",
    green: "bg-[#e7f7ee] text-[#4fa774]",
  };

  return (
    <article className="panel activity">
      <div className="panel-head">
        <div>
          <h3>{title}</h3>
          <p>Latest updates from your network</p>
        </div>
        <button type="button" className="text-button">
          View all
        </button>
      </div>

      {items.map((item, idx) => (
        <div className="activity-row" key={idx}>
          <span className={`activity-avatar ${toneStyles[item.tone] ? item.tone : "purple"}`}>
            {item.initials}
          </span>

          <div>
            <b>{item.person}</b>
            <p>{item.detail}</p>
          </div>

          <small>{item.time}</small>
        </div>
      ))}
    </article>
  );
}

