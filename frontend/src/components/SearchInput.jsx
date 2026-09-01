import React from "react";
import Icon from "./Icon";

export default function SearchInput({
  value,
  onChange,
  placeholder = "Search...",
  className = "",
}) {
  return (
    <div className={`relative flex items-center ${className}`}>
      <Icon
        name="search"
        size={16}
        className="absolute left-3 text-gray-400 pointer-events-none"
      />
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full pl-9 pr-4 py-2 text-xs rounded-xl border border-gray-200 bg-white focus:outline-none focus:border-[#7154db] focus:ring-1 focus:ring-[#7154db] transition-all"
      />
    </div>
  );
}

