import React from "react";
import PageHeader from "../../components/PageHeader";
import ProgressBar from "../../components/ProgressBar";
import { Folder, FileText, Plus } from "lucide-react";

export default function MyCourses() {
  const courses = [
    { title: "Python Basics & Object Oriented Programming", batch: "Batch A", students: 32, progress: 82 },
    { title: "AI Fundamentals & Machine Learning Algorithms", batch: "Batch B", students: 28, progress: 65 },
    { title: "Supervised & Unsupervised Machine Learning", batch: "Batch C", students: 24, progress: 48 },
    { title: "Deep Learning & Computer Vision", batch: "Batch E", students: 30, progress: 30 },
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        crumb="FACULTY PORTAL / MY COURSES"
        title="Assigned Courses & Curriculum"
        subtitle="Manage your active teaching tracks, syllabus progress, and study materials."
        actionLabel="+ Upload Material"
        actionIcon="folder"
        onAction={() => alert("Upload Material")}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {courses.map((c, idx) => (
          <div key={idx} className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xs space-y-4 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-[10px] font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 uppercase">
                    {c.batch}
                  </span>
                  <h3 className="font-bold text-slate-900 text-base mt-2">{c.title}</h3>
                </div>
                <span className="text-xs text-slate-500 font-semibold">{c.students} Students</span>
              </div>

              <div className="mt-4">
                <ProgressBar value={c.progress} label="Syllabus Completion" />
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-3 border-t border-slate-100">
              <button
                onClick={() => alert("View Materials")}
                className="px-3.5 py-1.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-semibold flex items-center gap-1.5"
              >
                <Folder className="w-3.5 h-3.5 text-slate-400" />
                <span>Materials</span>
              </button>
              <button
                onClick={() => alert("View Assignments")}
                className="px-3.5 py-1.5 rounded-xl bg-slate-900 text-white hover:bg-amber-500 hover:text-slate-950 text-xs font-bold transition-colors flex items-center gap-1.5"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Assignments</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
