import React, { useState } from "react";
import PageHeader from "../../components/PageHeader";
import { Send, CheckCircle } from "lucide-react";

export default function TeacherAnnouncements() {
  const [posted, setPosted] = useState(false);

  const handlePost = (e) => {
    e.preventDefault();
    setPosted(true);
    setTimeout(() => setPosted(false), 2000);
  };

  return (
    <div className="space-y-6 max-w-3xl">
      <PageHeader
        crumb="TEACHER / ANNOUNCEMENTS"
        title="Classroom Announcements"
        subtitle="Post reminders, homework guidance, and batch notices directly to your students."
      />

      {posted && (
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 text-emerald-800 text-xs font-bold flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-emerald-600" />
          <span>Announcement posted to classroom feed!</span>
        </div>
      )}

      <form onSubmit={handlePost} className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xs space-y-4">
        <div>
          <label className="text-xs font-bold uppercase tracking-wider block mb-1 text-slate-700">Target Batch</label>
          <select className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-amber-500">
            <option>Python AI - Batch A</option>
            <option>AI Fundamentals - Batch B</option>
            <option>All My Batches</option>
          </select>
        </div>

        <div>
          <label className="text-xs font-bold uppercase tracking-wider block mb-1 text-slate-700">Headline</label>
          <input
            type="text"
            required
            placeholder="e.g. Office Hours & Doubt Clearing Session Tomorrow"
            className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-amber-500"
          />
        </div>

        <div>
          <label className="text-xs font-bold uppercase tracking-wider block mb-1 text-slate-700">Announcement Details</label>
          <textarea
            rows={4}
            required
            placeholder="Write announcement for students..."
            className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-amber-500 resize-none"
          />
        </div>

        <button
          type="submit"
          className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-bold transition-all shadow-xs flex items-center gap-2 cursor-pointer"
        >
          <Send className="w-4 h-4" />
          <span>Post to Classroom</span>
        </button>
      </form>
    </div>
  );
}
