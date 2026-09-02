import React, { useState } from "react";
import PageHeader from "../../../components/PageHeader";
import { Building2, User, Mail, Phone, MapPin, CheckCircle, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function EditFranchise() {
  const navigate = useNavigate();
  const [saved, setSaved] = useState(false);
  const [formData, setFormData] = useState({
    name: "Quantum Skill Academy",
    owner: "Dr. Alok Verma",
    email: "contact@quantumacademy.com",
    phone: "+91 98234 56789",
    city: "Bangalore",
    status: "Active",
    plan: "premium",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => {
      navigate("/admin/franchises");
    }, 1200);
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <div className="flex items-center gap-2">
        <button
          onClick={() => navigate("/admin/franchises")}
          className="p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-white border border-slate-200 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>
        <PageHeader
          crumb="FRANCHISES / EDIT"
          title="Edit Franchise Details"
          subtitle="Update agreements, capacities, contact details, or operational status for this center."
        />
      </div>

      {saved && (
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 text-emerald-800 text-xs font-bold flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-emerald-600" />
          <span>Changes saved successfully! Updating network registry...</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              Franchise Center Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 text-slate-800"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              Franchise Director
            </label>
            <input
              type="text"
              value={formData.owner}
              onChange={(e) => setFormData({ ...formData, owner: e.target.value })}
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 text-slate-800"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 text-slate-800"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              Operational Status
            </label>
            <select
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value })}
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 text-slate-800"
            >
              <option value="Active">Active & Verified</option>
              <option value="Review">Pending Audit / Review</option>
              <option value="Suspended">Suspended</option>
            </select>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={() => navigate("/admin/franchises")}
            className="px-5 py-2.5 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-bold shadow-md shadow-amber-500/20 transition-all cursor-pointer"
          >
            Update Franchise
          </button>
        </div>
      </form>
    </div>
  );
}

