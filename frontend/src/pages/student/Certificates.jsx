import React from "react";
import PageHeader from "../../components/PageHeader";
import { Award, Download, CheckCircle, ExternalLink } from "lucide-react";

export default function StudentCertificates() {
  return (
    <div className="space-y-6 max-w-4xl">
      <PageHeader
        crumb="STUDENT / CERTIFICATES"
        title="My Issued Credentials & Certificates"
        subtitle="Official QR-verified AI Scholars course completion certificates and blockchain credentials."
      />

      <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold shrink-0">
            <Award className="w-7 h-7" />
          </div>
          <div>
            <span className="text-[10px] font-bold bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded border border-emerald-200 uppercase">
              QR Verified
            </span>
            <h3 className="text-sm font-bold text-slate-900 mt-1">Python for AI Specialist Certificate</h3>
            <p className="text-xs text-slate-400 font-mono mt-0.5">ID: CERT-AIS-9982 • Issued on 15 Aug 2026</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => alert("Downloading PDF Certificate...")}
            className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-bold transition-all shadow-xs flex items-center gap-1.5 cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Download Certificate (PDF)</span>
          </button>
        </div>
      </div>
    </div>
  );
}
