import React from "react";
import PageHeader from "../../components/PageHeader";
import { Folder, UploadCloud, Download, FileText } from "lucide-react";

export default function TeacherMaterials() {
  const materials = [
    { title: "Week 4: Neural Networks Lecture Slides & PyTorch Code", batch: "Batch A", size: "12.4 MB", date: "01 Sep 2026" },
    { title: "Python OOPs Handout & Practice Problems", batch: "Batch B", size: "3.2 MB", date: "28 Aug 2026" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <PageHeader
          crumb="TEACHER / MATERIALS"
          title="Classroom Study Materials"
          subtitle="Upload lecture PDFs, slides, and reference notes for your batches."
        />
        <button
          onClick={() => alert("Upload File Modal")}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-bold transition-all shadow-sm self-start sm:self-auto cursor-pointer"
        >
          <UploadCloud className="w-4 h-4" />
          <span>Upload Notes / Code</span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {materials.map((m, idx) => (
          <div key={idx} className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-xs flex items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold shrink-0">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">{m.title}</h4>
                <p className="text-[11px] text-slate-400 mt-0.5">{m.batch} • {m.size} • {m.date}</p>
              </div>
            </div>
            <button className="p-2 rounded-xl bg-slate-100 hover:bg-slate-900 hover:text-white transition-colors">
              <Download className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
