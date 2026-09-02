import React from "react";
import PageHeader from "../../components/PageHeader";
import { User, Mail, Award, BookOpen } from "lucide-react";

export default function TeacherProfile() {
  return (
    <div className="space-y-6 max-w-3xl">
      <PageHeader
        crumb="TEACHER / PROFILE"
        title="Faculty Profile & Credentials"
        subtitle="Manage your instructor profile, bio, and academic credentials."
      />

      <div className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex items-center gap-4 pb-6 border-b border-slate-100">
          <div className="w-16 h-16 rounded-2xl bg-amber-100 text-amber-900 font-extrabold text-xl flex items-center justify-center">
            PS
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-900">Dr. Priya Sen</h3>
            <p className="text-xs text-slate-500">Lead AI & Machine Learning Faculty • Senior Instructor</p>
            <span className="inline-block mt-1 text-[10px] font-bold bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full border border-emerald-200">
              Verified Instructor
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div>
            <span className="text-slate-400 font-semibold block uppercase tracking-wider mb-1">Email Address</span>
            <b className="text-slate-800 text-sm">priya.sen@aischolar.com</b>
          </div>
          <div>
            <span className="text-slate-400 font-semibold block uppercase tracking-wider mb-1">Specialization</span>
            <b className="text-slate-800 text-sm">Deep Learning & Generative AI</b>
          </div>
          <div>
            <span className="text-slate-400 font-semibold block uppercase tracking-wider mb-1">Active Batches</span>
            <b className="text-slate-800 text-sm">4 Cohorts (114 Students)</b>
          </div>
          <div>
            <span className="text-slate-400 font-semibold block uppercase tracking-wider mb-1">Teaching Rating</span>
            <b className="text-amber-600 text-sm">⭐ 4.92 / 5.0</b>
          </div>
        </div>
      </div>
    </div>
  );
}
