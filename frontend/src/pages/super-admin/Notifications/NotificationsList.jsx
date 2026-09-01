import React, { useState } from "react";
import PageHeader from "../../../components/PageHeader";
import { Bell, Send, Users, Shield, Clock, CheckCircle } from "lucide-react";

export default function NotificationsList() {
  const [broadcastSent, setBroadcastSent] = useState(false);
  const [title, setTitle] = useState("");
  const [target, setTarget] = useState("all");
  const [message, setMessage] = useState("");

  const pastNotifications = [
    { id: "NT-01", title: "New AI Pro 2026 Curriculum Released", target: "All Franchises & Teachers", sentDate: "01 Sep 2026", status: "Delivered (1,480 recipients)" },
    { id: "NT-02", title: "Upcoming Live Webinar on Generative AI Agents", target: "All Students", sentDate: "28 Aug 2026", status: "Delivered (12,450 recipients)" },
    { id: "NT-03", title: "Monthly Royalty Settlement Statement Generated", target: "Franchise Owners", sentDate: "25 Aug 2026", status: "Delivered (48 recipients)" },
    { id: "NT-04", title: "Platform Scheduled Maintenance Notice", target: "All Users", sentDate: "15 Aug 2026", status: "Delivered (14,000 recipients)" },
  ];

  const handleSend = (e) => {
    e.preventDefault();
    setBroadcastSent(true);
    setTimeout(() => {
      setTitle("");
      setMessage("");
      setBroadcastSent(false);
    }, 2500);
  };

  return (
    <div className="space-y-6">
      <PageHeader
        crumb="NOTIFICATIONS / BROADCAST"
        title="System Broadcasts & Alerts"
        subtitle="Dispatch platform announcements, SMS updates, and in-app alerts across student and franchise portals."
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Broadcast Sender Form */}
        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xs lg:col-span-1">
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100">
            <Send className="w-4 h-4 text-amber-500" />
            <h3 className="text-sm font-bold text-slate-900">Send New Broadcast</h3>
          </div>

          {broadcastSent && (
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 mb-4 text-emerald-800 text-xs font-bold flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              <span>Announcement dispatched successfully!</span>
            </div>
          )}

          <form onSubmit={handleSend} className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Target Audience
              </label>
              <select
                value={target}
                onChange={(e) => setTarget(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-amber-500 text-slate-800"
              >
                <option value="all">Everyone (All Portals)</option>
                <option value="students">All Enrolled Students</option>
                <option value="franchises">Franchise Owners & Admins</option>
                <option value="teachers">Instructors & Faculty</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Notification Headline
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Schedule update for AI Exam"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-amber-500 text-slate-800"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Message Content
              </label>
              <textarea
                rows={4}
                required
                placeholder="Write your broadcast announcement..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-amber-500 text-slate-800 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2.5 px-4 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Broadcast Alert Now</span>
            </button>
          </form>
        </div>

        {/* Past Broadcast History */}
        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xs lg:col-span-2 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
              <h3 className="text-sm font-bold text-slate-900">Broadcast History & Status</h3>
              <span className="text-xs text-slate-400">Total 18 Announcements</span>
            </div>

            <div className="space-y-3">
              {pastNotifications.map((p) => (
                <div key={p.id} className="p-4 rounded-xl bg-slate-50 border border-slate-100 hover:bg-amber-50/20 transition-colors">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">{p.title}</h4>
                      <p className="text-[11px] text-slate-500 mt-1">Audience: <span className="font-semibold text-slate-700">{p.target}</span></p>
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 shrink-0">{p.sentDate}</span>
                  </div>
                  <div className="mt-2.5 flex items-center gap-2 text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md inline-block">
                    ✓ {p.status}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

