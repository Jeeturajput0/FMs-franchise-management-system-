import React from "react";
import PageHeader from "../../../components/PageHeader";
import { FileText, Download, UploadCloud, Video, Code, BookOpen } from "lucide-react";

export default function CourseMaterials() {
  const materials = [
    { title: "Complete Deep Learning Cheat Sheet & Formula Guide", type: "PDF Document", size: "4.8 MB", downloads: 1420, icon: FileText, color: "text-rose-500 bg-rose-50" },
    { title: "PyTorch 2.0 Lab Starter Repos & Jupyter Notebooks", type: "ZIP Archive / Code", size: "18.2 MB", downloads: 980, icon: Code, color: "text-blue-500 bg-blue-50" },
    { title: "LLM Fine-Tuning Lecture Video Deck (Full HD)", type: "Video Lecture", size: "320 MB", downloads: 750, icon: Video, color: "text-amber-500 bg-amber-50" },
    { title: "AI Prompt Engineering Handbook (2026 Edition)", type: "PDF E-Book", size: "8.5 MB", downloads: 2310, icon: BookOpen, color: "text-emerald-500 bg-emerald-50" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <PageHeader
          crumb="COURSES / MATERIALS"
          title="Learning Materials & Courseware"
          subtitle="Distribute verified notes, code templates, notebooks, and reference materials."
        />
        <button
          onClick={() => alert("Upload Material Modal")}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-bold shadow-md shadow-amber-500/20 transition-all cursor-pointer self-start sm:self-auto"
        >
          <UploadCloud className="w-4 h-4" />
          <span>Upload New Asset</span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {materials.map((mat, i) => {
          const IconComp = mat.icon;
          return (
            <div key={i} className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-xs flex items-start justify-between gap-4 hover:border-amber-400/60 transition-all">
              <div className="flex items-start gap-3.5">
                <div className={`w-12 h-12 rounded-xl ${mat.color} flex items-center justify-center shrink-0`}>
                  <IconComp className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 leading-snug">{mat.title}</h4>
                  <div className="flex items-center gap-3 text-xs text-slate-400 mt-2">
                    <span className="font-semibold text-slate-600">{mat.type}</span>
                    <span>•</span>
                    <span>{mat.size}</span>
                    <span>•</span>
                    <span className="text-emerald-600 font-medium">{mat.downloads} downloads</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => alert(`Downloading: ${mat.title}`)}
                className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-900 hover:text-white text-slate-700 transition-colors shrink-0"
              >
                <Download className="w-4 h-4" />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

