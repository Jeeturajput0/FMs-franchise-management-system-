import React from "react";
import Icon from "./Icon";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  icon,
  iconRight,
  className = "",
  type = "button",
  disabled = false,
  onClick,
  ...props
}) {
  const variantStyles = {
    primary: "bg-[#7154db] hover:bg-[#6145ca] text-white shadow-xs",
    secondary: "bg-[#f0ebff] hover:bg-[#e4daff] text-[#684aca] font-semibold",
    outline: "border border-[#dedbe8] bg-white hover:bg-[#f8f7fc] text-[#282146]",
    text: "bg-transparent text-[#7154d7] hover:bg-[#f2edff] font-medium",
    danger: "bg-rose-600 hover:bg-rose-700 text-white shadow-xs",
  };

  const sizeStyles = {
    sm: "px-2.5 py-1.5 text-xs rounded-md gap-1.5",
    md: "px-4 py-2 text-xs font-semibold rounded-lg gap-2",
    lg: "px-5 py-2.5 text-sm font-semibold rounded-lg gap-2.5",
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`inline-flex items-center justify-center transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${variantStyles[variant] || variantStyles.primary} ${sizeStyles[size] || sizeStyles.md} ${className}`}
      {...props}
    >
      {icon && <Icon name={icon} size={size === "sm" ? 14 : 16} />}
      {children && <span>{children}</span>}
      {iconRight && <Icon name={iconRight} size={size === "sm" ? 14 : 16} />}
    </button>
  );
}

