import React from "react";

export default function Avatar({
  name = "User",
  initials,
  size = "md",
  color = "purple",
  className = "",
}) {
  const displayInitials =
    initials ||
    name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();

  const sizeStyles = {
    sm: "w-7 h-7 text-[10px]",
    md: "w-8 h-8 text-xs",
    lg: "w-10 h-10 text-sm",
  };

  const colorStyles = {
    purple: "bg-[#e7defe] text-[#6548ce]",
    blue: "bg-[#e2f2ff] text-[#4c94db]",
    green: "bg-[#e7f7ee] text-[#4fa774]",
    orange: "bg-[#fff0de] text-[#df903a]",
    dark: "bg-[#282146] text-white",
  };

  return (
    <div
      className={`rounded-lg flex items-center justify-center font-bold select-none shrink-0 ${sizeStyles[size] || sizeStyles.md} ${colorStyles[color] || colorStyles.purple} ${className}`}
    >
      {displayInitials}
    </div>
  );
}

