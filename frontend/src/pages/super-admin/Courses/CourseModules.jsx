import React, { useState } from "react";
import PageHeader from "../../../components/PageHeader";
import { BookOpen, Layers, Plus, ChevronRight, FileText, Video, CheckCircle2 } from "lucide-react";

export default function CourseModules() {
  const [selectedCourse, setSelectedCourse] = useState("AI & Deep Learning Pro");

  const modules = [
    {
      id: "MOD-101",
      title: "Module 1: Foundations of Artificial Intelligence & Math",
      lessons: 8,
      duration: "12 Hours",
      topics: ["Linear Algebra & Matrix Operations", "Probability & Statistics for ML", "Python for Scientific Computing (NumPy/Pandas)"],
    },
    {
      id: "MOD-102",
      title: "Module 2: Supervised Machine Learning Algorithms",
      lessons: 12,
      duration: "18 Hours",
      topics: ["Linear & Logistic Regression", "Decision Trees & Random Forests", "Support Vector Machines (SVM)", "Model Evaluation & Hyperparameter Tuning"],
    },
    {
      id: "MOD-103",
      title: "Module 3: Deep Neural Networks & PyTorch",
      lessons: 15,
      duration: "24 Hours",
      topics: ["Feedforward Networks & Backpropagation", "Convolutional Neural Networks (CNNs)", "Recurrent Networks & Transformers", "PyTorch Framework Architecture"],
    },
    {
      id: "MOD-104",
      title: "Module 4: Generative AI & Large Language Models",
      lessons: 10,
      duration: "16 Hours",
      topics: ["Attention Mechanisms & LLM Architectures", "Prompt Engineering & RAG Pipelines", "Fine-Tuning Open Source LLMs", "Building Autonomous Agents"],
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <PageHeader
          crumb="COURSES / MODULES"
          title="Course Modules Manager"
          subtitle="Configure structured syllabus breakdown, units, and learning milestones."
        />
        <button
          onClick={() => alert("Add Module Modal")}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-bold shadow-md shadow-amber-500/20 transition-all cursor-pointer self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Module</span>
        </button>
      </div>

      {/* Course Selector Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2">
        {["AI & Deep Learning Pro", "Full Stack AI Engineer", "Python for Data Science", "Cloud MLOps & DevOps"].map((c) => (
          <button
            key={c}
            onClick={() => setSelectedCourse(c)}
            className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
              selectedCourse === c
                ? "bg-slate-900 text-amber-400 shadow-sm"
                : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {modules.map((m, idx) => (
          <div key={m.id} className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-xs hover:border-amber-400/50 transition-all">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-xs">
                  {idx + 1}
                </span>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{m.title}</h4>
                  <p className="text-[11px] text-slate-400 font-mono">{m.id} • {m.lessons} Lessons • {m.duration}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button className="px-3 py-1.5 rounded-lg border border-slate-200 text-slate-700 text-xs font-semibold hover:bg-slate-50">
                  Edit Module
                </button>
                <button className="px-3 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800">
                  Manage Lessons
                </button>
              </div>
            </div>

            <div className="mt-3 pt-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                Included Topics:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {m.topics.map((t, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-600 bg-slate-50 p-2 rounded-lg">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span className="truncate">{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

