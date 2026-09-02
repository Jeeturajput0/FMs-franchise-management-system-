import React, { useState, useRef, useEffect } from "react";
import { Bell, Check, Clock, Sparkles } from "lucide-react";

export default function NotificationBell() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const notifications = [
    { id: 1, title: "New Franchise Registered", desc: "Apex Institute of AI joined Gujarat region", time: "10 min ago", unread: true },
    { id: 2, title: "Fee Payment Received", desc: "Rahul Sharma paid ₹18,500 for Python AI Batch #4", time: "1 hr ago", unread: true },
    { id: 3, title: "Certificate Pending Approval", desc: "5 new certificates generated for graduation", time: "3 hrs ago", unread: false },
  ];

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        className="relative p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
        aria-label="Notifications"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Bell className="w-5 h-5" />
        <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-amber-500 ring-2 ring-white"></span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-white rounded-2xl shadow-xl border border-slate-100 py-3 z-50 animate-in fade-in zoom-in-95 duration-150">
          <div className="flex items-center justify-between px-4 pb-2.5 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <h4 className="text-xs font-bold text-slate-900">Notifications</h4>
              <span className="text-[10px] bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full font-bold">
                2 New
              </span>
            </div>
            <button className="text-[11px] text-amber-600 font-semibold hover:underline">
              Mark all read
            </button>
          </div>

          <div className="divide-y divide-slate-50 max-h-72 overflow-y-auto">
            {notifications.map((n) => (
              <div key={n.id} className={`p-3.5 hover:bg-slate-50 transition-colors ${n.unread ? "bg-amber-50/30" : ""}`}>
                <div className="flex justify-between items-start gap-2">
                  <h5 className="text-xs font-bold text-slate-800">{n.title}</h5>
                  <div className="flex items-center gap-1 text-[10px] text-slate-400 shrink-0">
                    <Clock className="w-3 h-3" />
                    <span>{n.time}</span>
                  </div>
                </div>
                <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">{n.desc}</p>
              </div>
            ))}
          </div>

          <div className="px-4 pt-2.5 border-t border-slate-100 text-center">
            <a href="/admin/notifications" className="text-xs text-amber-600 font-semibold hover:underline">
              View all notifications →
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
