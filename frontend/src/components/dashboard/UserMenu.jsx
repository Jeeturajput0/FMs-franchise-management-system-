import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, LogOut, Home, Shield, ChevronDown, CheckCircle2 } from "lucide-react";

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
        className="flex items-center gap-2 p-1.5 rounded-xl hover:bg-slate-100 transition-all cursor-pointer group"
      >
        <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-400 text-slate-950 flex items-center justify-center font-black text-xs shadow-sm">
          {user.avatar || "AK"}
        </div>
        
        <div className="hidden xl:flex flex-col text-left">
          <span className="text-xs font-bold text-slate-800 leading-tight group-hover:text-amber-600 transition-colors">
            {user.name}
          </span>
          <span className="text-[10px] font-semibold text-slate-500 capitalize">
            {user.role}
          </span>
        </div>

        <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-60 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 z-50 animate-in fade-in zoom-in-95 duration-150">
          <div className="px-4 py-3 border-b border-slate-100 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-sm">
              {user.avatar || "AK"}
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-bold text-slate-900 truncate">{user.name}</p>
              <div className="flex items-center gap-1 mt-0.5">
                <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                <span className="text-[10px] font-semibold text-slate-500 capitalize truncate">{user.role}</span>
              </div>
            </div>
          </div>

          <div className="py-1.5">
            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 text-xs font-medium text-slate-700 hover:bg-amber-50 hover:text-amber-700 flex items-center gap-2.5 transition-colors"
            >
              <Shield className="w-4 h-4 text-slate-400" />
              <span>Switch Portal / Role</span>
            </Link>
            
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 text-xs font-medium text-slate-700 hover:bg-amber-50 hover:text-amber-700 flex items-center gap-2.5 transition-colors"
            >
              <Home className="w-4 h-4 text-slate-400" />
              <span>Website Home</span>
            </Link>
          </div>

          <div className="border-t border-slate-100 pt-1.5">
            <button
              onClick={handleLogout}
              className="w-full text-left px-4 py-2 text-xs font-medium text-rose-600 hover:bg-rose-50 flex items-center gap-2.5 transition-colors cursor-pointer"
            >
              <LogOut className="w-4 h-4 text-rose-500" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
