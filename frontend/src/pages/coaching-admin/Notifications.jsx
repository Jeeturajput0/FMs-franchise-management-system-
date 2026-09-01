import React, { useState } from "react";
import PageHeader from "../../components/PageHeader";
import { Send, Bell, CheckCircle } from "lucide-react";

export default function CoachingNotifications() {
  const [sent, setSent] = useState(false);

  const handleSend = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 2000);
  };

  return (
    <div className="space-y-6 max-w-3xl">
      <PageHeader
        crumb="COACHING / NOTIFICATIONS"
        title="Center Notices & Batch Alerts"
        subtitle="Send SMS / App notifications to students and faculty regarding class timings and exam updates."
      />

      {sent && (
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 text-emerald-800 text-xs font-bold flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-emerald-600" />
          <span>Notice dispatched to selected batch students!</span>
        </div>
      )}

      <form onSubmit={handleSend} className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xs space-y-4">
        <div>
          <label className="text-xs font-bold uppercase tracking-wider block mb-1 text-slate-700">Select Target Batch</label>
          <select className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-amber-500">
            <option>All Enrolled Students</option>
            <option>Python AI - Batch A</option>
            <option>Data Science - Batch B</option>
            <option>Center Faculty & Staff</option>
          </select>
        </div>

        <div>
          <label className="text-xs font-bold uppercase tracking-wider block mb-1 text-slate-700">Notice Title</label>
          <input
            type="text"
            required
            placeholder="e.g. Tomorrow's Lab Session Rescheduled to 3 PM"
            className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-amber-500"
          />
        </div>

        <div>
          <label className="text-xs font-bold uppercase tracking-wider block mb-1 text-slate-700">Message Content</label>
          <textarea
            rows={4}
            required
            placeholder="Enter announcement details..."
            className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-amber-500 resize-none"
          />
        </div>

        <button
          type="submit"
          className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-bold transition-all shadow-xs flex items-center gap-2 cursor-pointer"
        >
          <Send className="w-4 h-4" />
          <span>Broadcast Notice</span>
        </button>
      </form>
    </div>
  );
}
