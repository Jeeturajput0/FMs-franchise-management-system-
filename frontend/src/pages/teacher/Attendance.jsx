import React, { useState } from "react";
import PageHeader from "../../components/PageHeader";
import { Check, X, CheckCircle } from "lucide-react";

export default function TeacherAttendance() {
  const [marked, setMarked] = useState(false);
  const [students, setStudents] = useState([
    { id: "ST-01", name: "Rahul Sharma", roll: "2026-AI-01", present: true },
    { id: "ST-02", name: "Sneha Patel", roll: "2026-AI-02", present: true },
    { id: "ST-03", name: "Aman Gupta", roll: "2026-AI-03", present: true },
    { id: "ST-04", name: "Riya Verma", roll: "2026-AI-04", present: false },
    { id: "ST-05", name: "Kunal Ghosh", roll: "2026-AI-05", present: true },
  ]);

  const toggleAttendance = (id) => {
    setStudents(students.map(s => s.id === id ? { ...s, present: !s.present } : s));
  };

  const handleSave = () => {
    setMarked(true);
    setTimeout(() => setMarked(false), 2000);
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <PageHeader
          crumb="TEACHER / ATTENDANCE"
          title="Mark Batch Attendance"
          subtitle="Record daily lecture attendance for Python AI - Batch A (Today's Lecture)"
        />
        <button
          onClick={handleSave}
          className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-bold shadow-md shadow-amber-500/20 transition-all cursor-pointer self-start sm:self-auto"
        >
          Submit Attendance
        </button>
      </div>

      {marked && (
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 text-emerald-800 text-xs font-bold flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-emerald-600" />
          <span>Attendance submitted & synced with coaching admin ledger!</span>
        </div>
      )}

      <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xs divide-y divide-slate-100">
        {students.map((s) => (
          <div key={s.id} className="py-3 flex items-center justify-between gap-4 first:pt-0 last:pb-0">
            <div>
              <h4 className="text-xs font-bold text-slate-900">{s.name}</h4>
              <p className="text-[11px] text-slate-400 font-mono">{s.roll}</p>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => toggleAttendance(s.id)}
                className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  s.present
                    ? "bg-emerald-100 text-emerald-800 border border-emerald-200"
                    : "bg-rose-100 text-rose-800 border border-rose-200"
                }`}
              >
                {s.present ? <Check className="w-3.5 h-3.5" /> : <X className="w-3.5 h-3.5" />}
                <span>{s.present ? "Present" : "Absent"}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
