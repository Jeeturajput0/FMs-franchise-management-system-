import React, { useState, useRef, useEffect } from "react";
import Icon from "../Icon";

export default function NotificationBell() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const notifications = [
    { id: 1, title: "New Franchise Registered", desc: "Quantum Skill Academy joined network", time: "10 min ago", unread: true },
    { id: 2, title: "Fee Payment Received", desc: "Rahul Sharma paid ₹18,500 for Python AI", time: "1 hr ago", unread: true },
    { id: 3, title: "Certificate Pending Approval", desc: "3 new certificates generated", time: "3 hrs ago", unread: false },
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
        className="head-icon notification relative"
        aria-label="Notifications"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Icon name="bell" size={18} />
        <span />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-2xl shadow-xl border border-gray-100 py-3 z-50">
          <div className="flex items-center justify-between px-4 pb-2 border-b border-gray-100">
            <h4 className="text-xs font-bold text-[#25213a]">Notifications</h4>
            <span className="text-[10px] bg-[#f0ebff] text-[#684aca] px-2 py-0.5 rounded-full font-bold">
              2 Unread
            </span>
          </div>

          <div className="divide-y divide-gray-50 max-h-64 overflow-y-auto">
            {notifications.map((n) => (
              <div key={n.id} className="p-3 hover:bg-[#faf9fc] transition-colors">
                <div className="flex justify-between items-start">
                  <h5 className="text-xs font-bold text-gray-800">{n.title}</h5>
                  <small className="text-[10px] text-gray-400">{n.time}</small>
                </div>
                <p className="text-[11px] text-gray-500 mt-1">{n.desc}</p>
              </div>
            ))}
          </div>

          <div className="px-4 pt-2 border-t border-gray-100 text-center">
            <button className="text-xs text-[#7154db] font-semibold hover:underline">
              Mark all as read
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
