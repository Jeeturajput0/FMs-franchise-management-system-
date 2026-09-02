import React from "react";
import PageHeader from "../../components/PageHeader";
import { studentUpcomingTests } from "../../data/studentData";
import { Play } from "lucide-react";

export default function StudentTests() {
  return (
    <div className="space-y-6">
      <PageHeader
        crumb="STUDENT / TESTS"
        title="Quizzes & Certification Exams"
        subtitle="Take proctored evaluations, module quizzes, and practice readiness exams."
      />

      <div className="space-y-4">
        {studentUpcomingTests.map((t) => (
          <div key={t.id} className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xs flex items-center justify-between gap-4">
            <div>
              <span className="text-[10px] font-bold bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded border border-indigo-200 uppercase">
                {t.course}
              </span>
              <h3 className="text-sm font-bold text-slate-900 mt-2">{t.title}</h3>
              <p className="text-xs text-slate-500 mt-0.5">Date: {t.date} at {t.time} • 30 Mins Duration</p>
            </div>

            <button
              onClick={() => alert(`Starting test: ${t.title}`)}
              className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-bold transition-all shadow-xs flex items-center gap-2 cursor-pointer"
            >
              <Play className="w-4 h-4 fill-slate-950" />
              <span>Start Test</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
