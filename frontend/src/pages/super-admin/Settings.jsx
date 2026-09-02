import React, { useState } from "react";
import PageHeader from "../../components/PageHeader";
import { CheckCircle } from "lucide-react";

export default function Settings() {
  const [saved, setSaved] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="space-y-6 max-w-3xl">
      <PageHeader
        crumb="SETTINGS / CONFIGURATION"
        title="Global Platform Settings"
        subtitle="System configuration, branding, default fees, royalty share, and API keys."
      />

      {saved && (
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 text-emerald-800 text-xs font-bold flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-emerald-600" />
          <span>System configuration updated successfully!</span>
        </div>
      )}

      <form onSubmit={handleSave} className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
        <div>
          <h3 className="font-bold text-slate-900 text-sm border-b border-slate-100 pb-3 mb-4">
            Institution Identity & Network Policies
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold uppercase tracking-wider block mb-1.5 text-slate-700">Platform Brand Name</label>
              <input
                type="text"
                defaultValue="AI Scholars HQ"
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:bg-white focus:outline-none focus:border-amber-500 text-slate-800"
              />
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-wider block mb-1.5 text-slate-700">HQ Support Email</label>
              <input
                type="email"
                defaultValue="admin@aischolar.com"
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:bg-white focus:outline-none focus:border-amber-500 text-slate-800"
              />
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-wider block mb-1.5 text-slate-700">Standard Franchise Royalty (%)</label>
              <input
                type="number"
                defaultValue="15"
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:bg-white focus:outline-none focus:border-amber-500 text-slate-800"
              />
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-wider block mb-1.5 text-slate-700">Certificate Verification Issuer</label>
              <input
                type="text"
                defaultValue="AI Scholars Board of Academics"
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:bg-white focus:outline-none focus:border-amber-500 text-slate-800"
              />
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-100 flex justify-end">
          <button
            type="submit"
            className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-bold shadow-md shadow-amber-500/20 transition-all cursor-pointer"
          >
            Save Configuration Changes
          </button>
        </div>
      </form>
    </div>
  );
}
