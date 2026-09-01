import React from "react";
import PageHeader from "../../components/PageHeader";
import { studentAssignments } from "../../data/studentData";
import { UploadCloud, CheckCircle2 } from "lucide-react";

export default function StudentAssignments() {
  return (
    <div className="space-y-6">
      <PageHeader
        crumb="STUDENT / ASSIGNMENTS"
        title="My Course Assignments"
        subtitle="Submit practical code repos, project zip files, and view instructor grading."
      />

      <div className="space-y-4">
        {studentAssignments.map((asn) => (
          <div key={asn.id} className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold bg-amber-100 text-amber-900 px-2 py-0.5 rounded-full">
                  {asn.status}
                </span>
                <span className="text-xs text-slate-400 font-mono">Due: {asn.dueDate}</span>
              </div>
              <h3 className="text-sm font-bold text-slate-900 mt-2">{asn.title}</h3>
              <p className="text-xs text-slate-500 mt-0.5">{asn.course}</p>
            </div>

            <button
              onClick={() => alert(`Submit modal for ${asn.title}`)}
              className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-amber-500 hover:text-slate-950 text-white text-xs font-bold transition-all shadow-xs flex items-center gap-2 cursor-pointer self-start sm:self-auto"
            >
              <UploadCloud className="w-4 h-4" />
              <span>Submit Solution</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
