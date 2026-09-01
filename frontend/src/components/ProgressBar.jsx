import React from "react";

export default function ProgressBar({ value = 0, max = 100, label, showValue = true }) {
  const percentage = Math.min(100, Math.max(0, Math.round((value / max) * 100)));

  return (
    <div className="w-full">
      {(label || showValue) && (
        <div className="flex justify-between items-center mb-1 text-xs">
          {label && <span className="font-semibold text-gray-700">{label}</span>}
          {showValue && <span className="font-bold text-[#7658df]">{percentage}%</span>}
        </div>
      )}
      <div className="h-2 w-full bg-[#eeeaf8] rounded-full overflow-hidden">
        <div
          className="h-full bg-[#7658df] rounded-full transition-all duration-300"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

