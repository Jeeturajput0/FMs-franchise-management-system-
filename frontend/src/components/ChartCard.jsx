import React from "react";

export default function ChartCard({
  title,
  subtitle,
  filterText = "Last 6 months",
  bars = [42, 58, 50, 73, 62, 86],
  labels = ["Mar", "Apr", "May", "Jun", "Jul", "Aug"],
}) {
  return (
    <article className="panel performance">
      <div className="panel-head">
        <div>
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>
        <button type="button" className="select-btn">
          {filterText} ⌄
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
          {bars.map((height, index) => (
            <div className="bar-group" key={index}>
              <div className="bar" style={{ height: `${height}%` }} />
              <div
                className="bar light"
                style={{ height: `${Math.max(18, height - 25)}%` }}
              />
              <span>{labels[index] || ""}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="legend">
        <span>
          <i className="dot purple" /> Primary Metric
        </span>
        <span>
          <i className="dot lavender" /> Secondary Metric
        </span>
      </div>
    </article>
  );
}

