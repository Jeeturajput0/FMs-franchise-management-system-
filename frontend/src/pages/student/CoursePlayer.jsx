import React, { useState } from "react";
import PageHeader from "../../components/PageHeader";
import ProgressBar from "../../components/ProgressBar";
import { Play, Check, BookOpen } from "lucide-react";

export default function CoursePlayer() {
  const [activeLesson, setActiveLesson] = useState("Lesson 8.1: Decision Trees Classifier");
  const [completed, setCompleted] = useState(false);

  const modules = [
    {
      title: "Module 1: Python Basics & Syntax",
      lessons: ["Lesson 1.1: Installation & Setup", "Lesson 1.2: Variables & Data Types"],
    },
    {
      title: "Module 2: Data Structures & OOPs",
      lessons: ["Lesson 2.1: Lists, Dicts & Sets", "Lesson 2.2: Classes & Inheritance"],
    },
    {
      title: "Module 3: Decision Trees & Ensemble Models",
      lessons: ["Lesson 3.1: Decision Trees Classifier", "Lesson 3.2: Random Forest Algorithms"],
    },
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        crumb="STUDENT LMS / PLAYER"
        title="Python for Artificial Intelligence & ML"
        subtitle="Instructor: Prof. Rajesh Gupta • Course Progress 78%"
        actionLabel="Next Lesson →"
        onAction={() => alert("Loading Next Lesson...")}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Video Player Main Container */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-slate-950 rounded-2xl overflow-hidden aspect-video flex flex-col items-center justify-center text-white relative shadow-xl border border-slate-800">
            <div className="w-16 h-16 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center cursor-pointer shadow-lg hover:scale-105 transition-transform">
              <Play className="w-7 h-7 fill-slate-950 ml-1" />
            </div>
            <p className="mt-3 text-xs font-bold text-slate-300">{activeLesson}</p>
            <span className="text-[10px] text-slate-500 mt-1">Click to play high-definition lecture stream</span>
          </div>

          <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-base">{activeLesson}</h3>
              <p className="text-xs text-slate-500">Duration: 42 Mins • Video Lecture & Practical Jupyter Code</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCompleted(!completed)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  completed
                    ? "bg-emerald-100 text-emerald-800 border border-emerald-200"
                    : "bg-amber-500 hover:bg-amber-600 text-slate-950 shadow-sm"
                }`}
              >
                <Check className="w-4 h-4" />
                <span>{completed ? "Completed ✓" : "Mark as Complete"}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar Module List */}
        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xs space-y-4">
          <div className="border-b border-slate-100 pb-3">
            <h3 className="font-bold text-slate-900 text-base">Course Curriculum</h3>
            <div className="mt-2">
              <ProgressBar value={78} label="Overall Completion" />
            </div>
          </div>

          <div className="space-y-4 max-h-96 overflow-y-auto">
            {modules.map((m, mIdx) => (
              <div key={mIdx} className="space-y-2">
                <h4 className="text-[10px] font-bold text-amber-600 uppercase tracking-wider">{m.title}</h4>
                <div className="space-y-1">
                  {m.lessons.map((les, lIdx) => (
                    <button
                      key={lIdx}
                      onClick={() => setActiveLesson(les)}
                      className={`w-full text-left p-2.5 rounded-xl text-xs flex items-center gap-2.5 transition-colors cursor-pointer ${
                        activeLesson === les
                          ? "bg-amber-50 text-amber-900 font-bold border border-amber-200"
                          : "hover:bg-slate-50 text-slate-700 font-medium"
                      }`}
                    >
                      <Play className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span className="truncate">{les}</span>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
