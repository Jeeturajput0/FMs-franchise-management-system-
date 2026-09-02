import React, { useState } from "react";
import PageHeader from "../../components/PageHeader";
import { CheckCircle } from "lucide-react";

export default function FranchiseSettings() {
  const [saved, setSaved] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="space-y-6 max-w-3xl">
      <PageHeader
        crumb="FRANCHISE / SETTINGS"
        title="Franchise Center Settings"
        subtitle="Manage center address, partner contact, banking details, and tax GSTIN."
      />

      {saved && (
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 text-emerald-800 text-xs font-bold flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-emerald-600" />
          <span>Franchise profile updated successfully!</span>
        </div>
      )}

      <form onSubmit={handleSave} className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xs space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-bold uppercase tracking-wider block mb-1 text-slate-700">Franchise Center Name</label>
            <input
              type="text"
              defaultValue="Quantum Skill Academy"
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-amber-500"
            />
          </div>

          <div>
            <label className="text-xs font-bold uppercase tracking-wider block mb-1 text-slate-700">GSTIN / Tax ID</label>
            <input
              type="text"
              defaultValue="29ABCDE1234F1Z5"
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-amber-500"
            />
          </div>

          <div>
            <label className="text-xs font-bold uppercase tracking-wider block mb-1 text-slate-700">Center Address</label>
            <input
              type="text"
              defaultValue="4th Floor, Tech Park, Indiranagar, Bengaluru"
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-amber-500"
            />
          </div>

          <div>
            <label className="text-xs font-bold uppercase tracking-wider block mb-1 text-slate-700">Royalty Auto-Debit Bank Account</label>
            <input
              type="text"
              defaultValue="HDFC Bank ••••• 4892"
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-amber-500"
            />
          </div>
        </div>

        <div className="pt-3 border-t border-slate-100 flex justify-end">
          <button
            type="submit"
            className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-bold transition-all shadow-xs cursor-pointer"
          >
            Update Center Settings
          </button>
        </div>
      </form>
    </div>
  );
}
