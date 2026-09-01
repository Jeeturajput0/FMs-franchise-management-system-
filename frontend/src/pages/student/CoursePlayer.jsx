import React, { useState } from "react";
import StudentLayout from "../../layouts/StudentLayout";
import PageHeader from "../../components/PageHeader";
import ProgressBar from "../../components/ProgressBar";
import Button from "../../components/Button";
import Icon from "../../components/Icon";

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
    <StudentLayout>
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
          <div className="bg-slate-900 rounded-2xl overflow-hidden aspect-video flex flex-col items-center justify-center text-white relative shadow-xl border border-slate-800">
            <div className="w-16 h-16 rounded-full bg-[#7658df] text-white flex items-center justify-center cursor-pointer shadow-lg hover:scale-105 transition-transform">
              <Icon name="play" size={28} />
            </div>
            <p className="mt-3 text-xs font-bold text-gray-300">{activeLesson}</p>
            <span className="text-[10px] text-gray-500 mt-1">Click to play video stream</span>
          </div>

          <div className="panel flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-bold text-[#25213a] text-base">{activeLesson}</h3>
              <p className="text-xs text-gray-500">Duration: 42 Mins • Video Lecture & Practical Code</p>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant={completed ? "secondary" : "primary"}
                icon="check"
                onClick={() => setCompleted(!completed)}
              >
                {completed ? "Completed ✓" : "Mark as Complete"}
              </Button>
            </div>
          </div>
        </div>

        {/* Sidebar Module List */}
        <div className="panel space-y-4">
          <div className="border-b border-gray-100 pb-3">
            <h3 className="font-bold text-[#25213a] text-base">Course Curriculum</h3>
            <div className="mt-2">
              <ProgressBar value={78} label="Overall Completion" />
            </div>
          </div>

          <div className="space-y-4">
            {modules.map((m, mIdx) => (
              <div key={mIdx} className="space-y-2">
                <h4 className="text-xs font-bold text-[#7658df] uppercase">{m.title}</h4>
                <div className="space-y-1">
                  {m.lessons.map((les, lIdx) => (
                    <button
                      key={lIdx}
                      onClick={() => setActiveLesson(les)}
                      className={`w-full text-left p-2.5 rounded-lg text-xs flex items-center gap-2 transition-colors ${
                        activeLesson === les
                          ? "bg-[#f0ebff] text-[#684aca] font-bold"
                          : "hover:bg-gray-50 text-gray-700 font-medium"
                      }`}
                    >
                      <Icon name="play" size={14} />
                      <span>{les}</span>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </StudentLayout>
  );
}

