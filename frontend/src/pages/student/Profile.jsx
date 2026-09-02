import React from "react";
import PageHeader from "../../components/PageHeader";
import { studentProfile } from "../../data/studentData";

export default function StudentProfile() {
  return (
    <div className="space-y-6 max-w-3xl">
      <PageHeader
        crumb="STUDENT / PROFILE"
        title="Student Profile & ID"
        subtitle="Manage your personal details, enrolled center, and academic roll number."
      />

      <div className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex items-center gap-4 pb-6 border-b border-slate-100">
          <div className="w-16 h-16 rounded-2xl bg-amber-100 text-amber-900 font-extrabold text-xl flex items-center justify-center">
            {studentProfile.avatar || "RV"}
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-900">{studentProfile.name}</h3>
            <p className="text-xs text-slate-500 font-mono">Roll #: {studentProfile.rollNo} • Enrolled Student</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div>
            <span className="text-slate-400 font-semibold block uppercase tracking-wider mb-1">Email Address</span>
            <b className="text-slate-800 text-sm">{studentProfile.email}</b>
          </div>
          <div>
            <span className="text-slate-400 font-semibold block uppercase tracking-wider mb-1">Contact Phone</span>
            <b className="text-slate-800 text-sm">{studentProfile.phone}</b>
          </div>
          <div>
            <span className="text-slate-400 font-semibold block uppercase tracking-wider mb-1">Franchise Center</span>
            <b className="text-slate-800 text-sm">{studentProfile.franchise}</b>
          </div>
          <div>
            <span className="text-slate-400 font-semibold block uppercase tracking-wider mb-1">Primary Course</span>
            <b className="text-slate-800 text-sm">{studentProfile.course}</b>
          </div>
        </div>
      </div>
    </div>
  );
}
