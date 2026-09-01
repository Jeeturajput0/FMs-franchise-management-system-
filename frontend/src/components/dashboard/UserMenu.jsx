import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Icon from "../Icon";

export default function UserMenu({ user = { name: "Arjun Kumar", role: "Super Admin", avatar: "AK" } }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("ai_scholars_user");
    navigate("/login");
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 cursor-pointer focus:outline-none"
      >
        <div className="header-avatar flex items-center justify-center font-bold text-xs bg-[#e7defe] text-[#6548ce] w-8 h-8 rounded-lg">
          {user.avatar || "AK"}
        </div>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-50">
          <div className="px-4 py-2 border-b border-gray-100">
            <p className="text-xs font-bold text-[#25213a]">{user.name}</p>
            <p className="text-[10px] text-[#858091] capitalize">{user.role}</p>
          </div>

          <div className="py-1">
            <Link
              to="/login"
              className="px-4 py-2 text-xs text-gray-700 hover:bg-[#f0ebff] hover:text-[#684aca] flex items-center gap-2 font-medium"
            >
              <Icon name="user" size={15} /> Switch Role / Portal
            </Link>
            <Link
              to="/"
              className="px-4 py-2 text-xs text-gray-700 hover:bg-[#f0ebff] hover:text-[#684aca] flex items-center gap-2 font-medium"
            >
              <Icon name="home" size={15} /> Website Home
            </Link>
          </div>

          <div className="border-t border-gray-100 pt-1">
            <button
              onClick={handleLogout}
              className="w-full text-left px-4 py-2 text-xs text-rose-600 hover:bg-rose-50 flex items-center gap-2 font-medium"
            >
              <Icon name="arrow" size={15} /> Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
