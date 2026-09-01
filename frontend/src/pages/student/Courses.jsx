import React from "react";
import PageHeader from "../../components/PageHeader";
import ProgressBar from "../../components/ProgressBar";
import { Play } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { studentCourses } from "../../data/studentData";

export default function StudentCourses() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <PageHeader
        crumb="STUDENT / COURSES"
        title="My Enrolled Programs"
        subtitle="Track your curriculum progress, video lectures, and upcoming lessons."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {studentCourses.map((c) => (
          <div key={c.id} className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xs space-y-4 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-slate-900 text-base">{c.title}</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Faculty: {c.instructor}</p>
                </div>
                <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                  {c.progress}% Done
                </span>
              </div>

              <div className="mt-4">
                <ProgressBar value={c.progress} />
              </div>

              <p className="text-xs text-slate-500 mt-3">
                <span className="font-semibold text-slate-700">Next Lesson:</span> {c.nextLesson}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => navigate("/dashboard/student/player")}
                className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-bold transition-all shadow-xs flex items-center gap-1.5 cursor-pointer"
              >
                <Play className="w-3.5 h-3.5 fill-slate-950" />
                <span>Resume Course</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
