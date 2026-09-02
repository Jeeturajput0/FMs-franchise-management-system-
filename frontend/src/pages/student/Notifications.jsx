import React from "react";
import PageHeader from "../../components/PageHeader";
import { Bell, Clock } from "lucide-react";

export default function StudentNotifications() {
  const notifs = [
    { title: "New Assignment Published: Logistic Regression", time: "2 hrs ago", desc: "Dr. Priya Sen uploaded a new homework due on 15 Sep 2026." },
    { title: "Upcoming Live Webinar on Agentic AI", time: "1 day ago", desc: "Join the Saturday exclusive live session with DeepMind research leads." },
    { title: "Fee Payment Acknowledgment", time: "1 week ago", desc: "Your installment payment of ₹24,999 was received successfully." },
  ];

  return (
    <div className="space-y-6 max-w-3xl">
      <PageHeader
        crumb="STUDENT / NOTIFICATIONS"
        title="My Alerts & Announcements"
        subtitle="Recent notices from faculty, coaching centers, and platform administrators."
      />

      <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xs divide-y divide-slate-100">
        {notifs.map((n, idx) => (
          <div key={idx} className="py-4 first:pt-0 last:pb-0">
            <div className="flex justify-between items-start">
              <h4 className="text-xs font-bold text-slate-900">{n.title}</h4>
              <div className="flex items-center gap-1 text-[10px] text-slate-400">
                <Clock className="w-3 h-3" />
                <span>{n.time}</span>
              </div>
            </div>
            <p className="text-xs text-slate-500 mt-1">{n.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
